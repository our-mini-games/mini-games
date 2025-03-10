import { Point } from '@/libs/Point.js'
import { Soldier, BigGun, Horse, Vehicle, Elephant, Scholar, Boss } from '@/libs/PieceObject.js'
export const USER_INFO_KEY = 'CHINESE_CHESS_USER_INFO'
export const NICKNAME_KEY = 'CHINESE_CHESS_NICKNAME'

export type ChessPieceValue =
  | 11 | 12 | 13 | 14 | 15 | 16 | 17
  | 21 | 22 | 23 | 24 | 25 | 26 | 27

export enum GameMode {
  OFFLINE,
  ONLINE
}

export enum Camp {
  RED,
  BLACK
}

interface ChessPieceMapItem {
  id: number
  camp: Camp
  name: string
  coords: Array<[number, number]>
  PieceObject: any
  getPieceRuleCoord?: () => void
  // Soldier | BigGun | Horse | Vehicle | Elephant | Scholar | Boss
}

export const colorMapper = {
  // 阵营颜色
  red: '#E60012', // 丹罽
  black: '#2C2F3B', // 绀蝶

  line: '#B2BFC3', // 逍遥游，用于线条
  light: '#DCE4E8', // 浅云，用于亮面
  dark: '#D4DDE1', // 素采，用于暗面
  shadow: '#BDCBD2', // 影青 // #bbb 用于阴影

  success: '#84A729', // 水龙吟
  error: '#D24735', // 鹤顶红
  white: '#FFF'
}

export const chessPieceMapper: Record<ChessPieceValue, ChessPieceMapItem> = {
  11: { id: 1, camp: Camp.RED, name: '帅', coords: [[5, 10]], PieceObject: Boss },
  12: { id: 2, camp: Camp.RED, name: '车', coords: [[1, 10], [9, 10]], PieceObject: Vehicle },
  13: { id: 3, camp: Camp.RED, name: '马', coords: [[2, 10], [8, 10]], PieceObject: Horse },
  14: { id: 4, camp: Camp.RED, name: '炮', coords: [[2, 8], [8, 8]], PieceObject: BigGun },
  15: { id: 5, camp: Camp.RED, name: '相', coords: [[3, 10], [7, 10]], PieceObject: Elephant },
  16: { id: 6, camp: Camp.RED, name: '仕', coords: [[4, 10], [6, 10]], PieceObject: Scholar },
  17: { id: 7, camp: Camp.RED, name: '兵', coords: [[1, 7], [3, 7], [5, 7], [7, 7], [9, 7]], PieceObject: Soldier },

  21: { id: 11, camp: Camp.BLACK, name: '将', coords: [[5, 1]], PieceObject: Boss },
  22: { id: 22, camp: Camp.BLACK, name: '车', coords: [[1, 1], [9, 1]], PieceObject: Vehicle },
  23: { id: 33, camp: Camp.BLACK, name: '马', coords: [[2, 1], [8, 1]], PieceObject: Horse },
  24: { id: 44, camp: Camp.BLACK, name: '炮', coords: [[2, 3], [8, 3]], PieceObject: BigGun },
  25: { id: 55, camp: Camp.BLACK, name: '象', coords: [[3, 1], [7, 1]], PieceObject: Elephant },
  26: { id: 66, camp: Camp.BLACK, name: '士', coords: [[4, 1], [6, 1]], PieceObject: Scholar },
  27: { id: 77, camp: Camp.BLACK, name: '卒', coords: [[1, 4], [3, 4], [5, 4], [7, 4], [9, 4]], PieceObject: Soldier }
}

export enum GameStatus {
  Init = 'INIT',
  Playing = 'PLAYING',
  Paused = 'PAUSED',
  Finished = 'FINISHED'
}

export const defaultMoveList: Record<ChessPieceValue, (p: Point) => Point[]> = {
  11: ({ x, y }) => {
    return [
      new Point(x - 1, y), new Point(x + 1, y),
      new Point(x, y - 1), new Point(x, y + 1)
    ].filter(p => !(p.x < 4 || p.x > 6 || p.y < 8 || p.y > 10))
  },
  12: ({ x, y }) => {
    const points: Point[] = []
    // 取 x 轴上除了当前点的所有点
    for (let i = 1; i <= 9; i++) {
      if (i === x) continue
      points.push(new Point(i, y))
    }
    // 取 y 轴上除了当前点的所有点
    for (let j = 1; j <= 10; j++) {
      if (j === y) continue
      points.push(new Point(x, j))
    }

    return points
  },
  13: ({ x, y }: Point) => {
    return [
      new Point(x - 2, y + 1), new Point(x - 2, y - 1),
      new Point(x + 2, y + 1), new Point(x + 2, y - 1),
      new Point(x - 1, y - 2), new Point(x + 1, y - 2),
      new Point(x - 1, y + 2), new Point(x + 1, y + 2)
    ].filter(p => !(p.x < 1 || p.x > 9 || p.y < 1 || p.y > 10 || (p.x === x && p.y === y)))
  },
  14: (point: Point) => defaultMoveList[12](point),
  15: ({ x, y }: Point) => {
    return [
      new Point(x + 2, y + 2), new Point(x + 2, y - 2),
      new Point(x - 2, y + 2), new Point(x - 2, y - 2)
    ].filter(p => !(p.x < 1 || p.x > 9 || p.y < 6 || p.y > 10 || (p.x === x && p.y === y)))
  },
  16: ({ x, y }: Point) => {
    return [
      new Point(x + 1, y + 1), new Point(x + 1, y - 1),
      new Point(x - 1, y + 1), new Point(x - 1, y - 1)
    ].filter(p => !(p.x < 4 || p.x > 6 || p.y < 8 || p.y > 10 || (p.x === x && p.y === y)))
  },
  17: ({ x, y }: Point) => {
    if (y > 5) {
      return [new Point(x, y - 1)]
    }

    return [
      new Point(x - 1, y), new Point(x + 1, y), new Point(x, y - 1)
    ]
  },
  21: ({ x, y }: Point) => {
    return [
      new Point(x - 1, y), new Point(x + 1, y),
      new Point(x, y - 1), new Point(x, y + 1)
    ].filter(p => !(p.x < 4 || p.x > 6 || p.y < 1 || p.y > 3))
  },
  22: (point: Point) => defaultMoveList[12](point),
  23: (point: Point) => defaultMoveList[13](point),
  24: (point: Point) => defaultMoveList[14](point),
  25: ({ x, y }: Point) => {
    return [
      new Point(x + 2, y + 2), new Point(x + 2, y - 2),
      new Point(x - 2, y + 2), new Point(x - 2, y - 2)
    ].filter(p => !(p.x < 1 || p.x > 9 || p.y < 1 || p.y > 5 || (p.x === x && p.y === y)))
  },
  26: ({ x, y }: Point) => {
    return [
      new Point(x + 1, y + 1), new Point(x + 1, y - 1),
      new Point(x - 1, y + 1), new Point(x - 1, y - 1)
    ].filter(p => !(p.x < 4 || p.x > 6 || p.y < 1 || p.y > 3 || (p.x === x && p.y === y)))
  },
  27: ({ x, y }: Point) => {
    if (y < 6) {
      return [new Point(x, y + 1)]
    }

    return [
      new Point(x - 1, y), new Point(x + 1, y), new Point(x, y + 1)
    ]
  }
}
