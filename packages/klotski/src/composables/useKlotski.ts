import { ComputedRef, Ref } from 'vue'
import Hammer from 'hammerjs'
import { classicalLayouts, PERSONS, KlotskiItem, Rect } from '../config'
import { canMove, generateKlotskiItems, getGenerals } from '../lib/utils'
import { usePointerTip } from './usePointerTip'

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

const { addPointerTip, removePointerTip } = usePointerTip()

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentItem: KlotskiItem | undefined
  const curAvailableDir: Array<Rect | null> = []
  const handleMove = (name: string, direction: number): void => {
    if (!currentItem) {
      return
    }

    const nextPosition = curAvailableDir[direction]

    if (!nextPosition) {
      return
    }

    currentItem.x = nextPosition.x
    currentItem.y = nextPosition.y
    step.value++

    if (currentItem.name === PERSONS.Caocao && currentItem.x === 1 && currentItem.y === 3) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let canMoveDir = 0

    const prepareItem = (target: HTMLElement): boolean => {
      const name = target.getAttribute('data-name') as string
      currentItem = currentLevelInfo.value!.klotskiItems.find(item => item.name === name)
      canMoveDir = 0
      curAvailableDir.fill(null)
      if ((curAvailableDir[2] = canMove(currentItem!, currentLevelInfo.value!.klotskiItems, 2))) { canMoveDir |= 2 }
      if ((curAvailableDir[4] = canMove(currentItem!, currentLevelInfo.value!.klotskiItems, 4))) { canMoveDir |= 4 }
      if ((curAvailableDir[8] = canMove(currentItem!, currentLevelInfo.value!.klotskiItems, 8))) { canMoveDir |= 8 }
      if ((curAvailableDir[16] = canMove(currentItem!, currentLevelInfo.value!.klotskiItems, 16))) { canMoveDir |= 16 }
      return canMoveDir > 0
    }

    hammer.on('panstart', (e) => {
      e.preventDefault()
      if (gameStatus.value === KlotskiGameStatus.Playing && e.target.classList.contains('klotski-item') && prepareItem(e.target)) {
        target = e.target
        isDragging = true

        addPointerTip(target, target.classList.contains('item-caocao'))
      }
    })

    // hammer.on('panmove', e => {
    //   e.preventDefault()
    //   if (isDragging && target) {
    //     // const direction = Math.abs(e.overallVelocityX) > Math.abs(e.overallVelocityY) ? e.overallVelocityX > 0 ? Hammer.DIRECTION_RIGHT : Hammer.DIRECTION_LEFT : e.overallVelocityY > 0 ? Hammer.DIRECTION_DOWN : Hammer.DIRECTION_UP
    //     // target.style.transform = `translate(${direction === Hammer.DIRECTION_RIGHT || direction === Hammer.DIRECTION_LEFT ? e.deltaX : 0}px, ${direction === Hammer.DIRECTION_DOWN || direction === Hammer.DIRECTION_UP ? e.deltaY : 0}px)`
    //     target.style.transform = `translate(${e.deltaX}px, ${e.deltaY}px)`
    //   }
    // })

    hammer.on('panmove', (e) => {
      e.preventDefault()
      if (isDragging && target && canMoveDir & e.direction) {
        target.classList.remove(...allPointerTipDirs)
        target.classList.add(pointerTipMap[e.direction])
      }
    })

    hammer.on('panend', (e) => {
      e.preventDefault()
      if (isDragging && target) {
        // const direction = Math.abs(e.overallVelocityX) > Math.abs(e.overallVelocityY) ? e.overallVelocityX > 0 ? Hammer.DIRECTION_RIGHT : Hammer.DIRECTION_LEFT : e.overallVelocityY > 0 ? Hammer.DIRECTION_DOWN : Hammer.DIRECTION_UP
        // handleMove(target.getAttribute('data-name') as string, direction)
        // target.style.transform = 'translate(0, 0)'
        removePointerTip(target)
        handleMove(target.getAttribute('data-name') as string, e.direction)

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
