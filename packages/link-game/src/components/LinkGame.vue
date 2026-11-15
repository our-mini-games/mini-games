<template>
  <svg
    class="link-board arcade-table"
    :width="areaSize.width"
    :height="areaSize.height"
    :viewBox="`0 0 ${areaSize.width} ${areaSize.height}`"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <!-- 栏栅阴影滤镜 -->
      <filter id="fenceShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="5" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.5" />
      </filter>

      <!-- 栏栅图案 -->
      <pattern id="fencePattern" x="0" y="0" :width="levelInfo.size / 4" :height="levelInfo.size / 4" patternUnits="userSpaceOnUse">
        <path
          :d="`M 0 ${levelInfo.size / 4} L ${levelInfo.size / 4} 0`"
          stroke="#719a8a"
          stroke-width="1"
        />
        <path
          :d="`M 0 0 L ${levelInfo.size / 4} ${levelInfo.size / 4}`"
          stroke="#4c7360"
          stroke-width="1"
        />
      </pattern>

      <linearGradient id="link-tile-glaze" x2="0" y2="1">
        <stop stop-color="#456851" />
        <stop offset="1" stop-color="#254135" />
      </linearGradient>
    </defs>

    <g
      v-if="levelInfo.useBoundary"
      name="boundary"
    >
      <rect
        :width="areaSize.width - levelInfo.size / 2"
        :height="areaSize.height - levelInfo.size / 2"
        :x="levelInfo.size / 4"
        :y="levelInfo.size / 4"
        fill="none"
        stroke="url(#fencePattern)"
        :stroke-width="levelInfo.size / 2"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#fenceShadow)"
      />
    </g>
    <g :transform="`translate(${levelInfo.size / 2}, ${levelInfo.size / 2})`">
      <g
        v-for="item of boxes"
        :key="`box-${item.x}-${item.y}`"
        :transform="`translate(${getPosition(item.x, levelInfo)}, ${getPosition(item.y, levelInfo)})`"
        :style="{
          cursor: 'pointer',
          touchAction: 'manipulation'
        }"
        @click="(e: MouseEvent) => handleCheck(item, e)"
      >
        <rect
          class="link-tile"
          :class="{ empty: item.seq === 0, selected: item.status === 'checked', error: item.status === 'error' }"
          x="1.5"
          y="1.5"
          :width="levelInfo.size - 3"
          :height="levelInfo.size - 3"
          :rx="levelInfo.size * .13"
        />
        <image
          v-if="item.seq !== 0"
          :x="levelInfo.size * .1"
          :y="levelInfo.size * .1"
          :width="levelInfo.size * .8"
          :height="levelInfo.size * .8"
          :xlink:href="`${PATHNAME}materials/${item.seq}.png`"
          class="link-piece"
        />
      </g>

      <g
        v-if="animationItems.length > 0"
        name="连接线"
      >
        <path
          :d="animationPath"
          class="link-path"
          fill="none"
          :stroke-width="Math.max(2, levelInfo.size / 12)"
          stroke-linecap="round"
          pathLength="1"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { GameStatus } from '../config/index.js'
import { getFromPosition, getPosition, getToPosition, sleep } from '../lib/utils.js'
import { Box, LevelInfo } from '../types/index.js'
import useEvent from '../composables/useEvent.js'

const PATHNAME = import.meta.env.VITE_APP_PATHNAME

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const boxes = inject('boxes', ref<Box[]>([]))
const areaSize = inject<Ref<{ width: number, height: number }>>('areaSize')!

const animationItems = ref<Box[]>([])

const animationPath = computed(() => {
  if (animationItems.value.length < 2) {
    return ''
  }
  const halfSize = levelInfo.value.size / 2

  const it = animationItems.value[Symbol.iterator]()
  let first = it.next()
  let next = it.next()

  let d = `M ${getFromPosition(first.value, next.value, levelInfo.value).join(' ')}`
  // 第一条连接线
  d += `\nL ${getToPosition(first.value, next.value, levelInfo.value).join(' ')}`
  first = next
  next = it.next()

  while (next.value) {
    // 拐角
    d += `\nQ ${getPosition(first.value.x, levelInfo.value) + halfSize} ${getPosition(first.value.y, levelInfo.value) + halfSize}, ${getFromPosition(first.value, next.value, levelInfo.value).join(' ')}`
    d += `\nL ${getToPosition(first.value, next.value, levelInfo.value).join(' ')}`
    first = next
    next = it.next()
  }

  return d
})

const linkAnimation = async (items: Box[]): Promise<void> => {
  animationItems.value.push(...items)

  await sleep(200)

  animationItems.value = []
}

const { handleCheck } = useEvent(boxes, gameStatus, levelInfo, linkAnimation)
</script>

<style scoped>
.link-board {
  display: block;
}

.link-tile {
  fill: url(#link-tile-glaze);
  stroke: var(--arcade-tile-edge);
  stroke-width: 1;
  transition: stroke 140ms, fill 140ms;
}

.link-tile.empty {
  fill: var(--arcade-slot);
  stroke: transparent;
}

.link-tile.selected {
  fill: #726241;
  stroke: var(--arcade-gold-hover);
  stroke-width: 2.5;
}

.link-tile.error {
  fill: #69423a;
  stroke: var(--arcade-danger);
  stroke-width: 2;
}

.link-piece {
  pointer-events: none;
  filter: saturate(.92) drop-shadow(0 0 1px #f1e3ae9c) drop-shadow(0 2px 1px #10251b9c);
}

.link-path {
  pointer-events: none;
  stroke: var(--arcade-gold-hover);
  stroke-dasharray: 1;
  animation: trace-link 160ms ease-out both;
}

@keyframes trace-link {
  from { stroke-dashoffset: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .link-path { animation: none; }
  .link-tile { transition: none; }
}
</style>
