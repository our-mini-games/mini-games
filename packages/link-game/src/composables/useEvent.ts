import { Ref } from 'vue'
import { GameStatus } from '../config'
import { canIRemoveThem } from '../lib/pathFinding'
import { Box, LevelInfo } from '../types'

export default (
  boxes: Ref<Box[]>,
  gameStatus: Ref<GameStatus>,
  levelInfo: Ref<LevelInfo>,
  linkAnimation: (items: Box[]) => Promise<void>
) => {
  const checkedItems = ref<Box[]>([])

  const handleCheck = (item: Box, e: MouseEvent) => {
    if (checkedItems.value.find(c => c.x === item.x && c.y === item.y)) {
      item.status = 'default'
      checkedItems.value = checkedItems.value.filter(c => c.x !== item.x && c.y !== item.y)
    } else {
      item.status = 'checked'
      checkedItems.value.push(item)
    }
  }

  watch(checkedItems, async items => {
    if (items.length >= 2) {
      // 暂停游戏
      gameStatus.value = GameStatus.paused

      const [canRemove, crossItems] = canIRemoveThem(
        items as [Box, Box],
        boxes.value,
        levelInfo.value
      )
      if (canRemove && crossItems.length > 0) {
        // 启动连接动画
        console.log(crossItems)
        await linkAnimation(crossItems)
      }

      checkedItems.value.forEach(item => {
        if (canRemove) {
          item.seq = 0
        }

        item.status = 'default'
      })

      checkedItems.value = []
      gameStatus.value = GameStatus.playing
    }
  }, {
    immediate: true,
    deep: true
  })

  return {
    handleCheck
  }
}
