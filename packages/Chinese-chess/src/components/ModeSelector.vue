<template>
  <section class="mode-selector">
    <h2 class="title">请选择模式</h2>

    <div class="modes">
      <button
        v-for="mode of modes"
        :key="mode.value"
        class="btn btn-mode"
        @click="handleChangeMode(mode.value)"
      >
        {{ mode.label }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GameMode } from '../definitions'

const currentMode = inject('currentMode', ref<GameMode | null>(null))

const modes = [
  { value: GameMode.OFFLINE, label: 'Offline' },
  { value: GameMode.ONLINE, label: 'Online' }
]

const handleChangeMode = (mode: GameMode) => {
  currentMode.value = mode
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
