<template>
  <div class="tetris">
    <TetrisVue />
  </div>
</template>

<script setup lang="ts">
import { Tetris } from './types'
import { GameStatus } from './config'

import TetrisVue from './components/tetris/index.vue'

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
