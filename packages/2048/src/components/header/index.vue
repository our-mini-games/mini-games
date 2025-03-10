<template>
  <header class="header">
    <h1 class="title">
      Hello world
    </h1>

    <div class="operations">
      <button
        class="btn btn-back"
        @click="handleBack"
      >
        返回
      </button>

      <button
        class="btn btn-again"
        @click="handleAgain"
      >
        重新开始
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
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
  .title {
    text-align: center;
    color: #fff;
  }

  .operations {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 16px;

    .btn {
      padding: 8px 32px;
      color: #f1f1f1;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #f1f1f1;
      background-color: transparent;

      &.btn-again {
        border-color: #6de9dd;
        background-color: #6de9dd;
      }
    }
  }
}
</style>
