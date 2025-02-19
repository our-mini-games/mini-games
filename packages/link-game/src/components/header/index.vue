<template>
  <header class="header">
    <div class="container">
      <button
        class="btn btn-back"
        @click="handleBack"
      >
        返回
      </button>

      <button
        class="btn btn-refresh"
        @click="$emit('refresh')"
      >
        重新开启
      </button>

      <button
        class="btn btn-pause-play"
        :disabled="gameStatus !== GameStatus.playing && gameStatus !== GameStatus.paused"
        @click="handlePauseOrPlay"
      >
        {{ gameStatus === GameStatus.paused ? '开始' : '暂停' }}游戏
      </button>

      <button
        class="btn btn-set-level"
        @click="$emit('set-level')"
      >
        游戏设置
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { GameStatus } from '../../config'

defineEmits<{
  (e: 'set-level'): void
  (e: 'refresh'): void
}>()

const gameStatus = inject('gameStatus', ref(GameStatus.finished))

const handlePauseOrPlay = (): void => {
  gameStatus.value = gameStatus.value === GameStatus.playing
    ? GameStatus.paused
    : GameStatus.playing
}

const handleBack = (): void => {
  window.location.href = '/mini-games'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--primary-color);

  .btn {
    border: 0;
    background-color: transparent;
    height: 1.5rem;
    padding: 0 0.5rem;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:hover:not(:disabled) {
      color: var(--white);
    }
  }
}
</style>
