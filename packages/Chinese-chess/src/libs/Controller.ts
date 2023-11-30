/**
 * 游戏主体控制
 */

import { Camp, ChessPieceValue, GameStatus } from '../definitions'
import { ChessPiece, createChessPiece } from './ChessPiece'
import { createGameInterface } from './GameInterface'
import { Point } from './Point'

export interface MovePathCollection {
  value: ChessPieceValue
  path: Point[]
}

export interface Context {
  status: GameStatus
  currentCamp: Camp
  /** 动画计时器 */
  counter: number
  /** 存活的棋子 */
  chessPieces: ChessPiece[]
  /** 收集移动路径，生成棋谱 */
  movePath: MovePathCollection[]
  /** 当前活跃棋子，当前阵营用户选中的已方棋子 */
  activePiece: null | ChessPiece
}

const initChessPieces = (): ChessPiece[] => {
  return ([
    [11],
    [12, 12],
    [13, 13],
    [14, 14],
    [15, 15],
    [16, 16],
    [17, 17, 17, 17, 17],
    [21],
    [22, 22],
    [23, 23],
    [24, 24],
    [25, 25],
    [26, 26],
    [27, 27, 27, 27, 27]
  ] as ChessPieceValue[][]).reduce((list: ChessPiece[], item) => {
    return list.concat(item.map((value, index) => {
      return createChessPiece(value, index)
    }))
  }, [])
}

const createContext = (): Context => {
  return {
    status: GameStatus.Init,
    currentCamp: Camp.RED,
    counter: 0,
    chessPieces: initChessPieces(),
    movePath: [],
    activePiece: null
  }
}

export const createController = (): any => {
  let context = createContext()
  let _el: Element

  const gameInterface = createGameInterface()

  const getPieceByPoint = (point: Point): ChessPiece | undefined => {
    return context.chessPieces.find(({ coord }) => coord.x === point.x && coord.y === point.y)
  }

  const setActive = (piece?: ChessPiece): void => {
    if (context.activePiece) {
      context.activePiece.setScale(1)
    }

    if (!piece) {
      context.activePiece = null
      return
    }
    if (piece.camp === context.currentCamp) {
      context.activePiece = piece
    } else {
      context.activePiece = null
    }
  }

  const handleClick = (e: MouseEvent): void => {
    const point = gameInterface.getPointer(e)

    if (context.activePiece) {
      // @todo 移动己方棋子
      setActive()
    } else {
      // 选中已方棋子
      const piece = getPieceByPoint(point)

      setActive(piece)
    }
  }

  let reqId: number
  let lastTime = Date.now()

  function run (): void {
    reqId = requestAnimationFrame(run)
    context.counter += Math.PI / 180

    if (context.counter >= 2 * Math.PI) {
      context.counter = 0
    }

    const currTime = Date.now()
    if (currTime - lastTime > 500 && context.activePiece) {
      context.activePiece.setScale(context.activePiece.scale === 1
        ? 0.9
        : 1
      )
      lastTime = currTime

      console.log(context.activePiece.scale)
    }

    gameInterface.clearMain()

    gameInterface.drawChessPieces(context.chessPieces)
    const lastPath = context.movePath.at(-1)

    if (lastPath) {
      gameInterface.drawCurrentStop(lastPath.path.at(-1)!, context.counter)
      gameInterface.drawLastStop(lastPath.path[0])
      gameInterface.drawMovePath(lastPath.path)
    }
  }

  function pause (): void {
    cancelAnimationFrame(reqId)
  }

  const initGame = (el: Element): void => {
    context = createContext()
    _el = el
    gameInterface.mount(el)

    gameInterface.mainCanvas.addEventListener('click', handleClick)
  }

  const destroy = (el?: Element): void => {
    gameInterface.destroy(el ?? _el)
  }

  return {
    initGame,
    destroy,
    run,
    pause
  }
}
