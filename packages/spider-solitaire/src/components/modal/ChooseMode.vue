<template>
  <Teleport to="body">
    <div class="choose-mode-modal arcade-panel arcade-dialog">
      <header class="header">
        <h2 class="title">选择模式</h2>
        <button
          type="button"
          aria-label="关闭"
          class="btn-close"
          @click="handleClose"
        >
          ×
        </button>
      </header>

      <ul class="mode-list">
        <li
          v-for="item of gameModes"
          :key="item.value"
          class="item"
          :class="{
            current: mode === item.value
          }"
          role="button"
          tabindex="0"
          :aria-pressed="mode === item.value"
          @click="handleSelect(item.value)"
          @keydown.enter.prevent="handleSelect(item.value)"
          @keydown.space.prevent="handleSelect(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { GameMode, gameModes } from '../../config/index.js'
import { inject, ref } from 'vue'

const emit = defineEmits<(e: 'close') => void>()

const mode = inject('mode', ref(GameMode.easy))

const handleSelect = (m: GameMode): void => {
  if (mode.value === m) {
    return
  }
  mode.value = m
  handleClose()
}

const handleClose = (): void => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.choose-mode-modal {
  position: fixed;
  left: 50%;
  top: 50%;
  width: min(300px, calc(100vw - 24px), calc(100vh - 24px));
  transform: translate(-50%, -50%);
  transform-origin: center;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid var(--arcade-line);

    .title {
      line-height: 40px;
      font-size: 18px;
    }

    .btn-close {
      width: 24px;
      height: 24px;
      line-height: 22px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid var(--arcade-line);
      color: var(--arcade-text);
      background: var(--arcade-raised);
      cursor: pointer;
    }
  }

  .mode-list {
    padding: 16px;

    .item {
      line-height: 32px;
      text-align: center;
      cursor: pointer;

      &:not(:first-child) {
        margin-top: 4px;
      }

      &.current {
        background-color: var(--arcade-gold);
        color: var(--arcade-ink);
        cursor: default;
      }

      &:hover:not(.current) {
        background-color: var(--arcade-raised);
      }
    }
  }
}
</style>
