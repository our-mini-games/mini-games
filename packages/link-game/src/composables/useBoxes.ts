import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getBoxes } from '../lib/utils'
import { Box, LevelInfo } from '../types'

const ipl = useImgPreload()

export default (levelInfo: Ref<LevelInfo>, gameStatus: Ref<GameStatus>): {
  boxes: Ref<Box[]>
  initBoxes: (level: LevelInfo) => Promise<void>
} => {
  const boxes = ref<Box[]>([])

  const initBoxes = async (level: LevelInfo): Promise<void> => {
    ipl.mockRender(66)
    boxes.value = await getBoxes(level)
    nextTick(() => {
      ipl.reload()
    })
  }

  watch(levelInfo, async (newVal) => {
    if (newVal) {
      await initBoxes(newVal)
    } else {
      boxes.value = []
      gameStatus.value = GameStatus.finished
    }
  })

  return {
    boxes,
    initBoxes
  }
}
