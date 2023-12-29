<template>
  <section class="mode-selector">
    <h2 class="title">请选择模式</h2>

    <div class="modes">
      <a-button
        v-for="mode of modes"
        :key="mode.value"
        class="btn btn-mode"
        @click="handleChangeMode(mode.value)"
      >
        {{ mode.label }}
      </a-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GameMode } from '../definitions'

const emits = defineEmits<(e: 'update:mode', value: GameMode) => void>()

const modes = [
  { value: GameMode.OFFLINE, label: 'Offline' },
  { value: GameMode.ONLINE, label: 'Online' }
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
    padding: 16px 0;

    .btn {
      margin: 0 8px;
    }
  }
}
</style>
