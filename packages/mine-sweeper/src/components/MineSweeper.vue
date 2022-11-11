<template>
  <div class="mine-sweeper-container">
    <svg
      :width="viewBoxSize.width"
      :height="viewBoxSize.height"
      :view-box="`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`"
    >
      <g>
        <template
          v-for="item of boxes"
          :key="`${item.x}-${item.y}`"
        >
          <template v-if="typeof item.type === 'number'">
            <text
              v-if="item.type !== 0"
              :x="(item.x - 1) * areaSize + gap"
              :y="(item.y - 1) * areaSize + gap"
            >
              {{ item.type }}
            </text>
          </template>
          
          <rect
            v-if="item.type === 'mine'"
            :x="(item.x - 1) * areaSize + gap"
            :y="(item.y - 1) * areaSize + gap"
            :width="areaSize"
            :height="areaSize"
            fill="red"
          />
        </template>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { LevelInfo, areaSize, gap } from '../config'
import { getBoxes } from '../lib/utils'

const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!

const viewBoxSize = computed(() => {
  const { column, row } = levelInfo.value
  return {
    width: column * areaSize + (column + 1) * gap,
    height: row * areaSize + (row + 1) * gap
  }
})

const boxes = computed(() => getBoxes(levelInfo.value))
</script>

<style lang="scss" scoped>
.mine-sweeper-container {
  height: 100%;
}
</style>
