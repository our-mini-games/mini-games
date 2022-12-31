<template>
  <Teleport to="body">
    <div class="choose-mode-modal">
      <header class="header">
        <h2 class="title">选择模式</h2>
        <div
          class="btn-close"
          @click="handleClose"
        >
          ×
        </div>
      </header>

      <ul class="mode-list">
        <li
          v-for="item of list"
          :key="item.value"
          class="item"
          :class="{
            current: mode === item.value
          }"
          @click="handleSelect(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { GameMode } from '../../config'

const emit = defineEmits<(e: 'close') => void>()

const mode = inject('mode', ref(GameMode.easy))

const list = [
  { value: GameMode.easy, label: '简单（单色）' },
  { value: GameMode.normal, label: '普通（双色）' },
  { value: GameMode.hard, label: '困难（四色）' }
]

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
  width: 300px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  background-color: #fff;
  transform: translate(-50%, -50%);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid #f1f1f1;

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
      border: 1px solid #ccc;
      color: #5c5c5c;
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
        background-color: #0088ff;
        color: #fff;
        cursor: default;
      }

      &:hover:not(.current) {
        background-color: rgba($color: #0088ff, $alpha: .2);
      }
    }
  }
}
</style>
