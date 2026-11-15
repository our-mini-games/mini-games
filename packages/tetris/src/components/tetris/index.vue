<template>
  <section class="tetris-container">
    <SVGDefs />
    <p v-if="gameStatus === GameStatus.PowerOff" class="off-screen">按开机键开始</p>
    <TetrisMain v-if="gameStatus !== GameStatus.PowerOff" />
    <TetrisAside v-if="gameStatus !== GameStatus.PowerOff" />
  </section>
</template>

<script setup lang="ts">
import TetrisMain from './Main.vue'
import TetrisAside from './Aside.vue'
import SVGDefs from './Defs.vue'
import { GameStatus } from '../../config/index.js'

const gameStatus = inject('gameStatus', ref(GameStatus.PowerOff))
</script>

<style lang="scss" scoped>
.tetris-container {
  display: inline-flex;
  gap: 12px;
  width: min(100%, calc(var(--tetris-field-width) + 110px));
  min-height: calc(var(--tetris-field-width) * 2);
  text-align: left;
}

.off-screen {
  margin: auto;
  color: var(--arcade-muted);
  font-size: 14px;
}
</style>
