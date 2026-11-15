<template>
  <header class="header">
    <a-button class="btn btn-back" @click="handleBack">
      <template #icon>
        <arrow-left-outlined />
      </template>
    </a-button>

    <div class="statistics-item arcade-meter time" aria-label="用时">
      <clock-circle-outlined class="icon" />
      <strong>{{ time }}</strong>
    </div>

    <GameControl />

    <div class="statistics-item arcade-meter mines" aria-label="剩余旗帜" :class="isNegative ? 'negative' : ''">
      <div class="bg"></div>
      <strong>{{ remainingFlags }}</strong>
    </div>
    <MoreMenu />
  </header>
</template>

<script setup lang="ts">
import { ref, inject, computed, Ref } from 'vue'
import { GameStatus } from '../../types/index.js'
import GameControl from './GameControl.vue'
import { formatTime } from '../../lib/utils.js'

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
  gap: 0.5rem;
  width: min(100%, 550px);
  height: 3.5rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  background: var(--bg-cell-color-flag);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;

  @media (min-width: 769px) {
    height: 4rem;
    padding: 0 1rem;
    gap: 1rem;
  }

  :deep(.btn) {
    font: inherit;
    display: flex;
    align-items: center;
    height: 2rem;
    color: var(--arcade-text);
    background: var(--arcade-raised);
    padding: 0 .5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 0.9rem;

    @media (min-width: 769px) {
      font-size: 1rem;
    }

    &.active,
    &:hover {
      background: var(--bg-cell-color-flag);
      border-color: var(--arcade-jade);
    }
  }

  .statistics-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    height: 2rem;
    padding: 0 0.3rem;
    border-radius: 0.5rem;
    color: var(--primary-color);
    font-size: 0.85rem;
    background-color: var(--bg-cell-color-revealed);
    min-width: 0;

    @media (min-width: 769px) {
      gap: 0.5rem;
      padding: 0 0.5rem;
      font-size: 1rem;
    }

    strong { font-size: inherit; }

    .icon {
      color: var(--arcade-muted);
      font-size: 0.7rem;

      @media (min-width: 769px) {
        font-size: 0.8rem;
      }
    }

    &.mines {
      .bg {
        width: 0.9rem;
        height: 0.9rem;
        background-image: url('@/assets/img/mine-1.png');
        background-size: cover;
        background-position: center;

        @media (min-width: 769px) {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  .negative strong {
    color: var(--arcade-danger);
    transition: color .4s;
    animation: twinkle linear infinite 1s;
  }
}
</style>
