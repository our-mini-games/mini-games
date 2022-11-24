<template>
  <section class="tetris-container">
    <SVGDefs />

    <TetrisMain />

    <TetrisAside />
  </section>
</template>

<script setup lang="ts">
import TetrisMain from './Main.vue'
import TetrisAside from './Aside.vue'
import SVGDefs from './Defs.vue'
</script>

<style lang="scss" scoped>
.tetris-container {
  display: inline-flex;
  border: 1px solid #333;
  border-radius: 12px;
}
</style>
