<template>
  <a-dropdown :trigger="['click']">
    <a-button class="btn">
      <template #icon>
        <ellipsis-outlined />
      </template>
    </a-button>

    <template #overlay>
      <a-menu @click="handleClick">
        <a-menu-item key="gameSetting">
          <template #icon>
            <setting-outlined />
          </template>
          游戏设置
        </a-menu-item>

        <a-menu-item key="statistics">
          <template #icon>
            <bar-chart-outlined />
          </template>
          战绩统计
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <GameSettingModal
    v-if="gameSettingVisible"
    @close="gameSettingVisible = false"
  />

  <StatisticsModal
    v-if="statisticsVisible"
    @close="statisticsVisible = false"
  />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const GameSettingModal = defineAsyncComponent(async () => await import('../modal/GameSetting.vue'))
const StatisticsModal = defineAsyncComponent(async () => await import('../modal/Statistics.vue'))

const gameSettingVisible = ref(false)
const statisticsVisible = ref(false)

const handleClick = ({ key }: { key: string }): void => {
  if (key === 'gameSetting') {
    gameSettingVisible.value = true
  } else if (key === 'statistics') {
    statisticsVisible.value = true
  }
}
</script>
