<template>
  <header class="header">
    <h1 class="title arcade-title">
      2048
    </h1>

    <div class="operations">
      <button
        class="arcade-button"
        @click="handleBack"
      >
        返回
      </button>

      <button
        class="arcade-button arcade-button--primary"
        @click="handleAgain"
      >
        重新开始
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject, nextTick } from 'vue'
import { GameStatus } from '../../config/index.js'

const setGameStatus = inject('setGameStatus', (_: GameStatus) => {})

const handleAgain = (): void => {
  setGameStatus(GameStatus.Finished)
  nextTick(() => {
    setGameStatus(GameStatus.Playing)
  })
}
const handleBack = (): void => {
  window.location.href = '/mini-games'
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}

.title {
  font-size: clamp(48px, 10vw, 80px);
}

.operations {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
}
</style>
