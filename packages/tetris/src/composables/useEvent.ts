import { Ref } from 'vue'
import { GameMode, GameStatus } from '../config'
import { KEY_PREFIX } from '../config/constants'
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
  setGameStatus: (status: GameStatus) => void,
  setKeydownSpeed: (speed: number) => void
  // ): { activeKeys: Ref<Set<string>> } => {
): void => {
  // const activeKeys = ref(new Set<string>())

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

  const handleKeydown = (e: KeyboardEvent): void => {
    e.preventDefault()
    // activeKeys.value.add(e.code)
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
    // activeKeys.value.delete(e.code)
    switch (e.code) {
      case 'KeyS':
      case 'ArrowDown':
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

  const handleMousedown = (e: MouseEvent): void => {
    e.preventDefault()

    const target = e.target as HTMLElement

    if (!target) return

    if (target.classList.contains(`${KEY_PREFIX}Space`)) {
      // activeKeys.value.add('Space')
      switchNextType()
    }

    if (target.classList.contains(`${KEY_PREFIX}ArrowUp`)) {
      // activeKeys.value.add('ArrowUp')
      handleToBottomImmediate()
      handleReachBottom()
    }

    if (target.classList.contains(`${KEY_PREFIX}ArrowRight`)) {
      // activeKeys.value.add('ArrowRight')
      handleTurnRight()
    }

    if (target.classList.contains(`${KEY_PREFIX}ArrowDown`)) {
      // activeKeys.value.add('ArrowDown')
      setKeydownSpeed(100)
    }

    if (target.classList.contains(`${KEY_PREFIX}ArrowLeft`)) {
      // activeKeys.value.add('ArrowLeft')
      handleTurnLeft()
    }

    if (target.classList.contains(`${KEY_PREFIX}OnOrOff`)) {
      // activeKeys.value.add('OnOrOff')

      if (gameStatus.value !== GameStatus.PowerOff) {
        setGameStatus(GameStatus.PowerOff)
        location.href = '/mini-games'
      } else {
        setGameStatus(GameStatus.ChooseMode)
      }
    }

    if (target.classList.contains(`${KEY_PREFIX}Reboot`)) {
      // activeKeys.value.add('Reboot')
      setGameStatus(GameStatus.Finished)
      nextTick(() => {
        setGameStatus(GameStatus.Playing)
      })
    }

    if (target.classList.contains(`${KEY_PREFIX}Pause`)) {
      // activeKeys.value.add('Pause')
      if (gameStatus.value === GameStatus.Paused) {
        setGameStatus(GameStatus.Playing)
      } else if (gameStatus.value === GameStatus.Playing) {
        setGameStatus(GameStatus.Paused)
      }
    }

    // if (target.classList.contains(`${KEY_PREFIX}Mode`)) {
    //   activeKeys.value.add('Mode')
    // }
  }

  const handleMouseup = (e: MouseEvent): void => {
    e.preventDefault()

    const target = e.target as HTMLElement

    if (!target) return

    // activeKeys.value.clear()

    if (target.classList.contains(`${KEY_PREFIX}ArrowDown`)) {
      setKeydownSpeed(0)
    }
  }

  // return {
  //   activeKeys
  // }
}
