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
      const exists = prev.find(({ x }) => item.x === x)
      if (!exists) {
        prev.push(item)
      } else if (exists.y < item.y) {
        return [...prev.filter(p => p !== exists), item]
      }

      return prev
    }, [])
  })

  // 当前元素的最低点
  const lowestY = computed(() => {
    if (!currentTetris.value) return 0

    return currentTetris.value.coordinates.reduce((prev, item) => {
      return (item.y > prev.y) ? item : prev
    }).y
  })

  const finalTips = computed(() => {
    if (!currentTetris.value) return []

    const minDistance = lowestCoordinates.value.reduce((prev, { x, y }) => {
      const sameColumnItem = buildingHighestPoints.value.find(l => l.x === x)
      if (!sameColumnItem) {
        return prev
      }

      return Math.min(prev, Math.abs(sameColumnItem.y - y))
    }, wrapperSize.row)

    return currentTetris.value.coordinates.map(({ x, y }) => ({
      x,
      y: minDistance === wrapperSize.row ? (y + wrapperSize.row - lowestY.value - 1) : (y + minDistance - 1)
    }))
  })

  return {
    finalTips
  }
}
