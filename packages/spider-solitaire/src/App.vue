<template>
  <div class="spider-solitaire">
    <GameWrapper />
  </div>
</template>

<script setup lang="ts">
import GameWrapper from './components/GameWrapper/index.vue'

const ipl = useImgPreload()
ipl.mockRender(50)
nextTick(() => {
  ipl.reload()
})
</script>

<style src="./assets/reset.scss"></style>
