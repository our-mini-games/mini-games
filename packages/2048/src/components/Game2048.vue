<template>
  <main class="game-container">
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      class="svg arcade-table"
    >
      <defs>
        <linearGradient id="number-tile-glaze" x2="0" y2="1">
          <stop stop-color="#fff7dc" stop-opacity=".27" />
          <stop offset=".32" stop-color="#fff7dc" stop-opacity="0" />
          <stop offset="1" stop-color="#12291f" stop-opacity=".21" />
        </linearGradient>
      </defs>
      <g
        name="game-grids"
        :transform="`translate(${gap}, ${gap})`"
      >
        <g
          v-for="(columns, y) of gameGrids"
          :key="`row-${y}`"
        >
          <g
            v-for="(item, x) of columns"
            :key="`column-${x}`"
            :transform="`translate(${(size + gap) * x}, ${(size + gap) * y})`"
          >
            <rect
              x="0"
              y="0"
              :rx="6"
              :ry="6"
              :width="size"
              :height="size"
              stroke="transparent"
              class="grid-item"
              :class="`grid-item-${item.value}`"
            />
            <rect
              v-if="item.value !== 0"
              :width="size"
              :height="size"
              rx="6"
              fill="url(#number-tile-glaze)"
              stroke="#fff1c9"
              stroke-opacity=".32"
              class="tile-glaze"
            />
            <text
              v-if="item.value !== 0"
              class="grid-text"
              text-anchor="middle"
              dominant-baseline="central"
              :font-size="item.value > 1000 ? (size / 3) : (size / 2)"
              :transform="`translate(${size / 2}, ${size / 2})`"
            >
              {{ item.value }}
            </text>
          </g>
        </g>
      </g>
    </svg>
  </main>
</template>

<script setup lang="ts">
import { sizeConfig, Direction, GameStatus } from '../config/index.js'
import { GameItem } from '../types/index.js'

const { row, column, size, gap } = sizeConfig

const width = row * size + (row + 1) * gap
const height = column * size + (column + 1) * gap

const gameGrids = inject('gameGrids', ref<GameItem[][]>([]))
const gameStatus = inject('gameStatus', ref(GameStatus.Finished))
const afterSwipe = inject('afterSwipe', () => {})

const {
  horizotalMerge,
  verticalMerge
} = useMerge(gameGrids)

const handleSwipe = (dir: Direction, _e: HammerInput): void => {
  if (gameStatus.value !== GameStatus.Playing) return

  switch (dir) {
    case Direction.Up:
    case Direction.Down:
      verticalMerge(dir === Direction.Down)
      break
    case Direction.Right:
    case Direction.Left:
      horizotalMerge(dir === Direction.Right)
      break
  }

  afterSwipe()
}

useSwipe('.game-container .svg', handleSwipe)
</script>

<style lang="scss" scoped>
// @import '../assets/mixins.scss';

@function pow($number, $e) {
  $value: 1;

  @if $e > 0 {
    @for $i from 1 through $e {
      $value: $value * $number;
    }
  }

  @return $value;
}

.game-container {
  .svg {
    display: block;
    width: min(440px, calc(100vw - 34px), max(220px, calc(100svh - 224px)));
    height: auto;
    padding: 5px;
    box-sizing: border-box;
    user-select: none;
  }
  .grid-item-0 {
    fill: var(--arcade-slot);
    stroke: var(--arcade-tile-edge);
    stroke-opacity: .32;
  }

  @for $i from 1 through 11 {
    .grid-item-#{pow(2, $i)} {
      fill: var(--grid-color-#{pow(2, $i)})
    }
  }

  .tile-glaze,
  .grid-text {
    pointer-events: none;
  }

  .grid-text {
    fill: var(--arcade-ink);
    font-weight: 700;
  }
}
</style>
