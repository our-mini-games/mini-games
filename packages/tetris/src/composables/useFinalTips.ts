import { ComputedRef, Ref } from 'vue'
import { wrapperSize } from '../config'
import { Coordinate, Tetris } from '../types'

export default (
  currentTetris: Ref<Tetris | undefined>,
  buildingHighestPoints: Ref<Coordinate[]>
): { finalTips: ComputedRef<Coordinate[]> } => {
  // 每一列的最低点
  const lowestCoordinates = computed(() => {
    if (!currentTetris.value) return []

    return currentTetris.value.coordinates.reduce((prev: Coordinate[], item) => {
      const exists = prev.find(p => item.x === p.x)
      if (!exists) {
        prev.push(item)
      } else if (exists.y < item.y) {
        return [...prev.filter(p => p !== exists), item]
      }

      return prev
    }, [])
  })

  // 找到同列最高点
  const sameColumnItems = computed(() => buildingHighestPoints.value.filter(b => lowestCoordinates.value.find(l => b.x === l.x && b.y > l.y)))

  // 取出最小值
  const minDistance = computed(() => {
    return lowestCoordinates.value.reduce((prev, item) => {
      const sameColumnItem = sameColumnItems.value.find(l => l.x === item.x)

      if (!sameColumnItem) {
        return Math.min(wrapperSize.row - item.y, prev)
      }

      return Math.min(sameColumnItem.y - item.y, prev)
    }, Infinity)
  })

  const finalTips = computed(() => {
    if (!currentTetris.value) return []
    return currentTetris.value.coordinates.map(({ x, y }) => ({
      x,
      y: y + minDistance.value - 1
    }))
  })

  watch(minDistance, (newVal) => {
  }, { immediate: true })

  return {
    finalTips
  }
}
