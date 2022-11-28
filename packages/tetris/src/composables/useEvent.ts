import { Ref } from 'vue'
import { GameMode, GameStatus } from '../config'
import { Noop, PromiseNoop } from '../types'

export default (
  gameMode: Ref<GameMode>,
  gameStatus: Ref<GameStatus>,
  handleTurnLeft: Noop,
  handleTurnRight: Noop,
  handleToBottomImmediate: Noop,
  handleReachBottom: PromiseNoop,
  switchNextType: Noop,
  run: Noop,
  stop: Noop,
  changeCurrent: PromiseNoop,
  setKeydownSpeed: (speed: number) => void
): void => {
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown, false)
    document.addEventListener('keyup', handleKeyup, false)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown, false)
    document.removeEventListener('keyup', handleKeyup, false)
  })

  const handleKeydown = (e: KeyboardEvent): void => {
    e.preventDefault()
    switch (e.code) {
      case 'Space':
        switchNextType()
        break
      case 'KeyW':
      case 'ArrowUp':
        handleToBottomImmediate()
        handleReachBottom()
        break
      case 'KeyD':
      case 'ArrowRight':
        handleTurnRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        setKeydownSpeed(100)
        break
      case 'KeyA':
      case 'ArrowLeft':
        handleTurnLeft()
        break
    }
  }

  const handleKeyup = (e: KeyboardEvent): void => {
    e.preventDefault()
    switch (e.code) {
      case 'KeyS':
      case 'ArrowDown':
        // keydownSpeed.value = 0
        setKeydownSpeed(0)
        break
      case 'Enter':
        if (gameStatus.value === GameStatus.Playing) {
          stop()
          gameStatus.value = GameStatus.Paused
        } else if (gameStatus.value === GameStatus.Paused) {
          gameStatus.value = GameStatus.Playing
          run()
        }
    }
  }
}
