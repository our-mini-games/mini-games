import { Ref } from 'vue'
import { GameStatus } from '../config/index.js'
import { getBoxes } from '../lib/utils.js'
import { Box, LevelInfo } from '../types/index.js'
import useImgPreload from './useImgPreload.js'

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
      // @ts-expect-error
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
