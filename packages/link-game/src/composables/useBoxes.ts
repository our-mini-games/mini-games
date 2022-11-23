import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getBoxes } from '../lib/utils'
import { Box, LevelInfo } from '../types'

const ipl = useImgPreload()

export default (levelInfo: Ref<LevelInfo>, gameStatus: Ref<GameStatus>): Ref<Box[]> => {
  const boxes = ref<Box[]>([])

  watch(levelInfo, async (newVal) => {
    if (newVal) {
      ipl.mockRender(66)
      boxes.value = await getBoxes(newVal)
      nextTick(() => {
        ipl.reload()
      })
    } else {
      boxes.value = []
      gameStatus.value = GameStatus.finished
    }
  }, { immediate: true })

  return boxes
}
