import { Camp, chessPieceMapper, type ChessPieceValue } from '../definitions'
import { Point } from './Point'

export interface ChessPiece {
  id: number,
  name: string
  value: ChessPieceValue
  camp: Camp
  coord: Point
  isActive: boolean
  scale: number
  setScale: (scale: number) => void
  move: (point: Point) => void
  PieceObject: any
}

export const createChessPiece = (value: ChessPieceValue, coordIndex = 0): ChessPiece => {
  const {
    name,
    camp,
    coords,
    PieceObject,
    id
  } = chessPieceMapper[value]

  const coord = new Point(...coords[coordIndex])

  return {
    id,
    name,
    value,
    camp,
    coord,
    isActive: false,
    scale: 1,
    setScale (scale: number) {
      this.scale = scale
    },
    move ({ x, y }) {
      this.coord.x = x
      this.coord.y = y
    },
    PieceObject
  }
}
