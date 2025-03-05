import Hammer from 'hammerjs'
import { ROWS, COLS, KlotskiItem, Rect, GENERALS } from '../config'

export const generateKlotskiItems = (layouts: number[][]): KlotskiItem[] => {
  const _layouts = [...layouts]

  const result: KlotskiItem[] = []

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const item = _layouts[y][x]

      if (item === 0 || item === -1) {
        continue
      }

      switch (item) {
        case 1:
          result.push({ name: GENERALS.Caocao, x, y, w: 2, h: 2 })
          _layouts[y][x + 1] = -1
          _layouts[y + 1][x] = -1
          _layouts[y + 1][x + 1] = -1
          break
        case 2:
          result.push({ name: 'HORIZONTAL_GENERAL', x, y, w: 2, h: 1 })
          _layouts[y][x + 1] = -1
          break
        case 3:
          result.push({ name: 'VERTICAL_GENERAL', x, y, w: 1, h: 2 })
          _layouts[y + 1][x] = -1
          break
        case 4:
          result.push({ name: 'PAWN', x, y, w: 1, h: 1 })
          break
        default:
          break
      }
    }
  }

  return result
}

export const getGenerals = (desc: string): { horizontalGenerals: string[], verticalGenerals: string[] } => {
  const match = desc.match(/(\d{1})/g)

  if (!match || match.length !== 2) {
    throw new Error('Invalid description')
  }

  let horizontalLength = parseInt(match[0])
  let verticalLength = parseInt(match[1])
  const generals = [GENERALS.Guanying, GENERALS.Zhangfei, GENERALS.Zhaoyun, GENERALS.Huangzhong, GENERALS.Maochao]

  const horizontalGenerals: string[] = []
  const verticalGenerals: string[] = []

  while (horizontalLength > 0 && generals.length > 0) {
    horizontalGenerals.push(generals.shift()!)
    horizontalLength--
  }

  while (verticalLength > 0 && generals.length > 0) {
    verticalGenerals.push(generals.shift()!)
    verticalLength--
  }

  return {
    horizontalGenerals,
    verticalGenerals
  }
}

const isOutOfBounds = ({ x, y, w, h }: Rect): boolean => {
  return x < 0 || y < 0 || x + w > COLS || y + h > ROWS
}

export const canMove = (item: KlotskiItem, items: KlotskiItem[], direction: number): Rect | null => {
  const otherItems = items.filter(i => i.name !== item.name)

  if (direction === Hammer.DIRECTION_UP) {
    const up = {
      x: item.x,
      y: item.y - 1,
      w: item.w,
      h: item.h
    }

    if (!isOutOfBounds(up) && !otherItems.some(i => {
      return getIntersectionRate(up, i) > 0
    })) {
      return up
    }
  }

  if (direction === Hammer.DIRECTION_LEFT) {
    const left = {
      x: item.x - 1,
      y: item.y,
      w: item.w,
      h: item.h
    }

    if (!isOutOfBounds(left) && !otherItems.some(i => getIntersectionRate(left, i) > 0)) {
      return left
    }
  }

  if (direction === Hammer.DIRECTION_DOWN) {
    const down = {
      x: item.x,
      y: item.y + 1,
      w: item.w,
      h: item.h
    }

    if (!isOutOfBounds(down) && !otherItems.some(i => getIntersectionRate(down, i) > 0)) {
      return down
    }
  }

  if (direction === Hammer.DIRECTION_RIGHT) {
    const right = {
      x: item.x + 1,
      y: item.y,
      w: item.w,
      h: item.h
    }

    if (!isOutOfBounds(right) && !otherItems.some(i => getIntersectionRate(right, i) > 0)) {
      return right
    }
  }

  return null
}

// 计算两个矩形的交叉率
export const getIntersectionRate = (rect1: Rect, rect2: Rect): number => {
  const xLeft = Math.max(rect1.x, rect2.x)
  const yTop = Math.max(rect1.y, rect2.y)
  const xRight = Math.min(rect1.x + rect1.w, rect2.x + rect2.w)
  const yBottom = Math.min(rect1.y + rect1.h, rect2.y + rect2.h)

  // 判断是否有交叉
  const intersectionWidth = Math.max(0, xRight - xLeft)
  const intersectionHeight = Math.max(0, yBottom - yTop)

  // 计算交叉面积
  const intersectionArea = intersectionWidth * intersectionHeight

  // 计算矩形1和矩形2的面积
  const area1 = rect1.w * rect1.h
  const area2 = rect2.w * rect2.h

  // 交叉面积和两个矩形面积的比值（交叉率）
  return intersectionArea / Math.min(area1, area2)
}
