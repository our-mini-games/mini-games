<template>
  <aside class="tetris-aside">
    <h2 class="hello">
      {{ statusText }}
    </h2>

    <section class="wrapper next-wrapper">
      <h3 class="title">Next</h3>
      <svg
        class="next-svg"
        :width="asideWidth"
        :height="asideWidth"
      >
        <!-- 背景区 -->
        <g name="bg-board">
          <g v-for="y in wrapperSize.column / 2" :key="y">
            <g v-for="x in wrapperSize.column / 2" :key="x">
              <use
                :x="(x - 1) * itemSize"
                :y="(y - 1) * itemSize"
                xlink:href="#tetris-item"
                :fill="color.bg"
                :stroke="color.bg"
                class="bg-item"
              />
            </g>
          </g>
        </g>

        <!-- 下一个元素展示区 -->
        <g name="next-tetris">
          <g
            v-for="item of nextTetrisCoordinates"
            :key="`${item.x}-${item.y}`"
          >
            <use
              :x="(offset.x + item.x) * itemSize"
              :y="(offset.y + item.y) * itemSize"
              :fill="color.item"
              :stroke="color.item"
              xlink:href="#tetris-item"
            />
          </g>
        </g>
      </svg>
    </section>

    <section class="wrapper level-wrapper">
      <h3 class="title">
        Level
      </h3>
      <div class="value">
        {{ level }}
      </div>
    </section>

    <section class="wrapper score-wrapper">
      <h3 class="title">
        Score
      </h3>
      <div class="value">
        {{ score }}
      </div>
    </section>

    <section class="wrapper hi-score-wrapper">
      <h3 class="title">
        Hi-Score
      </h3>
      <div class="value">
        {{ highScore }}
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { wrapperSize, itemSize, color, Tetrominos } from '../../config'
import { Tetris } from '../../types'

const asideWidth = `${wrapperSize.column / 2 * itemSize}px`
const asideHeight = `${wrapperSize.row * itemSize}px`

const nextTetris = inject<Ref<Tetris | undefined>>('nextTetris')!
const score = inject('score', ref(0))
const highScore = inject('highScore', ref(0))
const level = inject('level', ref(0))
const statusText = inject('statusText', ref('Hello world'))

const nextTetrisCoordinates = computed(() => nextTetris.value ? nextTetris.value.coordinates : [])

const offset = computed(() => {
  if (!nextTetris.value) {
    return { x: 0, y: 0 }
  }

  switch (nextTetris.value.tetrominos) {
    case Tetrominos.I:
      return { x: nextTetris.value.type < 2 ? 0 : 1, y: 1 }
    default:
      return { x: 1, y: 1 }
  }
})
</script>

<style lang="scss" scoped>
.tetris-aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: v-bind(asideWidth);
  height: v-bind(asideHeight);
  padding: 2px;
  border-width: 2px 2px 2px 0;
  border-style: solid;
  border-color: #333;
  line-height: 1;

  .hello {
    font-size: 12px;
    text-align: center;
  }

  .wrapper {
    margin-top: 2px;
    color: #333;

    &:not(.next-wrapper) {
      text-align: right;
    }

    .title {
      font-size: 12px;
      color: #888;
    }

    .value {
      padding: 4px 0;
      font-size: 14px;
      font-weight: 700;
    }
  }
}
</style>