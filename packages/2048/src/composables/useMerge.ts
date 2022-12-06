import { Ref } from 'vue'
import { GameItem } from '../types'

interface MergeReturnType {
  horizotalMerge: (isDesc?: boolean) => void
  verticalMerge: (isDesc?: boolean) => void
  merge: (row: GameItem[][]) => number
}

export default (
  gameGrids: Ref<GameItem[][]>
): MergeReturnType => {
  // 水平合并
  const horizotalMerge = (isDesc = false): void => {}

  // 垂直合并
  const verticalMerge = (isDesc = false): void => {}

  const merge = (entry: GameItem[][]): number => {
    // [
    //   [2], [2], [4], [4]
    //   [2], [4], [0], [0]
    //   [0], [2], [0], [2],
    //   [0], [0], [2], [2]
    // ]
    const len = entry.length

    let count = 0

    for (let i = 0; i < len; i++) {
      count += singleRowMerge(entry[i], 0)
    }

    console.log(entry)

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
      console.log('while', firstItem, nextItem, first, next)
      if (firstItem === 0) {
        firstItem = row[++first]
        nextItem = row[++next]
      } else if (nextItem === 0) {
        first = next + 1
        next = first + 1
        firstItem = row[first]
        nextItem = row[next]
      } else if (firstItem !== nextItem) {
        firstItem = row[++first]
        nextItem = row[++next]
      } else if (firstItem === nextItem) {
        // 合并
        row[first] = firstItem * 2
        row[next] = 0

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
      if (row[i] !== 0) {
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
    // [2], [2], [4], [4]
    // const len = row.length

    // 1. 先合并相邻并且相同的数据
    // [4], [0], [8], [0]
    while (mergeAdjacentItems(row)) {
      // noop
      count++
    }

    // 2. 移 0 到最右侧
    if (JSON.stringify(row) !== JSON.stringify(transferZero(row))) {
      return singleRowMerge(row, ++count)
    }
    console.log(row)
    return count
  }

  return {
    horizotalMerge,
    verticalMerge,
    merge
  }
}
