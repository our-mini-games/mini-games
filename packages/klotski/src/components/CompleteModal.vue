<template>
  <div class="complete-modal">
    <div class="complete-modal-container arcade-panel arcade-dialog">
      <h2 class="complete-modal-title">{{ isAllCompleted ? '恭喜你完成了所有关卡！' : '恭喜你完成了当前关卡！' }}</h2>

      <footer class="complete-modal-footer">
        <button class="arcade-button" @click="handleClose">
          知道了
        </button>
        <button class="arcade-button arcade-button--primary" @click="handleNext">
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
  background: var(--arcade-scrim);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.complete-modal-container {
  box-sizing: border-box;
  width: min(90%, 360px);
  padding: 24px 16px;
  text-align: center;
}

.complete-modal-title {
  margin: 0 0 16px;
  font-size: 19px;
}

.complete-modal-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
