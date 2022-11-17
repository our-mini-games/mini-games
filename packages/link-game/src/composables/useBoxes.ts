import { Ref } from 'vue'
import { getBoxes } from '../lib/utils'
import { Box, LevelInfo } from '../types'

export default (levelInfo: Ref<LevelInfo>) => {
  const boxes = ref<Box[]>([])

  watch(levelInfo, (newVal) => {
    console.log('here', newVal)
    if (newVal) {
      boxes.value = getBoxes(newVal)
      console.log(boxes.value)
    } else {
      boxes.value = []
    }
  }, { immediate: true })

  return boxes
}
