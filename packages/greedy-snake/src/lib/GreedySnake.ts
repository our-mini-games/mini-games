import { GameStatus, Directions, snakeSize } from '../config'
import { DIRECTION_CHANGE, DRAW, EXIT, GAME_OVER, LENGTH_CHANGE, STATUS_CHANGE } from '../config/constants'
import { Snake, SnakePart, Coordinate } from '../types'
import EventEmitter from './EventEmitter'
import { rangeRandom } from './utils'
import throttle from 'lodash.throttle'

export interface GreedySnakeContext {
  columns: number
  rows: number
  mainAreaSize: {
    width: number
    height: number
  }
  footerAreaSize: {
    width: number
    height: number
  }
  speed: number
  snake: Snake
  food: Coordinate
  status: GameStatus
  direction: Directions
  startTime: number
  readonly length: number
  readonly emitter: EventEmitter
}

export const createContext = (): GreedySnakeContext => {
  let _status = GameStatus.finished
  let _direction = Directions.right

  const emitter = new EventEmitter()

  const { innerWidth, innerHeight } = window

  const mainAreaSize = {
    width: innerWidth,
    height: innerHeight * 0.8
  }

  const footerAreaSize = {
    width: innerWidth,
    height: innerHeight * 0.2
  }

  return {
    columns: Math.floor(mainAreaSize.width / snakeSize),
    rows: Math.floor(mainAreaSize.height / snakeSize),
    mainAreaSize,
    footerAreaSize,
    speed: 100,
    snake: [],
    food: { x: 0, y: 0 },
    get status () {
      return _status
    },
    set status (newStatus: GameStatus) {
      _status = newStatus
      emitter.emit(STATUS_CHANGE, newStatus)
    },
    get direction () {
      return _direction
    },
    set direction (newDirection: Directions) {
      if (_status !== GameStatus.playing) {
        return
      }

      switch (_direction) {
        case Directions.up:
          if (newDirection !== Directions.down) {
            _direction = newDirection
          }
          break
        case Directions.right:
          if (newDirection !== Directions.left) {
            _direction = newDirection
          }
          break
        case Directions.down:
          if (newDirection !== Directions.up) {
            _direction = newDirection
          }
          break
        case Directions.left:
          if (newDirection !== Directions.right) {
            _direction = newDirection
          }
          break
      }

      emitter.emit(DIRECTION_CHANGE, newDirection)
    },
    get length () {
      return this.snake.length
    },
    startTime: 0,
    emitter
  }
}

export const createGreedySnake = (context: GreedySnakeContext): {
  init: () => void
  destroy: () => void
} => {
  const { columns, rows } = context

  let requestId: number = 0

  const init = (): void => {
    document.addEventListener('keydown', handleKeyDown, false)

    context.emitter.on(STATUS_CHANGE, () => {
      if (context.status === GameStatus.paused || context.status === GameStatus.finished) {
        cancelAnimationFrame(requestId)
      } else if (context.status === GameStatus.playing) {
        run()
      }
    })

    context.snake = [
      { part: 'HEAD', x: Math.floor(columns / 2), y: Math.floor(rows / 2) },
      { part: 'BODY', x: Math.floor(columns / 2) - 1, y: Math.floor(rows / 2) },
      { part: 'TAIL', x: Math.floor(columns / 2) - 2, y: Math.floor(rows / 2) }
    ]
    context.food = generateFood()

    context.direction = Directions.right
    context.status = GameStatus.playing
    context.startTime = performance.now()
  }

  const generateFood = (): Coordinate => {
    const snake = context.snake
    const { columns, rows } = context

    const x = rangeRandom(0, columns - 1)
    const y = rangeRandom(0, rows - 1)

    if (context.snake.length >= columns * rows) {
      context.emitter.emit(GAME_OVER, context.snake.length)
      return { x: 0, y: 0 }
    }

    if (snake.some(item => item.x === x && item.y === y)) {
      return generateFood()
    }

    return {
      x,
      y
    }
  }

  const handleKeyDown = throttle((e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        if (context.direction !== Directions.down) {
          context.direction = Directions.up
        }
        break
      case 'ArrowRight':
      case 'KeyD':
        if (context.direction !== Directions.left) {
          context.direction = Directions.right
        }
        break
      case 'ArrowDown':
      case 'KeyS':
        if (context.direction !== Directions.up) {
          context.direction = Directions.down
        }
        break
      case 'ArrowLeft':
      case 'KeyA':
        if (context.direction !== Directions.right) {
          context.direction = Directions.left
        }
        break
      case 'Space':
        if (context.status === GameStatus.finished) {
          return
        }
        if (context.status === GameStatus.paused) {
          context.status = GameStatus.playing
          run()
        } else {
          context.status = GameStatus.paused
        }
        break
      case 'Escape':
        context.emitter.emit(EXIT)
        break
    }
  }, context.speed)

  const getNextFrame = (): void => {
    const food = context.food

    const { columns, rows } = context

    const head = context.snake[0]

    const nextHead: SnakePart = { ...head }

    switch (context.direction) {
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
      nextHead.x < 0 || nextHead.x >= columns ||
      nextHead.y < 0 || nextHead.y >= rows
    ) {
      switch (context.direction) {
        case Directions.left: nextHead.x = columns - 1; break
        case Directions.right: nextHead.x = 0; break
        case Directions.up: nextHead.y = rows - 1; break
        case Directions.down: nextHead.y = 0; break
      }
    }

    if (context.snake.some(item => item.x === nextHead.x && item.y === nextHead.y)) {
      context.status = GameStatus.finished
      return
    }

    // 吃到食物
    if (nextHead.x === food.x && nextHead.y === food.y) {
      head.part = 'BODY'
      context.snake.unshift(nextHead)
      context.food = generateFood()
      context.emitter.emit(LENGTH_CHANGE, context.snake.length)
      return
    }

    head.part = 'BODY'
    context.snake.pop()
    context.snake.unshift(nextHead)
    context.snake.at(-1)!.part = 'TAIL'
  }

  const run = (): void => {
    if (context.status !== GameStatus.playing) {
      cancelAnimationFrame(requestId)
      return
    }

    const nowTime = performance.now()
    if (nowTime - context.startTime >= context.speed) {
      getNextFrame()
      context.startTime = nowTime
    }

    context.emitter.emit(DRAW)

    requestId = requestAnimationFrame(run)
  }

  const destroy = (): void => {
    cancelAnimationFrame(requestId)
    document.removeEventListener('keydown', handleKeyDown, false)
  }

  return {
    init,
    destroy
  }
}
