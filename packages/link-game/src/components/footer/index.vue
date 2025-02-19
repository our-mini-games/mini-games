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
  gap: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 0.5rem;
  user-select: none;

  .title {
    font-size: 1rem;
    color: var(--primary-color);
  }

  .list {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    list-style: none;

    .item {
      position: relative;
      padding: 0.25rem 0.5rem;
      background-color: var(--primary-color);
      font-size: 0.75rem;
      color: var(--white);
      border-radius: 0.25rem;

      &:not(.disabled) {
        cursor: pointer;

        &:hover {
          background-color: var(--primary-color-hover);
        }
      }

      &.disabled {
        cursor: not-allowed;
        background-color: var(--disabled-color);
      }

      .value {
        position: absolute;
        right: -0.5rem;
        top: -0.5rem;
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        border-radius: 50%;
        background-color: var(--red);
      }
    }
  }
}
</style>
