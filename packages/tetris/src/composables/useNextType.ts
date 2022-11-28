import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getTetrisNextType } from '../lib/nextType'
import { isLegalTetris } from '../lib/utils'
import { BuildingType, Tetris } from '../types'
import throttle from 'lodash.throttle'

export default (
  currentTetris: Ref<Tetris | null>,
  gameStatus: Ref<GameStatus>,
  building: Ref<BuildingType>
): () => void => {
  const getNextType = throttle(() => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }
    const nextType = getTetrisNextType(currentTetris.value)
    if (isLegalTetris(nextType.coordinates, building.value)) {
      currentTetris.value = nextType
    }
  }, 50)

  return getNextType
}
