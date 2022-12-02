import { Tetrominos } from '../config'
import { Coordinate, Tetris } from '../types'
import { createTetris, getRandomTetromino, shuffle } from './utils'

/**
 * 获取当前元素的下一形态
 * @param source - 原元素
 */
export const getTetrisNextType = (source: Tetris): Tetris => {
  switch (source.tetrominos) {
    case Tetrominos.I:
      return getINextType(source)
    case Tetrominos.L1:
      return getL1NextType(source)
    case Tetrominos.L2:
      return getL2NextType(source)
    case Tetrominos.S:
      return getSNextType(source)
    case Tetrominos.Z:
      return getZNextType(source)
    case Tetrominos.T:
      return getTNextType(source)
    case Tetrominos.O:
    default:
      return source
  }
}

/**
 * 获取 “I” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌---------------┐
 * │   │   │   │   │
 * │[0]│[1]│[x]│[3]│
 * │   │   │   │   │
 * │   │   │   │   │
 * └---------------┘
 * - 形态 2
 * ┌---------------┐
 * │   │   │[0]│   │
 * │   │   │[1]│   │
 * │   │   │[x]│   │
 * │   │   │[3]│   │
 * └---------------┘
 * - 形态 3
 * ┌---------------┐
 * │   │   │   │   │
 * │   │   │   │   │
 * │[0]│[x]│[2]│[3]│
 * │   │   │   │   │
 * └---------------┘
 * - 形态 4
 * ┌---------------┐
 * │   │[0]│   │   │
 * │   │[x]│   │   │
 * │   │[2]│   │   │
 * │   │[3]│   │   │
 * └---------------┘
 */
const getINextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 2 }
        ]
      }
    case 2:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 3,
        coordinates: [
          { x: fixedCoordinate.x - 2, y: fixedCoordinate.y },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y }
        ]
      }
    case 3:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 2 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 4:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x + 2, y: fixedCoordinate.y }
        ]
      }
  }
}

/**
 * 获取 “L1” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌-----------┐
 * │   │[0]│   │
 * │   │[x]│   │
 * │   │[2]│[3]│
 * └-----------┘
 * - 形态 2
 * ┌-----------┐
 * │   │   │   │
 * │[0]│[x]│[2]│
 * │[3]│   │   │
 * └-----------┘
 * - 形态 3
 * ┌-----------┐
 * │[0]│[1]│   │
 * │   │[x]│   │
 * │   │[3]│   │
 * └-----------┘
 * - 形态 4
 * ┌-----------┐
 * │   │   │[0]│
 * │[1]│[x]│[3]│
 * │   │   │   │
 * └-----------┘
 */
const getL1NextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y + 1 }
        ]
      }
    case 2:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 3,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 3:
      // 以 center top 为原点，顺时针旋转 90 度
      // index 为 2 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y }
        ]
      }
    case 4:
      // 以 right center 为原点，顺时针旋转 90 度
      // index 为 2 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y + 1 }
        ]
      }
  }
}

/**
 * 获取 “L2” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌-----------┐
 * │   │[0]│   │
 * │   │[x]│   │
 * │[2]│[3]│   │
 * └-----------┘
 * - 形态 2
 * ┌-----------┐
 * │[0]│   │   │
 * │[1]│[x]│[3]│
 * │   │   │   │
 * └-----------┘
 * - 形态 3
 * ┌-----------┐
 * │   │[0]│[1]│
 * │   │[x]│   │
 * │   │[3]│   │
 * └-----------┘
 * - 形态 4
 * ┌-----------┐
 * │   │   │   │
 * │[0]│[x]│[2]│
 * │   │   │[3]│
 * └-----------┘
 */
const getL2NextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y }
        ]
      }
    case 2:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 3,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 3:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y + 1 }
        ]
      }
    case 4:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y + 1 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
  }
}

/**
 * 获取 “S” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌-----------┐
 * │   │[0]│[1]│
 * │[2]│[x]│   │
 * │   │   │   │
 * └-----------┘
 * - 形态 2
 * ┌-----------┐
 * │   │[0]│   │
 * │   │[x]│[2]│
 * │   │   │[3]│
 * └-----------┘
 * - 形态 3
 * ┌-----------┐
 * │   │   │   │
 * │   │[x]│[1]│
 * │[2]│[3]│   │
 * └-----------┘
 * - 形态 4
 * ┌-----------┐
 * │[0]│   │   │
 * │[1]│[x]│   │
 * │   │[3]│   │
 * └-----------┘
 */
const getSNextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 3 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[3]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y + 1 }
        ]
      }
    case 2:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 0

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 3,
        coordinates: [
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y + 1 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 3:
      // index 为 0 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[0]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 4:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 3

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate
        ]
      }
  }
}

/**
 * 获取 “Z” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌-----------┐
 * │[0]│[1]│   │
 * │   │[x]│[3]│
 * │   │   │   │
 * └-----------┘
 * - 形态 2
 * ┌-----------┐
 * │   │   │[0]│
 * │   │[x]│[2]│
 * │   │[3]│   │
 * └-----------┘
 * - 形态 3
 * ┌-----------┐
 * │   │   │   │
 * │[0]│[x]│   │
 * │   │[2]│[3]│
 * └-----------┘
 * - 形态 4
 * ┌-----------┐
 * │   │[0]│   │
 * │[1]│[x]│   │
 * │[3]│   │   │
 * └-----------┘
 */
const getZNextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 2:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 3,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 },
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y + 1 }
        ]
      }
    case 3:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y + 1 }
        ]
      }
    case 4:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y }
        ]
      }
  }
}

/**
 * 获取 “T” 元素的下一个形态
 * @param source - 原元素
 *
 * @example
 * - 形态 1
 * ┌-----------┐
 * │   │   │   │
 * │[0]│[x]│[2]│
 * │   │[3]│   │
 * └-----------┘
 * - 形态 2
 * ┌-----------┐
 * │   │[0]│   │
 * │[1]│[x]│   │
 * │   │[3]│   │
 * └-----------┘
 * - 形态 3
 * ┌-----------┐
 * │   │[0]│   │
 * │[1]│[x]│[3]│
 * │   │   │   │
 * └-----------┘
 * - 形态 4
 * ┌-----------┐
 * │   │[0]│   │
 * │   │[x]│[2]│
 * │   │[3]│   │
 * └-----------┘
 */
const getTNextType = (source: Tetris): Tetris => {
  const { coordinates, type } = source
  let fixedCoordinate: Coordinate
  switch (type) {
    case 1:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 2,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 2:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 2

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 3,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y }
        ]
      }
    case 3:
      // index 为 2 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[2]
      return {
        ...source,
        type: 4,
        coordinates: [
          { x: fixedCoordinate.x, y: fixedCoordinate.y - 1 },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
    case 4:
      // index 为 1 的元素保持不变，旋转之后他会位于 index 1

      // 取出位置不变的元素
      fixedCoordinate = coordinates[1]
      return {
        ...source,
        type: 1,
        coordinates: [
          { x: fixedCoordinate.x - 1, y: fixedCoordinate.y },
          fixedCoordinate,
          { x: fixedCoordinate.x + 1, y: fixedCoordinate.y },
          { x: fixedCoordinate.x, y: fixedCoordinate.y + 1 }
        ]
      }
  }
}

/**
 * 随机获取元素的下一形态
 * @param source 原元素
 */
export const getTetrisRandomType = (source: Tetris): Tetris => {
  const tetromino = getRandomTetromino()
  const type = shuffle(tetromino === source.tetrominos ? [1, 2, 3, 4].filter(item => item !== source.type) : [1, 2, 3, 4])[0]

  const newTetris = createTetris(tetromino, type as Tetris['type'])

  const [dx, dy] = [
    source.coordinates[0].x - newTetris.coordinates[0].x,
    source.coordinates[0].y - newTetris.coordinates[0].y
  ]

  newTetris.coordinates.forEach(item => {
    item.x += dx
    item.y += dy
  })

  return newTetris
}
