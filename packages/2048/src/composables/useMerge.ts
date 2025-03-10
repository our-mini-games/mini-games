import { Ref } from 'vue'
import { GameItem } from '../types/index.js'
import clonedeep from 'lodash.clonedeep'
import { matrixRotate } from '../lib/utils.js'

interface MergeReturnType {
  horizotalMerge: (isDesc?: boolean) => number
  verticalMerge: (isDesc?: boolean) => number
}

export default (
  gameGrids: Ref<GameItem[][]>
): MergeReturnType => {
  /**
   * 水平合并
   * @param isDesc - 是否逆序（从左向右滑为逆序）
   */
  const horizotalMerge = (isDesc = false): number => {
    const cloneGameGrids = clonedeep(gameGrids.value)

    if (isDesc) {
      // 逆序旋转 180 度
      matrixRotate(cloneGameGrids)
      matrixRotate(cloneGameGrids)
    }

    const count = merge(cloneGameGrids)

    if (isDesc) {
      // 逆序还原
      matrixRotate(cloneGameGrids)
      matrixRotate(cloneGameGrids)
    }

    gameGrids.value = cloneGameGrids

    return count
  }

  /**
   * 垂直合并
   * @param isDesc - 是否逆序（从下向上滑为逆序）
   */
  const verticalMerge = (isDesc = false): number => {
    const cloneGameGrids = clonedeep(gameGrids.value)

    if (isDesc) {
      // 逆序旋转 90 度
      matrixRotate(cloneGameGrids)
    } else {
      // 正序旋转 -90 充
      matrixRotate(cloneGameGrids, true)
    }

    const count = merge(cloneGameGrids)

    if (isDesc) {
      // 逆序还原
      matrixRotate(cloneGameGrids, true)
    } else {
      // 正序还原
      matrixRotate(cloneGameGrids, false)
    }

    gameGrids.value = cloneGameGrids

    return count
  }

  const merge = (entry: GameItem[][]): number => {
    const len = entry.length

    let count = 0

    for (let i = 0; i < len; i++) {
      count += singleRowMerge(entry[i], 0)
    }

    return count
  }
  /**
   * 合并相邻元素
   * @returns 表示是否有元素被合并
   */
  const mergeAdjacentItems = (row: GameItem[]): boolean => {
    const len = row.length

    let isMerged = false

    let first = 0
    let next = first + 1

    let firstItem = row[first]
    let nextItem = row[next]

    while (next < len) {
      if (firstItem.value === 0) {
        firstItem = row[++first]
        nextItem = row[++next]
      } else if (nextItem.value === 0) {
        first = next + 1
        next = first + 1
        firstItem = row[first]
        nextItem = row[next]
      } else if (firstItem.value !== nextItem.value) {
        firstItem = row[++first]
        nextItem = row[++next]
      } else if (firstItem.value === nextItem.value) {
        // 合并
        row[first].value = firstItem.value * 2
        row[next].value = 0

        first = next + 1
        next = first + 1
        firstItem = row[first]
        nextItem = row[next]

        isMerged = true
      }
    }

    return isMerged
  }

  /**
   * 迁移 0 到最后
   */
  const transferZero = (row: GameItem[]): GameItem[] => {
    let j = 0

    for (let i = 0; i < row.length; i++) {
      if (row[i].value !== 0) {
        [row[j], row[i]] = [row[i], row[j]]
        j++
      }
    }

    return row
  }

  /**
   * 单行合并
   * @param row - 当前行
   * @param count - 操作次数
   * @returns 操作次数
   */
  const singleRowMerge = (row: GameItem[], count = 0): number => {
    // 1. 先合并相邻并且相同的数据
    while (mergeAdjacentItems(row)) {
      count++
    }

    // 2. 移 0 到最右侧
    if (JSON.stringify(row) !== JSON.stringify(transferZero(row))) {
      return singleRowMerge(row, ++count)
    }

    return count
  }

  return {
    horizotalMerge,
    verticalMerge
  }
}
