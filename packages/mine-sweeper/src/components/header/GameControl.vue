<template>
  <a-tooltip
    :title="title"
    placement="bottom"
  >
    <a-button
      class="btn game-control"
      @click="handleClick"
    >
      <template #icon>
        <PlayCircleFilled class="icon" />
      </template>
    </a-button>
  </a-tooltip>
</template>

<script setup lang="ts">
import { inject, computed, Ref, nextTick } from 'vue'
import { GameStatus } from '../../types'

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
.game-control .icon {
  font-size: 1.2rem;
  color: var(--primary-color);
}
</style>
