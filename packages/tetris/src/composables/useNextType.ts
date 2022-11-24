import { Ref } from 'vue'
import { GameStatus, wrapperSize } from '../config'
import { getTetrisNextType } from '../lib/nextType'
import { Coordinate, Tetris } from '../types'

export default (
  currentTetris: Ref<Tetris | undefined>,
  gameStatus: Ref<GameStatus>,
  building: Ref<Coordinate[]>
): () => void => {
  const startTime = Date.now()

  // 检测形态改变是否合法
  const isLegalType = ({ coordinates }: Tetris): boolean => {
    return !coordinates.some(({ x, y }) => (
      x < 0 ||
      x > wrapperSize.column - 1 ||
      y > wrapperSize.row - 1 ||
      building.value.find(item => item.x === x && item.y === y)
    ))
  }

  return () => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (currentTime - startTime > 50) {
      const nextType = getTetrisNextType(currentTetris.value)
      if (isLegalType(nextType)) {
        currentTetris.value = nextType
      }
    }
  }
}
