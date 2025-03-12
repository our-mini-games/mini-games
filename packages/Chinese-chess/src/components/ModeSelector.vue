<template>
  <section class="mode-selector">
    <h2 class="title">请选择模式</h2>

    <div class="modes">
      <a-button
        v-for="mode of modes"
        :key="mode.value"
        type="primary"
        class="btn btn-mode"
        @click="handleChangeMode(mode.value)"
      >
        {{ mode.label }}
      </a-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GameMode } from '../definitions/index.js'

const emits = defineEmits<(e: 'update:mode', value: GameMode) => void>()

const modes = [
  { value: GameMode.OFFLINE, label: '单机游戏' },
  { value: GameMode.ONLINE, label: '在线对战' }
]

const handleChangeMode = (mode: GameMode): void => {
  emits('update:mode', mode)
}
</script>

<style lang="scss" scoped>
.mode-selector {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .title {
    text-align: center;
  }

  .modes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px 0;

    .btn-mode {
      width: 240px;
      height: 64px;
      padding-left: 0;
      border: 0;
      font-size: 24px;
      box-shadow: unset;
      background: url(@/assets/imgs/btn1.png) no-repeat center center / 100% 100%;

      &:hover {
        color: var(--red);
      }
    }
  }
}
</style>
