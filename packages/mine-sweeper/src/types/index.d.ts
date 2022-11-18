type BoxType = number | 'mine'
export type BoxStatus = 'default' | 'active' | 'open' | 'doubtful' | 'marked'

export interface Box {
  x: number
  y: number
  type: BoxType
  status: BoxStatus
}

export interface CustomSetting {
  row: number
  column: number
  totalOfMines: number
}

export interface LevelInfo extends CustomSetting {
  level: 0 | 1 | 2 | 3
  text: string
}

export type GameStatus = 'finished' | 'playing' | 'defeat' | 'complete'

export type LeftButtonBehavious = Extract<BoxStatus, 'open' | 'doubtful' | 'marked'>
