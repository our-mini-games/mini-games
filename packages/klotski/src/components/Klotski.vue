<template>
  <div class="klotski">
    <header class="header">
      <button class="btn btn-back" @click="handleBack">
        退
      </button>
      <h1 class="title">Klotski</h1>
      <div class="step-info">
        {{ step }}
      </div>
      <div class="timer">
        {{ timeFormat }}
      </div>
      <button class="btn btn-reset" @click="reset">
        重
      </button>
    </header>
    <main class="klotski-board">
      <div
        v-for="item of klotskiItems"
        :key="item.name"
        :data-name="item.name"
        class="klotski-item"
        :class="[`item-w-${item.w}`, `item-h-${item.h}`]"
        :style="{
          left: `${parseFloat(gap) + item.x * size}px`,
          top: `${parseFloat(gap) + item.y * size}px`
        }"
      >
        {{ item.name }}
      </div>
    </main>
    <footer class="footer">
      <div class="level-info">
        <span class="level-number">
          第
          {{ currentLevelInfo?.level || 0 }}
          关
        </span>
        <span class="level-name">
          {{ currentLevelInfo?.name || '未知' }}
        </span>
      </div>
      <button
        v-if="gameStatus === KlotskiGameStatus.Completed && currentLevel < classicalLayouts.length"
        class="btn btn-next"
        @click="nextLevel"
      >
        下一关
      </button>
    </footer>
    <CompleteModal
      v-if="completeModalVisible"
      :current-level="currentLevel"
      :game-status="gameStatus"
      @close="closeCompleteModal"
      @next="nextLevel"
      @set-level="setLevel"
    />
  </div>
</template>

<script setup lang="ts">
import { KlotskiGameStatus } from '../composables/useKlotski'
import { classicalLayouts } from '../config'
const { gap, size, size1, size2, boxWidth, boxHeight } = useSize()

const {
  klotskiItems,
  step,
  usedTime,
  gameStatus,
  currentLevel,
  currentLevelInfo,
  nextLevel,
  reset,
  setLevel
} = useKlotski()

const timeFormat = computed(() => {
  const minutes = Math.floor(usedTime.value / 60)
  const seconds = usedTime.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

watch(gameStatus, (status) => {
  if (status === KlotskiGameStatus.Completed) {
    completeModalVisible.value = true
  }
}, { immediate: true })

const completeModalVisible = ref(false)
const CompleteModal = defineAsyncComponent(async () => await import('./CompleteModal.vue'))

const closeCompleteModal = (): void => {
  completeModalVisible.value = false
}

const handleBack = (): void => {
  window.location.href = '/mini-games'
}
</script>

<style scoped>
.klotski {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-bg);
  text-shadow: 1px 1px 1px var(--color-white);
  padding: 0.2rem v-bind('gap');
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.2rem 0;
  background-color: var(--color-bg);
  box-sizing: border-box;
}

.title,
.step-info,
.timer {
  padding: 0 0.5rem;
  font-weight: 700;
  line-height: 2rem;
  border-radius: 0.2rem;
  box-shadow:
    inset -2px -2px 4px var(--color-white),
    inset 2px 2px 4px var(--color-shadow);
}

.title {
  flex: 1;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
}

.timer {
  font-size: 1.2rem;
  width: 3em;
  text-align: center;
}

.step-info {
  font-size: 1.2rem;
  width: 2em;
  text-align: center;
}

.btn {
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: var(--color-text);
  font-size: 1rem;
  border: 0;
  border-radius: 0.2rem;
  font-weight: 700;
  box-shadow:
    inset 2px 2px 4px var(--color-white),
    inset -2px -2px 4px var(--color-shadow);
}

.btn:active {
  box-shadow:
    inset -2px -2px 4px var(--color-white),
    inset 2px 2px 4px var(--color-shadow);
}

.btn-back {
  color: var(--color-red);
}

.btn-reset {
  color: var(--color-green);
}

.btn-next {
  width: auto;
  color: var(--color-blue);
}

.klotski-board {
  position: relative;
  width: v-bind('boxWidth');
  height: v-bind('boxHeight');
  padding: v-bind('gap');
  background-color: var(--color-bg);
  border-radius: 0.2rem;
  box-shadow:
    inset -2px -2px 4px var(--color-white),
    inset 2px 2px 4px var(--color-shadow);
  box-sizing: border-box;
}

.klotski-board .klotski-item {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: v-bind('size1');
  height: v-bind('size1');
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 3px 3px 2px var(--color-white);
  background-color: var(--color-bg);
  border-radius: 0.2rem;
  box-shadow:
    inset 2px 2px 4px var(--color-white),
    inset -2px -2px 4px var(--color-shadow);
}

.klotski-board .item-w-2 {
  width: v-bind('size2');
}

.klotski-board .item-h-2 {
  height: v-bind('size2');
}

.footer {
  position: relative;
  width: 100%;
  background-color: var(--color-bg);
  box-sizing: border-box;
}

.footer .level-info {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  line-height: 2rem;
}

.footer .level-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-blue);
  text-shadow: 2px 2px 1px var(--color-white);
}

.footer .btn-next {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
