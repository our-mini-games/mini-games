<template>
  <svg
    v-bind="size"
    :view-box="`0 0 ${size.width} ${size.height}`"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      transform: `scale(${scale})`
    }"
  >
    <g>
      <g
        v-for="item of boxes"
        :key="`${item.x}-${item.y}`"
        :transform="`translate(${getPosition(item.x, levelInfo.size, levelInfo.useBoundary)}, ${getPosition(item.y, levelInfo.size, levelInfo.useBoundary)})`"
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
        <image
          v-if="item.seq !== 0"
          :width="levelInfo.size"
          :height="levelInfo.size"
          :xlink:href="`/materials/${item.seq}.png`"
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
          :xlink:href="`/effects/lightning.png`"
        />
      </g>
    </g> -->
  </svg>

  <Teleport to="body">
    <div class="scale-wrapper">
      <div
        class="btn zoom-in"
        @click="handleZoom('in')"
      >
        +
      </div>
      <div class="scale">
        {{ percentage }}
      </div>
      <div
        class="btn zoom-out"
        @click="handleZoom('out')"
      >
        -
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { GameStatus } from '../config';
import { getFromPosition, getPosition, getToPosition, sleep } from '../lib/utils';
import { Box, LevelInfo } from '../types'

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const boxes = inject('boxes', ref<Box[]>([]))

const scale = inject('scale', ref(1))
const percentage = computed(() => (scale.value * 100).toFixed(0) + '%')

const animationItems = ref<Box[]>([])
const isRemoveSuccess = ref(false)

const animationPath = computed(() => {
  if (animationItems.value.length < 2) {
    return ''
  }
  const { size, useBoundary } = levelInfo.value
  const halfSize = size / 2

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
    d += `\nQ ${getPosition(first.value.x, size, useBoundary) + halfSize} ${getPosition(first.value.y, size, useBoundary) + halfSize}, ${getFromPosition(first.value, next.value, levelInfo.value).join(' ')}`
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

const linkAnimation = async (items: Box[]) => {
  animationItems.value.push(...items)
  isRemoveSuccess.value = true

  await sleep(200)

  animationItems.value = []
  isRemoveSuccess.value = false
}

const { checkedItems, handleCheck } = useEvent(boxes, gameStatus, levelInfo, linkAnimation)

const handleZoom = (type: 'in' | 'out') => {
  scale.value = Math.max(0.1, Math.min(3, type === 'in' ? scale.value + 0.1 : scale.value - 0.1))
}
</script>

<style lang="scss" scoped>
.scale-wrapper {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999;
  background-color: #0088ff;
  border-radius: 16px;
  user-select: none;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: #fff;
    cursor: pointer;

    * {
      pointer-events: none;
    }
  }

  .scale {
    font-size: 12px;
    text-align: center;
    margin: 4px 0;
    color: #fff;
    transform: scale(0.8);
  }
}
</style>
