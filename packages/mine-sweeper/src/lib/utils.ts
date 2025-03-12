import { Box, GameStatus, LevelInfo } from '../types/index.js'

import { MINE_SWEEPER_STATISTICS } from '../config/constants.js'

let boxes: Box[] = []

export const getBoxes = ({
  row,
  column,
  totalOfMines
}: LevelInfo): Box[] => {
  let total = totalOfMines
  boxes = shuffle(Array.from({ length: row * column }, () => (<Box>{
    x: 0,
    y: 0,
    type: --total < 0 ? 0 : 'mine',
    status: 'default'
  }))).map((item, index) => {
    item.x = index % column + 1
    item.y = index % column === 0 ? Math.ceil(index / column) + 1 : Math.ceil(index / column)
    return item
  })

  return boxes
}

export const countMines = (item: Box): void => {
  const { type } = item

  // 若首次点击为地雷则置换
  if (type === 'mine') {
    const itemIsntMine = boxes.find(item => item.type !== 'mine')!
    item.type = itemIsntMine.type
    itemIsntMine.type = 'mine'
  }

  // 计算雷周边数量
  boxes.filter(item => item.type === 'mine').forEach(item => {
    [
      [item.x - 1, item.y - 1], [item.x, item.y - 1], [item.x + 1, item.y - 1],
      [item.x - 1, item.y], [item.x + 1, item.y],
      [item.x - 1, item.y + 1], [item.x, item.y + 1], [item.x + 1, item.y + 1]
    ].forEach(point => {
      const box = boxes.find(box => box.x === point[0] && box.y === point[1])
      if (box && box.type !== 'mine') {
        box.type++
      }
    })
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

export const getRectFillColor = (item: Box, _gameStatus: GameStatus): string => {
  switch (item.status) {
    case 'active':
      return 'transparent'
    case 'open':
      if (item.type === 'mine') {
        return '#f40'
      }
      return 'transparent'
    case 'doubtful':
    case 'marked':
      return '#0088ff'
    case 'default':
    default:
      return '#0088ff'
  }
}

export const isLeftButton = (button: number): boolean => button === 0
export const isRightButton = (button: number): boolean => button === 2

export const checkGameStatus = (boxes: Box[], levelInfo: LevelInfo): GameStatus => {
  const {
    totalOfMines: total,
    column,
    row
  } = levelInfo

  let markedCount = 0
  // 非雷格子数量
  let notMineCount = row * column - total

  for (let i = 0; i < boxes.length; i++) {
    const item = boxes[i]
    // 1. 检测是否有雷被开启
    if (item.type === 'mine' && item.status === 'open') {
      return 'defeat'
    }

    // 2. 检测是否所有雷都被标记
    if (item.type === 'mine' && item.status === 'marked' && ++markedCount >= total) {
      return 'complete'
    }

    // 3. 检测是否所有非雷格子都被开启了
    if (item.type !== 'mine' && item.status === 'open' && --notMineCount <= 0) {
      return 'complete'
    }
  }

  return 'playing'
}

export const zeroFill = (input: number | string): string => `${input}`.padStart(2, '0')

export const createStatistics = (
  level: LevelInfo['level'],
  status: Extract<GameStatus, 'complete' | 'defeat'>,
  time: number
): void => {
  try {
    // 不统计自定义的难度
    if (level === 0) {
      return
    }

    let item = JSON.parse(localStorage.getItem(MINE_SWEEPER_STATISTICS) ?? 'null')
    if (!item) {
      item = {
        [level]: [[status, time]]
      }
    } else {
      if (!item[level]) {
        item[level] = [[status, time]]
      } else {
        item[level].push([status, time])
      }
    }

    localStorage.setItem(MINE_SWEEPER_STATISTICS, JSON.stringify(item))
  } catch {}
}

export const formatTime = (val: number): string => {
  const m = Math.floor(val / 60)
  const s = val % 60

  return `${zeroFill(m)}′${zeroFill(s)}″`
}
