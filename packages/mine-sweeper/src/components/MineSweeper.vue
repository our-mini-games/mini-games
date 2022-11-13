<template>
  <div class="mine-sweeper-container" @contextmenu.prevent="() => false">
    <svg
      ref="svgRef"
      :width="viewBoxSize.width"
      :height="viewBoxSize.height"
      :view-box="`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`"
    >
      <g>
        <g
          v-for="item of boxes"
          :key="`${item.x}-${item.y}`"
          :transform="`translate(${(item.x - 1) * areaSize + item.x * gap}, ${(item.y - 1) * areaSize + item.y * gap})`"
          
          @mousedown="(e: any) => handleMousedown(item, e)"
          @mouseup="(e: any) => handleMouseup(item, e)"
        >
          <rect
            x="0"
            y="0"
            :width="areaSize"
            :height="areaSize"
            :fill="getRectFillColor(item, gameStatus)"
            stroke="blue"
            rx="1"
            ry="1"
          />
          <image
            v-if="item.type === 'mine' && item.status === 'open'"
            data-name="mine"
            x="0"
            y="0"
            :width="areaSize"
            :height="areaSize"
            :xlink:href="minePic"
          />
          <image
            v-if="item.status === 'doubtful'"
            data-name="doubtfulPic"
            x="0"
            y="0"
            :width="areaSize"
            :height="areaSize"
            :xlink:href="doubtfulPic"
          />
          <image
            v-if="item.status === 'marked'"
            data-name="bugPic"
            x="0"
            y="0"
            :width="areaSize"
            :height="areaSize"
            :xlink:href="bugPic"
          />
          <template v-if="typeof item.type === 'number'">
            <text
              v-if="item.type !== 0 && item.status === 'open'"
              :x="areaSize / 2"
              :y="areaSize / 2 + 2"
              font-weight="bold"
              font-family="Verdana"
              :font-size="areaSize / 1.5"
              text-anchor="middle"
              dominant-baseline="middle"
              :fill="numberColors[item.type]"
            >
              {{ item.type }}
            </text>
          </template>

          <g v-if="
            gameStatus === 'defeat' &&
            item.type !== 'mine' &&
            (item.status === 'doubtful' || item.status === 'marked')
          ">
            <path
              :d="`
                M ${gap} ${gap}
                L ${areaSize - gap} ${areaSize - gap}
              `"
              :stroke-width="gap"
              stroke="#f40"
            />
            <path
              :d="`
                M ${areaSize - gap} ${gap}
                L ${gap} ${areaSize - gap}
              `"
              :stroke-width="gap"
              stroke="#f40"
            />
          </g>
        </g>
      </g>
    </svg>

    <Statistics
    
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, Ref } from 'vue'
import { areaSize, gap, numberColors } from '../config'
import { getRectFillColor, checkGameStatus } from '../lib/utils'
import useEvent from '../composables/event'

import { LevelInfo, Box, GameStatus } from '../types'

import Statistics from '../components/statistics/index.vue'

import minePic from '../assets/img/mine.png'
import bugPic from '../assets/img/bug.png'
import doubtfulPic from '../assets/img/doubtful.png'
import path from 'path'

const boxes = inject<Ref<Box[]>>('boxes')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const useDoubtful = inject('useDoubtful', ref(true))
const remainingFlags = inject('remainingFlags', ref(0))

const svgRef = ref<HTMLElement>()

const {
  handleMousedown,
  handleMouseup
} = useEvent(svgRef, boxes, useDoubtful, gameStatus, remainingFlags)

const viewBoxSize = computed(() => {
  const { column, row } = levelInfo.value
  return {
    width: column * areaSize + (column + 1) * gap,
    height: row * areaSize + (row + 1) * gap
  }
})

watch(boxes, (newBoxes) => {
  gameStatus.value = checkGameStatus(newBoxes, levelInfo.value)
}, {
  deep: true,
  immediate: true
})
</script>

<style lang="scss" scoped>
.mine-sweeper-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100%;
  user-select: none;
}
</style>
