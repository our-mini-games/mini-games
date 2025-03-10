import { Ref } from 'vue'
import { calleniaLimit, GameMode, GameStatus, Tetrominos, wrapperSize } from '../config/index.js'
import { createBuilding, finishedCheck, getNextTetris, getShuffleBuildingRow, isLegalTetris, removeCheck, sleep } from '../lib/utils.js'
import { BuildingType, Noop, PromiseNoop, Tetris } from '../types/index.js'
import { AudioReturnType } from './useAudio.js'

interface GameReturnType {
  startup: Noop
  run: Noop
  stop: Noop
  changeCurrent: PromiseNoop
  setKeydownSpeed: (speed: number) => void
  handleReachBottom: PromiseNoop
}

export default (
  gameMode: Ref<GameMode>,
  gameStatus: Ref<GameStatus>,
  currentTetris: Ref<Tetris | null>,
  nextTetris: Ref<Tetris | null>,
  building: Ref<BuildingType>,
  speed: Ref<number>,
  handleDecline: (handleReachBottom: PromiseNoop) => void,
  setGameStatus: (status: GameStatus) => void,
  removeAnimation: (removeRows: number[]) => Promise<void>,
  setScore: (rows?: number | undefined) => void,
  audio: AudioReturnType
): GameReturnType => {
  const keydownSpeed = ref(0)
  const animationDuration = computed(() => keydownSpeed.value || speed.value)

  // 娱乐模式加层计数器
  const calleniaCount = ref(0)

  let requestId = 0
  let startTime = Date.now()

  const startup = (): void => {
    currentTetris.value = null
    building.value = createBuilding(wrapperSize.row, wrapperSize.column)
    nextTetris.value = getNextTetris()
    calleniaCount.value = 0
    changeCurrent()
  }

  const addCurrentTetrisToBuilding = (): void => {
    if (!currentTetris.value) return

    currentTetris.value.coordinates.forEach(({ x, y }) => {
      building.value[y][x] = true
    })
  }

  const setCalleniaToBuilding = async (): Promise<void> => {
    const firstRow = building.value[0]

    building.value.shift()
    building.value.push(getShuffleBuildingRow())

    // 如果当前 building 第一层有内容，游戏判定结束
    if (firstRow.some(Boolean)) {
      setGameStatus(GameStatus.Finished)
    }
  }

  const handleReachBottom = async (): Promise<void> => {
    if (gameStatus.value === GameStatus.Paused) return
    setGameStatus(GameStatus.Animation)
    // 1. 检测当前游戏是否已经结束
    if (finishedCheck(currentTetris.value!)) {
      setGameStatus(GameStatus.Finished)
      audio.gameover.value()
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
      audio.clear.value()
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

    calleniaCount.value++

    if (gameMode.value === GameMode.Entertain && calleniaCount.value > calleniaLimit) {
      // 重新计数
      calleniaCount.value = 0
      // 给 building 底下加一层
      await setCalleniaToBuilding()
    }

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
