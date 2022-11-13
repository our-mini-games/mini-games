<template>
  <div class="statistics-wrapper">
    <div class="item time">
      <clock-circle-outlined class="icon" />
      {{ time }}
    </div>
    <div class="item mines">
      <img :src="minePic" class="icon" width="32" height="32" />
      {{ remainingFlags }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed } from 'vue'

import minePic from '../../assets/img/mine.png'
import { zeroFill } from '../../lib/utils';

const gameTime = inject('gameTime', ref(0))
const remainingFlags = inject('remainingFlags', ref(0))

const time = computed(() => {
  const m = Math.floor(gameTime.value / 60)
  const s = gameTime.value % 60

  return `${zeroFill(m)}:${zeroFill(s)}`
})
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
}
</style>
