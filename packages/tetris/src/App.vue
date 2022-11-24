<template>
  <div class="tetris">
    <LayoutVue>
      <template #main>
        <TetrisVue />
      </template>
      <template #operating>
        <OperatingKeys />
      </template>
      <template #functional>
        <FunctionalKeys />
      </template>
    </LayoutVue>
  </div>
</template>

<script setup lang="ts">
import { Tetris } from './types'
import { GameStatus } from './config'

import LayoutVue from './components/layout/index.vue'
import TetrisVue from './components/tetris/index.vue'
import OperatingKeys from './components/operatingKeys/index.vue'
import FunctionalKeys from './components/functionalKeys/index.vue'

const gameStatus = ref(GameStatus.Playing)

const currentTetris = ref<Tetris>()
const nextTetris = ref<Tetris>()
const statusText = ref('Hello world')

const {
  score,
  highScore,
  setScore
} = useScore(gameStatus)

const {
  level,
  speed
} = useLevel(score)

const {
  building,
  finalTips,
  startup
} = useEvents(currentTetris, nextTetris, gameStatus, speed, setScore)

watch(gameStatus, (newStatus, oldStatus) => {
  switch (newStatus) {
    case GameStatus.Finished:
      console.log('Game Over.')
      statusText.value = 'Game Over'
      break
    case GameStatus.Playing:
      if (oldStatus !== GameStatus.Paused) {
        setScore() // 重置计分
        startup()
      }
      statusText.value = 'Hello world'
      break
    case GameStatus.Paused:
      statusText.value = 'Paused'
      break
  }
}, { immediate: true })

provide('currentTetris', currentTetris)
provide('nextTetris', nextTetris)
provide('level', level)
provide('building', building)
provide('finalTips', finalTips)
provide('score', score)
provide('highScore', highScore)
provide('statusText', statusText)
</script>

<style lang="scss" scoped>
.tetris {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
