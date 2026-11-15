import { Directions, GameStatus, Orientation, snakeSize } from '../config/index.js'
import { Coordinate, Snake, SnakePart } from '../types/index.js'
import { createCanvas, getControlPoints, getOrientation } from './utils.js'
import { createVirtualRocker, RockerDirection } from './VirtualRocker.js'
import { GreedySnakeContext } from './GreedySnake.js'
import { DRAW, EXIT, LENGTH_CHANGE, RESTART, STATUS_CHANGE } from '../config/constants.js'

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
  oHome.classList.add('arcade-menu')
  oHome.innerHTML = `
    <div class="arcade-menu-content arcade-panel">
      <h1 class="arcade-title">贪吃蛇</h1>
      <div class="arcade-menu-actions">
        <button class="arcade-button arcade-button--primary" id="J_btn_start">开始游戏</button>
        <button class="arcade-button" id="J_btn_back">返回合集</button>
      </div>
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
  canvas.className = 'snake-board arcade-table'

  const ctx = canvas.getContext('2d')!

  const snakeGlaze = (): CanvasGradient => {
    const glaze = ctx.createLinearGradient(0, -snakeSize / 2, 0, snakeSize / 2)
    glaze.addColorStop(0, '#d4e7c8')
    glaze.addColorStop(0.48, '#a2d2bc')
    glaze.addColorStop(1, '#658b73')
    return glaze
  }
  const eyeColor = '#17291f'
  const tongueColor = '#f29b8f'
  const foodColor = '#e4bc72'

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
        ctx.strokeStyle = 'rgba(162, 210, 188, .15)'
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

    ctx.fillStyle = snakeGlaze()
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

    ctx.fillStyle = snakeGlaze()

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
    ctx.fillStyle = snakeGlaze()
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
    ctx.shadowBlur = 5
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

export const renderInfo = (context: GreedySnakeContext): {
  mount: (el: HTMLElement) => void
  unmount: () => void
} => {
  const info = document.createElement('div')
  info.className = 'snake-info'
  info.innerHTML = `
    <div class="snake-meters">
      <span class="arcade-meter">长度 <output class="snake-length"></output></span>
      <span class="arcade-meter"><strong class="snake-status"></strong></span>
    </div>
    <div class="snake-actions">
      <button class="arcade-button arcade-button--primary snake-control"></button>
      <button class="arcade-button snake-exit">返回菜单</button>
    </div>
  `
  const control = info.querySelector<HTMLButtonElement>('.snake-control')!
  const status = info.querySelector<HTMLElement>('.snake-status')!
  const length = info.querySelector<HTMLOutputElement>('.snake-length')!

  const render = (): void => {
    const { paused, playing } = GameStatus
    control.textContent = context.status === playing ? '暂停游戏' : context.status === paused ? '继续游戏' : '再来一局'
    status.textContent = context.status === playing ? '游戏中' : context.status === paused ? '已暂停' : '已结束'
    status.dataset.state = GameStatus[context.status]
    length.value = String(context.length)
  }

  control.addEventListener('click', () => {
    if (context.status === GameStatus.finished) {
      context.emitter.emit(RESTART)
    } else {
      context.status = context.status === GameStatus.paused ? GameStatus.playing : GameStatus.paused
    }
  })
  info.querySelector('.snake-exit')!.addEventListener('click', () => context.emitter.emit(EXIT))

  return {
    mount (el) {
      el.appendChild(info)
      context.emitter.on(STATUS_CHANGE, render)
      context.emitter.on(LENGTH_CHANGE, render)
      render()
    },
    unmount () {
      context.emitter.off(STATUS_CHANGE, render)
      context.emitter.off(LENGTH_CHANGE, render)
      info.remove()
    }
  }
}

export const renderRocker = (context: GreedySnakeContext): {
  mount: (el: HTMLElement) => void
  unmount: () => void
} => {
  const width = Math.min(context.footerAreaSize.width * 0.46, 230)
  const height = context.footerAreaSize.height
  const min = Math.min(width, height)
  const { rocker, destroyRocker } = createVirtualRocker({
    width,
    height,
    baseRadius: min * 0.4,
    handleRadius: min * 0.2,
    baseColor: [180, 197, 185],
    handleColor: [162, 210, 188],
    edgeLightColor: [228, 188, 114],
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
