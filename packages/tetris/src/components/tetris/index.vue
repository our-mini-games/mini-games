<template>
  <section class="tetris-container">
    <SVGDefs />

    <div class="ornamental ornamental-left">
      <img
        src="https://avatars.githubusercontent.com/u/39545747?v=4"
        width="36"
        height="36"
        class="avatar"
      />
      <img
        src="https://avatars.githubusercontent.com/u/47918504?v=4"
        width="36"
        height="36"
        class="avatar"
      />
      <img
        src="https://avatars.githubusercontent.com/u/71477878?v=4"
        width="36"
        height="36"
        class="avatar"
      />
    </div>

    <TetrisMain />

    <div class="ornamental ornamental-right">
      <svg
        width="54"
        height="220"
      >
        <g name="ornamental-tetris">
          <g
            v-for="(tetris, index) of ornamentalTetrisList"
            :key="index"
          >
            <g
              v-for="item of tetris"
              :key="`${item.x}-${item.y}`"
            >
              <use
                :x="item.x * itemSize"
                :y="item.y * itemSize + index * (5 * itemSize)"
                :fill="color.item"
                :stroke="color.item"
                xlink:href="#tetris-item"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>

    <TetrisAside />
  </section>
</template>

<script setup lang="ts">
import TetrisMain from './Main.vue'
import TetrisAside from './Aside.vue'
import SVGDefs from './Defs.vue'

import { color, itemSize } from '../../config'
import { Coordinate } from '../../types'

const ornamentalTetrisList: Coordinate[][] = [
  [
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 }
  ],

  [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 }
  ],

  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 2 }
  ],

  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 }
  ]
]

</script>

<style lang="scss" scoped>
.tetris-container {
  display: inline-flex;
  position: relative;
  // border: 1px solid #333;
  // border-radius: 12px;
  border-width: 16px;
  border-style: solid;
  border-color: #f1f1f1 #fff #f3f3f3 #eaeaea;
  margin: 16px 0;
  outline: 1px solid #333;
  outline-offset: -16px;

  .ornamental {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    width: 54px;
    height: 240px;

    &.ornamental-left {
      left: -70px;

      .avatar {
        border-radius: 4px;
      }
    }

    &.ornamental-right {
      right: -70px;
    }
  }
}
</style>
