<template>
  <svg
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
          stroke="#707070"
          stroke-width="1"
        />
        <path
          :d="`M 0 0 L ${levelInfo.size / 4} ${levelInfo.size / 4}`"
          stroke="#505050"
          stroke-width="1"
        />
      </pattern>

      <!-- 选中发光滤镜 -->
      <filter id="glow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur1"></feGaussianBlur>
        <feMerge result="merge1">
          <feMergeNode in="blur1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur2"></feGaussianBlur>
        <feMerge result="merge2">
          <feMergeNode in="blur2"></feMergeNode>
          <feMergeNode in="merge1"></feMergeNode>
        </feMerge>
        <feColorMatrix type="matrix" values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 1 0
        " result="colorChange">
          <animate attributeName="values" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0;
            1 0 0 0 0.2
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0;
            1 0 0 0 0
            0 1 0 0 0.2
            0 0 1 0 0
            0 0 0 1 0;
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0.2
            0 0 0 1 0
          " dur="2s" repeatCount="indefinite"></animate>
        </feColorMatrix>
      </filter>
      <!-- 连接线渐变流动 -->
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="cyan" stop-opacity="1">
          <animate attributeName="offset" values="0;1;0" dur="2s" repeatCount="indefinite"></animate>
        </stop>
        <stop offset="50%" stop-color="magenta" stop-opacity="1">
          <animate attributeName="offset" values="0.5;1.5;0.5" dur="2s" repeatCount="indefinite"></animate>
        </stop>
        <stop offset="100%" stop-color="yellow" stop-opacity="1">
          <animate attributeName="offset" values="1;2;1" dur="2s" repeatCount="indefinite"></animate>
        </stop>
      </linearGradient>

      <!-- 光点效果 -->
      <circle id="lightPoint" r="5" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"></animate>
      </circle>
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
          cursor: 'pointer'
        }"
        @click="(e: MouseEvent) => handleCheck(item, e)"
      >
        <rect
          fill="none"
          :width="levelInfo.size"
          :height="levelInfo.size"
          stroke="#e0e0e0"
          stroke-width="1"
        />
        <image
          v-if="item.seq !== 0"
          :width="levelInfo.size"
          :height="levelInfo.size"
          :xlink:href="`${PATHNAME}materials/${item.seq}.png`"
          :filter="item.status === 'checked' ? 'url(#glow)' : 'none'"
          :transform-origin="`${levelInfo.size / 2} ${levelInfo.size / 2}`"
        >
          <!-- 选中特效 -->
          <animateTransform
            v-if="item.status === 'checked'"
            attributeName="transform"
            type="scale"
            from="0.8"
            to="1"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <!-- 连接失败特效 -->
          <animateTransform
            v-if="item.status === 'error'"
            attributeName="transform"
            type="translate"
            values="0,0;4,0;-4,0;4,0;-4,0;0,0"
            dur="0.4s"
            repeatCount="indefinite"
          />
        </image>
        <!-- <text
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
        </text> -->
      </g>

      <g
        v-if="animationItems.length > 0"
        name="连接线"
      >
        <path
          id="connectionPath"
          :d="animationPath"
          fill="none"
          stroke="url(#lineGradient)"
          :stroke-width="levelInfo.size / 16"
          stroke-linecap="round"
          stroke-dasharray="1000"
          stroke-dashoffset="1000"
        >
          <!-- 动态绘制线条 -->
          <animate
            attributeName="stroke-dashoffset"
            from="300"
            to="0"
            dur="0.2s"
            fill="freeze"
          ></animate>
        </path>
        <!-- 光点跟随路径 -->
        <use href="#lightPoint">
          <animateMotion dur="1s" fill="freeze">
            <mpath href="#connectionPath"></mpath>
          </animateMotion>
        </use>
      </g>
    </g>
  </svg>
  <svg
    style="display: none;"
    v-bind="size"
    width="100%"
    :view-box="`0 0 ${size.width} ${size.height}`"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      ...(levelInfo.useBoundary ? {
        border: '10px solid #0088ff',
      } : null)
    }"
  >
    <g>
      <g
        v-for="item of boxes"
        :key="`${item.x}-${item.y}`"
        :transform="`translate(${getPosition(item.x, levelInfo)}, ${getPosition(item.y, levelInfo)})`"
        :style="{
          cursor: 'pointer'
        }"
        @click="(e: MouseEvent) => handleCheck(item, e)"
      >
        <rect
          :width="levelInfo.size"
          :height="levelInfo.size"
          :fill="item.status === 'checked' ? 'rgba(126, 201, 109, 0.63)' : item.status === 'error' ? '#f80' : 'transparent'"
          stroke="#0088ff"
        />
        <!-- <image
          v-if="item.seq !== 0"
          :width="levelInfo.size"
          :height="levelInfo.size"
          :xlink:href="`${PATHNAME}materials/${item.seq}.png`"
        >
          <animateTransform
            v-if="item.status === 'error'"
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="-4;4;-4"
            dur="100ms"
            repeatCount="indefinite"
          />
          <animateTransform
            v-if="item.status === 'checked' && !isRemoveSuccess"
            attributeName="transform"
            attributeType="XML"
            type="scale"
            values="1.1;1;1.1"
            dur="500ms"
            repeatCount="indefinite"
          />
        </image> -->
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

    <defs>
      <filter id="path-f1" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>

      <filter id="path-f2">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="Gau1" />
        <feOffset dx="0" dy="0" />
        <feGaussianBlur stdDeviation="1" out="Gau2" result="Gau1" />
        <feComposite in="Gau1" in2="SourceAlpha" operator="over" />
      </filter>
    </defs>

    <!-- 连接路径 -->
    <g data-group="link-path">
      <path
        v-if="animationItems.length > 0"
        :d="animationPath"
        stroke="#f40"
        stroke-width="2"
        fill="transparent"
      />
    </g>

    <!-- 特效 -->
    <!-- <g v-show="isRemoveSuccess">
      <g
        v-for="item of checkedItems"
        :transform="`translate(${getPosition(item.x, levelInfo.size, levelInfo.useBoundary)}, ${getPosition(item.y, levelInfo.size, levelInfo.useBoundary)})`"
      >
        <rect
          :width="levelInfo.size"
          :height="levelInfo.size"
          fill="#fff"
        />
        <image
          :width="levelInfo.size"
          :height="levelInfo.size"
          :xlink:href="`${PATHNAME}effects/lightning.png`"
        />
      </g>
    </g> -->
  </svg>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getFromPosition, getPosition, getToPosition, sleep } from '../lib/utils'
import { Box, LevelInfo } from '../types'

const PATHNAME = import.meta.env.VITE_APP_PATHNAME

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const boxes = inject('boxes', ref<Box[]>([]))
const areaSize = inject<Ref<{ width: number, height: number }>>('areaSize')!

const animationItems = ref<Box[]>([])
const isRemoveSuccess = ref(false)

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

const size = computed(() => {
  const { column, row, size, useBoundary } = levelInfo.value
  return {
    width: (column + (!useBoundary ? 2 : 0)) * size,
    height: (row + (!useBoundary ? 2 : 0)) * size
  }
})

const linkAnimation = async (items: Box[]): Promise<void> => {
  animationItems.value.push(...items)
  isRemoveSuccess.value = true

  await sleep(200)

  animationItems.value = []
  isRemoveSuccess.value = false
}

const { handleCheck } = useEvent(boxes, gameStatus, levelInfo, linkAnimation)
</script>
