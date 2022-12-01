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
  /**
   * ❒❒❒❒
   */
  I = 'I',

  /**
   *  ❒❒
   * ❒❒
   */
  S = 'S',

  /**
   * ❒❒
   *  ❒❒
   */
  Z = 'Z',

  /**
   * ❒
   * ❒
   * ❒❒
   */
  L1 = 'L1',

  /**
   *  ❒
   *  ❒
   * ❒❒
   */
  L2 = 'L2',

  /**
   * ❒❒
   * ❒❒
   */
  O = 'O',

  /**
   *  ❒
   * ❒❒❒
   */
  T = 'T'
}

// 游戏状态
export enum GameStatus {
  /**
   * 开机
   */
  PowerOn = 'PowerOn',

  /**
   * 关机
   */
  PowerOff = 'PowerOff',

  /**
   * 结束
   */
  Finished = 'Finished',

  /**
   * 游玩中
   */
  Playing = 'Playing',

  /**
   * 暂停
   */
  Paused = 'Paused',

  /**
   * 播放动画中
   */
  Animation = 'Animation',

  /**
   * 选择模式
   */
  ChooseMode = 'ChooseMode'
}

// 游戏模式
export enum GameMode {
  /**
   * 普通
   */
  Normal = 'Normal',

  /**
   * 娱乐模式
   */
  Entertain = 'Entertain'
}
