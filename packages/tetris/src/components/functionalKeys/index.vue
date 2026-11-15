<template>
  <section class="functional-keys">
    <button
      v-for="item of keys"
      :key="item.value"
      class="arcade-button"
      :class="{
        'arcade-button--primary': (poweredOff && item.value === 'OnOrOff') || (paused && item.value === 'Pause')
      }"
      :disabled="poweredOff && item.value !== 'OnOrOff'"
      :data-key="item.value"
    >
      {{ item.label }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { GameStatus } from '../../config/index.js'

const gameStatus = inject('gameStatus', ref(GameStatus.PowerOff))
const poweredOff = computed(() => gameStatus.value === GameStatus.PowerOff)

const paused = computed(() => gameStatus.value === GameStatus.Paused)

const keys = computed(() => [
  { label: poweredOff.value ? '开机' : '关机并退出', value: 'OnOrOff' },
  { label: '重新开始', value: 'Reboot' },
  { label: paused.value ? '继续游戏' : '暂停', value: 'Pause' },
  { label: '模式', value: 'Mode' }
])
</script>

<style lang="scss" scoped>
.functional-keys {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}
</style>
