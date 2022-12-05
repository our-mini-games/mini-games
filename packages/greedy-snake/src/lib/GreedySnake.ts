import { Directions, GameStatus } from '../config'
import { GAME_OVER, PAUSED, PLAYING } from '../config/constants'
import { Coordinate } from '../types'
import EventEmitter from './EventEmitter'
import type GameCanvas from './GameCanvas'
import { rangeRandom } from './utils'
import throttle from 'lodash.throttle'
export interface Snake extends Coordinate {
  part: 'HEAD' | 'BODY' | 'TAIL'
}

export default class GreedySnake extends EventEmitter {
  canvas: GameCanvas
  width: number
  height: number

  readonly speed = 100

  #snake: Snake[] = []
  #food: Coordinate = { x: 0, y: 0 }

  // 方向
  #direction: Directions = Directions.right
  // 游戏状态
  #status: GameStatus = GameStatus.finished

  requestId: number = 0
  startTime: number = 0

  get snake (): Snake[] {
    return this.#snake
  }

  set snake (snake: Snake[]) {
    this.#snake = snake
  }

  constructor (canvas: GameCanvas, width: number, height: number) {
    super()

    this.canvas = canvas
    this.width = width
    this.height = height

    this.init()
    this.initEvent()
  }

  init (): void {
    this.snake = [
      { part: 'HEAD', x: 2, y: 0 },
      { part: 'BODY', x: 1, y: 0 },
      { part: 'TAIL', x: 0, y: 0 }
    ]
    this.#food = this.#makeFood()
    this.#direction = Directions.right
    this.#status = GameStatus.playing

    this.startTime = Date.now()
    this.run()
  }

  initEvent (): void {
    this.handleKeyDown = throttle(this.handleKeyDown.bind(this), this.speed)
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  destroy (): void {
    this.snake = []
    this.#status = GameStatus.finished
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  run (): void {
    if (this.#status !== GameStatus.playing) {
      cancelAnimationFrame(this.requestId)
      return
    }

    const nowTime = Date.now()
    if (nowTime - this.startTime >= this.speed) {
      this.getNextFrame()
      this.startTime = nowTime
    }

    this.canvas.draw(this.snake, this.#food)

    this.requestId = requestAnimationFrame(this.run.bind(this))
  }

  setStatus (newStatus: GameStatus, oldStatus?: GameStatus): void {
    this.#status = newStatus

    switch (newStatus) {
      case GameStatus.finished:
        this.emit(GAME_OVER, this.snake.length)
        return
      case GameStatus.paused:
        this.emit(PAUSED)
        break
      case GameStatus.playing:
        this.emit(PLAYING)
        break
    }

    if (oldStatus === GameStatus.paused && newStatus === GameStatus.playing) {
      this.run()
    }
  }

  play (): void {
    this.setStatus(GameStatus.playing, GameStatus.paused)
  }

  #makeFood (): Coordinate {
    const snake = this.snake
    const { width, height } = this

    const x = rangeRandom(0, width - 1)
    const y = rangeRandom(0, height - 1)

    if (this.snake.length >= width * height) {
      this.emit(GAME_OVER, this.snake.length)
      return { x: 0, y: 0 }
    }

    if (snake.some(item => item.x === x && item.y === y)) {
      return this.#makeFood()
    }

    return {
      x,
      y
    }
  }

  getNextFrame (): void {
    const food = this.#food

    const { width, height } = this

    const head = this.snake[0]

    const nextHead: Snake = { ...head }

    switch (this.#direction) {
      case Directions.up:
        nextHead.y -= 1
        break
      case Directions.right:
        nextHead.x += 1
        break
      case Directions.down:
        nextHead.y += 1
        break
      case Directions.left:
        nextHead.x -= 1
        break
    }

    if (
      nextHead.x < 0 || nextHead.x >= width ||
      nextHead.y < 0 || nextHead.y >= height
    ) {
      switch (this.#direction) {
        case Directions.left: nextHead.x = width - 1; break
        case Directions.right: nextHead.x = 0; break
        case Directions.up: nextHead.y = height - 1; break
        case Directions.down: nextHead.y = 0; break
      }
    }

    if (this.snake.some(item => item.x === nextHead.x && item.y === nextHead.y)) {
      this.setStatus(GameStatus.finished, GameStatus.playing)
      return
    }

    // 吃到食物
    if (nextHead.x === food.x && nextHead.y === food.y) {
      head.part = 'BODY'
      this.snake.unshift(nextHead)
      this.#food = this.#makeFood()
      return
    }

    head.part = 'BODY'
    this.snake.pop()
    this.snake.unshift(nextHead)
    this.snake.at(-1)!.part = 'TAIL'
  }

  handleKeyDown (e: KeyboardEvent): void {
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        if (this.#direction !== Directions.down) {
          this.#direction = Directions.up
        }
        break
      case 'ArrowRight':
      case 'KeyD':
        if (this.#direction !== Directions.left) {
          this.#direction = Directions.right
        }
        break
      case 'ArrowDown':
      case 'KeyS':
        if (this.#direction !== Directions.up) {
          this.#direction = Directions.down
        }
        break
      case 'ArrowLeft':
      case 'KeyA':
        if (this.#direction !== Directions.right) {
          this.#direction = Directions.left
        }
        break
      case 'Space':
        if (this.#status === GameStatus.finished) {
          return
        }
        this.setStatus(
          this.#status === GameStatus.paused
            ? GameStatus.playing
            : GameStatus.paused,
          this.#status
        )
        break
    }
  }
}
