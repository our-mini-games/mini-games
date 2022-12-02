import { ComputedRef, Ref } from 'vue'
import { GameStatus } from '../config'
import { isLegalTetris } from '../lib/utils'
import { BuildingType, Noop, PromiseNoop, Tetris } from '../types'
import throttle from 'lodash.throttle'

interface ReturnType {
  handleTurnLeft: Noop
  handleTurnRight: Noop
  handleDecline: (handleReachBottom: PromiseNoop) => void
  handleToBottomImmediate: Noop
}

export default (
  currentTetris: Ref<Tetris | null>,
  gameStatus: Ref<GameStatus>,
  building: Ref<BuildingType>,
  finalTips: ComputedRef<Tetris['coordinates']>
): ReturnType => {
  // 横向位移
  const transverseDisplacement = (isLeft = true): void => {
    if (!currentTetris.value) return
    const coordinates: Tetris['coordinates'] = currentTetris.value.coordinates.map(({ x, y }) => {
      return {
        x: isLeft ? (x - 1) : (x + 1),
        y
      }
    }) as Tetris['coordinates']

    if (!isLegalTetris(coordinates, building.value)) {
      return
    }

    currentTetris.value.coordinates = coordinates
  }

  // 左移
  const handleTurnLeft = throttle(() => {
    if (gameStatus.value !== GameStatus.Playing) return

    transverseDisplacement(true)
  }, 50)
  // 右移
  const handleTurnRight = throttle(() => {
    if (gameStatus.value !== GameStatus.Playing) return

    transverseDisplacement(false)
  }, 50)

  // 下降
  const handleDecline = (handleReachBottom: PromiseNoop): void => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) return
    const coordinates: Tetris['coordinates'] = currentTetris.value.coordinates.map(({ x, y }) => {
      return {
        x,
        y: y + 1
      }
    }) as Tetris['coordinates']

    if (!isLegalTetris(coordinates, building.value)) {
      // 下降元素不合法，意味着元素已经触底
      handleReachBottom()
      return
    }

    // 元素下降合法，使用新的坐标
    currentTetris.value.coordinates = coordinates
  }

  // 直接下到底部
  const handleToBottomImmediate = (): void => {
    if (gameStatus.value !== GameStatus.Playing || !currentTetris.value) return
    currentTetris.value.coordinates = finalTips.value as Tetris['coordinates']
  }

  return {
    handleTurnLeft,
    handleTurnRight,
    handleDecline,
    handleToBottomImmediate
  }
}
