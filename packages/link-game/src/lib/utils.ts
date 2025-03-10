import cloneDeep from 'lodash.clonedeep'
import { Box, LevelInfo } from '../types/index.js'
import { itemSequences } from '../config/index.js'
import { canIRemoveThem, isEmpty } from './pathFinding.js'

export const getBoxes = async (levelInfo: LevelInfo): Promise<Box[]> => {
  const { row, column, totalOfItems } = levelInfo
  const materials = shuffle([...itemSequences]).slice(0, totalOfItems)
  const max = row * column
  let items: number[] = []
  let repeat = max / totalOfItems

  while (repeat) {
    items = items.concat(shuffle(materials))
    repeat--
  }

  let boxes = items.map((item, index) => {
    return <Box>{
      seq: item,
      x: index % column + 1,
      y: Math.floor(index / column) + 1,
      status: 'default'
    }
  })

  // 深拷贝一份数据用于全解测试
  if (!fullSolutionTest(cloneDeep(boxes), levelInfo)) {
    // eslint-disable-next-line no-console
    console.log('%c生成游戏失败', 'color: #f40')
    // eslint-disable-return-await
    boxes = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(getBoxes(levelInfo))
      })
    })
  }
  // eslint-disable-next-line no-console
  console.log('%c生成游戏成功，%c祝你游戏愉快', 'color: #10b20a; font-size: 20px; font-weight: 700', 'color: #333')
  return boxes
}

/**
 * 数组随机排序
 * @param input 需要排序的数组
 */
export function shuffle <T extends any[] = []> (input: T): T {
  const len = input.length

  if (len === 0) return input

  let randomIndex: number
  let itemAtIndex

  for (let i = len - 1; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1))
    itemAtIndex = input[randomIndex]
    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }

  return input
}

/**
 * 全解测试
 */
const fullSolutionTest = (boxes: Box[], levelInfo: LevelInfo, solutionLength = 0): boolean => {
  const len = boxes.length

  let itemA: Box
  let itemB: Box

  for (let i = 0; i < len; i++) {
    itemA = boxes[i]

    if (isEmpty(itemA)) {
      continue
    }

    for (let j = i + 1; j < len; j++) {
      itemB = boxes[j]

      if (isEmpty(itemB)) {
        continue
      }

      if (itemA.x === itemB.x && itemA.y === itemB.y) {
        continue
      }

      if (canIRemoveThem([itemA, itemB], boxes, levelInfo)[0]) {
        itemA.seq = 0
        itemB.seq = 0
        break
      }
    }
  }
  const newSolutionLength = boxes.filter(item => item.seq === 0).length
  if (newSolutionLength <= solutionLength) {
    // 最新一轮没有消除任何元素，全解失败
    return false
  }

  if (newSolutionLength === len) {
    // 所有元素都被消除
    return true
  }

  return fullSolutionTest(
    boxes,
    levelInfo,
    newSolutionLength
  )
}

export const getPosition = (val: number, { size }: LevelInfo): number => {
  return (val - 1) * size
}

export const getFromPosition = (from: Box, to: Box, levelInfo: LevelInfo): number[] => {
  const halfSize = levelInfo.size / 2

  if (from.x === to.x) {
    return [
      getPosition(from.x, levelInfo) + halfSize,
      getPosition(from.y, levelInfo) + (from.y > to.y ? 0 : levelInfo.size)
    ]
  } else if (from.y === to.y) {
    return [
      getPosition(from.x, levelInfo) + (from.x > to.x ? 0 : levelInfo.size),
      getPosition(from.y, levelInfo) + halfSize
    ]
  }
  return []
}

export const getToPosition = (from: Box, to: Box, levelInfo: LevelInfo): number[] => {
  const halfSize = levelInfo.size / 2

  if (from.x === to.x) {
    return [
      getPosition(from.x, levelInfo) + halfSize,
      getPosition(to.y, levelInfo) + (from.y > to.y ? levelInfo.size : 0)
    ]
  } else if (from.y === to.y) {
    return [
      getPosition(to.x, levelInfo) + (from.x > to.x ? levelInfo.size : 0),
      getPosition(to.y, levelInfo) + halfSize
    ]
  }
  return []
}

export const sleep = async (delay: number): Promise<unknown> => {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

export const isComplete = (boxes: Box[]): boolean => boxes.every(box => box.seq === 0)

/**
   * 获取元素大小
   * @param row 行
   * @param column 列
   * @param width 宽度
   * @param height 高度
   * @returns 元素大小
   */
export const getSize = (row: number, column: number, width: number, height: number): number => {
  const xCount = column + 1
  const yCount = row + 1
  const w = Math.floor(width / xCount)
  const h = Math.floor(height / yCount)

  const min = Math.min(w, h)
  const max = Math.max(w, h)

  console.log({
    min,
    max
  })

  if (min === max) {
    return min
  }

  if (max * xCount > width || max * yCount > height) {
    return min
  }

  return max
}
