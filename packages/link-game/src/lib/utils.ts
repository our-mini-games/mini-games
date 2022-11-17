import { Box, LevelInfo } from '../types'
import { itemSequences } from '../config'

export const getBoxes = ({ row, column, totalOfItems }: LevelInfo) => {
  const _items = shuffle([...itemSequences]).slice(0, totalOfItems)
  const max = row * column
  let items: number[] = []
  let repeat = max / totalOfItems

  while (repeat) {
    items = items.concat(shuffle(_items))
    repeat--
  }

  return items.map((item, index) => {
    return <Box>{
      seq: item,
      x: index % column + 1,
      y: index % column === 0 ? Math.ceil(index / column) + 1 : Math.ceil(index / column),
      status: 'default'
    }
  })
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
