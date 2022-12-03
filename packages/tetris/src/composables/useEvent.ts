import { Ref } from 'vue'
import { GameMode, GameStatus } from '../config'
import { Noop, PromiseNoop } from '../types'
import { isMobile } from '../lib/utils'

type KeyboardEventKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'KeyA' | 'KeyD' | 'KeyS' | 'KeyW' | 'Space' | 'Enter'
type CustomEventKey = 'OnOrOff' | 'Reboot' | 'Pause' | 'Mode'
type EventMappings = KeyboardEventKey | CustomEventKey

export default (
  initialLevel: Ref<number>,
  gameMode: Ref<GameMode>,
  gameStatus: Ref<GameStatus>,
  handleTurnLeft: Noop,
  handleTurnRight: Noop,
  handleToBottomImmediate: Noop,
  handleReachBottom: PromiseNoop,
  switchNextType: Noop,
  run: Noop,
  stop: Noop,
  setGameStatus: (status: GameStatus) => void,
  setKeydownSpeed: (speed: number) => void,
  stopFinishedAnimation: Noop,
  stopModeAnimation: Noop,
  stopPowerOnAnimation: Noop
): void => {
  const mouseEventType = isMobile()
    ? { up: 'touchend', down: 'touchstart' } as const
    : { up: 'mouseup', down: 'mousedown' } as const

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown, false)
    document.addEventListener('keyup', handleKeyup, false)

    document.addEventListener(mouseEventType.down, handleMousedown, { capture: false, passive: false })
    document.addEventListener(mouseEventType.up, handleMouseup, { capture: false, passive: false })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown, false)
    document.removeEventListener('keyup', handleKeyup, false)

    document.removeEventListener(mouseEventType.down, handleMousedown)
    document.removeEventListener(mouseEventType.up, handleMouseup)
  })

  const boardKeyMapping = {
    ArrowUp: () => {
      if (gameStatus.value === GameStatus.ChooseMode) {
        initialLevel.value = Math.min(20, initialLevel.value + 1)
      } else {
        handleToBottomImmediate()
        handleReachBottom()
      }
    },

    ArrowLeft: () => {
      if (gameStatus.value === GameStatus.ChooseMode) {
        gameMode.value = gameMode.value === GameMode.Normal
          ? GameMode.Entertain
          : GameMode.Normal
      } else {
        handleTurnLeft()
      }
    },

    ArrowRight: () => {
      if (gameStatus.value === GameStatus.ChooseMode) {
        gameMode.value = gameMode.value === GameMode.Normal
          ? GameMode.Entertain
          : GameMode.Normal
      } else {
        handleTurnRight()
      }
    },

    ArrowDown: () => {
      if (gameStatus.value === GameStatus.ChooseMode) {
        initialLevel.value = Math.max(1, initialLevel.value - 1)
      } else {
        setKeydownSpeed(80)
      }
    },

    Space: () => {
      switch (gameStatus.value) {
        case GameStatus.Finished:
          stopFinishedAnimation()
          break
        case GameStatus.ChooseMode:
          stopModeAnimation()
          // 重新开始游戏
          setGameStatus(GameStatus.Playing)
          break
        case GameStatus.PowerOn:
          stopPowerOnAnimation()
          break
        default:
          switchNextType()
          break
      }
    },

    OnOrOff: () => {
      if (gameStatus.value !== GameStatus.PowerOff) {
        setGameStatus(GameStatus.PowerOff)
        location.href = '/mini-games'
      } else {
        setGameStatus(GameStatus.PowerOn)
      }
    },

    Reboot: () => {
      setGameStatus(GameStatus.PowerOff)
      nextTick(() => {
        setGameStatus(GameStatus.Playing)
      })
    },

    Pause: () => {
      if (gameStatus.value === GameStatus.Paused) {
        setGameStatus(GameStatus.Playing)
        run()
      } else if (gameStatus.value === GameStatus.Playing) {
        setGameStatus(GameStatus.Paused)
        stop()
      }
    },

    Mode: () => {
      gameStatus.value = GameStatus.ChooseMode
    }
  } as Record<EventMappings, () => void>

  boardKeyMapping.Enter = boardKeyMapping.Pause
  boardKeyMapping.KeyW = boardKeyMapping.ArrowUp
  boardKeyMapping.KeyA = boardKeyMapping.ArrowLeft
  boardKeyMapping.KeyS = boardKeyMapping.ArrowDown
  boardKeyMapping.KeyD = boardKeyMapping.ArrowRight

  // 键盘操作
  const handleKeydown = (e: KeyboardEvent): void => {
    e.preventDefault()
    boardKeyMapping[e.code as EventMappings]?.()
  }

  const handleKeyup = (e: KeyboardEvent): void => {
    e.preventDefault()
    switch (e.code) {
      case 'KeyS':
      case 'ArrowDown':
        setKeydownSpeed(0)
        break
      // case 'Enter':
      //   if (gameStatus.value === GameStatus.Playing) {
      //     gameStatus.value = GameStatus.Paused
      //     stop()
      //   } else if (gameStatus.value === GameStatus.Paused) {
      //     gameStatus.value = GameStatus.Playing
      //     run()
      //   }
    }
  }

  let repeatExecFn: number = 0

  // 屏幕按键操作
  const handleMousedown = (e: MouseEvent | TouchEvent): void => {
    e.preventDefault()

    const target = e.target as HTMLElement
    const key = target.dataset.key as EventMappings

    if (!target || !key || !boardKeyMapping[key]) return

    boardKeyMapping[key]()

    // 如果按的是左/右/空格则需要持续触发，其他的按键在按下一次则最多只执行一次
    if (!['ArrowLeft', 'ArrowRight', 'Space'].includes(key)) return
    repeatExecFn = requestAnimationFrame(() => handleMousedown(e))
  }

  const handleMouseup = (e: MouseEvent | TouchEvent): void => {
    e.preventDefault()

    const target = e.target as HTMLElement
    const key = target.dataset.key as EventMappings

    if (!target || !key) return

    if (key === 'ArrowDown') {
      // 重置方块下落速度
      setKeydownSpeed(0)
      //
    } else if (['ArrowLeft', 'ArrowRight', 'Space'].includes(key)) {
      // 松开屏幕上的按键后就停止触发
      cancelAnimationFrame(repeatExecFn)
    }
  }
}
