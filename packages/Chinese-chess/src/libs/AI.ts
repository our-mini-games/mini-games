/**
 * 中国象棋 AI - 增强版
 * 特性：迭代加深、MVV-LVA 排序、棋子位置价值表、威胁检测
 */

import { Camp, getAllowPoints } from 'chinese-chess-service'
import type { ChessPieceValue } from '../definitions/index.js'

// 棋子基础价值
const PIECE_VALUES: Record<ChessPieceValue, number> = {
  11: 10000, // 帅
  12: 600, // 车
  13: 270, // 马
  14: 285, // 炮
  15: 120, // 相
  16: 120, // 仕
  17: 30, // 兵
  21: 10000, // 将
  22: 600, // 車
  23: 270, // 馬
  24: 285, // 砲
  25: 120, // 象
  26: 120, // 士
  27: 30 // 卒
}

// 棋子位置价值表 (红方视角, 索引 [x-1][y-1])
// 黑方使用镜像翻转
const POSITION_TABLES: Record<number, number[][]> = {
  // 帅/将 - 靠近九宫中心
  11: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 15, 1, 0, 0, 0, 0],
    [0, 0, 0, 5, 20, 5, 0, 0, 0, 0],
    [0, 0, 0, 10, 25, 10, 0, 0, 0, 0]
  ],
  // 车 - 中路和肋道
  12: [
    [6, 8, 8, 14, 16, 14, 8, 8, 6, 6],
    [6, 10, 10, 16, 18, 16, 10, 10, 6, 6],
    [6, 10, 12, 14, 16, 14, 12, 10, 6, 6],
    [8, 12, 14, 16, 16, 16, 14, 12, 8, 8],
    [10, 12, 14, 16, 18, 16, 14, 12, 10, 10],
    [10, 12, 14, 16, 18, 16, 14, 12, 10, 10],
    [8, 12, 14, 16, 16, 16, 14, 12, 8, 8],
    [6, 10, 12, 14, 16, 14, 12, 10, 6, 6],
    [4, 8, 8, 12, 14, 12, 8, 8, 4, 4],
    [2, 6, 6, 10, 12, 10, 6, 6, 2, 2]
  ],
  // 马 - 中心和前排
  13: [
    [0, 2, 4, 4, 0, 4, 4, 2, 0, 0],
    [2, 8, 12, 12, 10, 12, 12, 8, 2, 0],
    [4, 10, 14, 16, 14, 16, 14, 10, 4, 0],
    [6, 14, 18, 20, 20, 20, 18, 14, 6, 0],
    [8, 16, 20, 22, 22, 22, 20, 16, 8, 0],
    [8, 16, 20, 22, 22, 22, 20, 16, 8, 0],
    [6, 14, 18, 20, 20, 20, 18, 14, 6, 0],
    [4, 10, 14, 16, 14, 16, 14, 10, 4, 0],
    [2, 6, 10, 10, 10, 10, 10, 6, 2, 0],
    [0, 2, 4, 4, 0, 4, 4, 2, 0, 0]
  ],
  // 炮 - 中路有价值
  14: [
    [6, 6, 6, 8, 10, 8, 6, 6, 6, 6],
    [6, 8, 8, 10, 12, 10, 8, 8, 6, 6],
    [4, 6, 8, 10, 12, 10, 8, 6, 4, 4],
    [4, 6, 8, 10, 12, 10, 8, 6, 4, 4],
    [4, 6, 8, 10, 12, 10, 8, 6, 4, 4],
    [2, 4, 6, 8, 10, 8, 6, 4, 2, 2],
    [0, 2, 4, 6, 8, 6, 4, 2, 0, 0],
    [0, 0, 2, 4, 6, 4, 2, 0, 0, 0],
    [0, 0, 0, 2, 4, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0]
  ],
  // 相/象 - 不能过河，保护九宫
  15: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 10, 0, 0, 0, 10, 0, 0, 0],
    [0, 0, 0, 0, 15, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 8, 0],
    [0, 0, 0, 0, 15, 0, 0, 0, 0, 0],
    [0, 0, 10, 0, 0, 0, 10, 0, 0, 0]
  ],
  // 仕/士 - 保护将/帅
  16: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 10, 0, 10, 0, 0, 0, 0],
    [0, 0, 0, 0, 20, 0, 0, 0, 0, 0],
    [0, 0, 0, 10, 0, 10, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  // 兵/卒 - 过河后价值大增
  17: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [10, 10, 15, 20, 25, 20, 15, 10, 10, 0],
    [10, 15, 20, 25, 30, 25, 20, 15, 10, 0],
    [10, 15, 20, 25, 30, 25, 20, 15, 10, 0],
    [5, 10, 15, 20, 25, 20, 15, 10, 5, 0],
    [0, 0, 5, 10, 15, 10, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

export interface Move {
  from: { x: number, y: number }
  to: { x: number, y: number }
  piece: any
  captured?: any
}

export type AIDifficulty = 'easy' | 'medium' | 'hard'

// 各难度的时间限制（毫秒）
const TIME_LIMIT_MAP: Record<AIDifficulty, number> = {
  easy: 500,
  medium: 2000,
  hard: 4000
}

// 各难度的最大搜索深度
const MAX_DEPTH_MAP: Record<AIDifficulty, number> = {
  easy: 1,
  medium: 4,
  hard: 6
}

export class ChessAI {
  private readonly difficulty: AIDifficulty
  private readonly aiCamp: Camp
  private startTime = 0
  private timeout = false
  private nodeCount = 0

  constructor (difficulty: AIDifficulty = 'medium', aiCamp: Camp = Camp.BLACK) {
    this.difficulty = difficulty
    this.aiCamp = aiCamp
  }

  /**
   * 获取 AI 的最佳走法
   */
  getBestMove (gameContext: any): Move | null {
    const { chessPieces, currentCamp } = gameContext

    if (currentCamp !== this.aiCamp) {
      return null
    }

    const moves = this.getAllMoves(chessPieces, this.aiCamp, gameContext)

    if (moves.length === 0) {
      return null
    }

    if (moves.length === 1) {
      return moves[0]
    }

    // 简单难度：带小幅随机性的贪心
    if (this.difficulty === 'easy') {
      return this.getEasyMove(moves, chessPieces)
    }

    const timeLimit = TIME_LIMIT_MAP[this.difficulty]
    const maxDepth = MAX_DEPTH_MAP[this.difficulty]

    this.startTime = Date.now()
    this.timeout = false
    this.nodeCount = 0

    let bestMove: Move | null = null
    let bestScore = -Infinity

    // 迭代加深搜索
    for (let depth = 1; depth <= maxDepth; depth++) {
      const result = this.searchRoot(moves, chessPieces, depth, gameContext, timeLimit)

      if (result.move) {
        bestMove = result.move
        bestScore = result.score
      }

      if (this.timeout || Math.abs(bestScore) > 90000) {
        break
      }
    }

    if (!bestMove) {
      bestMove = moves[0]
    }

    const elapsed = Date.now() - this.startTime
    console.log(`AI [${this.difficulty}] ${this.nodeCount} nodes, ${elapsed}ms, score=${bestScore}`)

    return bestMove
  }

  /**
   * 简单难度走法：贪心 + 随机
   */
  private getEasyMove (moves: Move[], chessPieces: any[]): Move {
    // 评估每一步
    const scored = moves.map(move => {
      const captured = this.simulateMove(move, chessPieces)
      const score = this.evaluateBoard(chessPieces)
      this.undoMove(move, captured, chessPieces)
      return { move, score }
    })

    scored.sort((a, b) => b.score - a.score)

    // 从前3个最佳走法中随机选一个
    const topN = Math.min(3, scored.length)
    return scored[Math.floor(Math.random() * topN)].move
  }

  /**
   * 根节点搜索
   */
  private searchRoot (
    moves: Move[],
    chessPieces: any[],
    maxDepth: number,
    gameContext: any,
    timeLimit: number
  ): { move: Move | null, score: number } {
    let bestMove: Move | null = null
    let bestScore = -Infinity

    this.sortMoves(moves, chessPieces)

    for (const move of moves) {
      if (Date.now() - this.startTime > timeLimit) {
        this.timeout = true
        break
      }

      const captured = this.simulateMove(move, chessPieces)
      const score = this.minimax(
        chessPieces,
        maxDepth - 1,
        -Infinity,
        Infinity,
        false,
        gameContext,
        timeLimit
      )
      this.undoMove(move, captured, chessPieces)

      if (score > bestScore) {
        bestScore = score
        bestMove = move
      }
    }

    return { move: bestMove, score: bestScore }
  }

  /**
   * Minimax 算法带 Alpha-Beta 剪枝
   */
  private minimax (
    chessPieces: any[],
    depth: number,
    alpha: number,
    beta: number,
    isMaximizing: boolean,
    gameContext: any,
    timeLimit: number
  ): number {
    this.nodeCount++

    // 检查超时
    if (this.timeout || Date.now() - this.startTime > timeLimit) {
      this.timeout = true
      return this.evaluateBoard(chessPieces)
    }

    // 终止条件
    if (depth === 0) {
      return this.evaluateBoard(chessPieces)
    }

    const camp = isMaximizing ? this.aiCamp : (this.aiCamp === Camp.RED ? Camp.BLACK : Camp.RED)
    const moves = this.getAllMoves(chessPieces, camp, gameContext)

    if (moves.length === 0) {
      return isMaximizing ? -100000 : 100000
    }

    this.sortMoves(moves, chessPieces)

    if (isMaximizing) {
      let maxScore = -Infinity
      for (const move of moves) {
        if (this.timeout) break
        const captured = this.simulateMove(move, chessPieces)
        const score = this.minimax(chessPieces, depth - 1, alpha, beta, false, gameContext, timeLimit)
        this.undoMove(move, captured, chessPieces)

        maxScore = Math.max(maxScore, score)
        alpha = Math.max(alpha, score)
        if (beta <= alpha) {
          break
        }
      }
      return maxScore
    } else {
      let minScore = Infinity
      for (const move of moves) {
        if (this.timeout) break
        const captured = this.simulateMove(move, chessPieces)
        const score = this.minimax(chessPieces, depth - 1, alpha, beta, true, gameContext, timeLimit)
        this.undoMove(move, captured, chessPieces)

        minScore = Math.min(minScore, score)
        beta = Math.min(beta, score)
        if (beta <= alpha) {
          break
        }
      }
      return minScore
    }
  }

  /**
   * MVV-LVA 走法排序：吃子优先，高价值目标优先
   */
  private sortMoves (moves: Move[], _chessPieces: any[]): void {
    moves.sort((a, b) => {
      const aCapture = a.captured ? PIECE_VALUES[a.captured.value as ChessPieceValue] || 0 : 0
      const bCapture = b.captured ? PIECE_VALUES[b.captured.value as ChessPieceValue] || 0 : 0
      // 吃子 > 不吃子；吃高价值 > 吃低价值
      if (aCapture !== bCapture) return bCapture - aCapture
      // 都不吃子时，走子到中心位置优先
      const aCenter = Math.abs(5 - a.to.x) + Math.abs(5.5 - a.to.y)
      const bCenter = Math.abs(5 - b.to.x) + Math.abs(5.5 - b.to.y)
      return aCenter - bCenter
    })
  }

  /**
   * 评估棋盘分数（AI 视角为正）
   */
  private evaluateBoard (chessPieces: any[]): number {
    let score = 0

    for (const piece of chessPieces) {
      const pieceValue = PIECE_VALUES[piece.value as ChessPieceValue] || 0
      const positionBonus = this.getPositionValue(piece)
      const totalValue = pieceValue + positionBonus

      if (piece.camp === this.aiCamp) {
        score += totalValue
      } else {
        score -= totalValue
      }
    }

    // 走子方加成（先手优势）
    score += 5

    return score
  }

  /**
   * 获取棋子位置价值
   */
  private getPositionValue (piece: any): number {
    const { x, y } = piece.coord
    // 兵/卒的价值随位置变化很大，使用位置表
    if (piece.value % 10 === 7) {
      const table = POSITION_TABLES[17]
      if (piece.camp === Camp.RED) {
        return table[x - 1]?.[y - 1] || 0
      } else {
        // 黑方翻转
        return table[9 - x]?.[10 - y] || 0
      }
    }

    // 其他棋子使用位置表
    const tableBase = piece.value % 100
    const table = POSITION_TABLES[tableBase] || POSITION_TABLES[piece.value]
    if (!table) return 0

    if (piece.camp === Camp.RED) {
      return table[x - 1]?.[y - 1] || 0
    } else {
      return table[9 - x]?.[10 - y] || 0
    }
  }

  /**
   * 获取指定阵营的所有合法走法
   */
  private getAllMoves (chessPieces: any[], camp: Camp, _gameContext: any): Move[] {
    const moves: Move[] = []
    // chinese-chess-service 中被吃的棋子会从数组中移除，不需要检查 isActive
    const pieces = chessPieces.filter(p => p.camp === camp)

    for (const piece of pieces) {
      // 使用 chinese-chess-service 的 getAllowPoints 获取合法落点
      const allowPoints = getAllowPoints(piece, chessPieces)

      for (const point of allowPoints) {
        const targetPiece = chessPieces.find(
          p => p.coord.x === point.x && p.coord.y === point.y
        )

        // 不能吃自己的棋子
        if (targetPiece && targetPiece.camp === camp) {
          continue
        }

        moves.push({
          from: { x: piece.coord.x, y: piece.coord.y },
          to: { x: point.x, y: point.y },
          piece,
          captured: targetPiece
        })
      }
    }

    return moves
  }

  /**
   * 模拟走棋
   * @returns 被吃的棋子及其在数组中的索引
   */
  private simulateMove (move: Move, chessPieces: any[]): { captured: any, index: number } {
    const captured = move.captured
    let capturedIndex = -1

    // 移动棋子
    move.piece.coord.x = move.to.x
    move.piece.coord.y = move.to.y

    // 从数组中移除被吃的棋子（与 chinese-chess-service 行为一致）
    if (captured) {
      capturedIndex = chessPieces.indexOf(captured)
      if (capturedIndex !== -1) {
        chessPieces.splice(capturedIndex, 1)
      }
    }

    return { captured, index: capturedIndex }
  }

  /**
   * 撤销走棋
   */
  private undoMove (move: Move, capturedInfo: { captured: any, index: number }, chessPieces: any[]): void {
    // 恢复棋子位置
    move.piece.coord.x = move.from.x
    move.piece.coord.y = move.from.y

    // 恢复被吃的棋子到数组中
    if (capturedInfo.captured && capturedInfo.index !== -1) {
      chessPieces.splice(capturedInfo.index, 0, capturedInfo.captured)
    }
  }
}
