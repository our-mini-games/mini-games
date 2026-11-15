<template>
  <header class="header">
    <div class="container arcade-panel">
      <button
        class="arcade-button btn-back"
        @click="handleBack"
      >
        退出
      </button>

      <button
        class="arcade-button btn-set-level"
        @click="$emit('set-level')"
      >
        游戏设置
      </button>

      <button
        class="arcade-button btn-props btn-rearrange"
        :disabled="rearrangement <= 0 || gameStatus !== GameStatus.playing"
        @click="handleRearrange"
      >
        重新排列
        <span class="value">
          {{ rearrangement }}
        </span>
      </button>
      <button
        class="arcade-button arcade-button--primary btn-props btn-tips"
        :disabled="tips <= 0 || gameStatus !== GameStatus.playing"
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
import { GameStatus } from '../../config/index.js'
import { Ref } from 'vue'
import { Box, LevelInfo } from '../../types/index.js'
import useGameProps from '../../composables/useGameProps.js'

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
  justify-content: center;
  gap: 6px;
  padding: 6px;
}

.arcade-button {
  padding-inline: clamp(7px, 2.5vw, 16px);
}

.btn-props .value {
  display: grid;
  place-items: center;
  min-width: 20px;
  min-height: 20px;
  margin-left: 5px;
  border-radius: 4px;
  background: var(--arcade-slot);
  color: var(--arcade-gold);
  font-size: 13px;
}
</style>
