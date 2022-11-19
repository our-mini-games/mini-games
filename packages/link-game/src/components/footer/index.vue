<template>
  <footer class="footer">
    <section class="game-props">
      <h2 class="title">
        你的道具
      </h2>

      <ul class="list">
        <li
          class="item"
          :class="{
            disabled: rearrangement <= 0 || gameStatus !== GameStatus.playing
          }"
          @click="handleRearrange"
        >
          重新排列
          <span class="value">
            {{ rearrangement }}
          </span>
        </li>
        <li
          class="item"
          :class="{
            disabled: tips <= 0 || gameStatus !== GameStatus.playing
          }"
          @click="handleTips"
        >
          提示
          <span class="value">
            {{ tips }}
          </span>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { GameStatus } from '../../config'
import { Box, LevelInfo } from '../../types'

const boxes = inject('boxes', ref<Box[]>([]))
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const gameStatus = inject('gameStatus', ref(GameStatus.finished))

const {
  rearrangement,
  tips,
  handleRearrange,
  handleTips
} = useGameProps(boxes, levelInfo, gameStatus)
</script>

<style lang="scss" scoped>
.game-props {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 8px 16px;
  border: 1px solid #0088ff;
  border-radius: 8px;
  user-select: none;

  .title {
    font-size: 18px;
    color: #0088ff;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0;
    list-style: none;

    .item {
      position: relative;
      padding: 4px 12px;
      background-color: #0088ff;
      font-size: 14px;
      color: #fff;
      border-radius: 4px;

      &:not(.disabled) {
        cursor: pointer;

        &:hover {
          background-color: rgba($color: #0088ff, $alpha: 0.8);
        }
      }

      &.disabled {
        cursor: not-allowed;
        background-color: #e1e1e1;
      }

      .value {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        background-color: #f40;
      }
    }
  }
}
</style>
