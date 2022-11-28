import { Ref } from 'vue'
import { GameStatus, wrapperSize } from '../config'
import { createBuildingRowItems, sleep } from '../lib/utils'
import { BuildingType } from '../types'

interface ReturnType {
  removeAnimation: (removeRows: number[]) => Promise<void>
  finisedAnimation: () => void
}

export default (
  building: Ref<BuildingType>,
  setGameStatus: (status: GameStatus) => void
): ReturnType => {
  const removeAnimation = async (removeRows: number[]): Promise<void> => {
    setGameStatus(GameStatus.Animation)

    removeRows.sort((a, b) => a < b ? -1 : 1)

    // 进行消除
    for (let i = 0; i < removeRows.length; i++) {
      building.value.splice(removeRows[i], 1)
      building.value.unshift(createBuildingRowItems(wrapperSize.column))
      await sleep(10)
    }
  }

  const finisedAnimation = (): void => {}

  return {
    removeAnimation,
    finisedAnimation
  }
}
