export class Point {
  constructor (public x = 0, public y = 0) {}

  static toActualPoint ({ x, y }: Point, baseSize = 1): Point {
    return new Point(x * baseSize, y * baseSize)
  }

  static actualPoint2Point ({ x, y }: Point, baseSize = 1): Point {
    return new Point(x / baseSize, y / baseSize)
  }
}
