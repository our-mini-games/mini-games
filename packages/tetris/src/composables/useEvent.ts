import { Ref } from 'vue'
import { GameMode, GameStatus } from '../config'
import { Noop, PromiseNoop } from '../types'

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
  stopModeAnimation: Noop
): void => {
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown, false)
    document.addEventListener('keyup', handleKeyup, false)
    document.addEventListener('mousedown', handleMousedown, false)
    document.addEventListener('mouseup', handleMouseup, false)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown, false)
    document.removeEventListener('keyup', handleKeyup, false)
    document.removeEventListener('mousedown', handleMousedown, false)
    document.removeEventListener('mouseup', handleMouseup, false)
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
        setKeydownSpeed(100)
      }
    },

    Space: () => {
      if (gameStatus.value === GameStatus.Finished) {
        stopFinishedAnimation()
      } else if (gameStatus.value === GameStatus.ChooseMode) {
        stopModeAnimation()
        // 重新开始游戏
        setGameStatus(GameStatus.Playing)
      } else {
        switchNextType()
      }
    },

    OnOrOff: () => {
      if (gameStatus.value !== GameStatus.PowerOff) {
        setGameStatus(GameStatus.PowerOff)
        location.href = '/mini-games'
      } else {
        setGameStatus(GameStatus.ChooseMode)
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
      }
    },

    Mode: () => {
      gameStatus.value = GameStatus.ChooseMode
    }
  } as Record<EventMappings, () => void>

  boardKeyMapping.KeyW = boardKeyMapping.ArrowUp
  boardKeyMapping.KeyA = boardKeyMapping.ArrowLeft
  boardKeyMapping.KeyS = boardKeyMapping.ArrowDown
  boardKeyMapping.KeyD = boardKeyMapping.ArrowRight
  boardKeyMapping.Enter = boardKeyMapping.Space

  // 键盘操作
  const handleKeydown = (e: KeyboardEvent): void => {
    // e.preventDefault()
    boardKeyMapping[e.code as EventMappings]?.()
  }

  const handleKeyup = (e: KeyboardEvent): void => {
    // e.preventDefault()
    switch (e.code) {
      case 'KeyS':
      case 'ArrowDown':
        setKeydownSpeed(0)
        break
      case 'Enter':
        if (gameStatus.value === GameStatus.Playing) {
          gameStatus.value = GameStatus.Paused
          stop()
        } else if (gameStatus.value === GameStatus.Paused) {
          gameStatus.value = GameStatus.Playing
          run()
        }
    }
  }

  // 屏幕按键操作
  const handleMousedown = (e: MouseEvent): void => {
    // e.preventDefault()

    const target = e.target as HTMLElement

    if (!target || !target.dataset.key) return

    boardKeyMapping[target.dataset.key as EventMappings]()
  }

  const handleMouseup = (e: MouseEvent): void => {
    // e.preventDefault()

    const target = e.target as HTMLElement

    if (!target || !target.dataset.key || target.dataset.key !== 'ArrowDown') return

    // 重置方块下落速度
    setKeydownSpeed(0)
  }
}
