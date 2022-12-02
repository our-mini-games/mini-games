import { Tetrominos, tetrisCoordinates, wrapperSize } from '../config'
import { BuildingType, Tetris, TetrisType } from '../types'

export const getRandomNumber = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min

export const getRandomTetromino = (): Tetrominos => {
  const arr = [Tetrominos.I, Tetrominos.L1, Tetrominos.L2, Tetrominos.O, Tetrominos.S, Tetrominos.T, Tetrominos.Z]
  return shuffle(arr)[0]
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

export const createBuildingRowItems = (column: number): boolean[] => {
  const columns = []
  for (let x = 0; x < column; x++) {
    columns.push(false)
  }

  return columns
}

export const createBuilding = (row: number, column: number): BuildingType => {
  const building: BuildingType = []

  for (let y = 0; y < row; y++) {
    building[y] = createBuildingRowItems(column)
  }

  return building
}

export const getNextTetris = (): Tetris => createTetris(getRandomTetromino(), getRandomNumber(1, 4) as TetrisType)

export const createTetris = (tetrominos: Tetrominos, type: TetrisType): Tetris => {
  return {
    tetrominos,
    type,
    coordinates: tetrisCoordinates[tetrominos][type]
  }
}

// 检测是否为方块的坐标是否合法
export const isLegalTetris = (coordinates: Tetris['coordinates'], building: BuildingType): boolean => {
  return !coordinates.some(({ x, y }) => (
    x < 0 ||
    x > wrapperSize.column - 1 ||
    y > wrapperSize.row - 1 ||
    (y > 0 && building[y][x])
  ))
}

// 是否可以移除元素
export const removeCheck = (building: BuildingType): number[] => {
  return building.reduce((prev: number[], row, index) => {
    if (row.every(Boolean)) {
      prev.push(index)
    }
    return prev
  }, [])
}
// 元素是否无法下降，游戏结束检测
export const finishedCheck = (tetris: Tetris): boolean => tetris.coordinates.some(({ y }) => y < 0)

export const sleep = async (delay: number): Promise<number> => {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

export function isMobile (): boolean {
  return /mobile/iu.test(navigator.userAgent)
}

export const getShuffleBuildingRow = (): BuildingType[0] => {
  const length = getRandomNumber(1, wrapperSize.column - 1)
  return shuffle([
    ...Array.from({ length }, () => true),
    ...Array.from({ length: wrapperSize.column - length }, () => false)
  ])
}
