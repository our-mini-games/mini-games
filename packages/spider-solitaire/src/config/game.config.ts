// 总数量
export const totalOfSolitaires = 2 * 54

// 纸牌花色
export enum SolitaireSuits {
  spade = 'spade', // 黑桃
  heart = 'heart', // 红桃
  club = 'club', // 梅花
  diamond = 'diamond' // 方片
}
// 纸牌类型
export enum SolitaireNumber {
  ace = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  jack = 'J',
  queen = 'Q',
  king = 'K'
}

export enum GameMode {
  easy, // 单色
  normal, // 双色
  hard // 四色
}

export const colors = {
  primary: '#365e4d',
  border: '#80998a',
  white: '#fbf2dd',
  black: '#202c25',
  red: '#a13332',
  background: '#fbf2dd'
}

export const fillColors = {
  [SolitaireSuits.spade]: colors.black,
  [SolitaireSuits.heart]: colors.red,
  [SolitaireSuits.club]: colors.black,
  [SolitaireSuits.diamond]: colors.red
}

export const suits = [
  SolitaireSuits.spade,
  SolitaireSuits.heart,
  SolitaireSuits.club,
  SolitaireSuits.diamond
]
export const numbers = [
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
]

export const gameModes = [
  {
    value: GameMode.easy,
    label: '简单（单色）'
  },
  {
    value: GameMode.normal,
    label: '普通（双色）'
  },
  {
    value: GameMode.hard,
    label: '困难（四色）'
  }
]
