<template>
  <main class="game-container">
    <svg
      v-if="false"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      class="svg"
    >
      <g
        name="game-grids"
        :transform="`translate(${gap}, ${gap})`"
      >
        <g
          v-for="(columns, y) of gameGrids"
          :key="`row-${y}`"
        >
          <g
            v-for="(value, x) of columns"
            :key="`column-${x}`"
            :transform="`translate(${(size + gap) * x}, ${(size + gap) * y})`"
          >
            <rect
              x="0"
              y="0"
              :rx="4"
              :ry="4"
              :width="size"
              :height="size"
              stroke="transparent"
              class="grid-item"
              :class="`grid-item-${value}`"
            />
            <text
              v-if="(value !== 0)"
              class="grid-text"
              text-anchor="middle"
              dominant-baseline="central"
              :font-size="size / 2"
              :transform="`translate(${size / 2}, ${size / 2})`"
            >
              {{ value }}
            </text>
          </g>
        </g>
      </g>
    </svg>
  </main>
</template>

<script setup lang="ts">
import { sizeConfig, Direction } from '../config'
import { GameItem } from '../types'

const { row, column, size, gap } = sizeConfig

const width = row * size + (row + 1) * gap
const height = column * size + (column + 1) * gap

const gameGrids = inject('gameGrids', ref<GameItem[][]>([]))

const {
  horizotalMerge,
  verticalMerge,
  merge
} = useMerge(gameGrids)

const count1 = merge([
  // [2, 2, 4, 4],
  // [2, 4, 0, 0],
  // [0, 2, 0, 2],
  // [0, 0, 2, 2]
  [2, 4, 0, 0],
  [2, 4, 0, 0],
  [2, 4, 0, 0],
  [2, 4, 0, 0]
])
console.log({ count1 })

const handleSwipe = (dir: Direction, e: HammerInput): void => {
  console.log(dir, e)
  switch (dir) {
    case Direction.Up:
    case Direction.Down:
      verticalMerge(dir === Direction.Down)
      break
    case Direction.Right:
    case Direction.Left:
      horizotalMerge(dir === Direction.Left)
      break
  }
}

useSwipe('.game-container .svg', handleSwipe)
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';
.game-container {
  .svg {
    background-color: var(--bg-color);
  }
  .grid-item-0 {
    fill: var(--grid-color-0);
  }

  @for $i from 1 through 11 {
    .grid-item-#{$i} {
      fill: var(--grid-color-#{pow(2, $i)})
    }
  }

  .grid-text {
    font-weight: 700;
  }
}
</style>
