import { GameStatus, Tetrominos } from '../config'
import { getNextTetris, isReachBottom, sleep } from '../lib/utils'
import { Coordinate, Tetris } from '../types'
import type { ComputedRef, Ref } from 'vue'

export default (
  currentTetris: Ref<Tetris | undefined>,
  nextTetris: Ref<Tetris | undefined>,
  gameStatus: Ref<GameStatus>,
  speed: ComputedRef<number>,
  setScore: (rows?: number) => void
): { building: Ref<Coordinate[]>, finalTips: Ref<Coordinate[]>, startup: () => void } => {
  let startTime = Date.now()
  let requestId: number = 0
  let isInAnimation = false

  const keydownSpeed = ref(0)
  const animationDuration = computed(() => keydownSpeed.value || speed.value)

  // 这里依然不喜欢矩阵，我不喜欢！
  const building = ref<Coordinate[]>([])

  const buildingHighestPoints = computed(() => {
    const highestPoints: Coordinate[] = []

    building.value.forEach(coordinate => {
      const colItemIdx = highestPoints.findIndex(item => item.x === coordinate.x)
      if (colItemIdx === -1) {
        highestPoints.push(coordinate)
      } else if (coordinate.y < highestPoints[colItemIdx].y) {
        highestPoints.splice(colItemIdx, 1, coordinate)
      }
    })

    return highestPoints
  })

  const {
    removeCheck,
    finisedCheck
  } = useCheck(building)

  const {
    runTurnLeft,
    runTurnRight
  } = useTransverseDisplacement(currentTetris, gameStatus, building)

  const getNextType = useNextType(currentTetris, gameStatus, building)

  const {
    finalTips
  } = useFinalTips(currentTetris, buildingHighestPoints)

  const {
    removeAnimation
  } = useAnimation()

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown, false)
    document.addEventListener('keyup', handleKeyup, false)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown, false)
    document.removeEventListener('keyup', handleKeyup, false)
  })

  const startup = (): void => {
    nextTetris.value = getNextTetris()
    changeCurrent()
  }

  const changeCurrent = async (): Promise<void> => {
    if (!nextTetris.value) {
      nextTetris.value = getNextTetris()
    }

    const isI = nextTetris.value.tetrominos === Tetrominos.I

    currentTetris.value = {
      ...nextTetris.value,
      coordinates: nextTetris.value.coordinates.map(({ x, y }) => {
        return {
          x: x + (isI ? 3 : 4),
          y: y - (isI ? 4 : 3)
        }
      }) as Tetris['coordinates']
    }
    nextTetris.value = getNextTetris()

    await sleep(50)
    run()
  }

  // 下降
  const handleDecline = (): void => {
    if (!currentTetris.value) return
    const coordinates: Tetris['coordinates'] = currentTetris.value.coordinates.map(({ x, y }) => {
      return {
        x,
        y: y + 1
      }
    }) as Tetris['coordinates']

    // 触底检测
    if (isReachBottom(coordinates, toRaw(unref(building)))) {
      // currentTetris.value.coordinates = coordinates
      stop()
      handleReachBottom()
      return
    }

    currentTetris.value.coordinates = coordinates
  }

  // 直接下到底部
  const handleToBottomImmediate = async (): Promise<void> => {
    if (gameStatus.value !== GameStatus.Playing || !currentTetris.value) return
    stop()

    currentTetris.value.coordinates = finalTips.value as Tetris['coordinates']
    await sleep(10)
    handleReachBottom()
  }

  const handleReachBottom = async (): Promise<void> => {
    isInAnimation = true
    // 1. 给 building 加入当前的方块
    building.value.push(...currentTetris.value!.coordinates)
    // building.value = [...new Set([...building.value, ...currentTetris.value!.coordinates])]
    await sleep(10)
    // 2. 进行消除检测
    const [removeLength, removeRows] = removeCheck(currentTetris.value!.coordinates)

    if (removeLength > 0) {
      // 3. 开始消除
      await removeAnimation(building, removeRows)
      await sleep(10)
      // 3.5 计分
      setScore(removeLength)
    } else {
      // 4. 检测游戏是否已经结束
      if (finisedCheck()) {
        // @todo 载入结束动画
        console.log('Game Over')
        gameStatus.value = GameStatus.Finished
        return
      }
    }
    await sleep(50)

    // 5. 开始下一轮
    changeCurrent()
    isInAnimation = false
  }

  const run = (): void => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (Date.now() - startTime > animationDuration.value) {
      // 触底检测
      if (isReachBottom(toRaw(unref(currentTetris))!.coordinates, toRaw(unref(buildingHighestPoints)))) {
        handleReachBottom()
        return
      }
      handleDecline()

      // 重置开启时间
      startTime = currentTime
    }

    requestId = requestAnimationFrame(run)
  }

  const stop = (): void => {
    cancelAnimationFrame(requestId)
  }

  const handleKeydown = (e: KeyboardEvent): void => {
    switch (e.code) {
      case 'Space':
        getNextType()
        break
      case 'KeyW':
      case 'ArrowUp':
        if (!isInAnimation) {
          handleToBottomImmediate()
        }
        break
      case 'KeyD':
      case 'ArrowRight':
        runTurnRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        keydownSpeed.value = speed.value / 3
        break
      case 'KeyA':
      case 'ArrowLeft':
        runTurnLeft()
        break
    }
  }

  const handleKeyup = (e: KeyboardEvent): void => {
    switch (e.code) {
      case 'KeyS':
      case 'ArrowDown':
        keydownSpeed.value = 0
        break
      case 'Enter':
        if (gameStatus.value === GameStatus.Playing) {
          stop()
          gameStatus.value = GameStatus.Paused
        } else if (gameStatus.value === GameStatus.Paused) {
          gameStatus.value = GameStatus.Playing
          run()
        }
    }
  }

  return {
    building,
    finalTips,
    startup
  }
}
