import cloneDeep from 'lodash.clonedeep'
import { Box, LevelInfo } from '../types'
import { itemSequences } from '../config'
import { canIRemoveThem, isEmpty } from './pathFinding'

export const getBoxes = (levelInfo: LevelInfo): Box[] => {
  const { row, column, totalOfItems } = levelInfo
  const _items = shuffle([...itemSequences]).slice(0, totalOfItems)
  const max = row * column
  let items: number[] = []
  let repeat = max / totalOfItems

  while (repeat) {
    items = items.concat(shuffle(_items))
    repeat--
  }

  const boxes = items.map((item, index) => {
    return <Box>{
      seq: item,
      x: index % column + 1,
      y: index % column === 0 ? Math.ceil(index / column) + 1 : Math.ceil(index / column),
      status: 'default'
    }
  })

  // 深拷贝一份数据用于全解测试
  if (!fullSolutionTest(cloneDeep(boxes), levelInfo)) {
    // eslint-disable-next-line no-console
    console.log('%c生成游戏失败', 'color: #f40')
    return getBoxes(levelInfo)
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

export const getPosition = (val: number, size: number, useBoundary: boolean): number => {
  return (!useBoundary ? val : (val - 1)) * size
}

export const getFromPosition = (from: Box, to: Box, { size, useBoundary }: LevelInfo): number[] => {
  const halfSize = size / 2

  if (from.x === to.x) {
    return [
      getPosition(from.x, size, useBoundary) + halfSize,
      getPosition(from.y, size, useBoundary) + (from.y > to.y ? 0 : size)
    ]
  } else if (from.y === to.y) {
    return [
      getPosition(from.x, size, useBoundary) + (from.x > to.x ? 0 : size),
      getPosition(from.y, size, useBoundary) + halfSize
    ]
  }
  return []
}

export const getToPosition = (from: Box, to: Box, { size, useBoundary }: LevelInfo): number[] => {
  const halfSize = size / 2

  if (from.x === to.x) {
    return [
      getPosition(from.x, size, useBoundary) + halfSize,
      getPosition(to.y, size, useBoundary) + (from.y > to.y ? size : 0)
    ]
  } else if (from.y === to.y) {
    return [
      getPosition(to.x, size, useBoundary) + (from.x > to.x ? size : 0),
      getPosition(to.y, size, useBoundary) + halfSize
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
