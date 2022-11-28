import { Tetrominos, tetrisCoordinates, wrapperSize } from '../config'
import { BuildingType, Coordinate, Tetris, TetrisType } from '../types'

const getRandomNumber = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min

const getRandomTetromino = (): Tetrominos => {
  const arr = [Tetrominos.I, Tetrominos.L1, Tetrominos.L2, Tetrominos.O, Tetrominos.S, Tetrominos.T, Tetrominos.Z]
  return shuffle(arr)[0]
}

/**
 * 数组随机排序
 * @param input 需要排序的数组
 */
function shuffle <T extends any[] = []> (input: T): T {
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

/**
 * 元素是否触底
 * @param activeCoordinates - 当前活跃的元素
 * @param building - 已搭建好的建筑
 */
export const isReachBottom = (activeCoordinates: Tetris['coordinates'], building: Coordinate[]): boolean => {
  return activeCoordinates.some(item => (item.y > wrapperSize.row - 1) || building.find(b => b.x === item.x && b.y === item.y))
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
export const finishedCheck = (tetris: Tetris): boolean => tetris.coordinates.some(({ y }) => y <= 0)

export const sleep = async (delay: number): Promise<number> => {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}
