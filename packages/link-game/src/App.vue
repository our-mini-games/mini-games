<template>
  <div class="link-game">
    <LinkGame />
  </div>
</template>

<script setup lang="ts">
import { gameConfig, GameStatus, Level } from './config'

import LinkGame from './components/LinkGame.vue'

const currentLevel = ref(Level.middle)
const gameStatus = ref(GameStatus.playing)

const levelInfo = computed(() => gameConfig[currentLevel.value])

console.log(levelInfo)
const boxes = useBoxes(levelInfo)

provide('gameStatus', gameStatus)
provide('levelInfo', levelInfo)
provide('boxes', boxes)
</script>
