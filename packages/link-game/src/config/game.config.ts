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
  defeat
}

export const itemSequences = (() => Array.from({ length: 300 }, (_, i) => i + 1))()

export const gameConfig: Record<Level, LevelInfo> = {
  [Level.easy]: {
    level: Level.easy,
    text: '简单',
    row: 10,
    column: 10,
    // @todo
    totalOfItems: 10, // 使用 25 种元素 4 * 25
    size: 44,
    useBoundary: false
  },
  [Level.middle]: {
    level: Level.middle,
    text: '中等',
    row: 16,
    column: 16,
    totalOfItems: 64, // 使用 64 种元素 4 * 64
    size: 40,
    useBoundary: false
  },
  [Level.hard]: {
    level: Level.hard,
    text: '困难',
    row: 24,
    column: 16,
    totalOfItems: 96, // 使用 96 种元素 4 * 96
    size: 36,
    useBoundary: false
  },
  [Level.extreme]: {
    level: Level.extreme,
    text: '地狱',
    row: 30,
    column: 20,
    totalOfItems: 300, // 使用 300 种元素 2 * 300
    size: 32,
    useBoundary: true
  }
}
