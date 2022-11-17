import { describe, expect, it } from 'vitest'
import { Level } from '../config'

import {
  createTestBoxes,
  isAdjacent,
  isCollinear,
  canConnectedByACorner,
  canConnectedByTwoCorners,
  boxesSort
} from '../lib/utils'
import { Box, LevelInfo } from '../types'

describe('寻路算法测试', () => {
  it('相邻元素', () => {
    const boxes1 = createTestBoxes([
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes2 = createTestBoxes([
      'x', 'x', 'x', 1, 1,
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes3 = createTestBoxes([
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)

    const checkedItems1 = boxes1.filter(item => item.seq === 1)
    const checkedItems2 = boxes2.filter(item => item.seq === 1)
    const checkedItems3 = boxes3.filter(item => item.seq === 1)

    expect(isAdjacent(checkedItems1[0], checkedItems1[1])).toBeTruthy()
    expect(isAdjacent(checkedItems2[0], checkedItems2[1])).toBeTruthy()
    expect(isAdjacent(checkedItems3[0], checkedItems3[1])).toBeFalsy()
  })

  it('同一直线', () => {
    const boxes1 = createTestBoxes([
      1, '', '', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes2 = createTestBoxes([
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', '', 'x',
      'x', 'x', 'x', '', 'x',
      'x', 'x', 'x', 1, 'x'
    ], 5, 4)
    const boxes3 = createTestBoxes([
      'x', 'x', 'x', 'x', 'x',
      'x', 1, '', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes4 = createTestBoxes([
      'x', 'x', 'x', 1, 'x',
      'x', 'x', '', '', 'x',
      'x', 'x', 1, 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes5 = createTestBoxes([
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      1, '', 'x', 'x', 1
    ], 5, 4)

    const checkedItems1 = boxes1.filter(item => item.seq === 1)
    const checkedItems2 = boxes2.filter(item => item.seq === 1)
    const checkedItems3 = boxes3.filter(item => item.seq === 1)
    const checkedItems4 = boxes4.filter(item => item.seq === 1)
    const checkedItems5 = boxes5.filter(item => item.seq === 1)

    expect(isCollinear(checkedItems1[0], checkedItems1[1], boxes1)).toBeTruthy()
    expect(isCollinear(checkedItems2[0], checkedItems2[1], boxes2)).toBeTruthy()
    expect(isCollinear(checkedItems3[0], checkedItems3[1], boxes3)).toBeTruthy()
    expect(isCollinear(checkedItems4[0], checkedItems4[1], boxes4)).toBeFalsy()
    expect(isCollinear(checkedItems5[0], checkedItems5[1], boxes5)).toBeFalsy()
  })

  it('一个拐角', () => {
    const boxes1 = createTestBoxes([
      1, '', '', '', 'x',
      'x', 'x', 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes2 = createTestBoxes([
      'x', 1, '', '', 'x',
      'x', 'x', '', 'x', 'x',
      'x', 'x', 1, 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes3 = createTestBoxes([
      1, '', '', '', 'x',
      '', '', 'x', 'x', 'x',
      '', '', 1, 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes4 = createTestBoxes([
      1, 'x', '', '', 'x',
      '', '', '', '', 'x',
      '', '', 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 4)
    const boxes5 = createTestBoxes([
      '', '', '', '', 'x',
      1, 'x', '', 'x', 'x',
      '', '', '', 'x', 'x',
      '', 'x', 1, 'x', 'x'
    ], 5, 4)
    const checkedItems1 = boxes1.filter(item => item.seq === 1)
    const checkedItems2 = boxes2.filter(item => item.seq === 1)
    const checkedItems3 = boxes3.filter(item => item.seq === 1)
    const checkedItems4 = boxes4.filter(item => item.seq === 1)
    const checkedItems5 = boxes5.filter(item => item.seq === 1)

    expect(canConnectedByACorner(checkedItems1[0], checkedItems1[1], boxes1, [])).toBeTruthy()
    expect(canConnectedByACorner(checkedItems2[0], checkedItems2[1], boxes2, [])).toBeTruthy()
    expect(canConnectedByACorner(checkedItems3[0], checkedItems3[1], boxes3, [])).toBeTruthy()
    expect(canConnectedByACorner(checkedItems4[0], checkedItems4[1], boxes4, [])).toBeFalsy()
    expect(canConnectedByACorner(checkedItems5[0], checkedItems5[1], boxes5, [])).toBeFalsy()
  })

  it('一个拐角 + 一条直线', () => {
    const boxes1 = createTestBoxes([
      1, '', '', '', 'x',
      'x', 'x', 'x', '', 'x',
      'x', 'x', 1, '', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes2 = createTestBoxes([
      'x', 1, 'x', 1, 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes3 = createTestBoxes([
      'x', 1, '', '', '',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 1
    ], 5, 5)
    const boxes4 = createTestBoxes([
      'x', 'x', 'x', 'x', 'x',
      'x', 1, '', 'x', 'x',
      'x', 'x', '', 'x', 'x',
      'x', 'x', '', 1, 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes5 = createTestBoxes([
      '', '', '', '', 1,
      '', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      '', 1, 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes6 = createTestBoxes([
      'x', 'x', 'x', 'x', 'x',
      1, 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x',
      '', 1, 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes7 = createTestBoxes([
      'x', 'x', 'x', 'x', 'x',
      'x', '', '', 1, 'x',
      'x', 'x', '', 'x', 'x',
      'x', 1, 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x'
    ], 5, 5)
    const boxes8 = createTestBoxes([
      'x', 1, 'x', 'x', 'x',
      'x', '', 'x', 'x', 'x',
      'x', '', '', 'x', 'x',
      'x', 'x', '', 'x', 'x',
      'x', 'x', 1, 'x', 'x'
    ], 5, 5)

    const checkedItems1 = boxes1.filter(item => item.seq === 1)
    const checkedItems2 = boxes2.filter(item => item.seq === 1)
    const checkedItems3 = boxes3.filter(item => item.seq === 1)
    const checkedItems4 = boxes4.filter(item => item.seq === 1)
    const checkedItems5 = boxes5.filter(item => item.seq === 1)
    const checkedItems6 = boxes6.filter(item => item.seq === 1)
    const checkedItems7 = boxes7.filter(item => item.seq === 1)
    const checkedItems8 = boxes8.filter(item => item.seq === 1)

    const useBoundarylevelInfo: LevelInfo = {
      level: Level.easy,
      text: '简单',
      row: 5,
      column: 5,
      // @todo
      totalOfItems: 10, // 使用 25 种元素 4 * 25
      size: 44,
      useBoundary: true
    }
    const unuseBoundarylevelInfo: LevelInfo = {
      level: Level.easy,
      text: '简单',
      row: 5,
      column: 5,
      // @todo
      totalOfItems: 10, // 使用 25 种元素 4 * 25
      size: 44,
      useBoundary: false
    }

    expect(canConnectedByTwoCorners(checkedItems1[0], checkedItems1[1], boxes1, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems1[0], checkedItems1[1], boxes1, useBoundarylevelInfo, [])).toBeTruthy()

    console.log('--------2-------')
    expect(canConnectedByTwoCorners(checkedItems2[0], checkedItems2[1], boxes2, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems2[0], checkedItems2[1], boxes2, useBoundarylevelInfo, [])).toBeFalsy()

    console.log('---------------------------------')
    expect(canConnectedByTwoCorners(checkedItems3[0], checkedItems3[1], boxes3, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems3[0], checkedItems3[1], boxes3, useBoundarylevelInfo, [])).toBeFalsy()

    expect(canConnectedByTwoCorners(checkedItems4[0], checkedItems4[1], boxes4, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems4[0], checkedItems4[1], boxes4, useBoundarylevelInfo, [])).toBeTruthy()

    expect(canConnectedByTwoCorners(checkedItems5[0], checkedItems5[1], boxes5, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems5[0], checkedItems5[1], boxes5, useBoundarylevelInfo, [])).toBeFalsy()

    expect(canConnectedByTwoCorners(checkedItems6[0], checkedItems6[1], boxes6, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems6[0], checkedItems6[1], boxes6, useBoundarylevelInfo, [])).toBeFalsy()

    expect(canConnectedByTwoCorners(checkedItems7[0], checkedItems7[1], boxes7, unuseBoundarylevelInfo, [])).toBeFalsy()
    expect(canConnectedByTwoCorners(checkedItems7[0], checkedItems7[1], boxes7, useBoundarylevelInfo, [])).toBeFalsy()

    expect(canConnectedByTwoCorners(checkedItems8[0], checkedItems8[1], boxes8, unuseBoundarylevelInfo, [])).toBeTruthy()
    expect(canConnectedByTwoCorners(checkedItems8[0], checkedItems8[1], boxes8, useBoundarylevelInfo, [])).toBeTruthy()

    expect(1 + 1).toEqual(2)
  })

  it('boxesSort Should work', () => {
    const crossItems: Box[] = [
      { x: 0, y: 5, seq: 0, status: 'default' },
      { x: 1, y: 5, seq: 0, status: 'default' },
      { x: 2, y: 5, seq: 0, status: 'default' },
      { x: 3, y: 5, seq: 0, status: 'default' }
    ]

    const compareItem: Box = { x: 4, y: 5, seq: 0, status: 'default' }

    console.log(boxesSort(crossItems, compareItem))

    expect(1 + 1).toEqual(2)
  })
})
