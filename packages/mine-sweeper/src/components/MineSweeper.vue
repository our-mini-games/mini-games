<template>
  <div class="mine-sweeper-container" @contextmenu.prevent="() => false">
    <PageHeader />
    <main class="mine-sweeper-main">
      <svg
        ref="svgRef"
        :width="viewBoxSize.width"
        :height="viewBoxSize.height"
        :viewBox="`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`"
        preserveAspectRatio="xMidYMid meet"
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
              class="mine-cell"
              :class="{
                revealed: item.status === 'open' || item.status === 'active',
                marked: item.status === 'marked',
                doubtful: item.status === 'doubtful',
                mine: item.type === 'mine' && item.status === 'open'
              }"
              x="1"
              y="1"
              :width="areaSize - 2"
              :height="areaSize - 2"
              stroke-width="2"
              rx="4"
              ry="4"
            />
            <template v-if="typeof item.type === 'number'">
              <text
                v-if="item.type !== 0 && item.status === 'open'"
                :x="areaSize / 2"
                :y="areaSize / 2"
                font-weight="bold"
                font-family="Verdana"
                :font-size="areaSize / 1.5"
                text-anchor="middle"
                dominant-baseline="middle"
                :class="`number-${item.type}`"
              >
                {{ item.type }}
              </text>
            </template>
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

          <g v-if="
            gameStatus === 'defeat' &&
            item.type !== 'mine' &&
            (item.status === 'doubtful' || item.status === 'marked')
          ">
            <path
              :d="`
                M ${gap + 4} ${gap + 4}
                L ${areaSize - gap - 4} ${areaSize - gap - 4}
              `"
              stroke-width="3"
              stroke="#f40"
            />
            <path
              :d="`
                M ${areaSize - gap - 4} ${gap + 4}
                L ${gap + 4} ${areaSize - gap - 4}
              `"
              stroke-width="3"
              stroke="#f40"
            />
          </g>
        </g>
        </g>
      </svg>
    </main>

    <footer class="mine-sweeper-footer">
      <Enhancements
        v-if="useLeftClickEnhancements"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch, Ref, defineAsyncComponent } from 'vue'
import { checkGameStatus } from '../lib/utils'
import useEvent from '../composables/useEvent'
import { useSize } from '../composables/useSize'

import { LevelInfo, Box, GameStatus } from '../types'

import PageHeader from '../components/header/index.vue'

import minePic from '../assets/img/mine-1.png'
import bugPic from '../assets/img/flag-1.png'
import doubtfulPic from '../assets/img/doubtful-1.png'

const Enhancements = defineAsyncComponent(async () => await import('../components/enhancements/index.vue'))

const boxes = inject<Ref<Box[]>>('boxes')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const useDoubtful = inject('useDoubtful', ref(true))
const remainingFlags = inject('remainingFlags', ref(0))
const useLeftClickEnhancements = inject('useLeftClickEnhancements', ref(false))

const svgRef = ref<HTMLElement>()

const {
  areaSize,
  gap,
  viewBoxSize
} = useSize(svgRef, levelInfo)

const {
  handleMousedown,
  handleMouseup
} = useEvent(svgRef, boxes, useDoubtful, gameStatus, remainingFlags)

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
  gap: 1rem;
  position: relative;
  padding: 0.5rem 1rem;
  height: 100%;
  user-select: none;

  .mine-sweeper-main {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;

    .mine-cell {
      fill: var(--bg-cell-color);
      stroke: var(--border-color);
      background-size: cover;
      background-position: center;

      &.revealed {
        fill: var(--bg-cell-color-revealed);
      }

      &.mine {
        fill: var(--bg-cell-color-mine);
        stroke: var(--red);
        background-image: url('@/assets/img/mine-1.png');
      }

      &.marked {
        background-image: url('@/assets/img/flag-1.png');
      }

      &.doubtful {
        background-image: url('@/assets/img/doubtful-1.png');
      }
    }

    @for $i from 1 through 8 {
      .number-#{$i} {
        fill: var(--number-color-#{$i});
      }
    }
  }

  .mine-sweeper-footer {
    height: 2.5rem;
  }
}
</style>
