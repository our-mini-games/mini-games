export const speed = 100 // 100ms 绘制一帧

export const wrapperSize = {
  width: 40,
  height: 30
}

export const snakeSize = 20

export enum Directions {
  up,
  right,
  down,
  left
}

export enum Orientation {
  top,
  right,
  bottom,
  left
}

export enum GameStatus {
  finished,
  playing,
  paused
}
