<template>
  <header class="header">
    <div class="container">
      <div class="btn btn-back" @click="handleBack">
        返回
      </div>

      <div
        class="btn btn-setting"
        @click="gameSettingVisible = true"
      >
        游戏设置
      </div>

      <GameControl />

      <div
        class="btn btn-setting"
        @click="levelSettingVisible = true"
      >
        难度设置
      </div>

      <div
        class="btn btn-record"
        @click="statisticsVisible = true"
      >
        战绩统计
      </div>
    </div>

    <GameSettingModal
      v-if="gameSettingVisible"
      @close="gameSettingVisible = false"
    />

    <LevelSettingModal
      v-if="levelSettingVisible"
      @close="levelSettingVisible = false"
    />

    <StatisticsModal
      v-if="statisticsVisible"
      @close="statisticsVisible = false"
    />
  </header>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import GameControl from './GameControl.vue'

const GameSettingModal = defineAsyncComponent(async () => await import('../modal/GameSetting.vue'))
const LevelSettingModal = defineAsyncComponent(async () => await import('../modal/LevelSetting.vue'))
const StatisticsModal = defineAsyncComponent(async () => await import('../modal/Statistics.vue'))

const gameSettingVisible = ref(false)
const levelSettingVisible = ref(false)
const statisticsVisible = ref(false)

const handleBack = (): void => {
  window.location.href = '/mini-games'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 960px;
  max-width: 90%;
  height: 64px;
  margin: 32px auto;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 32px;
  background-color: #0088ff;

  .btn {
    display: flex;
    align-items: center;
    height: 36px;
    color: #fff;
    padding: 0 16px;
    border-radius: 18px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      border-color: #fff;
    }

    &.btn-back {
      margin-right: auto;
    }

    &.btn-record {
      margin-left: auto;
    }
  }
}
</style>
