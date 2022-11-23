import { Tetrominos, tetrisCoordinates, wrapperSize } from '../config'
import { Coordinate, Tetris, TetrisType } from '../types'

const getRandomNumber = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min

const getRandomTetromino = (): Tetrominos => {
  const arr = [Tetrominos.I, Tetrominos.L1, Tetrominos.L2, Tetrominos.O, Tetrominos.S, Tetrominos.T, Tetrominos.Z]
  return arr[getRandomNumber(0, arr.length - 1)]
}

export const getNextTetris = (): Tetris => createTetris(getRandomTetromino(), getRandomNumber(1, 4) as TetrisType)

export const createTetris = (tetrominos: Tetrominos, type: TetrisType): Tetris => {
  return {
    tetrominos,
    type,
    coordinates: tetrisCoordinates[tetrominos][type]
  }
}

/**
 * 元素是否触底
 * @param activeCoordinates - 当前活跃的元素
 * @param buildingHighestPoints - 已搭建好的建筑最高点
 */
export const isReachBottom = (activeCoordinates: Tetris['coordinates'], buildingHighestPoints: Coordinate[]): boolean => {
  const lowestPoints: Coordinate[] = []

  activeCoordinates.forEach(coordinate => {
    const colItemIdx = lowestPoints.findIndex(item => item.x === coordinate.x)
    if (colItemIdx === -1) {
      lowestPoints.push(coordinate)
    } else if (coordinate.y > lowestPoints[colItemIdx].y) {
      lowestPoints.splice(colItemIdx, 1, coordinate)
    }
  })

  const currentColumnHighestPoints = buildingHighestPoints.filter(item => lowestPoints.find(l => l.x === item.x))

  if (currentColumnHighestPoints.length === 0) {
    // 0 -> wrapperSize.row - 1
    // 当前最低点触底
    return lowestPoints.some(item => item.y >= wrapperSize.row - 1)
  }

  return currentColumnHighestPoints.some(h => {
    const sameColItem = lowestPoints.find(l => l.x === h.x)
    if (!sameColItem) return false
    return Math.abs(h.y - sameColItem.y) === 1
  })
}
