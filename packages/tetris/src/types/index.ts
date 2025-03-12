import { Tetrominos } from '../config/index.js'

export interface Coordinate {
  x: number
  y: number
}

export interface Tetris {
  tetrominos: Tetrominos
  type: TetrisType
  coordinates: [Coordinate, Coordinate, Coordinate, Coordinate]
}

export type TetrisType = 1 | 2 | 3 | 4

export type BuildingType = boolean[][]

export type Noop = () => void

export type PromiseNoop = () => Promise<void>
