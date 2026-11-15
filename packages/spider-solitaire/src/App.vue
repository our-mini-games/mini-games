<template>
  <div class="spider-solitaire" :style="{
    transform: windowSize.isRotate ? 'rotate(90deg)' : 'rotate(0deg)'
  }">
    <GameWrapper />
  </div>
  <p v-if="windowSize.isRotate" class="orientation-hint">横屏游玩更方便</p>
</template>

<script setup lang="ts">
import GameWrapper from './components/GameWrapper/index.vue'
import { useWindow } from './composables/useWindow.js'
import useImgPreload from './composables/useImgPreload.js'
import { nextTick } from 'vue'

const windowSize = useWindow()

const ipl = useImgPreload()
ipl.mockRender(50)
nextTick(() => {
  ipl.reload()
})
</script>

<style src="./assets/reset.scss"></style>

<style scoped>
.orientation-hint {
  position: fixed;
  bottom: 10px;
  left: 50%;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--arcade-well);
  color: var(--arcade-muted);
  font-size: 13px;
  white-space: nowrap;
  pointer-events: none;
  transform: translateX(-50%);
}
</style>
