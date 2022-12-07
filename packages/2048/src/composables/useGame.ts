import { shuffle } from 'lodash'
import { GameStatus, sizeConfig } from '../config'
import { createDefaultGrids, createGridValue } from '../lib/utils'
import { GameItem } from '../types'

export default (): void => {
  const gameGrids = ref<GameItem[][]>(createDefaultGrids(sizeConfig.row, sizeConfig.column))
  const gameStatus = ref<GameStatus>(GameStatus.Playing)

  const setGameStatus = (status: GameStatus): void => {
    gameStatus.value = status

    if (status === GameStatus.Playing) {
      // 重新开始游戏
      gameGrids.value = createDefaultGrids(sizeConfig.row, sizeConfig.column)
    }
  }

  const afterSwipe = (): void => {
    // 检测是否存在空白位
    const zeros = gameGrids.value.reduce((prev, item) => {
      return [...prev, ...item]
    }).filter(item => item.value === 0)

    if (zeros.length === 0) {
      // Game Over
      setGameStatus(GameStatus.Defeat)
      return
    }

    // 随机生成一个新的数字
    const item = shuffle(zeros)[0]

    item.value = createGridValue()
  }

  provide('gameGrids', gameGrids)
  provide('gameStatus', gameStatus)

  provide('setGameStatus', setGameStatus)
  provide('afterSwipe', afterSwipe)
}
