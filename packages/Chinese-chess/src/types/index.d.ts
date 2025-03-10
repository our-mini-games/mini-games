import { Camp, GameStatus } from '@/definitions/index.js'
import { ChessPiece } from '@/libs/ChessPiece.js'

export type VoidFunction = () => void

export interface User {
  id: string
  nickname: string
  socketId: string
  isReady?: boolean
}

export interface Room {
  id: string
  name: string
  users: User[]
  limit: number
  status: GameStatus
}

export interface ChessManual {
  id: string
  camp: Camp
  value: string
}

export type Players = Record<Camp, User> | null

export type GameAnimationType = 'Check' | 'CheckMate' | 'Win'

export interface GameAnimation {
  type: GameAnimationType
  camp: Camp
}

export interface GameContext {
  status: GameStatus
  players: Players
  firstCamp: Camp
  // waiting: number
  currentCamp: Camp
  manual: ChessManual[]
  chessPieces: ChessPiece[]

  /** 动画计时器 */
  counter: number
  /** 收集移动路径，生成棋谱 */
  movePath: MovePathCollection[]
  /** 当前活跃棋子，当前阵营用户选中的已方棋子 */
  activePiece: null | ChessPiece
  /** 当前活跃棋子的可移动坐标 */
  allowPoints: Point[]

  animations: GameAnimation[]
}

export interface ChatInfo {
  content: string
  userId: string
  nickname: string
  roomId: string
  createdTime: number
}
