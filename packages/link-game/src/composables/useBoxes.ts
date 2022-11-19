import { Ref } from 'vue'
import { getBoxes } from '../lib/utils'
import { Box, LevelInfo } from '../types'

export default (levelInfo: Ref<LevelInfo>): Ref<Box[]> => {
  const boxes = ref<Box[]>([])

  watch(levelInfo, (newVal) => {
    if (newVal) {
      boxes.value = getBoxes(newVal)
    } else {
      boxes.value = []
    }
  }, { immediate: true })

  return boxes
}
