import { ComputedRef, Ref } from 'vue'
import { GameStatus } from '../config/index.js'
import { canIRemoveThem } from '../lib/pathFinding.js'
import { isComplete, sleep } from '../lib/utils.js'
import { Box, LevelInfo } from '../types/index.js'

export default (
  boxes: Ref<Box[]>,
  gameStatus: Ref<GameStatus>,
  levelInfo: Ref<LevelInfo>,
  linkAnimation: (items: Box[]) => Promise<void>
): {
    checkedItems: ComputedRef<Box[]>
    handleCheck: (item: Box, e: MouseEvent) => void
  } => {
  // const checkedItems = ref<Box[]>([])
  const checkedItems = computed(() => boxes.value.filter(box => box.status !== 'default'))

  const handleCheck = (item: Box): void => {
    if (gameStatus.value !== GameStatus.playing) {
      return
    }

    if (item.seq === 0) {
      checkedItems.value.forEach(c => {
        c.status = 'default'
      })
      // checkedItems.value = []
      return
    }

    if (checkedItems.value.find(c => c.x === item.x && c.y === item.y)) {
      item.status = 'default'
      // checkedItems.value = checkedItems.value.filter(c => c.x !== item.x && c.y !== item.y)
    } else {
      item.status = 'checked'
      // checkedItems.value.push(item)
    }
  }

  watch(checkedItems, async items => {
    if (gameStatus.value !== GameStatus.playing) {
      return
    }

    if (items.length >= 2) {
      // 暂停游戏
      gameStatus.value = GameStatus['in-the-animation']

      const [canRemove, crossItems] = canIRemoveThem(
        items as [Box, Box],
        boxes.value,
        levelInfo.value
      )
      if (canRemove) {
        // 启动连接动画
        await linkAnimation(crossItems)
      }

      if (!canRemove) {
        checkedItems.value.forEach(item => {
          item.status = 'error'
        })
        await sleep(200)
      }

      checkedItems.value.forEach(item => {
        if (canRemove) {
          item.seq = 0
        }

        item.status = 'default'
      })

      // checkedItems.value = []
      gameStatus.value = GameStatus.playing

      // 游戏结束检测
      if (canRemove && isComplete(boxes.value)) {
        gameStatus.value = GameStatus.complete
      }
    }
  }, {
    immediate: true,
    deep: true
  })

  return {
    checkedItems,
    handleCheck
  }
}
