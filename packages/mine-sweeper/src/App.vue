<template>
  <div class="mine-sweeper">
    <MineSweeper />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'

import MineSweeper from './components/MineSweeper.vue'
import { LevelInfo, levels } from './config'

const currentLevel = ref<LevelInfo['level']>(1)

const levelInfo = computed(() => {
  const info = levels.find(item => item.level === currentLevel.value)

  if (currentLevel.value === 0) {
    try {
      const localInfo = JSON.parse(localStorage.getItem('MINE_SWEEPER_CUSTOM') || '')
      if (localInfo) {
        return localInfo
      }
    } catch {
      return info
    }
  }

  return info
})

provide('currentLevel', currentLevel)
provide('levelInfo', levelInfo)
</script>

<style lang="scss" scoped>
.mine-sweeper {
  height: 100%;
}
</style>
