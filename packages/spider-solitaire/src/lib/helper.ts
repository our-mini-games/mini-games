import { GameMode, numbers, SolitaireSuits } from '../config/index.js'
import { SolitaireGroupItem } from '../types/index.js'

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

export const initializeTheGame = (mode: GameMode): {
  activeGroup: SolitaireGroupItem[][]
  inactiveGroup: SolitaireGroupItem[][]
} => {
  let suits: SolitaireSuits[] = []

  switch (mode) {
    case GameMode.normal:
      suits = arrayRepeat([SolitaireSuits.spade, SolitaireSuits.heart], 4)
      break
    case GameMode.hard:
      suits = arrayRepeat([SolitaireSuits.spade, SolitaireSuits.heart, SolitaireSuits.club, SolitaireSuits.diamond], 2)
      break
    case GameMode.easy:
    default:
      suits = arrayRepeat([SolitaireSuits.spade], 8)
      break
  }

  const items = shuffle(suits.reduce<SolitaireGroupItem[]>((prev, suit) => {
    return prev.concat(getNumbers(suit))
  }, []))

  const { activeGroup, inactiveGroup } = groupedSolitaire(items)

  // 打开活跃牌组中每一叠中的最后一张牌
  activeGroup.forEach(item => {
    item[item.length - 1].isOpen = true
  })

  return {
    activeGroup,
    inactiveGroup
  }
}

const getNumbers = (suit: SolitaireSuits): SolitaireGroupItem[] => {
  return numbers.map(number => {
    return {
      suit,
      number,
      isOpen: false
    } as SolitaireGroupItem
  })
}

const groupedSolitaire = (items: SolitaireGroupItem[]): {
  activeGroup: SolitaireGroupItem[][]
  inactiveGroup: SolitaireGroupItem[][]
} => {
  const activeGroup: SolitaireGroupItem[][] = []
  const inactiveGroup: SolitaireGroupItem[][] = []

  // 前四叠每叠6张，后六叠每叠5张
  for (let i = 0; i < 10; i++) {
    if (i < 4) {
      activeGroup.push(items.splice(0, 6))
    } else {
      activeGroup.push(items.splice(0, 5))
    }
  }

  for (let i = 0; i < 5; i++) {
    inactiveGroup.push(items.splice(0, 10))
  }

  return {
    activeGroup,
    inactiveGroup
  }
}

const arrayRepeat = <T = unknown>(arr: T[], times: number): T[] => {
  let newArr: T[] = []
  while (times > 0) {
    newArr = newArr.concat(arr)
    times--
  }
  return newArr
}

export const getOpenedSolitaireTop = (group: SolitaireGroupItem[], index: number, unopenedGroupGap: number, openedGroupGap: number): number => {
  const unopenedLength = group.filter(item => !item.isOpen).length
  return (unopenedLength) * unopenedGroupGap + (index - unopenedLength) * openedGroupGap
}

// 计算两个矩形的交叉率
export const getIntersectionRate = (rect1: { x: number, y: number, width: number, height: number }, rect2: { x: number, y: number, width: number, height: number }): number => {
  // 计算交叉区域的左上角和右下角
  const xLeft = Math.max(rect1.x, rect2.x)
  const yTop = Math.max(rect1.y, rect2.y)
  const xRight = Math.min(rect1.x + rect1.width, rect2.x + rect2.width)
  const yBottom = Math.min(rect1.y + rect1.height, rect2.y + rect2.height)

  // 判断是否有交叉
  const intersectionWidth = Math.max(0, xRight - xLeft)
  const intersectionHeight = Math.max(0, yBottom - yTop)

  // 计算交叉面积
  const intersectionArea = intersectionWidth * intersectionHeight

  // 计算矩形1和矩形2的面积
  const area1 = rect1.width * rect1.height
  const area2 = rect2.width * rect2.height

  // 交叉面积和两个矩形面积的比值（交叉率）
  return intersectionArea / Math.min(area1, area2)
}
