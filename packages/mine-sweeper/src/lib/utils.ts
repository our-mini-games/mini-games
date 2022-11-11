import { LevelInfo } from '../config'

type BoxType = number | 'mine'
type BoxStatus = 'default' | 'open' | 'doubtful' | 'marked'

type Box = {
  x: number
  y: number
  type: BoxType
  status: BoxStatus
}

export const getBoxes = ({
  row,
  column,
  totalOfMines
}: LevelInfo) => {
  let total = totalOfMines
  const boxes = shuffle(Array.from({ length: row * column }, () => (<Box>{
    x: 0,
    y: 0,
    type: --total < 0 ? 0 : 'mine',
    status: 'default'
  }))).map((item, index) => {
    item.x = index % column + 1
    item.y = index % row === 0 ? Math.ceil(index / row) + 1 : Math.ceil(index / row)
    return item
  })

  // 计算雷周边数量
  boxes.filter(item => item.type === 'mine').forEach(item => {
    [
      [item.x - 1, item.y - 1], [item.x, item.y - 1], [item.x + 1, item.y - 1],
      [item.x - 1, item.y], [item.x + 1, item.y],
      [item.x - 1, item.y + 1], [item.x, item.y + 1], [item.x + 1, item.y + 1]
    ].forEach(point => {
      const box = boxes.find(box => box.x === point[0] && box.y === point[1])
      if (box && box.type !== 'mine') {
        box.type++
      }
    })
  })

  console.log(boxes)

  return boxes

  // console.log(shuffle(boxes))
}

/**
 * 数组随机排序
 * @param input 需要排序的数组
 */
export function shuffle <T extends any[] = []> (input: T): T {
  const len = input.length

  if (len === 0) return input

  let randomIndex: number
  let itemAtIndex

  for (let i = len - 1; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1))
    itemAtIndex = input[randomIndex]
    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }

  return input
}
