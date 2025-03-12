import { ComputedRef, Ref } from 'vue'
import { GameStatus, wrapperSize } from '../config/index.js'
import { isLegalTetris } from '../lib/utils.js'
import { BuildingType, Coordinate, Tetris } from '../types/index.js'

export default (
  gameStatus: Ref<GameStatus>,
  currentTetris: Ref<Tetris | null>,
  building: Ref<BuildingType>
): { finalTips: ComputedRef<Tetris['coordinates']> } => {
  const lowestTetris = computed(() => {
    if (!currentTetris.value) return -Infinity
    return currentTetris.value.coordinates.reduce((prev, item) => {
      return Math.max(prev, item.y)
    }, -Infinity)
  })

  const isHighest = (coordinates: Tetris['coordinates']): boolean => {
    // 找到他们同 x 轴最高点, y 值最小
    const xHighest = coordinates.reduce((prev: Coordinate[], item) => {
      const exists = prev.find(p => item.x === p.x)
      if (!exists) {
        prev.push(item)
      } else if (exists.y > item.y) {
        return [...prev.filter(p => p !== exists), item]
      }

      return prev
    }, [])

    const items = xHighest.reduce((prev: Coordinate[], { x, y }) => {
      prev.push(...Array.from({ length: y }, (_, index) => {
        return { x, y: index }
      }), { x, y })
      return prev
    }, [])

    return items.filter(item => item.y > lowestTetris.value).every(({ x, y }) => !building.value?.[y]?.[x])
  }

  const finalTips = computed(() => {
    if (
      (gameStatus.value !== GameStatus.Playing && gameStatus.value !== GameStatus.Animation) ||
      !currentTetris.value
    ) return [] as unknown as Tetris['coordinates']

    const highest = building.value.filter((_, index) => index > lowestTetris.value)

    // 置底
    const finalTips = currentTetris.value.coordinates.map(({ x, y }) => ({
      x,
      y: y + (wrapperSize.row - lowestTetris.value) - 1
    })) as unknown as Tetris['coordinates']

    for (let i = 0; i < highest.length; i++) {
      if (
        // 他应该是位于合法位置的元素
        isLegalTetris(finalTips, building.value) &&
        // 并且，他们当前坐标中的建筑物上面也没有其他元素
        isHighest(finalTips)
      ) {
        break
      }

      finalTips.forEach(item => {
        item.y--
      })
    }

    return finalTips
  })

  return {
    finalTips
  }
}
