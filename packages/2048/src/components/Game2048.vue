<template>
  <main class="game-container">
    <svg
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
            v-for="(item, x) of columns"
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
              :class="`grid-item-${item.value}`"
            />
            <text
              v-if="(item.value !== 0)"
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
    background-color: var(--bg-color);
    border-radius: 4px;
    user-select: none;
  }
  .grid-item-0 {
    fill: var(--grid-color-0);
  }

  @for $i from 1 through 11 {
    .grid-item-#{pow(2, $i)} {
      fill: var(--grid-color-#{pow(2, $i)})
    }
  }

  .grid-text {
    font-weight: 700;
  }
}
</style>
