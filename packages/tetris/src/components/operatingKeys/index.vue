<template>
  <section class="operating-keys">
    <div class="dir-keys">
      <button
        v-for="item of dirKeys"
        :key="item.value"
        class="arcade-button key-item"
        :aria-label="item.label"
        :disabled="operatingDisabled"
        :data-key="item.value"
        :class="item.value.toLowerCase()"
      >
        {{ item.symbol }}
      </button>
    </div>

    <button
      data-key="Space"
      :disabled="operatingDisabled"
      class="arcade-button big-key"
      :class="{ 'arcade-button--primary': !operatingDisabled }"
    >
      确认 / 旋转
    </button>
  </section>
</template>

<script setup lang="ts">
import { GameStatus } from '../../config/index.js'

const gameStatus = inject('gameStatus', ref(GameStatus.PowerOff))
const operatingDisabled = computed(() =>
  gameStatus.value === GameStatus.PowerOff || gameStatus.value === GameStatus.Paused
)

const dirKeys = [
  { label: '置底', value: 'ArrowUp', symbol: '↑' },
  { label: '左移', value: 'ArrowLeft', symbol: '←' },
  { label: '右移', value: 'ArrowRight', symbol: '→' },
  { label: '加速', value: 'ArrowDown', symbol: '↓' }
]
</script>

<style lang="scss" scoped>
.operating-keys {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.dir-keys {
  display: grid;
  grid-template-columns: repeat(3, 38px);
  gap: 4px;
}

.key-item {
  padding: 0;
  font-size: 19px;
}

.arrowup { grid-column: 2; }
.arrowleft { grid-area: 2 / 1; }
.arrowright { grid-area: 2 / 3; }
.arrowdown { grid-area: 2 / 2; }

.big-key {
  flex: 1;
}
</style>
