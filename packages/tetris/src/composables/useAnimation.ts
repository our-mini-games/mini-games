import { Ref } from 'vue'
import { Coordinate } from '../types'

interface ReturnType {
  removeAnimation: (building: Ref<Coordinate[]>, removeRows: number[]) => Promise<void>
  finisedAnimation: () => void
}

// eslint-disable-next-line @typescript-eslint/promise-function-async
function sleep<T extends number> (delay: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

export default (): ReturnType => {
  const removeAnimation = async (
    building: Ref<Coordinate[]>,
    removeRows: number[]
  ): Promise<void> => {
    // @todo 消除动画
    await sleep(100)

    let y: number

    // 进行消除
    for (let i = 0; i < removeRows.length; i++) {
      y = removeRows[i]
      building.value = building.value.filter(item => item.y !== y)

      // 处于当前行上方的所有广场都需要下移一格
      building.value.filter(item => item.y < y).forEach(item => {
        item.y++
      })
    }
  }

  const finisedAnimation = (): void => {}

  return {
    removeAnimation,
    finisedAnimation
  }
}
