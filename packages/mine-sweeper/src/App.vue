<template>
  <Bg />
  <div class="mine-sweeper">
    <Home v-if="gameStatus === 'finished'" />
    <MineSweeper v-else />

    <FinishedModal />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch } from 'vue'
import { levels } from './config'
import { createStatistics, getBoxes } from './lib/utils'
import { MINE_SWEEPER_SETTING } from './config/constants'
import type { Box, CustomSetting, GameStatus, LeftButtonBehaviors, LevelInfo } from './types'

import Bg from './components/Bg.vue'
import Home from './components/Home.vue'
import MineSweeper from './components/MineSweeper.vue'
import FinishedModal from './components/modal/Finished.vue'

let defaultSetting: any = {}
try {
  defaultSetting = JSON.parse(localStorage.getItem(MINE_SWEEPER_SETTING) ?? '{ "useLeftClickEnhancements": true }')
} catch { }

const firstClick = ref(true)
const currentLevel = ref<LevelInfo['level']>(typeof defaultSetting.level === 'number' ? defaultSetting.level : 1)
// 是否使用问号标记
const useDoubtful = ref(!!defaultSetting.useDoubtful)
// 是否使用左键增加
const useLeftClickEnhancements = ref(!!defaultSetting.useLeftClickEnhancements)
// 自定义设置
const customSetting = ref<CustomSetting>(defaultSetting.customSetting || {
  column: 10,
  row: 10,
  totalOfMines: 10
})

const boxes = ref<Box[]>([])
// 游戏运行状态
const gameStatus = ref<GameStatus>('finished')
// 游戏时长
const gameTime = ref(0)
// 剩余旗子数
const remainingFlags = ref(0)
// 左键行为
const leftButtonBehaviors = ref<LeftButtonBehaviors>('open')

let startTime = 0
let requestId = 0

const levelInfo = computed<LevelInfo>((): LevelInfo => {
  const info = levels.find(item => item.level === currentLevel.value)!

  if (currentLevel.value === 0) {
    const _info: LevelInfo = {
      ...info,
      ...customSetting.value
    }

    return _info
  }

  return info
})

const run = (): void => {
  gameTime.value = Math.floor((new Date().getTime() - startTime) / 1000)

  requestId = requestAnimationFrame(run)
}

const reset = (): void => {
  firstClick.value = true
  boxes.value = getBoxes(levelInfo.value)
  gameTime.value = 0
  remainingFlags.value = levelInfo.value.totalOfMines
  startTime = new Date().getTime()

  cancelAnimationFrame(requestId)
  run()
}

watch(gameStatus, (newVal, oldVal) => {
  switch (newVal) {
    case 'playing':
      if (gameTime.value !== 0 && oldVal === 'finished') {
        // 统计上一局信息
        createStatistics(currentLevel.value, 'defeat', gameTime.value)
      }

      reset()
      break

    case 'defeat':
    case 'complete':
      cancelAnimationFrame(requestId)
      // 统计当前局信息
      createStatistics(currentLevel.value, newVal, gameTime.value)
      break

    default:
      break
  }
}, {
  immediate: true
})

watch(currentLevel, () => {
  if (gameTime.value !== 0 && (gameStatus.value === 'finished' || gameStatus.value === 'playing')) {
    // 统计上一局信息
    createStatistics(currentLevel.value, 'defeat', gameTime.value)
  }

  reset()
})

provide('firstClick', firstClick)
provide('boxes', boxes)
provide('currentLevel', currentLevel)
provide('levelInfo', levelInfo)
provide('gameStatus', gameStatus)
provide('useDoubtful', useDoubtful)
provide('useLeftClickEnhancements', useLeftClickEnhancements)
provide('customSetting', customSetting)

provide('gameTime', gameTime)
provide('remainingFlags', remainingFlags)
provide('leftButtonBehaviors', leftButtonBehaviors)
</script>
