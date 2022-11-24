<template>
  <svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
    <defs>
      <g
        id="tetris-item"
      >
        <rect
          :width="itemSize"
          :height="itemSize"
          x="0"
          y="0"
          rx="1"
          ry="1"
          fill="transparent"
          stroke="inherit"
          class="tetris-item-outline"
          name="outline"
        />
        <rect
          :width="itemSize - 3"
          :height="itemSize - 3"
          x="1.5"
          y="1.5"
          rx="1"
          ry="1"
          fill="inherit"
          stroke="transparent"
          class="tetris-item-inner"
          name="inner"
        />
      </g>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { itemSize } from '../../config'
</script>
