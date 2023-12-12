import { describe, suite, expect, test } from 'vitest'

import { getMoveList, movePiece } from '../utils'
import { ChessPiece, createChessPiece } from '@/libs/ChessPiece'
import { Point } from '@/libs/Point'
import { Camp, ChessPieceValue } from '@/definitions'

const P = (x: number, y: number): Point => new Point(x, y)

const isArrayEqual = (arr1: any[], arr2: any[]): void => {
  expect(arr1).toHaveLength(arr2.length)
  expect(arr1).toEqual(expect.arrayContaining(arr2))
}

const newPieceByPoint = (point: Point, camp: Camp): ChessPiece => {
  const piece = createChessPiece(camp === Camp.RED ? 12 : 22)
  movePiece(piece, point)

  return piece
}

suite('move list', () => {
  const list = [
    {
      value: 11,
      text: '帅',
      arr: [
        [P(4, 8), [P(4, 9), P(5, 8)]],
        [P(5, 8), [P(4, 8), P(5, 9), P(6, 8)]],
        [P(6, 8), [P(5, 8), P(6, 9)]],
        [P(4, 9), [P(4, 8), P(5, 9), P(4, 10)]],
        [P(5, 9), [P(4, 9), P(5, 8), P(6, 9), P(5, 10)]],
        [P(6, 9), [P(5, 9), P(6, 8), P(6, 10)]],
        [P(4, 10), [P(4, 9), P(5, 10)]],
        [P(5, 10), [P(4, 10), P(6, 10), P(5, 9)]],
        [P(6, 10), [P(5, 10), P(6, 9)]]
      ]
    },

    {
      value: 21,
      text: '将',
      arr: [
        [P(4, 1), [P(4, 2), P(5, 1)]],
        [P(5, 1), [P(4, 1), P(5, 2), P(6, 1)]],
        [P(6, 1), [P(5, 1), P(6, 2)]],
        [P(4, 2), [P(4, 1), P(5, 2), P(4, 3)]],
        [P(5, 2), [P(4, 2), P(5, 1), P(6, 2), P(5, 3)]],
        [P(6, 2), [P(5, 2), P(6, 1), P(6, 3)]],
        [P(4, 3), [P(4, 2), P(5, 3)]],
        [P(5, 3), [P(4, 3), P(6, 3), P(5, 2)]],
        [P(6, 3), [P(5, 3), P(6, 2)]]
      ]
    },
    {
      value: 12,
      text: '红车',
      arr: [
        [P(7, 5), (() => {
          const points: Point[] = []
          for (let x = 1; x <= 9; x++) {
            if (x === 7) continue
            points.push(P(x, 5))
          }
          for (let y = 1; y <= 10; y++) {
            if (y === 5) continue
            points.push(P(7, y))
          }

          return points
        })()]
      ]
    },
    {
      value: 22,
      text: '黑车',
      arr: [
        [P(1, 6), (() => {
          const points: Point[] = []
          for (let x = 1; x <= 9; x++) {
            if (x === 1) continue
            points.push(P(x, 6))
          }
          for (let y = 1; y <= 10; y++) {
            if (y === 6) continue
            points.push(P(1, y))
          }

          return points
        })()]
      ]
    },
    {
      value: 13,
      text: '红马',
      arr: [
        // 左上
        [P(1, 1), [P(2, 3), P(3, 2)]],
        // 右上
        [P(9, 1), [P(8, 3), P(7, 2)]],
        // 左下
        [P(1, 10), [P(2, 8), P(3, 9)]],
        // 右下
        [P(9, 10), [P(8, 8), P(7, 9)]],
        // 左侧
        [P(1, 5), [P(2, 3), P(2, 7), P(3, 4), P(3, 6)]],
        // 右侧
        [P(9, 5), [P(8, 3), P(8, 7), P(7, 4), P(7, 6)]],
        // 上方
        [P(5, 1), [P(3, 2), P(7, 2), P(4, 3), P(6, 3)]],
        // 下方
        [P(5, 10), [P(3, 9), P(7, 9), P(4, 8), P(6, 8)]],
        // 中部
        [
          P(5, 5),
          [
            P(3, 4), P(3, 6), P(7, 4), P(7, 6),
            P(4, 3), P(4, 7), P(6, 3), P(6, 7)
          ]
        ]
      ]
    },
    {
      value: 23,
      text: '黑马',
      arr: [
        // 左上
        [P(1, 1), [P(2, 3), P(3, 2)]],
        // 右上
        [P(9, 1), [P(8, 3), P(7, 2)]],
        // 左下
        [P(1, 10), [P(2, 8), P(3, 9)]],
        // 右下
        [P(9, 10), [P(8, 8), P(7, 9)]],
        // 左侧
        [P(1, 5), [P(2, 3), P(2, 7), P(3, 4), P(3, 6)]],
        // 右侧
        [P(9, 5), [P(8, 3), P(8, 7), P(7, 4), P(7, 6)]],
        // 上方
        [P(5, 1), [P(3, 2), P(7, 2), P(4, 3), P(6, 3)]],
        // 下方
        [P(5, 10), [P(3, 9), P(7, 9), P(4, 8), P(6, 8)]],
        // 中部
        [
          P(5, 5),
          [
            P(3, 4), P(3, 6), P(7, 4), P(7, 6),
            P(4, 3), P(4, 7), P(6, 3), P(6, 7)
          ]
        ]
      ]
    },

    {
      value: 14,
      text: '红炮',
      arr: [
        [P(4, 6), (() => {
          const points: Point[] = []
          for (let x = 1; x <= 9; x++) {
            if (x === 4) continue
            points.push(P(x, 6))
          }
          for (let y = 1; y <= 10; y++) {
            if (y === 6) continue
            points.push(P(4, y))
          }

          return points
        })()]
      ]
    },

    {
      value: 24,
      text: '黑炮',
      arr: [
        [P(5, 6), (() => {
          const points: Point[] = []
          for (let x = 1; x <= 9; x++) {
            if (x === 5) continue
            points.push(P(x, 6))
          }
          for (let y = 1; y <= 10; y++) {
            if (y === 6) continue
            points.push(P(5, y))
          }

          return points
        })()]
      ]
    },

    {
      value: 15,
      text: '相',
      arr: [
        // 左中
        [P(1, 8), [P(3, 6), P(3, 10)]],
        // 左前
        [P(3, 6), [P(1, 8), P(5, 8)]],
        // 左后
        [P(3, 10), [P(1, 8), P(5, 8)]],
        // 中
        [P(5, 8), [P(3, 6), P(3, 10), P(7, 6), P(7, 10)]],
        // 右前
        [P(7, 6), [P(5, 8), P(9, 8)]],
        // 右后
        [P(7, 10), [P(5, 8), P(9, 8)]],
        // 右
        [P(9, 8), [P(7, 6), P(7, 10)]]
      ]
    },
    {
      value: 25,
      text: '象',
      arr: [
        // 左中
        [P(1, 3), [P(3, 1), P(3, 5)]],
        // 左前
        [P(3, 1), [P(1, 3), P(5, 3)]],
        // 左后
        [P(3, 5), [P(1, 3), P(5, 3)]],
        // 中
        [P(5, 3), [P(3, 1), P(3, 5), P(7, 1), P(7, 5)]],
        // 右前
        [P(7, 1), [P(5, 3), P(9, 3)]],
        // 右后
        [P(7, 5), [P(5, 3), P(9, 3)]],
        // 右
        [P(9, 3), [P(7, 1), P(7, 5)]]
      ]
    },
    {
      value: 16,
      text: '仕',
      arr: [
        // 左上
        [P(4, 8), [P(5, 9)]],
        // 右上
        [P(6, 8), [P(5, 9)]],
        // 中
        [P(5, 9), [P(4, 8), P(6, 8), P(4, 10), P(6, 10)]],
        // 左下
        [P(4, 10), [P(5, 9)]],
        // 右下
        [P(6, 10), [P(5, 9)]]
      ]
    },
    {
      value: 26,
      text: '士',
      arr: [
        // 左上
        [P(4, 1), [P(5, 2)]],
        // 右上
        [P(6, 1), [P(5, 2)]],
        // 中
        [P(5, 2), [P(4, 1), P(6, 1), P(4, 3), P(6, 3)]],
        // 左下
        [P(4, 3), [P(5, 2)]],
        // 右下
        [P(6, 3), [P(5, 2)]]
      ]
    },
    {
      value: 17,
      text: '兵',
      arr: [
        // 未过河 左
        [P(1, 7), [P(1, 6)]],
        // 未过河 中
        [P(5, 7), [P(5, 6)]],
        // 未过河 右
        [P(9, 6), [P(9, 5)]],

        // 已过河 左
        [P(1, 5), [P(1, 4), P(2, 5)]],
        // 已过河 中
        [P(6, 4), [P(5, 4), P(6, 3), P(7, 4)]],
        // 已过河 右
        [P(9, 3), [P(9, 2), P(8, 3)]]
      ]
    },
    {
      value: 27,
      text: '卒',
      arr: [
        // 未过河 左
        [P(1, 4), [P(1, 5)]],
        // 未过河 中
        [P(5, 4), [P(5, 5)]],
        // 未过河 右
        [P(9, 5), [P(9, 6)]],

        // 已过河 左
        [P(1, 6), [P(1, 7), P(2, 6)]],
        // 已过河 中
        [P(6, 7), [P(5, 7), P(6, 8), P(7, 7)]],
        // 已过河 右
        [P(9, 8), [P(9, 9), P(8, 8)]]
      ]
    }
  ]

  describe.each(list)('$text', ({ value, arr }) => {
    const piece = createChessPiece(value as ChessPieceValue, 0)

    test.each(arr)('%o 无阻碍移动', (p, asserted) => {
      movePiece(piece, p as Point)

      isArrayEqual(getMoveList(piece, []), asserted as Point[])
    })

    // 车和炮，需要特殊处理
    if (![12, 22, 14, 24].includes(value)) {
      test.each(arr)('%o 已方阻碍移动', (p, asserted) => {
        movePiece(piece, p as Point)
        const len = (asserted as Point[]).length
        for (let i = 0; i < len; i++) {
          const p1 = (asserted as Point[])[i]
          const arr2 = ([...asserted as Point[]]).filter(p => p !== p1)

          isArrayEqual(
            getMoveList(piece, [newPieceByPoint(p1, piece.camp)]),
            arr2
          )
        }
      })

      test.each(arr)('%o 敌方位置可移动', (p, asserted) => {
        movePiece(piece, p as Point)
        const len = (asserted as Point[]).length
        for (let i = 0; i < len; i++) {
          const p1 = (asserted as Point[])[i]

          isArrayEqual(
            getMoveList(piece, [newPieceByPoint(p1, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK)]),
            asserted as Point[]
          )
        }
      })
    }

    // 马脚判断
    if (value === 13 || value === 23) {
      test.each(arr)('%o 马脚被卡不可移动', (p, _asserted) => {
        movePiece(piece, p as Point)

        const { x, y } = p as Point
        // 马脚
        const pList: Point[] = [
          P(x, y + 1),
          P(x, y - 1),
          P(x + 1, y),
          P(x - 1, y)
        ].filter(point => !(point.x < 1 || point.x > 9 || point.y < 1 || point.y > 10))

        // 针对当前所在位置增加马脚位
        isArrayEqual(getMoveList(piece, pList.map(point => newPieceByPoint(point, Camp.RED))), [])
      })
    }

    // 相/象脚判断
    if (value === 15 || value === 25) {
      test.each(arr)(`%o ${value === 15 ? '相' : '象'}脚被卡不可移动`, (p, _asserted) => {
        movePiece(piece, p as Point)

        const { x, y } = p as Point
        // 象脚
        const pList: Point[] = [
          P(x + 1, y + 1),
          P(x + 1, y - 1),
          P(x - 1, y + 1),
          P(x - 1, y - 1)
        ].filter(point => !(point.x < 1 || point.x > 9 || point.y < 1 || point.y > 10))

        // 针对当前所在位置增加象脚位
        isArrayEqual(getMoveList(piece, pList.map(point => newPieceByPoint(point, Camp.RED))), [])
      })
    }

    if (value === 12 || value === 22) {
      test.each(arr)('%o 车被堵路', (p, asserted) => {
        movePiece(piece, p as Point)
        const { x, y } = p as Point

        const pRight = P(x + 2, y)
        const pLeft = P(x - 2, y)
        const pBottom = P(x, y + 4)
        const pTop = P(x, y - 3)

        // 生成几个 x, y 轴的堵路点
        const blockPieces = [
          newPieceByPoint(pRight, piece.camp), // 已方
          newPieceByPoint(pLeft, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK), // 敌方
          newPieceByPoint(pBottom, piece.camp), // 已方
          newPieceByPoint(pTop, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK) // 敌方
        ]

        isArrayEqual(getMoveList(piece, blockPieces), (asserted as Point[]).filter(({ x, y }) => (
          // 已方不包含
          x < pRight.x &&
          y < pBottom.y &&

          // 敌方可以被吃掉，包含
          x >= pLeft.x &&
          y >= pTop.y
        )))
      })
    }

    if (value === 14 || value === 24) {
      test.each(arr)('%o 炮台就绪，开火', (p, asserted) => {
        movePiece(piece, p as Point)
        const { x, y } = p as Point

        const pRight = P(x + 2, y)
        const pLeft = P(x - 2, y)
        const pBottom = P(x, y + 2)
        const pTop = P(x, y - 2)

        // 生成几个 x, y 轴的炮台
        const blockPieces = [
          newPieceByPoint(pRight, piece.camp), // 已方
          newPieceByPoint(pLeft, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK), // 敌方
          newPieceByPoint(pBottom, piece.camp), // 已方
          newPieceByPoint(pTop, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK) // 敌方
        ]

        // 生成几个 x, y 轴的击杀点
        const killRight = P(x + 3, y)
        const killLeft = P(x - 3, y)
        const killBottom = P(x, y + 4)
        const killTop = P(x, y - 3)
        const killPieces = [
          newPieceByPoint(killRight, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK), // 敌方
          newPieceByPoint(killLeft, piece.camp), // 已方
          newPieceByPoint(killBottom, piece.camp), // 已方
          newPieceByPoint(killTop, piece.camp === Camp.BLACK ? Camp.RED : Camp.BLACK) // 敌方
        ]

        isArrayEqual(getMoveList(piece, [...blockPieces, ...killPieces]), [...(asserted as Point[]).filter(({ x, y }) => (
          x < pRight.x &&
          y < pBottom.y &&
          x > pLeft.x &&
          y > pTop.y
        )), killRight, killTop])
      })
    }
  })
})
