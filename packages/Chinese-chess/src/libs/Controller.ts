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
  /** 当前走子的阵营(默认红棋先行) */
  currentCamp: Camp
  /** 动画计时器 */
  counter: number
  /** 存活的棋子 */
  chessPieces: ChessPiece[]
  /** 收集移动路径，生成棋谱 */
  movePath: MovePathCollection[]
  /** 当前活跃棋子，当前阵营用户选中的已方棋子 */
  activePiece: null | ChessPiece,
  canMoveList: Array<[number, number]>
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
    activePiece: null,
    canMoveList: [],
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
      // 只计算可以移动到的空位置
      context.canMoveList = computedCanMove(context.activePiece, context.chessPieces)
    }
  }

  function move(activePiece: ChessPiece, x: number, y: number) {
    // 记棋谱
    // recordChessManual(piece, x, y)
    activePiece.move({ x, y })
    context.activePiece = null
    context.currentCamp = context.currentCamp === Camp.RED ? Camp.BLACK : Camp.RED
  }

  const handleClick = (e: MouseEvent): void => {
    const point = gameInterface.getPointer(e)
    let currentPiece = getPieceByPoint(point)
    // 点击上去的位置有没有棋子
    if (context.activePiece) {
      // 判断一下之前有没有点击过棋子
      if (currentPiece && isCurrentExecution(currentPiece.camp)) {
        // 也就是说点到了同阵营的棋子 
        // 如果还是原来的棋子就不变 如果点了新棋子那么就给新棋子active
        if (currentPiece.coord.x === context.activePiece.coord.x && currentPiece.coord.y === context.activePiece.coord.y) return
        context.activePiece = currentPiece
        context.canMoveList = computedCanMove(context.activePiece, context.chessPieces)
        return
      }
      // 是否吃子 因为上面已经判断过进入下一步是自己方
      if (currentPiece) {
        // 那么走吃子的逻辑
        if (canEatPiece(context.activePiece, context.chessPieces, point.x, point.y)) {
          context.chessPieces = eatPiece(currentPiece, context.chessPieces)
          move(context.activePiece, point.x, point.y)
          return
        }
      }
      // 是否移动到可以移动的地方
      if (context.canMoveList.find(item => item[0] === point.x && item[1] === point.y)) {
        move(context.activePiece, point.x, point.y)
      }
    } else {
      // 选中已方棋子
      const piece = getPieceByPoint(point)
      setActive(piece)
    }
  }

  let reqId: number
  let lastTime = Date.now()

  function run(): void {
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

  function pause(): void {
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

  function isCurrentExecution(camp: Camp): boolean {
    return camp === context.currentCamp
  }

  function computedCanMove(activePiece: ChessPiece, pieces: Array<ChessPiece>): Array<[number, number]> {
    let { PieceObject, coord, camp } = activePiece
    let piece = new PieceObject(coord, pieces, camp, context.currentCamp)
    return piece.computedCanMove()
  }

  // 判断是否可以吃子
  function canEatPiece(activePiece: ChessPiece, pieces: Array<ChessPiece>, x: number, y: number): boolean {
    let { PieceObject, coord, camp } = activePiece
    let piece = new PieceObject(coord, pieces, camp, context.currentCamp)
    let canEatList: Array<[number, number]> = piece.computedCanEat()
    // 必须要在能吃子的范围内才能吃
    return Boolean(canEatList.find(item => item[0] === x && item[1] === y))
  }

  function eatPiece(currentPiece: ChessPiece, pieces: Array<ChessPiece>): Array<ChessPiece> {
    let { coord } = currentPiece
    let index = pieces.findIndex(item => item.coord.x === coord.x && item.coord.y === coord.y)
    if (pieces[index].name === "帥") {
      alert("红方败")
    }

    if (pieces[index].name === "將") {
      alert("黑方败")
    }
    pieces.splice(index, 1)
    
    return pieces
  }

  return {
    initGame,
    destroy,
    run,
    pause
  }
}
