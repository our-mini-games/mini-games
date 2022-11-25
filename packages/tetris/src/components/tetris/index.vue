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
  // border: 1px solid #333;
  // border-radius: 12px;
  border-width: 24px;
  border-style: solid;
  border-color: #f1f1f1 #f6f6ff;
  margin: 16px;
}
</style>
