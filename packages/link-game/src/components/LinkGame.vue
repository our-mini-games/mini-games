<template>
  <svg
    v-bind="size"
    :view-box="`0 0 ${size.width} ${size.height}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g
        v-for="item of boxes"
        :key="item.x + item.y"
        :transform="`translate(${(!levelInfo.useBoundary ? item.x : (item.x - 1)) * levelInfo.size}, ${(!levelInfo.useBoundary ? item.y : (item.y - 1)) * levelInfo.size})`"
        :style="{
          cursor: 'pointer'
        }"
        @click="(e: MouseEvent) => handleCheck(item, e)"
      >
        <rect
          :width="levelInfo.size"
          :height="levelInfo.size"
          :fill="item.status === 'checked' ? 'orange' : 'transparent'"
          stroke="#0088ff"
        >
        </rect>
        <text
          v-if="item.seq !== 0"
          :x="levelInfo.size / 2"
          :y="levelInfo.size / 2 + 2"
          font-weight="bold"
          font-family="Verdana"
          :font-size="levelInfo.size / 3"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="#0088ff"
          style="pointer-events: none;"
        >
          {{ item.seq }}
        </text>
      </g>
    </g>

    <g
      data-name="link-animation"
    >
      <g
        v-for="(item, index) of animationItems"
        :key="item.x + item.y"
        :transform="`translate(${(!levelInfo.useBoundary ? item.x : (item.x - 1)) * levelInfo.size}, ${(!levelInfo.useBoundary ? item.y : (item.y - 1)) * levelInfo.size})`"
        :style="{
          cursor: 'pointer'
        }"
        @click="(e: MouseEvent) => handleCheck(item, e)"
      >
        <rect
          :width="levelInfo.size"
          :height="levelInfo.size"
          :fill="item.status === 'checked' ? 'orange' : 'transparent'"
          stroke="#0088ff"
        >
        </rect>
        <text
          :x="levelInfo.size / 2"
          :y="levelInfo.size / 2 + 2"
          font-weight="bold"
          font-family="Verdana"
          :font-size="levelInfo.size / 3"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="#f00"
          style="pointer-events: none;"
        >
          {{ index + 1 }}
        </text>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { GameStatus } from '../config';
import { Box, LevelInfo } from '../types'

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const boxes = inject('boxes', ref<Box[]>([]))

const animationItems = ref<Box[]>([])

const size = computed(() => {
  const { column, row, size, useBoundary } = levelInfo.value
  return {
    width: (column + (!useBoundary ? 2 : 0)) * size,
    height: (row + (!useBoundary ? 2 : 0)) * size
  }
})

const sleep = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

const linkAnimation = async (items: Box[]) => {
  animationItems.value.push(...items)

  await sleep(500)

  animationItems.value = []
}

const { handleCheck } = useEvent(boxes, gameStatus, levelInfo, linkAnimation)
</script>
