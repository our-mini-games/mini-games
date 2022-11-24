import { Ref } from 'vue'
import { GameStatus, wrapperSize } from '../config'
import { Coordinate, Tetris } from '../types'

interface ReturnType {
  runTurnLeft: () => void
  runTurnRight: () => void
}

export default (
  currentTetris: Ref<Tetris | undefined>,
  gameStatus: Ref<GameStatus>,
  building: Ref<Coordinate[]>
): ReturnType => {
  let leftStartTime = Date.now()
  let rightStartTime = Date.now()

  // 横向位移
  const transverseDisplacement = (isLeft = true): void => {
    if (!currentTetris.value) return
    const coordinates: Tetris['coordinates'] = currentTetris.value.coordinates.map(({ x, y }) => {
      return {
        x: isLeft ? (x - 1) : (x + 1),
        y
      }
    }) as Tetris['coordinates']

    if (coordinates.some(item => (
      item.x < 0 ||
      item.x > wrapperSize.column - 1 ||
      item.y > wrapperSize.row - 1 ||
      building.value.find(b => b.x === item.x && b.y === item.y)
    ))) {
      return
    }
    currentTetris.value.coordinates = coordinates
  }

  const runTurnLeft = (): void => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (currentTime - leftStartTime > 50) {
      transverseDisplacement(true)
      leftStartTime = currentTime
    }
  }

  const runTurnRight = (): void => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (currentTime - rightStartTime > 50) {
      transverseDisplacement(false)
      rightStartTime = currentTime
    }
  }

  return {
    runTurnLeft,
    runTurnRight
  }
}
