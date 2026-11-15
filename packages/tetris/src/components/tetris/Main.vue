<template>
  <main class="tetris-main">
    <svg
      class="game-wrapper"
      :width="width"
      :height="height"
    >
      <!-- 已搭建建筑物区 -->
      <g name="building">
        <g
          v-for="(rowItem, rowIndex) of building"
          :key="rowIndex"
        >
          <g
            v-for="(columnItem, columnIndex) of rowItem"
            :key="columnIndex"
          >
            <use
              :x="columnIndex * itemSize"
              :y="rowIndex * itemSize"
              :fill="columnItem ? color.item : color.bg"
              :stroke="columnItem ? color.item : color.bg"
              xlink:href="#tetris-item"
            />
          </g>
        </g>
      </g>

      <!-- 最终掉落点提示 -->
      <g name="final-tetris">
        <g
          v-for="item of finalTips"
          :key="`${item.x}-${item.y}`"
        >
          <use
            :x="item.x * itemSize"
            :y="item.y * itemSize"
            :fill="color.final"
            :stroke="color.final"
            xlink:href="#tetris-item"
          />
        </g>
      </g>

      <!-- 当前元素区 -->
      <g name="current">
        <g
          v-for="item of currentTetrisCoordinates"
          :key="`${item.x}-${item.y}`"
        >
          <use
            :x="item.x * itemSize"
            :y="item.y * itemSize"
            :fill="color.item"
            :stroke="color.item"
            xlink:href="#tetris-item"
          />
        </g>
      </g>
    </svg>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { wrapperSize, itemSize, color } from '../../config/index.js'
import { BuildingType, Coordinate, Tetris } from '../../types/index.js'

const width = wrapperSize.column * itemSize
const height = wrapperSize.row * itemSize

const currentTetris = inject<Ref<Tetris | null>>('currentTetris')!
const building = inject('building', ref<BuildingType[]>([]))
const finalTips = inject('finalTips', ref<Coordinate[]>([]))

const currentTetrisCoordinates = computed(() => currentTetris.value ? currentTetris.value.coordinates : [])
</script>

<style lang="scss" scoped>
.game-wrapper {
  display: block;
  margin: 2px;
}
</style>
