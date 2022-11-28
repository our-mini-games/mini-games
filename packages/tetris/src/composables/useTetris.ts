import { Ref } from 'vue'
import { GameMode, GameStatus, wrapperSize } from '../config'
import { createBuilding } from '../lib/utils'
import { BuildingType, Tetris } from '../types'

interface TetrisReturnType {
  gameStatus: Ref<GameStatus>
  gameMode: Ref<GameMode>
  currentTetris: Ref<Tetris | null>
  nextTetris: Ref<Tetris | null>
  building: Ref<BuildingType>
  setGameStatus: (status: GameStatus) => void
}

export default (): TetrisReturnType => {
  // 游戏状态
  const gameStatus = ref(GameStatus.Playing)
  // 模式
  const gameMode = ref(GameMode.Normal)

  // 当前活跃方块
  const currentTetris = ref<Tetris | null>(null)
  // 下一个出现的方块
  const nextTetris = ref<Tetris | null>(null)
  // 建筑物
  const building = ref<BuildingType>(createBuilding(wrapperSize.row, wrapperSize.column))

  const setGameStatus = (status: GameStatus): void => {
    gameStatus.value = status
  }

  return {
    gameStatus,
    gameMode,
    currentTetris,
    nextTetris,
    building,

    setGameStatus
  }
}
