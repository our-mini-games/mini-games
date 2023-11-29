import { Camp, chessPieceMapper, type ChessPieceValue } from '../definitions'
import { Point } from './Point'

export interface ChessPiece {
  name: string
  camp: Camp
  coord: Point
  isActive: boolean
  readonly scale: number
  move: (point: Point) => void
}

export const createChessPiece = (value: ChessPieceValue, coordIndex = 0): ChessPiece => {
  const {
    name,
    camp,
    coords
  } = chessPieceMapper[value]

  const coord = new Point(...coords[coordIndex])

  let lastTime = Date.now()
  let flicker = false

  return {
    name,
    camp,
    coord,
    isActive: false,
    get scale () {
      if (!this.isActive) {
        return 1
      }

      const currentTime = Date.now()
      if (currentTime - lastTime > 500) {
        flicker = !flicker
        lastTime = currentTime
      }

      return flicker ? 1 : 0.9
    },
    move ({ x, y }) {
      this.coord.x = x
      this.coord.y = y
    }
  }
}
