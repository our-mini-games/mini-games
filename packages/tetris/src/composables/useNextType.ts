import { Ref } from 'vue'
import { GameMode, GameStatus } from '../config'
import { getTetrisNextType, getTetrisRandomType } from '../lib/nextType'
import { isLegalTetris } from '../lib/utils'
import { BuildingType, Tetris } from '../types'
import throttle from 'lodash.throttle'

export default (
  currentTetris: Ref<Tetris | null>,
  gameStatus: Ref<GameStatus>,
  gameMode: Ref<GameMode>,
  building: Ref<BuildingType>
): () => void => {
  const getNextType = throttle(() => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }
    const nextType = gameMode.value === GameMode.Normal
      ? getTetrisNextType(currentTetris.value)
      : getTetrisRandomType(currentTetris.value)
    if (isLegalTetris(nextType.coordinates, building.value)) {
      currentTetris.value = nextType
    }
  }, 50)

  return getNextType
}
