import { LevelInfo } from '../types/index.js'

/**
 * 游戏难度
 * 0 - 自定义
 * 1 - 简单，9*9 个格子区域，10 个雷，每个格子区域周边最多只有 3 个雷
 * 2 - 中等，16*16 个格子区域，40 个雷，每个格子区域周边最多只有 6 个雷
 * 3 - 困难，16*30 个格子区域，99 个雷，每个格子区域周边最多只有 8 个雷
 */
export const levels: LevelInfo[] = [
  {
    level: 0,
    text: '自定义',
    row: 9,
    column: 9,
    totalOfMines: 10
  },
  {
    level: 1,
    text: '简单',
    row: 9,
    column: 9,
    totalOfMines: 10
  },
  {
    level: 2,
    text: '中等',
    row: 16,
    column: 16,
    totalOfMines: 40
  },
  {
    level: 3,
    text: '困难',
    row: 16,
    column: 30,
    totalOfMines: 99
  }
]
