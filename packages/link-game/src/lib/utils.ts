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
    console.log('失败')
    return getBoxes(levelInfo)
  }
  console.log('成功')
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
 * 创建测试用的元素
 * @example
 * createTextBoxes(
 *   [
 *     'x', 'x', 'x', 1, 'x',
 *     'x', 'x', 'x', '', 'x',
 *     'x', 'x', 'x', '', 'x',
 *     'x', 'x', 'x', '', 'x',
 *     'x', 'x', 'x', 1, 'x'
 *   ],
 *   5,
 *   5
 * )
 */
export const createTestBoxes = (input: Array<'x' | '' | 1>, column: number, _row: number) => {
  return input.map((item, index) => (<Box>{
    seq: item === 'x' ? -1 : item === '' ? 0 : 1,
    x: index % column + 1,
    y: index % column === 0 ? Math.ceil(index / column) + 1 : Math.ceil(index / column),
    status: 'default'
  }))
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
