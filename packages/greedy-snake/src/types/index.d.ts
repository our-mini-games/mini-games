export interface Coordinate {
  x: number
  y: number
}

export interface SnakePart {
  part: 'HEAD' | 'BODY' | 'TAIL'
  x: number
  y: number
}

export type Snake = SnakePart[]
