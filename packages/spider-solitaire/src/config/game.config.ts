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

export const gap = {
  group: 14, // 牌组间隙
  unopened: 6, // 未开启的牌叠加间隙
  opened: 20 // 已开启的牌叠加间隙
}

// 纸牌宽高比 5:7
export const solitaireSize = {
  width: 180,
  height: 252,
  radius: 16,

  // 字体大小
  font: {
    textLength: 24,
    size: 36
  },
  fontMargin: {
    top: 8,
    left: 8,
    right: 8,
    bottom: 4
  },

  // 内边距
  get padding () {
    return {
      left: this.fontMargin.left + this.font.textLength + this.fontMargin.right,
      top: this.fontMargin.top + this.font.size / 2
    }
  },

  // 图案区大小
  get patternArea () {
    const { left, top } = this.padding
    const width = this.width - left * 2
    const height = this.height - top * 2
    return {
      width,
      height,
      center: {
        x: width / 2 + left,
        y: height / 2 + top
      }
    }
  },

  // 图案大小
  patternSize: {
    sm: 24,
    md: 36,
    lg: 44,
    xl: 64,
    xxl: 128
  },

  get patternGaps () {
    return {
      md2x: this.patternArea.width - this.patternSize.md * 2, // md 横向排两个
      md4y: (this.patternArea.height - this.patternSize.md * 4) / 3, // md 竖向排四个

      lg2x: this.patternArea.width - this.patternSize.lg * 2, // lg 横向排两个
      lg3y: (this.patternArea.height - this.patternSize.lg * 3) / 2 // lg 竖向排三个
    }
  }
}

export const colors = {
  primary: '#001f3d',
  border: '#cfcfcf',
  white: '#fff',
  black: '#333',
  red: '#f10',
  background: '#fff'
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
