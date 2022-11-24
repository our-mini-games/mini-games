import { Ref } from 'vue'
import { wrapperSize } from '../config'
import { Coordinate, Tetris } from '../types'

interface ReturnType {
  removeCheck: (currentCoordinates: Tetris['coordinates']) => [number, number[]]
  finisedCheck: () => boolean
}

export default (building: Ref<Coordinate[]>): ReturnType => {
  const removeCheck = (currentCoordinates: Tetris['coordinates']): [number, number[]] => {
    // 取出当前元素最后处于的行数
    const rows = currentCoordinates.reduce((prev: Coordinate[], item) => {
      if (!prev.find(p => p.y === item.y)) {
        prev.push(item)
      }
      return prev
    }, [])

    // 取出 building 处于 rows 中的所有数据
    const canRemoveItems = rows.reduce((prev: number[], row) => {
      const current = building.value.filter(item => item.y === row.y)

      if (current.length === wrapperSize.column) {
        prev.push(row.y)
      }
      return prev
    }, [])

    return [
      canRemoveItems.length,
      canRemoveItems
    ]
  }

  const finisedCheck = (): boolean => {
    return building.value.some(item => item.y < 0)
  }

  return {
    removeCheck,
    finisedCheck
  }
}
