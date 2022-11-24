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
 * @param building - 已搭建好的建筑
 */
export const isReachBottom = (activeCoordinates: Tetris['coordinates'], building: Coordinate[]): boolean => {
  return activeCoordinates.some(item => (item.y > wrapperSize.row - 1) || building.find(b => b.x === item.x && b.y === item.y))
}

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const sleep = (delay: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}
