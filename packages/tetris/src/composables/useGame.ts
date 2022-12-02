import { Ref } from 'vue'
import { GameStatus, Tetrominos, wrapperSize } from '../config'
import { createBuilding, finishedCheck, getNextTetris, isLegalTetris, removeCheck, sleep } from '../lib/utils'
import { BuildingType, Noop, PromiseNoop, Tetris } from '../types'

interface GameReturnType {
  startup: Noop
  run: Noop
  stop: Noop
  changeCurrent: PromiseNoop
  setKeydownSpeed: (speed: number) => void
  handleReachBottom: PromiseNoop
}

export default (
  gameStatus: Ref<GameStatus>,
  currentTetris: Ref<Tetris | null>,
  nextTetris: Ref<Tetris | null>,
  building: Ref<BuildingType>,
  speed: Ref<number>,
  handleDecline: (handleReachBottom: PromiseNoop) => void,
  setGameStatus: (status: GameStatus) => void,
  removeAnimation: (removeRows: number[]) => Promise<void>,
  setScore: (rows?: number | undefined) => void
): GameReturnType => {
  const keydownSpeed = ref(0)
  const animationDuration = computed(() => keydownSpeed.value || speed.value)

  let requestId = 0
  let startTime = Date.now()

  const startup = (): void => {
    currentTetris.value = null
    building.value = createBuilding(wrapperSize.row, wrapperSize.column)
    nextTetris.value = getNextTetris()
    changeCurrent()
  }

  const addCurrentTetrisToBuilding = (): void => {
    if (!currentTetris.value) return

    currentTetris.value.coordinates.forEach(({ x, y }) => {
      building.value[y][x] = true
    })
  }

  const handleReachBottom = async (): Promise<void> => {
    setGameStatus(GameStatus.Animation)
    // 1. 检测当前游戏是否已经结束
    if (finishedCheck(currentTetris.value!)) {
      setGameStatus(GameStatus.Finished)
      return
    }
    // 2. 给 building 加入当前的方块
    addCurrentTetrisToBuilding()
    // building.value = [...new Set([...building.value, ...currentTetris.value!.coordinates])]
    await nextTick()
    // 3. 进行消除检测
    const removeRows = removeCheck(building.value)

    if (removeRows.length > 0) {
      // 开始消除
      await removeAnimation(removeRows)
      // 计分
      setScore(removeRows.length)
    }
    await sleep(50)

    // 4. 开始下一轮
    changeCurrent()

    setGameStatus(GameStatus.Playing)
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

  const run = (): void => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (Date.now() - startTime > animationDuration.value) {
      // 触底检测
      if (!isLegalTetris(currentTetris.value.coordinates, building.value)) {
        handleReachBottom()
        return
      }
      handleDecline(handleReachBottom)

      // 重置开启时间
      startTime = currentTime
    }

    requestId = requestAnimationFrame(run)
  }

  const stop = (): void => {
    cancelAnimationFrame(requestId)
  }

  const setKeydownSpeed = (speed: number): void => {
    keydownSpeed.value = speed
  }

  return {
    startup,
    run,
    stop,
    changeCurrent,
    setKeydownSpeed,
    handleReachBottom
  }
}
