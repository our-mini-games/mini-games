import { Ref } from 'vue'
import { GameMode, GameStatus, modeAnimationsConfig, modeTextConfig, wrapperSize } from '../config'
import { createBuilding, createBuildingRowItems, sleep } from '../lib/utils'
import { BuildingType, Noop } from '../types'

interface ReturnType {
  removeAnimation: (removeRows: number[]) => Promise<void>
  finisedAnimation: (cb?: Noop) => void
  stopFinishedAnimation: (isPowerOff?: boolean) => void
  modeAnimation: Noop
  stopModeAnimation: (isPowerOff?: boolean) => void
}

export default (
  building: Ref<BuildingType>,
  gameMode: Ref<GameMode>,
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

    const stopFinishedAnimation = (isPowerOff = false): void => {
      cancelAnimationFrame(requestId)
      building.value = createBuilding(wrapperSize.row, wrapperSize.column)
      if (!isPowerOff) {
        setGameStatus(GameStatus.ChooseMode)
      }
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

  const modeText = computed(() => modeTextConfig[gameMode.value])

  const {
    modeAnimation,
    stopModeAnimation
  } = (() => {
    let requestId = 0
    let startTime = Date.now()

    let it = modeAnimationsConfig[gameMode.value][Symbol.iterator]()

    const setDefaultConfig = (): void => {
      it = modeAnimationsConfig[gameMode.value][Symbol.iterator]()
    }

    const setBuilding = (template: number[][]): void => {
      for (let y = 0; y < template.length; y++) {
        for (let x = 0; x < template[y].length; x++) {
          building.value[y][x] = !!template[y][x]
        }
      }
    }

    const setModeText = (): void => {
      const template = modeText.value
      for (let y = 0; y < template.length; y++) {
        for (let x = 0; x < template[y].length; x++) {
          building.value[10 + y][x] = !!template[y][x]
        }
      }
    }

    const runModeAnimation = (): void => {
      const currentTime = Date.now()

      if (currentTime - startTime > 300) {
        const next = it.next()

        if (next.done) {
          setDefaultConfig()
        } else {
          setBuilding(next.value)
        }

        startTime = currentTime
      }

      requestId = requestAnimationFrame(runModeAnimation)
    }

    const stopModeAnimation = (isPowerOff = false): void => {
      cancelAnimationFrame(requestId)
      building.value = createBuilding(wrapperSize.row, wrapperSize.column)
    }

    const modeAnimation = (): void => {
      stopModeAnimation()
      setDefaultConfig()
      setModeText()
      runModeAnimation()
    }

    return {
      modeAnimation,
      stopModeAnimation
    }
  })()

  watch(gameMode, () => {
    modeAnimation()
  })

  return {
    removeAnimation,
    finisedAnimation,
    stopFinishedAnimation,

    modeAnimation,
    stopModeAnimation
  }
}
