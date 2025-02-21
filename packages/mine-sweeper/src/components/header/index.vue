<template>
  <header class="header">
    <a-button class="btn btn-back" @click="handleBack">
      <template #icon>
        <arrow-left-outlined />
      </template>
    </a-button>

    <div class="statistics-item time">
      <clock-circle-outlined class="icon" />
      {{ time }}
    </div>

    <GameControl />

    <div class="statistics-item mines" :class="isNegative ? 'negative' : ''">
      <div class="bg"></div>
      {{ remainingFlags }}
    </div>
    <MoreMenu />
  </header>
</template>

<script setup lang="ts">
import { ref, inject, computed, Ref } from 'vue'
import { GameStatus } from '../../types'
import GameControl from './GameControl.vue'
import { formatTime } from '../../lib/utils'

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const gameTime = inject('gameTime', ref(0))
const remainingFlags = inject('remainingFlags', ref(0))

const isNegative = computed(() => remainingFlags.value < 0)
const time = computed(() => formatTime(gameTime.value))

const handleBack = (): void => {
  gameStatus.value = 'finished'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  box-sizing: border-box;
  background: var(--bg-cell-color-flag);
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;

  :deep(.btn) {
    all: unset;
    display: flex;
    align-items: center;
    height: 2rem;
    color: #fff;
    padding: 0 .5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    cursor: pointer;

    &.active,
    &:hover {
      background: var(--bg-cell-color-flag);
      box-shadow: 0 0 15px var(--border-color), 0 0 30px var(--border-color);
    }
  }

  .statistics-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    color: var(--primary-color);
    font-size: 1rem;
    background-color: var(--bg-cell-color-revealed);

    .icon {
      color: var(--bg-cell-color);
      font-size: 0.8rem;
    }

    &.mines {
      .bg {
        width: 1rem;
        height: 1rem;
        background-image: url('@/assets/img/mine-1.png');
        background-size: cover;
        background-position: center;
      }
    }
  }

  .negative {
    color: #f40;
    transition: color .4s;
    animation: twinkle linear infinite 1s;
  }
}
</style>
