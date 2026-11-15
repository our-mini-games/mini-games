<template>
  <div class="arcade-menu">
    <div class="arcade-menu-content arcade-panel">
      <h1 class="arcade-title">连连看</h1>

      <section class="arcade-menu-actions">
        <button
          class="arcade-button arcade-button--primary"
          @click="handleBtnClick('start')"
        >
          开始游戏
        </button>
        <button
          class="arcade-button"
          @click="handleBtnClick('settings')"
        >
          难度设置
        </button>
        <button
          class="arcade-button"
          @click="handleBtnClick('back')"
        >
          返回合集
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'start'): void
  (e: 'settings'): void
}>()

const handleBtnClick = (type: 'start' | 'settings' | 'back'): void => {
  switch (type) {
    case 'start':
      emits('start')
      break
    case 'settings':
      emits('settings')
      break
    case 'back':
      window.location.href = '/mini-games'
      break
    default:
      break
  }
}
</script>
