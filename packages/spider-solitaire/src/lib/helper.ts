import { GameMode, SolitaireNumber, SolitaireSuits } from '../config'
import { SolitaireGroupItem } from '../types'

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
  deactiveGroup: SolitaireGroupItem[][]
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

  const { activeGroup, deactiveGroup } = groupedSolitaire(items)

  // 打开活跃牌组中每一叠中的最后一张牌
  activeGroup.forEach(item => {
    item[item.length - 1].isOpen = true
  })

  return {
    activeGroup,
    deactiveGroup
  }
}

const getNumbers = (suit: SolitaireSuits): SolitaireGroupItem[] => {
  return [
    SolitaireNumber.ace,
    SolitaireNumber.two,
    SolitaireNumber.three,
    SolitaireNumber.four,
    SolitaireNumber.five,
    SolitaireNumber.six,
    SolitaireNumber.seven,
    SolitaireNumber.eight,
    SolitaireNumber.nine,
    SolitaireNumber.ten,
    SolitaireNumber.jack,
    SolitaireNumber.queen,
    SolitaireNumber.king
  ].map(number => {
    return {
      suit,
      number,
      isOpen: false
    } as SolitaireGroupItem
  })
}

const groupedSolitaire = (items: SolitaireGroupItem[]): {
  activeGroup: SolitaireGroupItem[][]
  deactiveGroup: SolitaireGroupItem[][]
} => {
  const activeGroup: SolitaireGroupItem[][] = []
  const deactiveGroup: SolitaireGroupItem[][] = []

  // 前四叠每叠6张，后六叠每叠5张
  for (let i = 0; i < 10; i++) {
    if (i < 4) {
      activeGroup.push(items.splice(0, 6))
    } else {
      activeGroup.push(items.splice(0, 5))
    }
  }

  for (let i = 0; i < 5; i++) {
    deactiveGroup.push(items.splice(0, 10))
  }

  return {
    activeGroup,
    deactiveGroup
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
