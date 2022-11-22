import { GameStatus, Tetrominos } from '../config'
import { getNextTetris } from '../lib/utils'
import { Coordinate, Tetris } from '../types'
import type { Ref } from 'vue'

export default (
  currentTetris: Ref<Tetris | undefined>,
  nextTetris: Ref<Tetris | undefined>,
  gameStatus: Ref<GameStatus>
): { startup: () => void } => {
  let startTime = Date.now()
  let requestId: number = 0

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const binding = ref<Coordinate[][]>([])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tetrisLowestPoints = computed(() => {
    if (!currentTetris.value) return []

    return []
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const bindingHighestPoints = computed(() => {
    return []
  })

  const startup = (): void => {
    nextTetris.value = getNextTetris()
    changeCurrent()
  }

  const changeCurrent = (): void => {
    if (!nextTetris.value) {
      nextTetris.value = getNextTetris()
    }

    const isI = nextTetris.value.tetrominos === Tetrominos.I

    currentTetris.value = {
      ...nextTetris.value,
      coordinates: nextTetris.value.coordinates.map(({ x, y }) => {
        return {
          x: x + (isI ? 3 : 4),
          y: y - (isI ? 4 : 3)
        }
      }) as Tetris['coordinates']
    }
    nextTetris.value = getNextTetris()

    run()
  }

  const run = (): void => {
    if (!currentTetris.value) {
      cancelAnimationFrame(requestId)
      return
    }

    const currentTime = Date.now()

    if (Date.now() - startTime > 500) {
      console.log('RUN')
      currentTetris.value.coordinates = currentTetris.value.coordinates.map(({ x, y }) => {
        return {
          x,
          y: y + 1
        }
      }) as Tetris['coordinates']
      startTime = currentTime
    }
    requestId = requestAnimationFrame(run)
  }

  return {
    startup
  }
}
