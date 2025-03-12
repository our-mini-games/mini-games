export interface GameConfig {
  path: string
  name: string
  cover?: string
}

export const games: GameConfig[] = [
  {
    path: '/mini-games/mine-sweeper/index.html',
    name: '扫雷',
    cover: 'mine-sweeper.svg'
  },
  {
    path: '/mini-games/link-game/index.html',
    name: '连连看',
    cover: 'link-game.svg'
  },
  {
    path: '/mini-games/greedy-snake/index.html',
    name: '贪吃蛇',
    cover: 'greedy-snake.svg'
  },
  {
    path: '/mini-games/tetris/index.html',
    name: '俄罗斯方块',
    cover: 'tetris.svg'
  },
  {
    path: '/mini-games/2048/index.html',
    name: '2048',
    cover: '2048.svg'
  },
  {
    path: '/mini-games/spider-solitaire/index.html',
    name: '蜘蛛纸牌',
    cover: 'spider-solitaire.svg'
  },
  {
    path: '/mini-games/chinese-chess/index.html',
    name: '中国象棋',
    cover: 'Chinese-chess.jpg'
  },
  {
    path: '/mini-games/klotski/index.html',
    name: '华容道',
    cover: 'klotski.svg'
  },
  {
    path: '/mini-games/arkanoid/index.html',
    name: '打砖块',
    cover: 'arkanoid.png'
  },
  {
    path: 'https://github.com/our-mini-games/mini-games/discussions',
    name: '没有想要的？',
    cover: 'org.svg'
  }
]
