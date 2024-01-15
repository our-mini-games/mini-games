<template>
  <div class="game-aside">
    <game-aside-manual />
    <game-aside-chat
      @chat="emits('chat', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import GameAsideManual from './GameAsideManual.vue'
import GameAsideChat from './GameAsideChat.vue'

const emits = defineEmits<(e: 'chat', content: string) => void>()
</script>

<style lang="scss" scoped>
.game-aside {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  :deep(.section) {

    .list {
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow-y: auto;
    }
  }
}
</style>
