<template>
  <a-tooltip
    :title="title"
    placement="bottom"
  >
    <a-button
      class="btn game-control"
      @click="handleClick"
    >
      {{ title }}
    </a-button>
  </a-tooltip>
</template>

<script setup lang="ts">
import { inject, computed, Ref, nextTick } from 'vue'
import { GameStatus } from '../../types/index.js'

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!

const title = computed(() => {
  return gameStatus.value === 'playing'
    ? '重新开始'
    : '开始游戏'
})

const handleClick = (): void => {
  if (gameStatus.value === 'playing') {
    gameStatus.value = 'finished'
    nextTick((): void => {
      gameStatus.value = 'playing'
    })
    return
  }

  gameStatus.value = 'playing'
}
</script>

<style lang="scss" scoped>
.game-control {
  white-space: nowrap;
}
</style>
