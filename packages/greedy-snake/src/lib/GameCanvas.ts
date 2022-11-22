import { Orientation } from '../config'
import { Coordinate } from '../types'
import { Snake } from './GreedySnake'

interface GameCanvasOptions {
  width: number
  height: number
  snakeSize: number
  snakeColor?: string
  foodColor?: string
}

export default class GameCanvas {
  root: HTMLElement
  width: number
  height: number
  snakeSize: number

  snakeColor: string = '#333'
  foodColor: string = '#f40'

  #canvas: HTMLCanvasElement | null = null
  #ctx: CanvasRenderingContext2D | null = null

  constructor (el: string | HTMLElement, options: GameCanvasOptions) {
    const root = typeof el === 'string'
      ? document.querySelector<HTMLElement>(el)
      : el

    if (!root || !('innerHTML' in root)) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      throw new TypeError(`'el' expect a selector or a HTMLElement, but got a '${el}'`)
    }

    this.root = root

    this.width = options.width
    this.height = options.height
    this.snakeSize = options.snakeSize
    if (options.snakeColor) {
      this.snakeColor = options.snakeColor
    }
    if (options.foodColor) {
      this.foodColor = options.foodColor
    }

    this.init()
  }

  init (): void {
    if (!this.#canvas || !this.#ctx) {
      this.createCanvas()
    }
  }

  createCanvas (): void {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    canvas.classList.add('greedy-snake-canvas')

    canvas.width = this.width
    canvas.height = this.height

    this.#canvas = canvas
    this.#ctx = ctx

    this.root.appendChild(canvas)
  }

  draw (snake: Snake[], food: Coordinate): void {
    const ctx = this.#ctx

    if (!ctx) return

    this.clear()

    this.drawLine()

    const head = snake.find(item => item.part === 'HEAD')
    const bodies = snake.filter(item => item.part === 'BODY')
    const tail = snake.find(item => item.part === 'TAIL')
    if (head && bodies.length > 0 && tail) {
      this.#drawHead(head, GameCanvas.getOrientation(head, bodies[0]))
      this.#drawBodies(bodies)
      this.#drawTail(tail, GameCanvas.getOrientation(tail, bodies.at(-1)!))
    }

    if (food) {
      this.#drawFood(food)
    }
  }

  drawLine (): void {
    const ctx = this.#ctx
    if (!ctx) return

    const { width, height, snakeSize } = this

    const column = width / snakeSize
    const row = height / snakeSize

    for (let x = 0; x < column; x++) {
      ctx.beginPath()
      ctx.strokeStyle = '#f1f1f1'
      ctx.moveTo(x * snakeSize, 0)
      ctx.lineTo(x * snakeSize, height)
      ctx.stroke()
      ctx.closePath()
    }

    for (let y = 0; y < row; y++) {
      ctx.beginPath()
      ctx.strokeStyle = '#f1f1f1'
      ctx.moveTo(0, y * snakeSize)
      ctx.lineTo(width, y * snakeSize)
      ctx.stroke()
      ctx.closePath()
    }
  }

  #drawHead (head: Snake, orientation: Orientation): void {
    const ctx = this.#ctx
    if (!ctx) return

    const { x, y } = head
    const { snakeSize, snakeColor: color } = this

    ctx.save()
    ctx.translate(x * snakeSize, y * snakeSize)

    ctx.strokeStyle = color
    ctx.strokeRect(2, 2, snakeSize - 4, snakeSize - 4)

    let eyeA: Coordinate
    let eyeB: Coordinate
    switch (orientation) {
      case Orientation.top:
        eyeA = {
          x: 7,
          y: 7
        }
        eyeB = {
          x: snakeSize - 7,
          y: 7
        }
        break
      case Orientation.bottom:
        eyeA = {
          x: 7,
          y: snakeSize - 7
        }
        eyeB = {
          x: snakeSize - 7,
          y: snakeSize - 7
        }
        break
      case Orientation.left:
        eyeA = {
          x: 7,
          y: 7
        }
        eyeB = {
          x: 7,
          y: snakeSize - 7
        }
        break
      case Orientation.right:
        eyeA = {
          x: snakeSize - 7,
          y: 7
        }
        eyeB = {
          x: snakeSize - 7,
          y: snakeSize - 7
        }
        break
    }

    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(eyeA.x, eyeA.y, 2, 0, 2 * Math.PI)
    ctx.arc(eyeB.x, eyeB.y, 2, 0, 2 * Math.PI)
    ctx.fill()

    ctx.restore()
  }

  #drawBodies (bodies: Snake[]): void {
    const ctx = this.#ctx
    if (!ctx) return

    const { snakeSize, snakeColor: color } = this

    bodies.forEach(body => {
      ctx.save()
      ctx.translate(body.x * snakeSize, body.y * snakeSize)

      ctx.strokeStyle = color
      ctx.strokeRect(2, 2, snakeSize - 4, snakeSize - 4)

      ctx.fillStyle = color
      ctx.fillRect(4, 4, snakeSize - 8, snakeSize - 8)

      ctx.restore()
    })
  }

  #drawTail (tail: Snake, orientation: Orientation): void {
    const ctx = this.#ctx
    if (!ctx) return

    const { snakeSize, snakeColor: color } = this

    ctx.save()
    ctx.translate(tail.x * snakeSize, tail.y * snakeSize)

    ctx.strokeStyle = color
    ctx.strokeRect(2, 2, snakeSize - 4, snakeSize - 4)

    let angleA: Coordinate
    let angleB: Coordinate
    let angleC: Coordinate

    switch (orientation) {
      case Orientation.top:
        angleA = {
          x: snakeSize / 2,
          y: 4
        }
        angleB = {
          x: 4,
          y: snakeSize - 4
        }
        angleC = {
          x: snakeSize - 4,
          y: snakeSize - 4
        }
        break
      case Orientation.bottom:
        angleA = {
          x: snakeSize / 2,
          y: snakeSize - 4
        }
        angleB = {
          x: 4,
          y: 4
        }
        angleC = {
          x: snakeSize - 4,
          y: 4
        }
        break
      case Orientation.left:
        angleA = {
          x: 4,
          y: snakeSize / 2
        }
        angleB = {
          x: snakeSize - 4,
          y: 4
        }
        angleC = {
          x: snakeSize - 4,
          y: snakeSize - 4
        }
        break
      case Orientation.right:
        angleA = {
          x: snakeSize - 4,
          y: snakeSize / 2
        }
        angleB = {
          x: 4,
          y: 4
        }
        angleC = {
          x: 4,
          y: snakeSize - 4
        }
        break
    }

    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(angleA.x, angleA.y)
    ctx.lineTo(angleB.x, angleB.y)
    ctx.lineTo(angleC.x, angleC.y)
    ctx.closePath()
    ctx.fill()

    ctx.restore()
  }

  #drawFood (food: Coordinate): void {
    const ctx = this.#ctx

    if (!ctx) return

    const { snakeSize, foodColor: color } = this

    ctx.save()
    ctx.translate(food.x * snakeSize, food.y * snakeSize)

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.arc(snakeSize / 2, snakeSize / 2, snakeSize / 2 - 2, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(snakeSize / 2, snakeSize / 2, snakeSize / 2 - 4, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()

    ctx.restore()
  }

  clear (): void {
    const { width, height } = this
    const ctx = this.#ctx

    if (!ctx) return

    ctx.clearRect(0, 0, width, height)
  }

  destroy (): void {
    if (this.#canvas) {
      this.root.removeChild(this.#canvas)
    }
  }

  static getOrientation ({ x: x1, y: y1 }: Coordinate, { x: x2, y: y2 }: Coordinate): Orientation {
    if (x1 === x2) {
      return y1 > y2 ? Orientation.bottom : Orientation.top
    }
    if (y1 === y2) {
      return x1 > x2 ? Orientation.right : Orientation.left
    }

    return Orientation.right
  }
}
