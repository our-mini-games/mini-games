import { GameItem } from '../types'

export const createGridValue = (): number => Math.random() > 0.5 ? 2 : 4

export const createDefaultGrids = (row: number, column: number): GameItem[][] => {
  const grids: GameItem[][] = []
  for (let y = 0; y < row; y++) {
    grids[y] = []
    for (let x = 0; x < column; x++) {
      grids[y].push((x === 0 && y === 0) || (x === column - 1 && y === row - 1) ? createGridValue() : 0)
    }
  }

  return grids
}

/**
 * @param matrix - 需要旋转的矩阵
 * @param isCounterclockwise - 是否为逆时针旋转
 */
export const matrixRotate = <T extends unknown[][] = []>(matrix: T, isCounterclockwise = false): T => {
  const len = matrix.length
  for (let i = 0; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      let tmp: unknown
      if (isCounterclockwise) {
        tmp = matrix[i][j]
        matrix[i][j] = matrix[j][len - i - 1]
        matrix[j][len - i - 1] = matrix[len - i - 1][len - j - 1]
        matrix[len - i - 1][len - j - 1] = matrix[len - j - 1][i]
        matrix[len - j - 1][i] = tmp
      } else {
        tmp = matrix[i][j]
        matrix[i][j] = matrix[len - j - 1][i]
        matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1]
        matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1]
        matrix[j][len - i - 1] = tmp
      }
    }
  }
  return matrix
}
