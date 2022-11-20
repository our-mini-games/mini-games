import { Ref } from 'vue'
import { GameStatus } from '../config'
import { canIRemoveThem, isEmpty } from '../lib/pathFinding'
import { shuffle, sleep } from '../lib/utils'
import { Box, LevelInfo } from '../types'

export default (
  boxes: Ref<Box[]>,
  levelInfo: Ref<LevelInfo>,
  gameStatus: Ref<GameStatus>
): {
    rearrangement: Ref<number>
    tips: Ref<number>
    handleRearrange: () => void
    handleTips: () => Promise<void>
  } => {
  const rearrangement = ref(0)
  const tips = ref(0)

  watch(gameStatus, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    if (newValue === GameStatus.playing && (oldValue === GameStatus.finished || !oldValue)) {
      rearrangement.value = levelInfo.value.rearrangement
      tips.value = levelInfo.value.tips
    }
  }, { deep: true, immediate: true })

  // 重排操作
  const handleRearrange = (): void => {
    if (rearrangement.value <= 0 || gameStatus.value !== GameStatus.playing) {
      return
    }

    boxes.value.forEach(item => {
      item.status = 'default'
    })

    const items = boxes.value.filter(box => box.seq !== 0)

    const seqs = shuffle(items.map(box => box.seq))

    items.forEach((item, index) => {
      item.seq = seqs[index]
    })

    rearrangement.value--
  }

  // 提示
  const handleTips = async (): Promise<void> => {
    if (tips.value <= 0 || gameStatus.value !== GameStatus.playing) {
      return
    }

    gameStatus.value = GameStatus['in-the-animation']

    const items = boxes.value.filter(item => item.seq !== 0)

    const len = items.length

    let checkedItems: Box[] = []

    let itemA: Box
    let itemB: Box

    for (let i = 0; i < len; i++) {
      if (checkedItems.length === 2) {
        break
      }

      itemA = items[i]

      if (isEmpty(itemA)) {
        continue
      }

      for (let j = i + 1; j < len; j++) {
        itemB = items[j]

        if (isEmpty(itemB)) {
          continue
        }

        if (itemA.x === itemB.x && itemA.y === itemB.y) {
          continue
        }

        if (canIRemoveThem([itemA, itemB], items, levelInfo.value)[0]) {
          checkedItems = [itemA, itemB]
          break
        }
      }
    }

    if (checkedItems.length === 2) {
      checkedItems.forEach(item => {
        item.status = 'checked'
      })

      await sleep(1000)

      checkedItems.forEach(item => {
        item.status = 'default'
      })
      checkedItems = []

      tips.value--
    }
    gameStatus.value = GameStatus.playing
  }

  return {
    rearrangement,
    tips,
    handleRearrange,
    handleTips
  }
}
