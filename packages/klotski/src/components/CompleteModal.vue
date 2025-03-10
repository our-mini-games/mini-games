<template>
  <div class="complete-modal">
    <div class="complete-modal-container">
      <h2 class="complete-modal-title">{{ isAllCompleted ? '恭喜你完成了所有关卡！' : '恭喜你完成了当前关卡！' }}</h2>

      <footer class="complete-modal-footer">
        <button class="btn btn-close" @click="handleClose">
          知道了
        </button>
        <button class="btn btn-next" @click="handleNext">
          {{ isAllCompleted ? '重新开始' : '下一关' }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { classicalLayouts } from '../config/index.js'
const props = defineProps<{
  currentLevel: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'next'): void
  (e: 'set-level', level: number): void
}>()

const isAllCompleted = computed(() => {
  return props.currentLevel === classicalLayouts.length
})

const handleClose = (): void => {
  emit('close')
}

const handleNext = (): void => {
  if (isAllCompleted.value) {
    emit('set-level', 1)
  } else {
    emit('next')
  }
  emit('close')
}
</script>

<style scoped>
.complete-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.complete-modal-container {
  width: min(90%, 20em);
  padding: 0.5rem;
  border-radius: 0.2rem;
  background-color: var(--color-bg);
  box-shadow:
    inset 2px 2px 4px var(--color-white),
    inset -2px -2px 4px var(--color-shadow);
}

.complete-modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
}

.complete-modal-footer {
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  padding: 0.2rem;
}

.btn {
  width: 6em;
  height: 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 1px 1px 1px var(--color-white);
  border-radius: 0.2rem;
  border: 0;
  box-shadow:
    inset 2px 2px 4px var(--color-white),
    inset -2px -2px 4px var(--color-shadow);
}

.btn:active {
  box-shadow:
    inset -2px -2px 4px var(--color-white),
    inset 2px 2px 4px var(--color-shadow);
}

.btn-close {
  color: var(--color-red);
}

.btn-next {
  color: var(--color-blue);
}
</style>
