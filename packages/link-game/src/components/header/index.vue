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
import { GameStatus } from '../../config';

defineEmits<{
  (e: 'set-level'): void
  (e: 'refresh'): void
}>()

const gameStatus = inject('gameStatus', ref(GameStatus.finished))

const handlePauseOrPlay = () => {
  gameStatus.value = gameStatus.value === GameStatus.playing
    ? GameStatus.paused
    : GameStatus.playing
}

const handleBack = () => {
  window.location.href = '/mini-games'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #0088ff;

  .btn {
    border: 0;
    background-color: transparent;
    height: 32px;
    padding: 0 8px;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:hover:not(:disabled) {
      color: #fff;
    }
  }
}
</style>
