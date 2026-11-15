<template>
  <div class="game-2048">
    <TheHeader />

    <Game2048 />

    <p class="game-hint">拖动或滑动棋盘，合并相同的数字</p>

    <FinisedModal />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/header/index.vue'
import Game2048 from './components/Game2048.vue'
import FinisedModal from './components/FinisedModal.vue'
import useGame from './composables/useGame.js'

useGame()
</script>

<style lang="scss" scoped>
.game-2048 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(14px, 4vh, 30px);
  align-items: center;
  min-height: 100svh;
  padding: 20px 16px;
}
.game-hint {
  color: var(--arcade-muted);
  font-size: 14px;
  text-align: center;
}
</style>
