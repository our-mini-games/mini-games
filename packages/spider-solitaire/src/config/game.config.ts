// 总数量
export const totalOfSolitaire = 2 * 54

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

export const gap = {
  group: 14, // 牌组间隙
  unopened: 6, // 未开启的牌叠加间隙
  opened: 24 // 已开启的牌叠加间隙
}
export const solitaireSize = {
  width: 64,
  height: 88
}

export const fillColors = {
  [SolitaireSuits.spade]: '#333',
  [SolitaireSuits.heart]: '#f10',
  [SolitaireSuits.club]: '#333',
  [SolitaireSuits.diamond]: '#f10'
}
