<template>
  <main class="tetris-main">
    <svg
      class="game-wrapper"
      :width="width"
      :height="height"
    >
      <!-- 背景区 -->
      <g name="bg-board">
        <g v-for="y in wrapperSize.row" :key="y">
          <g v-for="x in wrapperSize.column" :key="x">
            <use
              :x="(x - 1) * itemSize"
              :y="(y - 1) * itemSize"
              xlink:href="#tetris-item"
              :fill="color.bg"
              :stroke="color.bg"
              class="bg-item"
            />
          </g>
        </g>
      </g>

      <!-- <use
        v-for="i in 10"
        :key="i"
        :x="(i - 1) * itemSize"
        :y="4 * itemSize"
        fill="red"
        stroke="red"
        xlink:href="#tetris-item"
      /> -->
    </svg>
  </main>
</template>

<script setup lang="ts">
import { wrapperSize, itemSize, color } from '../../config'

const width = wrapperSize.column * itemSize
const height = wrapperSize.row * itemSize
</script>

<style lang="scss" scoped>
.game-wrapper {
  display: block;
  padding: 2px;
  border: 2px solid #333;
}
</style>
