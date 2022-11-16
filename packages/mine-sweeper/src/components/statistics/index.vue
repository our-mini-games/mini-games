<template>
  <div class="statistics-wrapper">
    <div class="item time">
      <clock-circle-outlined class="icon" />
      {{ time }}
    </div>
    <div class="item mines" :class="isNegative ? 'negative' : ''">
      <img :src="minePic" class="icon" width="32" height="32" />
      {{ remainingFlags }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'path';
import { inject, ref, computed } from 'vue'

import minePic from '../../assets/img/mine.png'
import { formatTime } from '../../lib/utils';

const gameTime = inject('gameTime', ref(0))
const remainingFlags = inject('remainingFlags', ref(0))

const isNegative = computed(() => remainingFlags.value < 0)
const time = computed(() => formatTime(gameTime.value))
</script>

<style lang="scss" scoped>
.statistics-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 100px;
    height: 32px;
    border-radius: 22px;
    color: #0088ff;
    font-size: 16px;

    .icon {
      color: #333;
      font-size: 22px;
    }
  }

  .negative {
    color: red;
    transition: color .4s;
    animation: twinkle linear infinite 1s;
  }
}

@keyframes twinkle {
  0%, 100% {
    color: #efcece;
  }

  50% {
    color: #f92020;
  }
}
</style>
