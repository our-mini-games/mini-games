import { Ref } from 'vue'
import { sleep } from '../lib/utils'
import { Coordinate } from '../types'

interface ReturnType {
  removeAnimation: (building: Ref<Coordinate[]>, removeRows: number[]) => Promise<void>
  finisedAnimation: () => void
}

export default (): ReturnType => {
  const removeAnimation = async (
    building: Ref<Coordinate[]>,
    removeRows: number[]
  ): Promise<void> => {
    await nextTick()

    // @todo 消除动画
    await sleep(100)

    let y: number

    removeRows.sort((a, b) => a < b ? -1 : 1)

    // 进行消除
    for (let i = 0; i < removeRows.length; i++) {
      y = removeRows[i]
      await nextTick()
      building.value = building.value.filter(item => item.y !== y)

      // 处于当前行上方的所有方块都需要下移一格
      await sleep(10)
      building.value = building.value.map(item => {
        if (item.y < y) {
          return {
            x: item.x,
            y: item.y + 1
          }
        }

        return item
      })
    }
  }

  const finisedAnimation = (): void => {}

  return {
    removeAnimation,
    finisedAnimation
  }
}
