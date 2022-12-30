import { SolitaireNumber } from '../config'
import { SolitaireGroupItem } from '../types'

const reverseSolitaireNumbers = [
  SolitaireNumber.king,
  SolitaireNumber.queen,
  SolitaireNumber.jack,
  SolitaireNumber.ten,
  SolitaireNumber.nine,
  SolitaireNumber.eight,
  SolitaireNumber.seven,
  SolitaireNumber.six,
  SolitaireNumber.five,
  SolitaireNumber.four,
  SolitaireNumber.three,
  SolitaireNumber.two,
  SolitaireNumber.ace
]

/**
 * 是否可以拖动当前选中的牌
 * - 当前牌之后所有牌都同类型，且数字呈递减状态才能被拖动
 * @param solitaires - 牌组
 * @param index - 选中的牌所在位置
 */
export const canSolitairesMove = (solitaires: SolitaireGroupItem[], index: number): boolean => {
  const target = solitaires[index]
  const afterSolitaires = solitaires.filter((_, i) => i > index)

  if (afterSolitaires.some(solitaire => solitaire.suit !== target.suit)) {
    return false
  }

  const currentSuitIndex = reverseSolitaireNumbers.indexOf(target.number)
  if (currentSuitIndex === -1) {
    return false
  }
  const numbers = reverseSolitaireNumbers.slice(currentSuitIndex, currentSuitIndex + afterSolitaires.length)

  if (afterSolitaires.some((solitaire, i) => solitaire.number !== numbers[i])) {
    return false
  }

  return true
}

export const canIDropIt = (): boolean => {
  return false
}
