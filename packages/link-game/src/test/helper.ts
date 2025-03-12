import { Box } from '../types/index.js'

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
export const createTestBoxes = (input: Array<'x' | '' | 1>, column: number, _row: number): Box[] => {
  return input.map((item, index) => (<Box>{
    seq: item === 'x' ? -1 : item === '' ? 0 : 1,
    x: index % column + 1,
    y: index % column === 0 ? Math.ceil(index / column) + 1 : Math.ceil(index / column),
    status: 'default'
  }))
}
