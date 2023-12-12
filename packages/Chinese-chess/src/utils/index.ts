import { ChessPiece, createChessPiece } from '@/libs/ChessPiece'
import { Point } from '../libs/Point'
import { Camp, ChessPieceValue, defaultMoveList } from '@/definitions'

type CurryFunction<T> = (arg: T) => T | CurryFunction<T>
type ComposeFunction = <T>(...funcs: Array<(arg: T) => T>) => (arg: T) => T

interface NearestPieces {
  top?: ChessPiece
  right?: ChessPiece
  bottom?: ChessPiece
  left?: ChessPiece
}

export const inRange = (val: number, [min, max]: [number, number]): boolean =>
  val >= min && val <= max

export const getDiffVal = (v1: number, v2: number): number =>
  Math.abs(v1 - v2)

export const isEqual = (v1: unknown, v2: unknown): boolean => v1 === v2

export const compose: ComposeFunction = (...funcs) => (arg) => {
  return funcs.reduceRight((acc, func) => func(acc), arg)
}

export const toCurry = <T>(fn: (...args: T[]) => T, arity = fn.length): (arg: T) => T | CurryFunction<T> => {
  return function curried (...args: T[]): T | CurryFunction<T> {
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return (...nextArgs: T[]) => curried(...args.concat(nextArgs))
    }
  }
}

/**
 * 求圆外某一点做圆切线的切点坐标
 * @param r - 圆的半径
 * @param C - 圆心坐标
 * @param P - 圆外的某个点
 */
export const getTangentPoint = (r: number, C: Point, P: Point): [Point, Point] => {
  // 点到圆心的距离
  const d = Math.sqrt(Math.pow(C.x - P.x, 2) + Math.pow(C.y - P.y, 2))
  const theta = Math.acos(r / d)
  const vc1c2 = { x: P.x - C.x, y: -P.y + C.y } // 屏幕坐标系与笛卡尔坐标系是y轴是反着的

  let radC1C2 = Math.acos(vc1c2.x / Math.sqrt(Math.pow(vc1c2.x, 2) + Math.pow(vc1c2.y, 2)))

  if (P.y < C.y) {
    return [
      { x: C.x + Math.cos(theta + radC1C2) * r, y: C.y - Math.sin(theta + radC1C2) * r },
      { x: C.x + Math.cos(theta - radC1C2) * r, y: C.y + Math.sin(theta - radC1C2) * r }
    ]
  }

  radC1C2 = Math.PI - radC1C2

  return [
    { x: C.x + Math.cos(Math.PI - theta - radC1C2) * r, y: C.y + Math.sin(Math.PI - theta - radC1C2) * r },
    { x: C.x + Math.cos(Math.PI - (theta - radC1C2)) * r, y: C.y - Math.sin(Math.PI - (theta - radC1C2)) * r }
  ]
}

export const isSameCoord = ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point): boolean => x1 === x2 && y1 === y2

export const switchCamp = (camp: Camp): Camp => {
  return camp === Camp.BLACK ? Camp.RED : Camp.BLACK
}

export const isMovable = ({ x, y }: Point, allowPoints: Point[]): boolean => {
  return allowPoints.some(p => p.x === x && p.y === y)
}

export const initChessPieces = (): ChessPiece[] => {
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

export const movePiece = (piece: ChessPiece, point: Point, chessPieces?: ChessPiece[]): void => {
  // 棋子在服务器走一遭后就丢失了引用
  if (chessPieces?.length) {
    chessPieces.some(item => {
      if (isSameCoord(piece.coord, item.coord)) {
        item.coord = point
        return true
      }

      return false
    })
  } else {
    piece.coord = point
  }
}

const getTheNearestPiece = (piece: ChessPiece, pieces: ChessPiece[]): NearestPieces => {
  const n: NearestPieces = {}

  for (let x = piece.coord.x - 1; x >= 1; x--) {
    n.left = pieces.find(p => p.coord.x === x && p.coord.y === piece.coord.y)
    if (n.left) {
      break
    }
  }
  for (let x = piece.coord.x + 1; x <= 9; x++) {
    n.right = pieces.find(p => p.coord.x === x && p.coord.y === piece.coord.y)
    if (n.right) {
      break
    }
  }

  for (let y = piece.coord.y - 1; y >= 1; y--) {
    n.top = pieces.find(p => p.coord.y === y && p.coord.x === piece.coord.x)
    if (n.top) {
      break
    }
  }
  for (let y = piece.coord.y + 1; y <= 10; y++) {
    n.bottom = pieces.find(p => p.coord.y === y && p.coord.x === piece.coord.x)
    if (n.bottom) {
      break
    }
  }

  return n
}

export const getMoveList = (piece: ChessPiece, pieces: ChessPiece[]): Point[] => {
  let points: Point[] = defaultMoveList[piece.value](piece.coord)

  const { camp, value, coord } = piece

  let n: NearestPieces

  // 过滤无效坐标
  points = points.filter(({ x, y }) => !(x < 1 || x > 9 || y < 1 || y > 10))

  switch (value) {
    case 12:
    case 22:
      // 车
      n = getTheNearestPiece(piece, pieces)

      // 过滤被阻碍的位置
      points = points.filter(({ x, y }) => {
        return x >= (n.left?.coord?.x || 1) &&
          x <= (n.right?.coord?.x || 9) &&
          y >= (n.top?.coord?.y || 1) &&
          y <= (n.bottom?.coord?.y || 10)
      })
      break

    case 14:
    case 24:
      // 炮
      // 找出最近的炮台
      n = getTheNearestPiece(piece, pieces)
      // 基于炮台，找出最近可击打的棋子
      // eslint-disable-next-line no-case-declarations
      const targets: ChessPiece[] = []
      // eslint-disable-next-line no-case-declarations
      let targetN: NearestPieces
      if (n.left) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        targetN = getTheNearestPiece(n.left, pieces.filter(p => p.coord.y === coord.y && p.coord.x < n.left!.coord.x))
        if (targetN?.left && targetN.left.camp !== camp) {
          targets.push(targetN.left)
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        points = points.filter(({ x }) => x > n.left!.coord.x)
      }
      if (n.right) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        targetN = getTheNearestPiece(n.right, pieces.filter(p => p.coord.y === coord.y && p.coord.x > n.right!.coord.x))
        if (targetN?.right && targetN.right.camp !== camp) {
          targets.push(targetN.right)
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        points = points.filter(({ x }) => x < n.right!.coord.x)
      }
      if (n.top) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        targetN = getTheNearestPiece(n.top, pieces.filter(p => p.coord.x === coord.x && p.coord.y < n.top!.coord.y))
        if (targetN?.top && targetN.top.camp !== camp) {
          targets.push(targetN.top)
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        points = points.filter(({ y }) => y > n.top!.coord.y)
      }
      if (n.bottom) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        targetN = getTheNearestPiece(n.bottom, pieces.filter(p => p.coord.x === coord.x && p.coord.y > n.bottom!.coord.y))
        if (targetN?.bottom && targetN.bottom.camp !== camp) {
          targets.push(targetN.bottom)
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        points = points.filter(({ y }) => y < n.bottom!.coord.y)
      }

      // 再把可击杀目标加上
      points = [
        ...points,
        ...targets.map(({ coord }) => coord)
      ]

      break

    case 13:
    case 23:
      // 马脚
      points = points.filter(({ x, y }) => {
        if (x - coord.x === 2) {
          // 横向：目标点在右上或右下
          return !pieces.find(p => p.coord.x === coord.x + 1 && p.coord.y === coord.y)
        } else if (x - coord.x === -2) {
          // 横向：目标点在左上或左下
          return !pieces.find(p => p.coord.x === coord.x - 1 && p.coord.y === coord.y)
        } else if (y - coord.y === 2) {
          // 纵向：目标点在右上或右下
          return !pieces.find(p => p.coord.x === coord.x && p.coord.y === coord.y + 1)
        } else if (y - coord.y === -2) {
          // 纵向：目标点在左上或左下
          return !pieces.find(p => p.coord.x === coord.x && p.coord.y === coord.y - 1)
        }

        return true
      })
      break

    case 15:
    case 25:
      // 象
      points = points.filter(({ x, y }) => {
        if (coord.x < x) {
          if (coord.y < y) {
            // 目标点在右下
            return !pieces.find(p => p.coord.x === coord.x + 1 && p.coord.y === coord.y + 1)
          }
          // 目标点在右上
          return !pieces.find(p => p.coord.x === coord.x + 1 && p.coord.y === coord.y - 1)
        } else {
          if (coord.y < y) {
            // 目标点在左下
            return !pieces.find(p => p.coord.x === coord.x - 1 && p.coord.y === coord.y + 1)
          }
          // 目标点在左上
          return !pieces.find(p => p.coord.x === coord.x - 1 && p.coord.y === coord.y - 1)
        }
      })
      break

    default:
      break
  }

  // 过滤已方阵营棋子所在的点
  points = points.filter(({ x, y }) => {
    return pieces.find(({ coord }) => coord.x === x && coord.y === y)?.camp !== camp
  })

  return points
}

export const getPieceByPoint = (point: Point, chessPieces?: ChessPiece[]): ChessPiece | undefined => {
  return (chessPieces ?? []).find(({ coord }) => coord.x === point.x && coord.y === point.y)
}

/**
 * 是否会死
 *
 * 1. 是否对将
 * 2. 上下左右四个方位是否有对方的兵或卒
 * 3. 上下左右四个方位是否有对方的车
 * 4. 上下左右四个方位是否存在对方炮，并且有炮台
 * 5. 周边是否存在对方未被卡角的马
 *
 * @returns 威胁列表
 */
export const isKingWillDie = (king: ChessPiece, pieces: ChessPiece[]): ChessPiece[] => {
  const menaceList: ChessPiece[] = []

  const { coord, camp } = king

  // 取出离最近的棋子
  const n = getTheNearestPiece(king, pieces)

  Object.entries(n).forEach(([key, value]) => {
    if (value) {
      if (value.camp !== camp) {
        if (getDiffVal(value.coord.y, coord.y) === 1 || getDiffVal(value.coord.x, coord.x) === 1) {
          // 兵/卒/车在旁边
          if ((camp === Camp.RED ? [22, 27] : [12, 17]).includes(value.value)) {
            menaceList.push(value)
          }
        } else {
          // 车在同轴
          if ((camp === Camp.RED ? [22] : [12]).includes(value.value)) {
            menaceList.push(value)
          }

          // 对将
          if ((camp === Camp.RED ? [21] : [11]).includes(value.value)) {
            menaceList.push(value)
          }
        }
      }

      // 隔着炮台是否还有将
      const newN = getTheNearestPiece(value, pieces)
      const segregativePiece = newN[key as keyof NearestPieces]

      if (segregativePiece) {
        if ((segregativePiece.value === (camp === Camp.RED ? 24 : 14)) && segregativePiece.camp !== camp) {
          menaceList.push(segregativePiece)
        }
      }
    }
  })

  // 马
  menaceList.push(...[
    new Point(coord.x + 2, coord.y + 1),
    new Point(coord.x + 2, coord.y - 1),
    new Point(coord.x - 2, coord.y + 1),
    new Point(coord.x - 2, coord.y - 1),
    new Point(coord.x + 1, coord.y + 2),
    new Point(coord.x + 1, coord.y - 2),
    new Point(coord.x - 1, coord.y + 2),
    new Point(coord.x - 1, coord.y - 2)
  ]
    .filter(({ x, y }) => (
      x >= 1 &&
      x <= 9 &&
      y >= 1 &&
      y <= 10
    ))
    .map(point => getPieceByPoint(point, pieces))
    .filter(p => p?.value === (camp === Camp.RED ? 23 : 13)) as ChessPiece[]
  )

  return menaceList
}

/**
 * 模拟移动棋子，检测当前移动会不会造成已方死亡、或者给对方将军
 * @returns 'not-allow' | 'check' | 'allow'
 * - 'not-allow': 不允许移动，当前操作会造成已方死亡
 * - 'check': 允许移动，当前操作会给对方将军
 * - 'allow': 允许移动
 */
export const mockMove = (piece: ChessPiece, targetPoint: Point, pieces: ChessPiece[]): 'not-allow' | 'check' | 'allow' => {
  const newPieces = (getPieceByPoint(targetPoint, pieces)
    ? pieces.map(p => {
      // 模拟移动
      if (p.coord.x === targetPoint.x && p.coord.y === targetPoint.y) {
        return {
          ...piece,
          coord: targetPoint
        } as ChessPiece
      }

      return p
    })
    : [...pieces, {
        ...piece,
        coord: targetPoint
      }] as ChessPiece[]
  ).filter(p => !isSameCoord(piece.coord, p.coord))

  const ourCamp = piece.camp

  const ourKing = newPieces.find(p => p.value === (ourCamp === Camp.RED ? 11 : 21))!
  const enemyKing = newPieces.find(p => p.value === (ourCamp === Camp.RED ? 21 : 11))!
  // 先检测已方是否暴毙
  if (isKingWillDie(ourKing, newPieces).length > 0) {
    return 'not-allow'
  }

  // 检测是否给对方造成将军
  if (isKingWillDie(enemyKing, newPieces).length > 0) {
    return 'check'
  }

  return 'allow'
}

// 是否绝杀
export const isCheckMate = (camp: Camp, chessPieces: ChessPiece[]): boolean => {
  // 是否绝杀
  /*
    绝杀的思路
    如果敌方移动了 并且这一步移动是送将 也就是移动过后我方依旧是将军 那么这一步棋就是不能走的
    那么如果敌方每一个可以移动的点位都移动 而且我方都是将军 那么就是绝杀无解了
  */
  // 计算出敌方所有棋子可以走子的点位 然后挨个走子
  const enemyPieceList: ChessPiece[] = chessPieces.filter(item => item.camp !== camp)

  return enemyPieceList.every(piece => {
    const list = getMoveList(piece, chessPieces)
    return list.every(point => {
      return mockMove(piece, point, chessPieces) === 'not-allow'
    })
  })
  // for (let i = 0; i < enemyPieceList.length; i++) {
  //   // 将棋盘复位
  //   const newChessPiece: ChessPiece[] = cloneDeep(context.chessPieces)
  //   const pieceItem: ChessPiece = enemyPieceList[i]
  //   const { PieceObject, coord, camp } = pieceItem
  //   const piece = new PieceObject(coord, newChessPiece, camp, camp)
  //   // 获取每一个可以走动的坐标
  //   const allCanMoveCoord: Array<[number, number]> = piece.allCanMove()
  //   // 模拟每一个棋子的走动 然后判断是否是送将 如果有一个移动了 不是送将 那么就是可以的
  //   const activePiece = newChessPiece.find(item => item.coord.x === coord.x && item.coord.y === coord.y)
  //   // 如果说有一个棋子走动了之后对方不能将军 那么就不是绝杀了
  //   const inGeneralInChess: boolean = allCanMoveCoord.filter(item => {
  //     // 移动到了这个位置 看看还是不是将军
  //     activePiece?.move({
  //       x: item[0],
  //       y: item[1]
  //     })
  //     return !isGeneralInChess(newChessPiece, camp === Camp.RED ? Camp.BLACK : Camp.RED)
  //   }).length > 0
  //   if (inGeneralInChess) {
  //     return false
  //   }
  // }
  // return true
}
