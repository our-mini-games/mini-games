export interface GameConfig {
  path: string
  name: string
  cover?: string
}

export const games: GameConfig[] = [
  {
    path: '/mini-games/games/mine-sweeper/index.html',
    name: '扫雷',
    cover: 'mine-sweeper.svg'
  },
  {
    path: '/mini-games/games/link-game/index.html',
    name: '连连看',
    cover: 'link-game.svg'
  },
  {
    path: '/mini-games/games/greedy-snake/index.html',
    name: '贪吃蛇',
    cover: 'greedy-snake.svg'
  },
  {
    path: '/mini-games/games/tetris/index.html',
    name: '俄罗斯方块',
    cover: 'tetris.svg'
  },
  {
    path: '/mini-games/games/2048/index.html',
    name: '2048',
    cover: 'org.svg'
  },
  {
    path: 'https://github.com/our-mini-games/mini-games/discussions',
    name: '没有想要的？',
    cover: 'org.svg'
  }
]
