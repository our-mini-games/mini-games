import { Ref } from 'vue'
import { GameStatus, wrapperSize } from '../config'
import { createBuilding, createBuildingRowItems, sleep } from '../lib/utils'
import { BuildingType, Noop } from '../types'

interface ReturnType {
  removeAnimation: (removeRows: number[]) => Promise<void>
  finisedAnimation: (cb?: Noop) => void
  stopFinishedAnimation: Noop
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

  const {
    stopFinishedAnimation,
    finisedAnimation
  } = (() => {
    let startTime = Date.now()
    let requestId = 0
    let currentRow = wrapperSize.row - 1
    let isDesc = false
    let callback = (): void => {}

    const runFinishedAnimation = (): void => {
      const currentTime = Date.now()

      if (currentRow >= wrapperSize.row) {
        stopFinishedAnimation()
        return
      }

      if (currentTime - startTime > 30) {
        startTime = currentTime

        building.value[currentRow] = building.value[currentRow].map(() => !isDesc)

        if (isDesc) {
          currentRow++
        } else {
          currentRow--
          if (currentRow < 0) {
            isDesc = true
            currentRow = 0
            callback()
          }
        }
      }

      requestId = requestAnimationFrame(runFinishedAnimation)
    }

    const stopFinishedAnimation = (): void => {
      cancelAnimationFrame(requestId)
      building.value = createBuilding(wrapperSize.row, wrapperSize.column)
      setGameStatus(GameStatus.ChooseMode)
    }

    const finisedAnimation = (cb?: Noop): void => {
      currentRow = wrapperSize.row - 1
      isDesc = false
      if (cb) {
        callback = cb
      }
      runFinishedAnimation()
    }

    return {
      stopFinishedAnimation,
      finisedAnimation
    }
  })()

  return {
    removeAnimation,
    finisedAnimation,
    stopFinishedAnimation
  }
}
