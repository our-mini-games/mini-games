<template>
  <div class="game-2048">
    <Game2048 />
  </div>
</template>

<script setup lang="ts">
import { createDefaultGrids } from './lib/utils'
import { GameItem } from './types'
import { sizeConfig } from './config'

import Game2048 from './components/Game2048.vue'

const gameGrids = ref<GameItem[][]>(createDefaultGrids(sizeConfig.row, sizeConfig.column))

provide('gameGrids', gameGrids)
</script>
