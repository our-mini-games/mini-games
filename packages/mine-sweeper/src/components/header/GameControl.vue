<template>
  <div
    class="game-control"
    @click="handleClick"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { inject, computed, Ref, nextTick } from 'vue'
import { GameStatus } from '../../types'

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!

const text = computed(() => {
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
  display: flex;
  align-items: center;
  width: 96px;
  height: 96px;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  outline: 2px solid #fff;
  outline-offset: -16px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #0088ff;
  cursor: pointer;
}
</style>
