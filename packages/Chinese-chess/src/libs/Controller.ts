/**
 * 游戏主体控制
 */

import { Camp, ChessPieceValue, GameStatus } from '../definitions'
import { ChessPiece, createChessPiece } from './ChessPiece'
import { createGameInterface } from './GameInterface'
import { changeXCoordMove, changeOtherCoordMove } from '../libs/ChessManual'
import cloneDeep from 'lodash.clonedeep'

import { Point } from './Point'

export interface MovePathCollection {
  value: ChessPieceValue
  path: Point[]
}

interface ChessManual {
  oldCoord: {
    x: number
    y: number
  }
  newCoord: {
    x: number
    y: number
  }
  text: string
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
  activePiece: null | ChessPiece
  canMoveList: Array<[number, number]>
  chessManualList: ChessManual[]
}

export interface Chat {
  nickname: string
  chat: string
}

export interface ControllerOptions {
  oMain: Element
  oManual: Element
  oChatList: Element
  oChatInput: HTMLInputElement
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
    chessManualList: []
  }
}

export const createController = ({
  oMain,
  oManual,
  oChatList,
  oChatInput
}: ControllerOptions): any => {
  let context = createContext()
  const chatList: Chat[] = []

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

  // 计算出所有能吃子的坐标
  const computedAllEatCoord = (chessPieces: ChessPiece[], currentCamp: Camp): Array<[number, number]> => {
    // 筛选出所有子力
    const friendlyPieceList: ChessPiece[] = chessPieces.filter(item => item.camp === currentCamp)
    // 然后计算出所有的可吃子的坐标
    const allEatCoodr: Array<[number, number]> = friendlyPieceList.reduce((pre: Array<[number, number]>, item) => {
      const { PieceObject, coord, camp } = item
      const piece = new PieceObject(coord, chessPieces, camp, currentCamp)
      const canEatList: Array<[number, number]> = piece.computedCanEat()
      pre.push(...canEatList)
      return pre
    }, [])
    return allEatCoodr
  }

  // 记棋谱
  const recordChessManual = (piece: ChessPiece, x: number, y: number): void => {
    const moveTrace: ChessManual = {
      oldCoord: {
        x: piece.coord.x,
        y: piece.coord.y
      },
      newCoord: {
        x,
        y
      },
      text: ''
    }
    const xCoordMoveList = ['馬', '相', '象', '仕', '士']
    if (xCoordMoveList.includes(piece.name)) {
      moveTrace.text = changeXCoordMove(context.currentCamp, piece, x, y, context.chessPieces)
    } else {
      moveTrace.text = changeOtherCoordMove(context.currentCamp, piece, x, y)
    }
    context.chessManualList.push(moveTrace)
  }

  // 是否送将
  const isDeliverGeneralInChess = (x: number, y: number, camp: Camp): boolean => {
    let res: boolean = false
    const newChessPiece: ChessPiece[] = cloneDeep(context.chessPieces)
    const newActivePiece = newChessPiece.find(item => item.coord.x === context.activePiece?.coord.x && item.coord.y === context.activePiece.coord.y)
    // 模拟它走一步
    newActivePiece?.move({
      x,
      y
    })
    res = isGeneralInChess(newChessPiece, camp)
    return res
  }

  // 是否将军
  const isGeneralInChess = (chessPieces: ChessPiece[], currentCamp: Camp): boolean => {
    let res: boolean = false
    // 判断将/帅在不在敌方子力吃的范围内就可以了
    const allEatCoodr: Array<[number, number]> = computedAllEatCoord(chessPieces, currentCamp)
    // 看帅/将在不在吃子范围内
    const boss = chessPieces.find(item => item.name === (currentCamp === Camp.RED ? '將' : '帥'))
    res = Boolean(allEatCoodr.find(item => item[0] === boss?.coord.x && item[1] === boss.coord.y))
    return res
  }
  // 是否没有应将
  const isNotRespondGeneralInChess = (x: number, y: number): boolean => {
    let res = false
    // 如果他之前都没有将过你的军 那么就不需要应将
    const camp = context.currentCamp === Camp.RED ? Camp.BLACK : Camp.RED
    if (isGeneralInChess(context.chessPieces, camp)) {
      // 如果将过 那么就模拟走这一步 他还是不是再能将你的军
      //  也就是说需要判断是不是送将
      res = isDeliverGeneralInChess(x, y, camp)
    }
    return res
  }

  // 是否绝杀
  const isGameOver = (): boolean => {
    // 是否绝杀
    /*
      绝杀的思路
        如果敌方移动了 并且这一步移动是送将 也就是移动过后我方依旧是将军 那么这一步棋就是不能走的
        那么如果敌方每一个可以移动的点位都移动 而且我方都是将军 那么就是绝杀无解了
    */
    // 计算出敌方所有棋子可以走子的点位 然后挨个走子
    const enemyPieceList: ChessPiece[] = context.chessPieces.filter(item => item.camp !== context.currentCamp)
    for (let i = 0; i < enemyPieceList.length; i++) {
      // 将棋盘复位
      const newChessPiece: ChessPiece[] = cloneDeep(context.chessPieces)
      const pieceItem: ChessPiece = enemyPieceList[i]
      const { PieceObject, coord, camp } = pieceItem
      const piece = new PieceObject(coord, newChessPiece, camp, camp)
      // 获取每一个可以走动的坐标
      const allCanMoveCoord: Array<[number, number]> = piece.allCanMove()
      // 模拟每一个棋子的走动 然后判断是否是送将 如果有一个移动了 不是送将 那么就是可以的
      const activePiece = newChessPiece.find(item => item.coord.x === coord.x && item.coord.y === coord.y)
      // 如果说有一个棋子走动了之后对方不能将军 那么就不是绝杀了
      const inGeneralInChess: boolean = allCanMoveCoord.filter(item => {
        // 移动到了这个位置 看看还是不是将军
        activePiece?.move({
          x: item[0],
          y: item[1]
        })
        return !isGeneralInChess(newChessPiece, camp === Camp.RED ? Camp.BLACK : Camp.RED)
      }).length > 0
      if (inGeneralInChess) {
        return false
      }
    }
    return true
  }

  // 移动
  const move = (activePiece: ChessPiece, x: number, y: number, canEatPiece?: boolean, currentPiece?: ChessPiece): void => {
    // 判断是否没有应将
    if (isNotRespondGeneralInChess(x, y)) {
      console.log('正在被将军请应将')
      return
    }
    // 判断是否送将
    if (isDeliverGeneralInChess(x, y, context.currentCamp === Camp.RED ? Camp.BLACK : Camp.RED)) {
      console.log('不能送将,请走其他棋')
      return
    }
    // 记棋谱
    recordChessManual(activePiece, x, y)
    // 走子
    activePiece.move({ x, y })
    // 判断是否吃子
    if (canEatPiece && currentPiece) {
      context.chessPieces = eatPiece(currentPiece, context.chessPieces)
    }
    // 判断是否将军
    if (isGeneralInChess(context.chessPieces, context.currentCamp)) {
      console.log('将军')
      if (isGameOver()) {
        alert(`绝杀无解${context.currentCamp === Camp.RED ? '红' : '黑'}胜`)
        console.log('绝杀无解')
      }
    }
    // 判断是否绝杀
    context.activePiece = null
    context.currentCamp = context.currentCamp === Camp.RED ? Camp.BLACK : Camp.RED
  }

  const handleClick = (e: MouseEvent): void => {
    const point = gameInterface.getPointer(e)
    const currentPiece = getPieceByPoint(point)
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
        move(context.activePiece, point.x, point.y, canEatPiece(context.activePiece, context.chessPieces, point.x, point.y), currentPiece)
        return
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

  function handleInputMouseDown (e: KeyboardEvent): void {
    const { key } = e
    const target = e.target as HTMLInputElement
    const { value } = target

    if (key === 'Enter' && value) {
      console.log(value)
      chatList.push({
        nickname: 'Detail',
        chat: value
      })
      target.value = ''
      renderChatList(chatList)
    }
  }

  function renderChatList (chatList: Chat[]): void {
    oChatList.innerHTML = chatList.reduce((text, item) => {
      return text + `
        <li class="chat-item ${Math.random() > 0.5 ? 'self' : ''}">
          <div class="nickname">${item.nickname}</div>
          <div class="value">${item.chat}</div>
        </li>
      `
    }, '')

    oChatList.scroll(0, 100000)
  }

  // @todo
  function renderManual (manualList: any[] = []): void {
    oManual.innerHTML = manualList.reduce((text: string, item) => {
      return text + `
        <li class="manual-item ${item.camp === Camp.RED ? 'red' : 'black'}">
          ${item.value as string}
        </li>
      `
    }, '')
    oManual.scroll(0, 100000)
  }

  const initGame = (): void => {
    context = createContext()
    gameInterface.mount(oMain)

    gameInterface.mainCanvas.addEventListener('click', handleClick)
    oChatInput.addEventListener('keydown', handleInputMouseDown)
    renderManual([
      { camp: Camp.RED, value: '炮二平五' },
      { camp: Camp.BLACK, value: '馬二進三' },
      { camp: Camp.RED, value: '馬二進三' },
      { camp: Camp.BLACK, value: '將五進一' },
      { camp: Camp.RED, value: '馬三退五' }
    ])
  }

  const destroy = (): void => {
    gameInterface.destroy(oMain)
  }

  function isCurrentExecution (camp: Camp): boolean {
    return camp === context.currentCamp
  }

  function computedCanMove (activePiece: ChessPiece, pieces: ChessPiece[]): Array<[number, number]> {
    const { PieceObject, coord, camp } = activePiece
    const piece = new PieceObject(coord, pieces, camp, context.currentCamp)
    return piece.computedCanMove()
  }

  // 判断是否可以吃子
  function canEatPiece (activePiece: ChessPiece, pieces: ChessPiece[], x: number, y: number): boolean {
    const { PieceObject, coord, camp } = activePiece
    const piece = new PieceObject(coord, pieces, camp, context.currentCamp)
    const canEatList: Array<[number, number]> = piece.computedCanEat()
    // 必须要在能吃子的范围内才能吃
    return Boolean(canEatList.find(item => item[0] === x && item[1] === y))
  }
  function eatPiece (currentPiece: ChessPiece, pieces: ChessPiece[]): ChessPiece[] {
    const { coord } = currentPiece
    // 找到当前位置的敌方阵营棋子
    const index = pieces.findIndex(item => item.coord.x === coord.x && item.coord.y === coord.y && item.camp !== context.currentCamp)
    if (pieces[index].name === '帥') {
      alert('红方败')
    }

    if (pieces[index].name === '將') {
      alert('黑方败')
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
