<template>
  <div class="spider-solitaire" :style="{
    transform: windowSize.isRotate ? 'rotate(90deg)' : 'rotate(0deg)'
  }">
    <GameWrapper />
  </div>
</template>

<script setup lang="ts">
import GameWrapper from './components/GameWrapper/index.vue'
import { useWindow } from './composables/useWindow'

const windowSize = useWindow()

const ipl = useImgPreload()
ipl.mockRender(50)
nextTick(() => {
  ipl.reload()
})
</script>

<style src="./assets/reset.scss"></style>
