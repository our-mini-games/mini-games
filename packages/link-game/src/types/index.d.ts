import { Level } from '../config/index.js'

export interface GameProps {
  rearrangement: number
  tips: number
}

export interface LevelInfo extends GameProps {
  level: Level
  text: string
  row: number
  column: number
  /** 使用不同种类元素的总数 */
  totalOfItems: number
  /** 元素初始尺寸 */
  size: number
  /** 是否使用边界限制 */
  useBoundary: boolean
}

export interface Box {
  /**
   * 元素序列号(对应素材号码)，如为 0 时则是空白元素
   */
  seq: number
  x: number
  y: number
  status: 'default' | 'checked' | 'error'
}
