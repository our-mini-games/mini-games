export const wrapperSize = {
  row: 20,
  column: 10
}

export const itemSize = 12

export const color = {
  bg: 'rgba(188, 188, 188, 0.365)',
  item: '#333',
  final: 'rgba(188, 188, 188, 0.5)'
}

export const defaultLevel = 1

export const levelConfig = (() => {
  return Array.from({ length: 20 }, (_, index) => {
    return {
      level: index + 1,
      speed: 800 - (index * 20),
      maxScore: 2000 + ((index ** 2) * 500)
    }
  })
})()

export const scoreConfig = {
  1: 10,
  2: 30,
  3: 60,
  4: 100
}

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
  PowerOff = 'PowerOff',
  PowerOn = 'PowerOn',
  Finished = 'Finished',
  Playing = 'Playing',
  Paused = 'Paused',
  Animation = 'Animation',
  ChooseMode = 'ChooseMode'
}

// 游戏模式
export enum GameMode {
  Normal = 'Normal',
  Entertain = 'Entertain'
}
