import { Tetrominos, tetrisCoordinates } from '../config'
import { Tetris, TetrisType } from '../types'

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
