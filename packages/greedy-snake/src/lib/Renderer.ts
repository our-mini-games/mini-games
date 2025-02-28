import { Directions, GameStatus, Orientation, snakeSize } from '../config'
import { Coordinate, Snake, SnakePart } from '../types'
import { createCanvas, getControlPoints, getOrientation } from './utils'
import { createVirtualRocker, RockerDirection } from './VirtualRocker'
import { GreedySnakeContext } from './GreedySnake'
import { DRAW, EXIT, LENGTH_CHANGE, RESTART, STATUS_CHANGE } from '../config/constants'

export const renderHome = (el: string | HTMLElement, startGame: () => void): {
  mount: () => void
  unmount: () => void
} => {
  const oContainer = typeof el === 'string' ? document.querySelector<HTMLElement>(el) : el

  if (!oContainer || !('innerHTML' in oContainer)) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    throw new TypeError(`'el' expect a selector or a HTMLElement, but got a '${el}'`)
  }

  const oHome = document.createElement('div')
  oHome.classList.add('home')
  oHome.innerHTML = `
    <div class="background"></div>
    <div class="flowing-gradient"></div>
    <div class="particles" id="J_particles"></div>
    <div class="content">
      <h1 class="title">贪吃蛇</h1>
      <button class="btn btn-start" id="J_btn_start">开始游戏</button>
      <button class="btn btn-back" id="J_btn_back">返回首页</button>
    </div>
  `

  const handleStart = (): void => {
    startGame()
  }

  const handleBack = (): void => {
    window.location.href = '/mini-games'
  }

  const mount = (): void => {
    oContainer.appendChild(oHome)

    for (let i = 0; i < 100; i++) {
      const span = document.createElement('span')
      span.style.left = `${Math.random() * 100}vw`
      span.style.top = `${Math.random() * 100}vh`
      span.style.animationDelay = `${Math.random() * 5}s`
      document.querySelector('#J_particles')!.appendChild(span)
    }

    document.querySelector('#J_btn_start')!.addEventListener('click', handleStart)
    document.querySelector('#J_btn_back')!.addEventListener('click', handleBack)
  }

  const unmount = (): void => {
    document.querySelector('#J_btn_start')!.removeEventListener('click', handleStart)
    document.querySelector('#J_btn_back')!.removeEventListener('click', handleBack)
    oContainer.removeChild(oHome)
  }

  return {
    mount,
    unmount
  }
}

export const renderGameArea = (context: GreedySnakeContext): {
  mount: (el: HTMLElement) => void
  unmount: () => void
  draw: () => void
} => {
  const { width, height } = context.mainAreaSize

  const canvas = createCanvas(width, height)

  const ctx = canvas.getContext('2d')!

  const fillStyle = '#000'
  const eyeColor = '#fff'
  const tongueColor = '#f40'
  const foodColor = '#00ff88'

  // 行数量
  const rows = context.rows
  // 列数量
  const columns = context.columns
  const padding = {
    top: (height - rows * snakeSize) / 2,
    right: (width - columns * snakeSize) / 2,
    bottom: (height - rows * snakeSize) / 2,
    left: (width - columns * snakeSize) / 2
  }

  const drawBackground = (): void => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.strokeStyle = '#e1e1e1'
        ctx.strokeRect(j * snakeSize, i * snakeSize, snakeSize, snakeSize)
      }
    }
  }

  const drawSnake = (snake: Snake): void => {
    const head = snake[0]
    const bodies = snake.slice(1, -1)
    const tail = snake[snake.length - 1]

    drawHead(head, getOrientation(head, bodies[0]))

    bodies.forEach((body, index) => {
      drawBody(
        body,
        getOrientation(
          index === 0 ? head : bodies[index - 1],
          body
        ),
        getOrientation(
          index === bodies.length - 1 ? tail : bodies[index + 1],
          body
        )
      )
    })

    drawTail(tail, getOrientation(tail, bodies.at(-1)!))
  }

  const drawHead = (head: SnakePart, orientation: Orientation): void => {
    ctx.save()
    const width = snakeSize
    const height = snakeSize

    ctx.translate(head.x * width + width / 2, head.y * height + height / 2)

    switch (orientation) {
      case Orientation.top:
        ctx.rotate(-Math.PI / 2)
        break
      case Orientation.right:
        break
      case Orientation.bottom:
        ctx.rotate(Math.PI / 2)
        break
      case Orientation.left:
        ctx.rotate(Math.PI)
        break
    }

    ctx.beginPath()
    ctx.moveTo(-width / 2, -height / 4)
    ctx.bezierCurveTo(
      width / 2,
      -height * 0.8,
      width / 2,
      height * 0.8,
      -width / 2,
      height / 4
    )

    ctx.fillStyle = fillStyle
    ctx.fill()
    // ctx.stroke()

    // eyes
    ctx.beginPath()
    ctx.arc(-width * 0.1, -height * 0.2, 2, 0, Math.PI * 2)
    ctx.fillStyle = eyeColor
    ctx.fill()

    ctx.beginPath()
    ctx.arc(-width * 0.1, height * 0.2, 2, 0, Math.PI * 2)
    ctx.fillStyle = eyeColor
    ctx.fill()

    // tongue
    ctx.beginPath()
    ctx.moveTo(width * 0.1, 0)
    ctx.bezierCurveTo(
      width * 0.25,
      height * 0.2,
      width * 0.25,
      -height * 0.2,
      width * 0.5,
      0
    )
    ctx.strokeStyle = tongueColor
    ctx.stroke()

    ctx.restore()
  }

  const drawBody = (body: SnakePart, prevOrientation: Orientation, nextOrientation: Orientation): void => {
    ctx.save()
    const width = snakeSize
    const height = snakeSize

    ctx.translate(body.x * width + width / 2, body.y * height + height / 2)
    ctx.beginPath()
    // if (
    //   index % 2 === 0 &&
    //   (
    //     (prevOrientation === Orientation.top && nextOrientation === Orientation.bottom) ||
    //     (prevOrientation === Orientation.bottom && nextOrientation === Orientation.top)
    //   )
    // ) {
    //   ctx.scale(-1, 1)
    // }
    // if (
    //   index % 2 === 0 &&
    //   (
    //     (prevOrientation === Orientation.right && nextOrientation === Orientation.left) ||
    //     (prevOrientation === Orientation.left && nextOrientation === Orientation.right)
    //   )
    // ) {
    //   ctx.scale(1, -1)
    // }

    let startPoint1: Coordinate = { x: 0, y: 0 }
    let cp1: Coordinate | null = null
    let endPoint1: Coordinate = { x: 0, y: 0 }

    let startPoint2: Coordinate = { x: 0, y: 0 }
    let cp2: Coordinate | null = null
    let endPoint2: Coordinate = { x: 0, y: 0 }

    switch (prevOrientation) {
      case Orientation.top:
        startPoint1 = { x: -width / 4, y: -height / 2 }
        startPoint2 = { x: width / 4, y: -height / 2 }
        if (nextOrientation === Orientation.right) {
          startPoint1 = { x: width / 4, y: -height / 2 }
          startPoint2 = { x: -width / 4, y: -height / 2 }
        }
        break
      case Orientation.right:
        startPoint1 = { x: width / 2, y: -height / 4 }
        startPoint2 = { x: width / 2, y: height / 4 }
        if (nextOrientation === Orientation.top) {
          startPoint1 = { x: width / 2, y: height / 4 }
          startPoint2 = { x: width / 2, y: -height / 4 }
        }
        break
      case Orientation.bottom:
        startPoint1 = { x: -width / 4, y: height / 2 }
        startPoint2 = { x: width / 4, y: height / 2 }
        if (nextOrientation === Orientation.left) {
          startPoint1 = { x: width / 4, y: height / 2 }
          startPoint2 = { x: -width / 4, y: height / 2 }
        }
        break
      case Orientation.left:
        startPoint1 = { x: -width / 2, y: -height / 4 }
        startPoint2 = { x: -width / 2, y: height / 4 }
        if (nextOrientation === Orientation.bottom) {
          startPoint1 = { x: -width / 2, y: height / 4 }
          startPoint2 = { x: -width / 2, y: -height / 4 }
        }
        break
    }

    switch (nextOrientation) {
      case Orientation.top:
        endPoint1 = { x: -width / 4, y: -height / 2 }
        cp1 = getControlPoints(prevOrientation, nextOrientation, startPoint1, endPoint1)
        endPoint2 = { x: width / 4, y: -height / 2 }
        cp2 = getControlPoints(prevOrientation, nextOrientation, startPoint2, endPoint2)
        break
      case Orientation.right:
        endPoint1 = { x: width / 2, y: -height / 4 }
        cp1 = getControlPoints(prevOrientation, nextOrientation, startPoint1, endPoint1)
        endPoint2 = { x: width / 2, y: height / 4 }
        cp2 = getControlPoints(prevOrientation, nextOrientation, startPoint2, endPoint2)
        break
      case Orientation.bottom:
        endPoint1 = { x: -width / 4, y: height / 2 }
        cp1 = getControlPoints(prevOrientation, nextOrientation, startPoint1, endPoint1)
        endPoint2 = { x: width / 4, y: height / 2 }
        cp2 = getControlPoints(prevOrientation, nextOrientation, startPoint2, endPoint2)
        break
      case Orientation.left:
        endPoint1 = { x: -width / 2, y: -height / 4 }
        cp1 = getControlPoints(prevOrientation, nextOrientation, startPoint1, endPoint1)
        endPoint2 = { x: -width / 2, y: height / 4 }
        cp2 = getControlPoints(prevOrientation, nextOrientation, startPoint2, endPoint2)
        break
    }

    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.moveTo(startPoint1.x, startPoint1.y)
    if (cp1) {
      ctx.quadraticCurveTo(cp1.x, cp1.y, endPoint1.x, endPoint1.y)
    } else {
      ctx.lineTo(endPoint1.x, endPoint1.y)
    }

    ctx.lineTo(endPoint2.x, endPoint2.y)
    if (cp2) {
      ctx.quadraticCurveTo(cp2.x, cp2.y, startPoint2.x, startPoint2.y)
    } else {
      ctx.lineTo(startPoint2.x, startPoint2.y)
    }

    ctx.fillStyle = fillStyle

    ctx.fill()
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.moveTo(startPoint2.x, startPoint2.y)
    // if (cp2) {
    //   ctx.quadraticCurveTo(cp2.x, cp2.y, endPoint2.x, endPoint2.y)
    // } else {
    //   ctx.lineTo(endPoint2.x, endPoint2.y)
    // }
    // ctx.stroke()

    // ctx.fill()

    ctx.restore()
  }

  const drawTail = (tail: SnakePart, orientation: Orientation): void => {
    ctx.save()

    const width = snakeSize
    const height = snakeSize

    ctx.translate(tail.x * width + width / 2, tail.y * height + height / 2)

    switch (orientation) {
      case Orientation.top:
        ctx.scale((Math.random() > 0.5 ? 1 : -1), -1)
        break
      case Orientation.right:
        ctx.rotate(Math.PI / 2)
        ctx.scale((Math.random() > 0.5 ? 1 : -1), -1)
        break
      case Orientation.bottom:
        ctx.scale((Math.random() > 0.5 ? 1 : -1), 1)
        break
      case Orientation.left:
        ctx.rotate(Math.PI / 2)
        ctx.scale((Math.random() > 0.5 ? 1 : -1), 1)
        break
    }

    ctx.beginPath()
    ctx.fillStyle = fillStyle
    ctx.moveTo(-width / 4, -height / 2)
    ctx.quadraticCurveTo(-width / 2, height / 2, width / 2, height / 2)
    ctx.quadraticCurveTo(-width / 4, height / 4, width / 4, -height / 2)
    ctx.fill()

    ctx.restore()
  }

  const drawFood = (food: Coordinate): void => {
    ctx.save()
    ctx.translate(food.x * snakeSize + snakeSize / 2, food.y * snakeSize + snakeSize / 2)
    ctx.fillStyle = foodColor
    ctx.beginPath()
    ctx.shadowBlur = 10
    ctx.shadowColor = foodColor
    ctx.arc(0, 0, snakeSize / 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  const draw = (): void => {
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.translate(padding.left, padding.top)

    drawBackground()

    drawSnake(context.snake)
    drawFood(context.food)

    ctx.restore()
  }

  const mount = (el: HTMLElement): void => {
    el.appendChild(canvas)

    context.emitter.on(DRAW, draw)
  }

  const unmount = (): void => {
    canvas.remove()
  }

  return {
    mount,
    unmount,
    draw
  }
}

interface InfoButton {
  name: string
  text: string
  cx: number
  cy: number
  width: number
  height: number
  status: 'default' | 'hover'
}

export const renderInfo = (context: GreedySnakeContext): {
  mount: (el: HTMLElement) => void
  unmount: () => void
  render: (status: GameStatus, score: number) => void
} => {
  const width = context.mainAreaSize.width * 0.5
  const height = context.footerAreaSize.height

  const canvas = createCanvas(width, height)

  const ctx = canvas.getContext('2d')!

  const buttonGroup: InfoButton[] = [
    {
      name: 'ctrl',
      text: '暂停游戏',
      cx: width / 4,
      cy: height / 4,
      width: Math.max(80, width / 6),
      height: height / 4,
      status: 'default'
    },
    {
      name: 'esc',
      text: '不玩了',
      cx: width / 4,
      cy: height * 3 / 4,
      width: Math.max(80, width / 6),
      height: height / 4,
      status: 'default'
    }
  ]

  const renderButton = (button: InfoButton): void => {
    ctx.save()
    ctx.beginPath()
    ctx.translate(button.cx, button.cy)
    ctx.roundRect(-button.width / 2, -button.height / 2, button.width, button.height, height / 16)
    ctx.strokeStyle = button.status === 'hover' ? 'transparent' : '#333'
    ctx.stroke()

    const gradient = ctx.createLinearGradient(
      0,
      0,
      button.width,
      button.height
    )

    gradient.addColorStop(0, '#00ff88')
    gradient.addColorStop(1, '#0088ff')

    ctx.fillStyle = button.status === 'hover' ? gradient : 'transparent'
    ctx.fill()
    ctx.restore()

    drawText(ctx, button.name === 'ctrl' ? (context.status === GameStatus.paused ? '继续游戏' : context.status === GameStatus.finished ? '再来一局' : '暂停游戏') : button.text, {
      x: button.cx,
      y: button.cy,
      fontSize: button.height * 0.4,
      color: button.status === 'hover' ? '#fff' : '#333',
      textAlign: 'center',
      textBaseline: 'middle'
    })
  }

  const renderButtons = (): void => {
    buttonGroup.forEach((button) => {
      renderButton(button)
    })
  }

  const renderStatus = (status: GameStatus, score: number): void => {
    drawText(ctx, '状态：', {
      x: width * 3 / 4,
      y: height / 4,
      fontSize: height / 10,
      color: '#333',
      textAlign: 'right',
      textBaseline: 'middle'
    })
    drawText(ctx, status === GameStatus.paused ? '暂停中' : status === GameStatus.finished ? '已结束' : '游戏中', {
      x: width * 3 / 4,
      y: height / 4,
      fontSize: Math.min(14, height / 8),
      color: status === GameStatus.paused ? '#ff0' : status === GameStatus.finished ? '#f40' : '#0088ff',
      textAlign: 'left',
      textBaseline: 'middle'
    })

    drawText(ctx, '长度：', {
      x: width * 3 / 4,
      y: height * 3 / 4,
      fontSize: height / 10,
      color: '#333',
      textAlign: 'right',
      textBaseline: 'middle'
    })
    drawText(ctx, `${score}`, {
      x: width * 3 / 4,
      y: height * 3 / 4,
      fontSize: Math.min(14, height / 8),
      color: '#ff0088',
      textAlign: 'left',
      textBaseline: 'middle'
    })
  }

  const render = (): void => {
    ctx.clearRect(0, 0, width, height)

    renderButtons()
    renderStatus(context.status, context.length)
  }

  const handleMouseMove = (e: MouseEvent): void => {
    const x = e.clientX - canvas.offsetLeft
    const y = e.clientY - canvas.offsetTop

    for (const button of buttonGroup) {
      if (x > button.cx - button.width / 2 && x < button.cx + button.width / 2 && y > button.cy - button.height / 2 && y < button.cy + button.height / 2) {
        button.status = 'hover'
        canvas.style.cursor = 'pointer'
        break
      }

      button.status = 'default'
      canvas.style.cursor = 'default'
    }

    render()
  }

  const handleClick = (e: MouseEvent): void => {
    const x = e.clientX - canvas.offsetLeft
    const y = e.clientY - canvas.offsetTop

    for (const button of buttonGroup) {
      if (x > button.cx - button.width / 2 && x < button.cx + button.width / 2 && y > button.cy - button.height / 2 && y < button.cy + button.height / 2) {
        console.log(button.name)
        if (button.name === 'ctrl') {
          if (context.status === GameStatus.finished) {
            context.emitter.emit(RESTART)
          } else {
            context.emitter.emit(STATUS_CHANGE, context.status === GameStatus.paused ? GameStatus.playing : GameStatus.paused)
          }
        } else if (button.name === 'esc') {
          context.emitter.emit(EXIT)
        }
        break
      }
    }
  }

  const mount = (el: HTMLElement): void => {
    el.appendChild(canvas)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)
  }

  context.emitter.on(STATUS_CHANGE, render)
  context.emitter.on(LENGTH_CHANGE, render)

  const unmount = (): void => {
    canvas.remove()
  }

  return {
    mount,
    unmount,
    render
  }
}

export const renderRocker = (context: GreedySnakeContext): {
  mount: (el: HTMLElement) => void
  unmount: () => void
} => {
  const width = context.footerAreaSize.width * 0.5
  const height = context.footerAreaSize.height
  const min = Math.min(width, height)
  const { rocker, destroyRocker } = createVirtualRocker({
    width,
    height,
    baseRadius: min * 0.4,
    handleRadius: min * 0.2,
    baseColor: [255, 255, 255],
    handleColor: [0, 255, 136],
    edgeLightColor: [0, 255, 136],
    onDirectionChange: (direction: RockerDirection) => {
      context.direction = direction === RockerDirection.UP ? Directions.up : direction === RockerDirection.RIGHT ? Directions.right : direction === RockerDirection.DOWN ? Directions.down : Directions.left
    }
  })

  const mount = (el: HTMLElement): void => {
    el.appendChild(rocker)
  }

  const unmount = (): void => {
    destroyRocker()
  }

  return {
    mount,
    unmount
  }
}

interface DrawTextOptions {
  x?: number
  y?: number
  fontSize?: number
  fontFamily?: string
  fontWeight?: string
  color?: string
  textAlign?: CanvasTextAlign
  textBaseline?: CanvasTextBaseline
}

function drawText (ctx: CanvasRenderingContext2D, text: string, options: DrawTextOptions = {}): void {
  const { x, y, fontSize, fontFamily, fontWeight, color, textAlign, textBaseline } = options

  ctx.save()
  ctx.font = `${fontWeight ?? 'normal'} ${fontSize ?? 16}px ${fontFamily ?? 'Arial'}`
  ctx.fillStyle = color ?? '#000'
  ctx.textAlign = textAlign ?? 'center'
  ctx.textBaseline = textBaseline ?? 'middle'
  ctx.fillText(text, x ?? 0, y ?? 0)
  ctx.restore()
}
