export const ROWS = 5
export const COLS = 4

export const EMPTY = 0
export const CAOCAO = 1
export const HORIZONTAL = 2
export const VERTICAL = 3
export const PAWN = 4 // 卒

export const PERSONS = {
  Caocao: 'caocao',
  Guanying: 'guanying',
  Zhangfei: 'zhangfei',
  Zhaoyun: 'zhaoyun',
  Huangzhong: 'huangzhong',
  Machao: 'machao',
  Pawn1: 'pawn1',
  Pawn2: 'pawn2',
  Pawn3: 'pawn3',
  Pawn4: 'pawn4'
}

export const PERSONS_MAP = {
  [PERSONS.Caocao]: '曹操',
  [PERSONS.Guanying]: '關羽',
  [PERSONS.Zhangfei]: '張飛',
  [PERSONS.Zhaoyun]: '趙雲',
  [PERSONS.Huangzhong]: '黃忠',
  [PERSONS.Machao]: '馬超',
  [PERSONS.Pawn1]: '甲',
  [PERSONS.Pawn2]: '乙',
  [PERSONS.Pawn3]: '丙',
  [PERSONS.Pawn4]: '丁'
}

export interface Layout {
  id: number
  name: string
  desc: string
  layouts: number[][]
}

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export interface KlotskiItem extends Rect {
  name: string
}

/**
 * 经典布局
 */
export const classicalLayouts = [
  {
    id: 1,
    name: '橫刀立馬',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [3, 2, 2, 3],
      [3, 4, 4, 3],
      [4, 0, 0, 4]
    ]
  },
  {
    id: 2,
    name: '指揮若定',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [4, 2, 2, 4],
      [3, 4, 4, 3],
      [3, 0, 0, 3]
    ]
  },
  {
    id: 3,
    name: '將擁曹營',
    desc: '1橫4豎',
    layouts: [
      [0, 1, 1, 0],
      [3, 1, 1, 3],
      [3, 3, 3, 3],
      [4, 3, 3, 4],
      [2, 2, 4, 4]
    ]
  },
  {
    id: 4,
    name: '齊頭並進',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [4, 4, 4, 4],
      [3, 2, 2, 3],
      [3, 0, 0, 3]
    ]
  },
  {
    id: 5,
    name: '兵分三路',
    desc: '1橫4豎',
    layouts: [
      [4, 1, 1, 4],
      [3, 1, 1, 3],
      [3, 2, 2, 3],
      [3, 4, 4, 3],
      [3, 0, 0, 3]
    ]
  },
  {
    id: 6,
    name: '雨聲淅瀝',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [3, 2, 2, 3],
      [3, 3, 0, 3],
      [4, 3, 0, 4]
    ]
  },
  {
    id: 7,
    name: '左右布兵',
    desc: '1橫4豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [3, 3, 3, 3],
      [3, 3, 3, 3],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 8,
    name: '桃花园中',
    desc: '1橫4豎',
    layouts: [
      [4, 1, 1, 4],
      [3, 1, 1, 3],
      [3, 3, 3, 3],
      [4, 3, 3, 4],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 9,
    name: '一路進軍',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [3, 3, 3, 4],
      [3, 3, 3, 4],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 10,
    name: '一路順風',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [3, 2, 2, 3],
      [3, 4, 3, 3],
      [0, 4, 3, 0]
    ]
  },
  {
    id: 11,
    name: '圍而不殲',
    desc: '1橫4豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [3, 2, 2, 4],
      [3, 3, 3, 4],
      [0, 3, 3, 0]
    ]
  },
  {
    id: 12,
    name: '捷足先登',
    desc: '1橫4豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [0, 2, 2, 0],
      [3, 3, 3, 3],
      [3, 3, 3, 3]
    ]
  },
  {
    id: 13,
    name: '插翅難飛',
    desc: '2橫3豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [2, 2, 4, 4],
      [3, 2, 2, 3],
      [3, 0, 0, 3]
    ]
  },
  {
    id: 14,
    name: '守口如瓶1',
    desc: '2橫3豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [4, 3, 0, 4],
      [4, 3, 0, 4],
      [2, 2, 2, 2]
    ]
  },
  {
    id: 15,
    name: '守口如瓶2',
    desc: '2橫3豎',
    layouts: [
      [4, 1, 1, 4],
      [3, 1, 1, 3],
      [3, 3, 0, 3],
      [4, 3, 0, 4],
      [2, 2, 2, 2]
    ]
  },
  {
    id: 16,
    name: '双将挡路',
    desc: '2橫3豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [3, 2, 2, 3],
      [3, 2, 2, 3],
      [4, 0, 0, 4]
    ]
  },
  {
    id: 17,
    name: '横馬當關',
    desc: '2橫3豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [2, 2, 2, 2],
      [4, 3, 0, 4],
      [4, 3, 0, 4]
    ]
  },
  {
    id: 18,
    name: '層層設防1',
    desc: '3橫2豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [4, 2, 2, 4],
      [4, 2, 2, 4],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 19,
    name: '層層設防2',
    desc: '3橫2豎',
    layouts: [
      [4, 1, 1, 4],
      [3, 1, 1, 3],
      [3, 2, 2, 3],
      [4, 2, 2, 4],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 20,
    name: '兵擋將阻',
    desc: '3橫2豎',
    layouts: [
      [4, 1, 1, 3],
      [4, 1, 1, 3],
      [3, 2, 2, 4],
      [3, 2, 2, 4],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 21,
    name: '堵塞要道',
    desc: '3橫2豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [3, 3, 2, 2],
      [3, 3, 2, 2],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 22,
    name: '瓮中之鳖',
    desc: '3橫2豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [2, 2, 2, 2],
      [4, 2, 2, 4],
      [4, 0, 0, 4]
    ]
  },
  {
    id: 23,
    name: '层峦叠嶂',
    desc: '3橫2豎',
    layouts: [
      [3, 1, 1, 3],
      [3, 1, 1, 3],
      [4, 2, 2, 4],
      [2, 2, 2, 2],
      [4, 0, 0, 4]
    ]
  },
  {
    id: 24,
    name: '水泄不通',
    desc: '4橫1豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [4, 0, 0, 4]
    ]
  },
  {
    id: 25,
    name: '四路進兵',
    desc: '4橫1豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [3, 0, 2, 2],
      [3, 0, 2, 2],
      [2, 2, 2, 2]
    ]
  },
  {
    id: 26,
    name: '入地無門',
    desc: '4橫1豎',
    layouts: [
      [3, 1, 1, 4],
      [3, 1, 1, 4],
      [4, 2, 2, 4],
      [2, 2, 2, 2],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 27,
    name: '勇闖五關',
    desc: '5橫0豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [0, 2, 2, 0]
    ]
  },
  {
    id: 28,
    name: '四面楚歌',
    desc: '1橫4豎',
    layouts: [
      [3, 4, 4, 3],
      [3, 1, 1, 3],
      [4, 1, 1, 3],
      [3, 2, 2, 3],
      [3, 0, 0, 4]
    ]
  },
  {
    id: 29,
    name: '前呼后拥',
    desc: '5橫0豎',
    layouts: [
      [4, 4, 1, 1],
      [2, 2, 1, 1],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [0, 0, 4, 4]
    ]
  },
  {
    id: 30,
    name: '兵臨曹營',
    desc: '1橫4豎',
    layouts: [
      [4, 1, 1, 4],
      [4, 1, 1, 4],
      [3, 2, 2, 3],
      [3, 3, 3, 3],
      [0, 3, 3, 0]
    ]
  }
]
