export const USER_INFO_KEY = 'CHINESE_CHESS_USER_INFO'

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
  camp: Camp
  name: string
  coords: Array<[number, number]>
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
  11: { camp: Camp.RED, name: '帥', coords: [[5, 10]] },
  12: { camp: Camp.RED, name: '車', coords: [[1, 10], [9, 10]] },
  13: { camp: Camp.RED, name: '馬', coords: [[2, 10], [8, 10]] },
  14: { camp: Camp.RED, name: '炮', coords: [[2, 8], [8, 8]] },
  15: { camp: Camp.RED, name: '相', coords: [[3, 10], [7, 10]] },
  16: { camp: Camp.RED, name: '仕', coords: [[4, 10], [6, 10]] },
  17: { camp: Camp.RED, name: '兵', coords: [[1, 7], [3, 7], [5, 7], [7, 7], [9, 7]] },

  21: { camp: Camp.BLACK, name: '將', coords: [[5, 1]] },
  22: { camp: Camp.BLACK, name: '車', coords: [[1, 1], [9, 1]] },
  23: { camp: Camp.BLACK, name: '馬', coords: [[2, 1], [8, 1]] },
  24: { camp: Camp.BLACK, name: '炮', coords: [[2, 3], [8, 3]] },
  25: { camp: Camp.BLACK, name: '象', coords: [[3, 1], [7, 1]] },
  26: { camp: Camp.BLACK, name: '士', coords: [[4, 1], [6, 1]] },
  27: { camp: Camp.BLACK, name: '卒', coords: [[1, 4], [3, 4], [5, 4], [7, 4], [9, 4]] }
}

export enum GameStatus {
  Init,
  Playing,
  Paused,
  Finished
}
