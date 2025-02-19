<template>
  <header class="header">
    <div class="container">
      <button
        class="btn btn-back"
        @click="handleBack"
      >
        退出
      </button>

      <button
        class="btn btn-set-level"
        @click="$emit('set-level')"
      >
        游戏设置
      </button>

      <button
        class="btn btn-props btn-rearrange"
        :class="{
          disabled: rearrangement <= 0 || gameStatus !== GameStatus.playing
        }"
        @click="handleRearrange"
      >
        重新排列
        <span class="value">
          {{ rearrangement }}
        </span>
      </button>
      <button
        class="btn btn-props btn-tips"
        :class="{
          disabled: tips <= 0 || gameStatus !== GameStatus.playing
        }"
        @click="handleTips"
      >
        提示
        <span class="value">
          {{ tips }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { GameStatus } from '../../config'
import { Ref } from 'vue'
import { Box, LevelInfo } from '../../types'

defineEmits<{
  (e: 'set-level'): void
  (e: 'refresh'): void
}>()

const gameStatus = inject('gameStatus', ref(GameStatus.finished))

const handleBack = (): void => {
  gameStatus.value = GameStatus.finished
}

const boxes = inject('boxes', ref<Box[]>([]))
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!

const {
  rearrangement,
  tips,
  handleRearrange,
  handleTips
} = useGameProps(boxes, levelInfo, gameStatus)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--primary-color);

  .btn {
    border: 0;
    background-color: transparent;
    height: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: var(--white);

    &:not(:disabled) {
      cursor: pointer;
    }

    &:hover:not(:disabled) {
      color: var(--white);
    }

    &.btn-props {
      position: relative;
      border: 1px solid var(--white);

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
