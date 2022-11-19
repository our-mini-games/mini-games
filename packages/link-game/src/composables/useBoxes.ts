import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getBoxes } from '../lib/utils'
import { Box, LevelInfo } from '../types'

export default (levelInfo: Ref<LevelInfo>, gameStatus: Ref<GameStatus>): Ref<Box[]> => {
  const boxes = ref<Box[]>([])

  watch(levelInfo, (newVal) => {
    if (newVal) {
      boxes.value = getBoxes(newVal)
      gameStatus.value = GameStatus.playing
    } else {
      boxes.value = []
      gameStatus.value = GameStatus.finished
    }
  }, { immediate: true })

  return boxes
}
