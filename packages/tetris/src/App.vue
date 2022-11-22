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

const {
  startup
} = useEvents(currentTetris, nextTetris, gameStatus)

watch(gameStatus, (newStatus, oldStatus) => {
  switch (newStatus) {
    case GameStatus.Finished:
      console.log('Game Over.')
      break
    case GameStatus.Playing:
      if (oldStatus !== GameStatus.Paused) {
        startup()
      }
      break
    case GameStatus.Paused:
      break
  }
}, { immediate: true })

provide('currentTetris', currentTetris)
provide('nextTetris', nextTetris)
</script>

<style lang="scss" scoped>
.tetris {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
