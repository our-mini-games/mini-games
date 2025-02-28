import Hammer from 'hammerjs'
import UnitPath from 'unit-path'
import { createCanvas } from './utils'

export enum RockerDirection {
  // eslint-disable-next-line no-unused-vars
  DEFAULT,
  // eslint-disable-next-line no-unused-vars
  UP,
  // eslint-disable-next-line no-unused-vars
  DOWN,
  // eslint-disable-next-line no-unused-vars
  LEFT,
  // eslint-disable-next-line no-unused-vars
  RIGHT
}

export interface Point {
  x: number
  y: number
}

export type RGBColorArray = [number, number, number]

export interface RockerOptions {
  /** 画布宽度 */
  width: number
  /** 画布高度 */
  height: number
  /** 底座半径 */
  baseRadius: number
  /** 手柄半径 */
  handleRadius: number
  /** 底座颜色 */
  baseColor: RGBColorArray
  /** 手柄颜色 */
  handleColor: RGBColorArray
  /** 高光颜色 */
  edgeLightColor: RGBColorArray
  /** 方向改变回调 */
  onDirectionChange: (direction: RockerDirection) => void
}

interface RockerContext {
  width: number
  height: number
  currentDirection: RockerDirection
  isDragging: boolean
  baseCenter: Point
  baseRadius: number
  handleCenter: Point
  handleRadius: number
  baseColor: RGBColorArray
  handleColor: RGBColorArray
  edgeLightColor: RGBColorArray
}

// 计算夹角
function calculateAngle (x1: number, y1: number, x2: number, y2: number): number {
  // 计算差值
  const deltaX = x2 - x1
  const deltaY = y2 - y1

  return Math.atan2(deltaY, deltaX)
}

// 绘制气泡
function drawBubble (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fillColor: RGBColorArray = [255, 255, 255], shadowColor: RGBColorArray = [255, 245, 196]): void {
  ctx.beginPath()
  ctx.save()
  ctx.translate(x, y)

  const [red, green, blue] = fillColor

  const gradient = ctx.createRadialGradient(
    0, 0, r / 2,
    0, 0, r
  )
  gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0.5)`)
  gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0.1)`)
  ctx.arc(0, 0, r, 0, Math.PI * 2)
  ctx.fillStyle = gradient
  ctx.fill()

  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.beginPath()
  ctx.ellipse(r * 0.05, r * 0.05, r * 0.82, r * 0.95, Math.PI / 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(0, 0, 0, 1)'
  ctx.fill()
  ctx.restore()

  ctx.save()
  ctx.beginPath()
  ctx.arc(0, 0, r, 0, Math.PI * 2)
  ctx.shadowColor = `rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 1)`
  ctx.shadowBlur = 20
  ctx.shadowOffsetX = r / 8
  ctx.shadowOffsetY = r / 8
  ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, 0.5)`
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.restore()
  // 绘制发光点
  ctx.beginPath()
  ctx.ellipse(-r * 0.9 * Math.cos(Math.PI / 3), -r * 0.9 * Math.sin(Math.PI / 3), r * 0.1, r * 0.05, Math.PI * 0.8, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.75)`

  ctx.ellipse(-r * 0.9 * Math.cos(Math.PI * 1.95), -r * 0.9 * Math.sin(Math.PI * 1.95), r * 0.06, r * 0.03, Math.PI * 0.6, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.5)`
  ctx.fill()

  ctx.restore()
}

// 绘制指示箭头
function drawArrow (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, direction: RockerDirection, fillColor: RGBColorArray = [255, 255, 255]): void {
  ctx.save()
  ctx.beginPath()

  switch (direction) {
    case RockerDirection.UP:
      ctx.translate(x, y - r * 0.9)
      ctx.rotate(Math.PI / 2)
      break

    case RockerDirection.RIGHT:
      ctx.translate(x + r * 0.9, y)
      ctx.rotate(Math.PI)
      break

    case RockerDirection.DOWN:
      ctx.translate(x, y + r * 0.9)
      ctx.rotate(Math.PI * 1.5)
      break

    case RockerDirection.LEFT:
    default:
      ctx.translate(x - r * 0.9, y)
      break
  }

  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.moveTo(0, 0)
  ctx.lineTo(r * 0.3 * Math.cos(Math.PI / 6), r * 0.3 * Math.sin(Math.PI / 6))
  ctx.lineTo(r * 0.2, 0)

  ctx.scale(1, -1)
  ctx.moveTo(0, 0)
  ctx.lineTo(r * 0.3 * Math.cos(Math.PI / 6), r * 0.3 * Math.sin(Math.PI / 6))
  ctx.lineTo(r * 0.2, 0)
  ctx.lineWidth = 2
  const gradient = ctx.createLinearGradient(0, 0, r * 0.3, 0)
  const [red, green, blue] = fillColor
  gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0.8)`)
  gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0.3)`)
  ctx.fillStyle = gradient
  ctx.strokeStyle = gradient
  ctx.stroke()
  ctx.fill()
  ctx.restore()
}

// 边缘高光
function drawEdgeLight (ctx: CanvasRenderingContext2D, context: RockerContext, angle: number): void {
  ctx.save()
  ctx.translate(context.baseCenter.x, context.baseCenter.y)

  const r = context.baseRadius

  // 画箭头, 取四个点
  // 1
  // 3 4
  // 2
  const p1 = { x: Math.cos(angle - Math.PI / 8) * r, y: Math.sin(angle - Math.PI / 8) * r }
  // const p2 = { x: Math.cos(angle + Math.PI / 8) * baseRadius, y: Math.sin(angle + Math.PI / 8) * baseRadius }
  const p3 = { x: Math.cos(angle) * (r + 4), y: Math.sin(angle) * (r + 4) }
  const p4 = { x: Math.cos(angle) * (r + 16), y: Math.sin(angle) * (r + 16) }

  const [red, green, blue] = context.edgeLightColor

  ctx.beginPath()
  ctx.shadowColor = `rgba(${red}, ${green}, ${blue}, 1)`
  ctx.shadowBlur = 10
  ctx.arc(0, 0, r, angle - Math.PI / 8, angle + Math.PI / 8)
  ctx.quadraticCurveTo(p3.x, p3.y, p4.x, p4.y)
  ctx.quadraticCurveTo(p3.x, p3.y, p1.x, p1.y)
  ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 1)`
  ctx.fill()

  // 箭把
  const startAngle = angle - Math.PI / 4
  const endAngle = angle + Math.PI / 4

  const un = new UnitPath()

  let len = Math.floor(context.baseRadius * 0.8)
  if (len % 2 === 0) {
    len += 1
  }
  const points = un.setPath('ARC', 0, 0, r, startAngle, endAngle).getPoints(len)

  for (let i = 0; i < len / 2; i++) {
    const p1 = points[i]
    const p2 = points[points.length - 1 - i]

    ctx.save()
    ctx.shadowColor = `rgba(${red}, ${green}, ${blue}, 1)`
    ctx.shadowBlur = 10
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.5)`
    ctx.beginPath()
    ctx.arc(p1.x, p1.y, i * 0.12, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(p2.x, p2.y, i * 0.12, 0, 2 * Math.PI)
    ctx.fill()

    // if ((len / 2 - i) <= 5) {
    //   ctx.fillStyle = '#fff'
    //   ctx.shadowColor = 'rgba(0, 0, 0, 0)'
    //   ctx.beginPath()
    //   ctx.arc(p1.x, p1.y, i * 0.08, 0, 2 * Math.PI)
    //   ctx.fill()
    //   ctx.beginPath()
    //   ctx.arc(p2.x, p2.y, i * 0.08, 0, 2 * Math.PI)
    //   ctx.fill()

    //   // ctx.beginPath()
    //   // ctx.arc(p1.x, p1.y, i * 0.08, 0, 2 * Math.PI)
    //   // ctx.fill()
    //   // ctx.beginPath()
    //   // ctx.arc(p2.x, p2.y, i * 0.08, 0, 2 * Math.PI)
    //   // ctx.fill()
    // }

    ctx.restore()
  }

  ctx.restore()
}

// 绘制摇杆主体
function drawRocker (ctx: CanvasRenderingContext2D, context: RockerContext): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  // 绘制摇杆底座
  drawBubble(ctx, context.baseCenter.x, context.baseCenter.y, context.baseRadius, context.baseColor)
  // 绘制手柄
  drawBubble(ctx, context.handleCenter.x, context.handleCenter.y, context.handleRadius, context.handleColor)

  const directions = [RockerDirection.UP, RockerDirection.RIGHT, RockerDirection.DOWN, RockerDirection.LEFT]
  directions.forEach((d) => {
    const color = context.currentDirection === d ? context.handleColor : context.baseColor
    drawArrow(ctx, context.baseCenter.x, context.baseCenter.y, context.baseRadius, d, color as RGBColorArray)
  })
}

export const createVirtualRocker = (options?: RockerOptions): {
  rocker: HTMLCanvasElement
  destroyRocker: () => void
} => {
  const opts = Object.assign({
    width: 400,
    height: 300,
    baseRadius: 80,
    handleRadius: 40,
    baseColor: [255, 255, 255],
    handleColor: [245, 255, 196],
    edgeLightColor: [245, 255, 196],
    onDirectionChange: () => {}
  }, options)

  const rocker = createCanvas(opts.width, opts.height)
  const ctx = rocker.getContext('2d')!

  let currentDirection = RockerDirection.DEFAULT

  const context: RockerContext = {
    width: rocker.width,
    height: rocker.height,
    get currentDirection () {
      return currentDirection
    },
    set currentDirection (direction: RockerDirection) {
      currentDirection = direction
      opts.onDirectionChange(direction)
    },
    isDragging: false,
    baseCenter: {
      x: opts.width / 2,
      y: opts.height / 2
    },
    handleCenter: {
      x: opts.width / 2,
      y: opts.height / 2
    },
    baseRadius: opts.baseRadius,
    handleRadius: opts.handleRadius,
    baseColor: opts.baseColor,
    handleColor: opts.handleColor,
    edgeLightColor: opts.edgeLightColor
  }

  // 计算摇杆手柄的位置
  function updateRockerPosition (x: number, y: number): void {
    const dx = x - context.baseCenter.x
    const dy = y - context.baseCenter.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // // 限制摇杆手柄在底座范围内(手柄中心在底座范围内)
    // if (distance > baseRadius) {
    //   handleX.value = baseX.value + (dx / distance) * baseRadius;
    //   handleY.value = baseY.value + (dy / distance) * baseRadius;
    // }

    // 限制摇杆手柄在底座范围内部
    if (distance > context.baseRadius - context.handleRadius) {
      context.handleCenter.x = context.baseCenter.x + (dx / distance) * (context.baseRadius - context.handleRadius)
      context.handleCenter.y = context.baseCenter.y + (dy / distance) * (context.baseRadius - context.handleRadius)
    } else {
      context.handleCenter.x = x
      context.handleCenter.y = y
    }
  }

  const handleChangeDirection = (direction: RockerDirection): void => {
    context.currentDirection = direction
    drawRocker(ctx, context)
  }

  // 初始化 Hammer.js
  const hammer = new Hammer(rocker)
  hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL })

  // 处理拖动开始事件
  hammer.on('panstart', (e) => {
    const rect = rocker.getBoundingClientRect()
    const touchX = e.center.x - rect.left
    const touchY = e.center.y - rect.top

    // 检查是否触摸到摇杆手柄
    const dx = touchX - context.handleCenter.x
    const dy = touchY - context.handleCenter.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= context.handleRadius) {
      context.isDragging = true
      updateRockerPosition(touchX, touchY)
      drawRocker(ctx, context)
    }
  })

  // 处理拖动事件
  hammer.on('panmove', (e) => {
    if (context.isDragging) {
      const rect = rocker.getBoundingClientRect()
      const touchX = e.center.x - rect.left
      const touchY = e.center.y - rect.top

      updateRockerPosition(touchX, touchY)
      drawRocker(ctx, context)

      const angle = calculateAngle(0, 0, touchX - context.baseCenter.x, touchY - context.baseCenter.y)
      drawEdgeLight(ctx, context, angle)

      if (angle >= -Math.PI / 4 && angle < Math.PI / 4) {
        context.currentDirection = RockerDirection.RIGHT
      } else if (angle >= Math.PI / 4 && angle < Math.PI * 3 / 4) {
        context.currentDirection = RockerDirection.DOWN
      } else if ((angle >= Math.PI * 3 / 4 && angle <= Math.PI) || (angle >= -Math.PI && angle <= -Math.PI * 3 / 4)) {
        context.currentDirection = RockerDirection.LEFT
      } else if (angle >= -Math.PI * 3 / 4 && angle < -Math.PI / 4) {
        context.currentDirection = RockerDirection.UP
      }
    }
  })

  // 处理拖动结束事件
  hammer.on('panend', () => {
    if (context.isDragging) {
      Object.assign(context, {
        isDragging: false,
        handleCenter: {
          x: context.baseCenter.x,
          y: context.baseCenter.y
        },
        currentDirection: RockerDirection.DEFAULT
      })
      drawRocker(ctx, context)
      console.log('Rocker Released')
    }
  })

  const handleKeyDown = (e: KeyboardEvent): void => {
    switch (e.key) {
      case 'ArrowLeft':
        handleChangeDirection(RockerDirection.LEFT)
        break
      case 'ArrowRight':
        handleChangeDirection(RockerDirection.RIGHT)
        break
      case 'ArrowUp':
        handleChangeDirection(RockerDirection.UP)
        break
      case 'ArrowDown':
        handleChangeDirection(RockerDirection.DOWN)
        break
    }
  }

  // const handleKeyUp = (e: KeyboardEvent): void => {
  //   handleChangeDirection(RockerDirection.DEFAULT)
  // }

  document.addEventListener('keydown', handleKeyDown)
  // document.addEventListener('keyup', handleKeyUp)

  // 初始绘制
  drawRocker(ctx, context)

  const destroyRocker = (): void => {
    document.removeEventListener('keydown', handleKeyDown)
    // document.removeEventListener('keyup', handleKeyUp)
    hammer.destroy()
    rocker.remove()
  }

  return {
    rocker,
    destroyRocker
  }
}
