import { createCanvas } from './Canvas'
import { Camp, colorMapper } from '../definitions'
import { Point } from './Point'
import { ChessPiece } from './ChessPiece'

export interface SizeOptions {
  width: number
  height: number
  innerWidth: number
  innerHeight: number
  padding: number
  baseSize: number
  rotate: number
  fixedOrigin: (rotate: number) => void
}

export interface GameInterface {
  mainCanvas: HTMLCanvasElement
  checkerBoardCanvas: HTMLCanvasElement
  readonly sizeOptions: SizeOptions
  mount: (node: Element) => void
  destroy: (node: Element) => void
  getPointer: (e: MouseEvent) => Point

  clearMain: () => void
  setRotate: (angle: number) => void
  drawChessPieces: (chessPieces: ChessPiece[]) => void
  drawLastStop: (point: Point) => void
  drawMovePath: (points: Point[]) => void
  drawAllowPoints: (points: Point[]) => void
  drawCurrentStop: (point: Point, counter?: number) => void
}

type AnchorType = 'left' | 'middle' | 'right'

function drawEngrave (ctx: CanvasRenderingContext2D, cb: VoidFunction, size: number, isLine?: boolean): void {
  ctx.beginPath()
  ctx.shadowBlur = size
  ctx.shadowColor = colorMapper.white
  ctx.shadowOffsetX = isLine ? size / 2 : size
  ctx.shadowOffsetY = isLine ? size / 2 : size
  cb()

  ctx.beginPath()
  ctx.shadowBlur = size
  ctx.shadowColor = colorMapper.shadow
  ctx.shadowOffsetX = -(isLine ? size / 2 : size)
  ctx.shadowOffsetY = -(isLine ? size / 2 : size)
  cb()
}

const drawCheckerboard = (ctx: CanvasRenderingContext2D, {
  width,
  height,
  innerWidth,
  innerHeight,
  baseSize,
  rotate
}: SizeOptions): void => {
  ctx.clearRect(0, 0, width, height)

  ctx.save()

  ctx.translate(width / 2, height / 2)
  ctx.rotate(rotate)
  ctx.translate(-width / 2, -height / 2)

  ctx.lineCap = 'round'

  const lineWidth = baseSize / 32

  // BG
  ctx.fillStyle = colorMapper.light
  ctx.fillRect(0, 0, width, height)

  ctx.translate(width / 2, height / 2)

  ctx.save()
  ;[Camp.RED, Camp.BLACK].forEach((camp, index) => {
    ctx.rotate(Math.PI * index)
    drawPrison()
    drawVerticalLine()
    drawHorizontalLine()
    drawAnchors()
    drawText(camp)
  })
  ctx.restore()

  drawBorder()
  drawOutline()

  function drawBorder (): void {
    ctx.save()
    drawEngrave(ctx, () => {
      ctx.strokeStyle = colorMapper.line
      ctx.lineWidth = lineWidth
      ctx.strokeRect(-innerWidth / 2, -innerHeight / 2, innerWidth, innerHeight)
    }, lineWidth, true)

    ctx.restore()
  }

  function drawOutline (): void {
    ctx.save()
    drawEngrave(ctx, () => {
      ctx.strokeStyle = colorMapper.line
      ctx.lineWidth = lineWidth * 3
      ctx.strokeRect(-innerWidth / 2 - lineWidth * 4, -innerHeight / 2 - lineWidth * 4, innerWidth + lineWidth * 8, innerHeight + lineWidth * 8)
    }, lineWidth * 2, true)

    ctx.restore()
  }

  function drawVerticalLine (): void {
    for (let i = 0; i < 9; i++) {
      drawEngrave(ctx, () => {
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = colorMapper.line
        ctx.moveTo(-innerWidth / 2 + baseSize * i, innerHeight / 2)
        ctx.lineTo(-innerWidth / 2 + baseSize * i, [0, 8].includes(i) ? 0 : baseSize / 2)
        ctx.stroke()
      }, lineWidth, true)
    }
  }

  function drawHorizontalLine (): void {
    for (let i = 0; i < 5; i++) {
      drawEngrave(ctx, () => {
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = colorMapper.line
        ctx.moveTo(-innerWidth / 2, innerHeight / 2 - baseSize * i)
        ctx.lineTo(innerWidth / 2, innerHeight / 2 - baseSize * i)
        ctx.stroke()
      }, lineWidth, true)
    }
  }

  function drawPrison (): void {
    drawEngrave(ctx, () => {
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = colorMapper.line
      ctx.moveTo(-baseSize, innerHeight / 2)
      ctx.lineTo(baseSize, innerHeight / 2 - baseSize * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = colorMapper.line
      ctx.moveTo(baseSize, innerHeight / 2)
      ctx.lineTo(-baseSize, innerHeight / 2 - baseSize * 2)
      ctx.stroke()
    }, lineWidth, true)
  }

  function drawAnchors (): void {
    const anchorsCoords = [
      new Point(0, 1.5),
      new Point(-2, 1.5),
      new Point(2, 1.5),
      new Point(-4, 1.5),
      new Point(4, 1.5),
      new Point(-3, 2.5),
      new Point(3, 2.5)
    ]

    anchorsCoords.forEach(({ x, y }) => {
      ctx.save()
      ctx.translate(x * baseSize, y * baseSize)
      drawEngrave(ctx, () => {
        drawAnchor(x === -4 ? 'left' : x === 4 ? 'right' : 'middle')
      }, lineWidth, true)
      ctx.restore()
    })
  }

  function drawAnchor (type: AnchorType = 'middle'): void {
    ctx.save()
    ctx.strokeStyle = colorMapper.line

    const gap = lineWidth * 2
    const length = baseSize / 4

    for (let i = 1; i <= 4; i++) {
      ctx.rotate(-Math.PI * 90 / 180)
      if (
        (type === 'left' && [2, 3].includes(i)) ||
        (type === 'right' && [1, 4].includes(i))
      ) {
        continue
      }

      ctx.beginPath()
      ctx.moveTo(gap, gap)
      ctx.lineTo(gap, length)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(gap, gap)
      ctx.lineTo(length, gap)
      ctx.stroke()
    }
    ctx.restore()
  }

  function drawText (camp = Camp.RED): void {
    const textGroup = camp === Camp.RED
      ? ['一', '二', '三', '四', '五', '六', '七', '八', '九']
      : [1, 2, 3, 4, 5, 6, 7, 8, 9]

    ctx.save()

    textGroup.forEach((text, index) => {
      drawEngrave(ctx, () => {
        ctx.beginPath()
        ctx.font = `Bold ${baseSize / 4}px PieceFont`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = colorMapper.line
        ctx.fillText(text.toString(), baseSize * (index - 4) * -1, innerHeight / 2 + baseSize / 3)

        // ctx.beginPath()
        // ctx.arc(baseSize * (index - 4) * -1, innerHeight / 2 + baseSize / 3, baseSize / 5, 0, Math.PI * 2)
        // ctx.stroke()
      }, 2, false)
    })

    drawEngrave(ctx, () => {
      ctx.save()
      ctx.translate(0, baseSize / 24)
      ctx.beginPath()
      ctx.font = `Bold ${baseSize / 1.5}px PieceFont`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = colorMapper.line
      ctx.fillText(camp === Camp.RED ? '汉界' : '楚河', baseSize * 2.5, 0)
      ctx.restore()
    }, 2, false)

    ctx.restore()
  }

  ctx.restore()
}

function drawChessPieces (ctx: CanvasRenderingContext2D, {
  baseSize,
  rotate,
  fixedOrigin
}: SizeOptions, chessPieces: ChessPiece[]): void {
  ctx.save()

  fixedOrigin(rotate)

  chessPieces.forEach(piece => {
    drawChessPiece(ctx, baseSize, piece, rotate)
  })

  ctx.restore()
}

function drawChessPiece (
  ctx: CanvasRenderingContext2D,
  baseSize: number,
  { name, camp, coord, scale }: ChessPiece,
  rotate: number
): void {
  const campColor = camp === Camp.RED ? colorMapper.red : colorMapper.black

  ctx.save()

  // 移动到当前棋子坐标中点
  ctx.translate(
    (coord.x - 1) * baseSize,
    (coord.y - 1) * baseSize
  )
  ctx.rotate(-rotate)

  // 当前被选中了
  ctx.scale(scale, scale)

  // 绘制棋子
  ctx.beginPath()

  // 外圆
  const displacement = baseSize / 32
  ctx.translate(-displacement, -displacement)
  ctx.shadowColor = colorMapper.shadow
  ctx.shadowBlur = displacement * 4
  ctx.shadowOffsetX = displacement * 2
  ctx.shadowOffsetY = displacement * 2
  ctx.fillStyle = colorMapper.dark
  ctx.arc(0, 0, (baseSize - displacement * 4) / 2, 0, 2 * Math.PI)
  ctx.fill()

  ctx.beginPath()
  ctx.shadowColor = 'transparent'

  // 内圆
  ctx.translate(0, -displacement)
  ctx.fillStyle = colorMapper.light
  ctx.arc(0, 0, (baseSize - displacement * 8) / 2, 0, 2 * Math.PI)
  ctx.fill()

  // 字
  drawEngrave(ctx, () => {
    ctx.save()
    ctx.translate(0, baseSize / 24)
    ctx.beginPath()
    ctx.font = `Bold ${baseSize / 1.8}px PieceFont`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = campColor
    ctx.fillText(name, 0, 0)
    ctx.restore()
  }, 2, false)

  // 圈
  drawEngrave(ctx, () => {
    ctx.beginPath()
    ctx.lineWidth = displacement
    ctx.strokeStyle = campColor

    ctx.arc(0, 0, (baseSize - displacement * 12) / 2, 0, 2 * Math.PI)
    ctx.stroke()
  }, 1, false)

  ctx.restore()
}

function drawLastStop (ctx: CanvasRenderingContext2D, { baseSize, rotate, fixedOrigin }: SizeOptions, point: Point): void {
  const { x, y } = Point.toActualPoint(point)

  ctx.save()
  fixedOrigin(rotate)
  ctx.translate(x, y)
  const lineWidth = baseSize / 32

  ;[baseSize / 16, baseSize / 8].forEach((radius, index) => {
    ctx.beginPath()
    ctx.strokeStyle = colorMapper.white
    ctx.fillStyle = colorMapper.white
    ctx.lineWidth = lineWidth
    ctx.arc(0, 0, radius, 0, Math.PI * 2)
    if (index === 0) {
      ctx.fill()
    } else {
      ctx.stroke()
    }
  })

  ctx.restore()
}

function drawCurrentStop (ctx: CanvasRenderingContext2D, { baseSize, rotate, fixedOrigin }: SizeOptions, counter: number, point: Point): void {
  const { x, y } = Point.toActualPoint(point)

  ctx.save()
  fixedOrigin(rotate)
  ctx.strokeStyle = colorMapper.white
  ctx.fillStyle = colorMapper.success
  ctx.lineWidth = baseSize * 0.05
  ctx.translate(x, y)
  const displacement = baseSize / 32
  ctx.translate(-displacement, -displacement)

  const r = baseSize / 2 - displacement
  const d = Math.PI / 90
  let size = 1
  for (let degree = 0; degree < Math.PI; degree += d) {
    for (let i = 2; i > 0; i--) {
      ctx.beginPath()
      ctx.shadowBlur = size * 3 - i
      ctx.shadowColor = colorMapper.white
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.arc(Math.cos(counter * 3 + degree) * r, Math.sin(counter * 3 + degree) * r, size, 0, Math.PI * 2)
      ctx.fill()
    }

    size += 0.05
  }

  ctx.restore()
}

function drawMovePath (ctx: CanvasRenderingContext2D, { baseSize, rotate, fixedOrigin }: SizeOptions, points: Point[]): void {
  if (points.length === 0) {
    return
  }

  let r = baseSize / 32 // 4 => 8 => 12
  const rRate = baseSize / 32
  const arrowHeight = baseSize / 10
  const { length } = points

  points.reduce((prev, curr, index) => {
    const { x: x1, y: y1 } = Point.toActualPoint(prev, baseSize)
    const { x: x2, y: y2 } = Point.toActualPoint(curr, baseSize)

    const side = Math.sqrt(((x1 - x2) ** 2 + (y1 - y2) ** 2))

    let a = Math.atan(Math.abs(x1 - x2) / Math.abs(y1 - y2))

    a = x1 > x2 ? (Math.PI - a) : (Math.PI + a)
    if (x1 > x2) {
      a = Math.PI - a
      if (y1 < y2) {
        a = Math.PI - a
      }
    } else {
      a = Math.PI + a
      if (y1 < y2) {
        a = Math.PI - a
      }
    }

    ctx.save()
    fixedOrigin(rotate)
    ctx.globalAlpha = 0.8
    ctx.translate(x1, y1)
    ctx.rotate(x1 > x2 ? (Math.PI - a) : (Math.PI + a))

    ctx.beginPath()
    ctx.strokeStyle = colorMapper.success
    ctx.fillStyle = colorMapper.success
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-r, 0)
    ctx.lineTo(-r - rRate, index === length - 1 ? (side - arrowHeight * 2) : side)

    ctx.lineTo(r + rRate, index === length - 1 ? (side - arrowHeight * 2) : side)
    ctx.lineTo(r, 0)
    ctx.closePath()
    ctx.fill()

    if (index === length - 1) {
      // 结尾箭头
      ctx.beginPath()
      ctx.scale(1.5, 0.99)
      ctx.moveTo(0, side)
      ctx.lineTo(r + rRate, side - arrowHeight * 2)
      ctx.lineTo(-r - rRate, side - arrowHeight * 2)
      ctx.closePath()
      // ctx.strokeRect(0, 0, arrowHeight * 2, arrowHeight * 2)
      ctx.fill()
    }

    ctx.restore()
    r += rRate
    return curr
  })
}

function drawAllowPoints (ctx: CanvasRenderingContext2D, { baseSize, rotate, fixedOrigin }: SizeOptions, points: Point[]): void {
  points.forEach(point => {
    const { x, y } = Point.toActualPoint(point, baseSize)

    ctx.save()
    fixedOrigin(rotate)
    // 需要注意他是从 0，0 开始的，而我们算出来的 Points 是从 1，1 => 9,10
    ctx.translate(x - baseSize, y - baseSize)

    ctx.beginPath()
    ctx.arc(0, 0, baseSize / 16, 0, Math.PI * 2)
    ctx.fillStyle = colorMapper.white
    ctx.fill()
    ctx.strokeStyle = colorMapper.success
    ctx.lineWidth = baseSize / 32
    ctx.stroke()

    ctx.restore()
  })
}

export const createGameInterface = (baseSize = 128): GameInterface => {
  const padding = baseSize * 1.25
  let ratio = 1

  const [innerWidth, innerHeight] = [
    baseSize * 8,
    baseSize * 9
  ]
  const [width, height] = [
    innerWidth + padding,
    innerHeight + padding
  ]

  const mainCanvas = createCanvas(width, height)
  const ctx = mainCanvas.getContext('2d')!

  const sizeOptions: SizeOptions = {
    width,
    height,
    innerWidth,
    innerHeight,
    baseSize,
    padding,
    rotate: 0,
    fixedOrigin: (rotate: number) => {
      ctx.translate(width / 2, height / 2)
      ctx.rotate(rotate)
      ctx.translate(-innerWidth / 2, -innerHeight / 2)
    }
  }

  const checkerBoardCanvas = createCanvas(width, height)

  const mount = async (parentNode: Element): Promise<void> => {
    const rect = parentNode.getBoundingClientRect()
    ratio = rect.height / parseInt(mainCanvas.style.height)

    drawCheckerboard(checkerBoardCanvas.getContext('2d')!, sizeOptions)

    const oInterface = document.createElement('div')
    oInterface.style.cssText = 'position: absolute;' +
      'left: 50%;' +
      'top: 50%;' +
      'transform-origin: center center;' +
      `transform: translate(-50%, -50%) scale(${ratio})`

    checkerBoardCanvas.style.position = mainCanvas.style.position = 'absolute'
    checkerBoardCanvas.style.left = mainCanvas.style.left = '0'
    checkerBoardCanvas.style.top = mainCanvas.style.top = '0'

    mainCanvas.style.zIndex = '2'

    oInterface.appendChild(checkerBoardCanvas)
    oInterface.appendChild(mainCanvas)

    oInterface.style.width = checkerBoardCanvas.style.width
    oInterface.style.height = checkerBoardCanvas.style.height

    parentNode.appendChild(oInterface)

    const font = new FontFace('PieceFont', 'url(fzlsft.ttf)')
    return await font.load().then(f => {
      (document.fonts as any).add(f)
    })
  }

  const destroy = (parentNode: Element): void => {
    parentNode.innerHTML = ''
  }

  const getPointer = (e: MouseEvent): Point => {
    const { clientX, clientY } = e
    const { left, top } = mainCanvas.getBoundingClientRect()
    const { rotate } = sizeOptions

    const x = Math.round(((clientX - left) / ratio - padding / 2) / baseSize) + 1
    const y = Math.round(((clientY - top) / ratio - padding / 2) / baseSize) + 1

    return {
      x: rotate === 0 ? x : 10 - x,
      y: rotate === 0 ? y : 11 - y
    }
  }

  // drawCurrentStop(ctx, sizeOptions, counter, { x: 4, y: 9 })
  // run()
  return {
    mainCanvas,
    checkerBoardCanvas,

    get sizeOptions () {
      return sizeOptions
    },
    mount,
    destroy,
    getPointer,

    clearMain: () => {
      const ctx = mainCanvas.getContext('2d')!
      ctx.clearRect(0, 0, width, height)
    },
    setRotate: (angle: number) => {
      sizeOptions.rotate = angle

      drawCheckerboard(checkerBoardCanvas.getContext('2d')!, sizeOptions)
    },

    drawChessPieces: (chessPieces: ChessPiece[]) => drawChessPieces(ctx, sizeOptions, chessPieces),
    drawLastStop: (point: Point) => drawLastStop(ctx, sizeOptions, point),
    drawMovePath: (points: Point[]) => drawMovePath(ctx, sizeOptions, points),
    drawAllowPoints: (points: Point[]) => drawAllowPoints(ctx, sizeOptions, points),
    drawCurrentStop: (point: Point, counter = 0) => drawCurrentStop(ctx, sizeOptions, counter, point)
  }
}
