export const wrapperSize = {
  row: 20,
  column: 10
}

export const itemSize = 12

export const color = {
  bg: 'rgba(93, 93, 93, 0.365)',
  item: '#333'
}

export const defaultLevel = 1

// 方块元素
export enum Tetrominos {
  // ❒❒❒❒
  I = 'I',
  //  ❒❒
  // ❒❒
  S = 'S',
  // ❒❒
  //  ❒❒
  Z = 'Z',
  // ❒
  // ❒
  // ❒❒
  L1 = 'L1',
  //  ❒
  //  ❒
  // ❒❒
  L2 = 'L2',
  // ❒❒
  // ❒❒
  O = 'O',
  //  ❒
  // ❒❒❒
  T = 'T'
}

// 游戏状态
export enum GameStatus {
  Finished = 'Finished',
  Playing = 'Playing',
  Paused = 'Paused'
}
