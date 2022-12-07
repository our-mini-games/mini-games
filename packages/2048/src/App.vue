<template>
  <div class="game-2048">
    <TheHeader />

    <Game2048 />

    <span class="placeholder"></span>

    <FinisedModal />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/header/index.vue'
import Game2048 from './components/Game2048.vue'
import FinisedModal from './components/FinisedModal.vue'

useGame()
</script>

<style lang="scss" scoped>
.game-2048 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 16px 0;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}
</style>
