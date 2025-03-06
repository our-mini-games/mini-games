import { ComputedRef, Ref } from 'vue'
import Hammer from 'hammerjs'
import { classicalLayouts, PERSONS, KlotskiItem } from '../config'
import { canMove, generateKlotskiItems, getGenerals } from '../lib/utils'

export interface KlotskiLevelInfo {
  klotskiItems: KlotskiItem[]
  level: number
  name: string
  desc: string
}

export enum KlotskiGameStatus {
  Default = 'default',
  Playing = 'playing',
  Paused = 'paused',
  Completed = 'completed',
  Finished = 'finished'
}

export interface Klotski {
  currentLevel: Ref<number>
  currentLevelInfo: Ref<KlotskiLevelInfo | null>
  klotskiItems: ComputedRef<KlotskiItem[]>
  gameStatus: Ref<KlotskiGameStatus>
  usedTime: Ref<number>
  step: Ref<number>

  start: () => void
  pause: () => void
  reset: () => void
  handleMove: (name: string, direction: number) => void

  setLevel: (level: number) => void
  nextLevel: () => void
  prevLevel: () => void
}

const STORAGE_KEY = 'KLOTSKI_STORAGE'

export const useKlotski = (): Klotski => {
  let timer: NodeJS.Timeout
  const step = ref(0)
  const usedTime = ref(0)

  const gameStatus = ref(KlotskiGameStatus.Default)

  const currentLevel = ref(1)
  const currentLevelInfo = ref<KlotskiLevelInfo | null>(null)

  const klotskiItems = computed(() => {
    return currentLevelInfo.value?.klotskiItems ?? []
  })

  const initGame = (): void => {
    const {
      id,
      name,
      desc,
      layouts
    } = classicalLayouts.find(item => item.id === currentLevel.value)!

    const { horizontalGenerals, verticalGenerals } = getGenerals(desc)
    let pawnLength = 4

    currentLevelInfo.value = {
      level: id,
      name,
      desc,
      klotskiItems: generateKlotskiItems(layouts).map(item => {
        let name = item.name

        switch (name) {
          case 'HORIZONTAL_GENERAL':
            name = horizontalGenerals.shift()!
            break
          case 'VERTICAL_GENERAL':
            name = verticalGenerals.shift()!
            break
          case 'PAWN':
            name = PERSONS[`Pawn${pawnLength--}` as keyof typeof PERSONS]
            break
          default:
            break
        }

        return {
          ...item,
          name
        }
      })
    }
  }

  const setLevel = (level: number): void => {
    if (level !== currentLevel.value) {
      currentLevel.value = level
      reset()
    }
  }

  const nextLevel = (): void => {
    if (currentLevel.value <= classicalLayouts.length) {
      currentLevel.value++
      reset()
    }
  }

  const prevLevel = (): void => {
    if (currentLevel.value > 1) {
      currentLevel.value--
      reset()
    }
  }

  const start = (): void => {
    initGame()
    gameStatus.value = KlotskiGameStatus.Playing

    timer = setInterval(() => {
      usedTime.value++
    }, 1000)
  }

  const pause = (): void => {
    clearInterval(timer)
    gameStatus.value = KlotskiGameStatus.Paused
  }

  const reset = (): void => {
    clearInterval(timer)
    usedTime.value = 0
    step.value = 0
    start()
  }

  const handleMove = (name: string, direction: number): void => {
    const item = currentLevelInfo.value!.klotskiItems.find(item => item.name === name)
    if (!item) {
      return
    }

    const nextPosition = canMove(item, currentLevelInfo.value!.klotskiItems, direction)

    if (!nextPosition) {
      return
    }

    item.x = nextPosition.x
    item.y = nextPosition.y
    step.value++

    if (item.name === PERSONS.Caocao && item.x === 1 && item.y === 3) {
      gameStatus.value = KlotskiGameStatus.Completed
    }
  }

  watch([currentLevel, gameStatus], ([level, status]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ level, status }))
    } catch (error) {
      console.error(error)
    }
  })

  let hammer: HammerManager | null = null
  onMounted(async () => {
    try {
      const storage = localStorage.getItem(STORAGE_KEY)
      if (storage) {
        const { level, status } = JSON.parse(storage)
        setLevel(level)
        gameStatus.value = status as KlotskiGameStatus
      }
    } catch (error) {
      console.error(error)
    }

    if (gameStatus.value !== KlotskiGameStatus.Completed) {
      start()
    } else {
      initGame()
    }

    await nextTick()

    const container = document.querySelector('.klotski-board')
    hammer = new Hammer(container as HTMLElement)

    hammer.get('pan').set({
      direction: Hammer.DIRECTION_ALL
    })

    let target: HTMLElement | null = null
    let isDragging = false

    hammer.on('panstart', (e) => {
      e.preventDefault()
      if (gameStatus.value === KlotskiGameStatus.Playing && e.target.classList.contains('klotski-item')) {
        target = e.target
        isDragging = true
      }
    })

    hammer.on('panmove', e => {
      e.preventDefault()
      if (isDragging && target) {
        // const direction = Math.abs(e.overallVelocityX) > Math.abs(e.overallVelocityY) ? e.overallVelocityX > 0 ? Hammer.DIRECTION_RIGHT : Hammer.DIRECTION_LEFT : e.overallVelocityY > 0 ? Hammer.DIRECTION_DOWN : Hammer.DIRECTION_UP
        // target.style.transform = `translate(${direction === Hammer.DIRECTION_RIGHT || direction === Hammer.DIRECTION_LEFT ? e.deltaX : 0}px, ${direction === Hammer.DIRECTION_DOWN || direction === Hammer.DIRECTION_UP ? e.deltaY : 0}px)`
        target.style.transform = `translate(${e.deltaX}px, ${e.deltaY}px)`
      }
    })

    hammer.on('panend', (e) => {
      e.preventDefault()
      if (isDragging && target) {
        const direction = Math.abs(e.overallVelocityX) > Math.abs(e.overallVelocityY) ? e.overallVelocityX > 0 ? Hammer.DIRECTION_RIGHT : Hammer.DIRECTION_LEFT : e.overallVelocityY > 0 ? Hammer.DIRECTION_DOWN : Hammer.DIRECTION_UP
        handleMove(target.getAttribute('data-name') as string, direction)
        target.style.transform = 'translate(0, 0)'

        isDragging = false
        target = null
      }
    })
  })

  onBeforeUnmount(() => {
    if (hammer) {
      hammer.destroy()
    }
  })

  return {
    currentLevel,
    currentLevelInfo,
    klotskiItems,
    gameStatus,
    usedTime,
    step,

    start,
    pause,
    reset,
    handleMove,

    setLevel,
    nextLevel,
    prevLevel
  }
}
