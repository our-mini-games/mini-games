import { LevelInfo } from '../types'

export enum Level {
  // eslint-disable-next-line no-unused-vars
  easy,
  // eslint-disable-next-line no-unused-vars
  middle,
  // eslint-disable-next-line no-unused-vars
  hard,
  // eslint-disable-next-line no-unused-vars
  extreme
}

export enum GameStatus {
  // eslint-disable-next-line no-unused-vars
  finished,
  // eslint-disable-next-line no-unused-vars
  playing,
  // eslint-disable-next-line no-unused-vars
  paused,
  // eslint-disable-next-line no-unused-vars
  complete,
  // eslint-disable-next-line no-unused-vars
  defeat,
  // eslint-disable-next-line no-unused-vars
  'in-the-animation'
}

export const itemSequences = (() => Array.from({ length: 271 }, (_, i) => i + 1))()

export const gameConfig: Record<Level, LevelInfo> = {
  [Level.easy]: {
    level: Level.easy,
    text: '简单',
    row: 8,
    column: 8,
    totalOfItems: 8, // 使用 8 种元素 8 * 8
    size: 44,
    useBoundary: false,
    rearrangement: 3,
    tips: 3
  },
  [Level.middle]: {
    level: Level.middle,
    text: '中等',
    row: 10,
    column: 12,
    totalOfItems: 15, // 使用 15 种元素 8 * 15
    size: 40,
    useBoundary: false,
    rearrangement: 2,
    tips: 2
  },
  [Level.hard]: {
    level: Level.hard,
    text: '困难',
    row: 12,
    column: 16,
    totalOfItems: 32, // 使用 32 种元素 6 * 32
    size: 40,
    useBoundary: false,
    rearrangement: 1,
    tips: 2
  },
  [Level.extreme]: {
    level: Level.extreme,
    text: '地狱',
    row: 12,
    column: 16,
    totalOfItems: 32, // 使用 32 种元素 6 * 32
    size: 40,
    useBoundary: true,
    rearrangement: 1,
    tips: 1
  }
}
