<template>
  <div class="link-game">
    <PageHeader
      @set-level="gameSettingModalVisible = true"
      @refresh="handleRefresh"
    />

    <main class="link-game-main">
      <LinkGame v-if="isInitialized && boxes.length" />
    </main>

    <PageFooter />

    <GameSettingModal
      v-if="gameSettingModalVisible"
      @close="gameSettingModalVisible = false"
    />

    <CompleteModal
      v-if="completeModalVisible"
      @set-level="() => {
        completeModalVisible = false
        gameSettingModalVisible = true
      }"
      @close="completeModalVisible = false"
      @refresh="handleRefresh"
    />
  </div>
</template>

<script setup lang="ts">
import { GameStatus } from './config'

import PageHeader from './components/header/index.vue'
import LinkGame from './components/LinkGame.vue'
import PageFooter from './components/footer/index.vue'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const GameSettingModal = defineAsyncComponent(() => import('./components/modal/GameSetting.vue'))
// eslint-disable-next-line @typescript-eslint/promise-function-async
const CompleteModal = defineAsyncComponent(() => import('./components/modal/Finished.vue'))

const gameStatus = ref(GameStatus.finished)

const { isInitialized, levelInfo, currentLevel, areaSize, gameLevels } = useGameConfig()

const gameSettingModalVisible = ref(false)
const completeModalVisible = ref(false)

const { boxes, initBoxes } = useBoxes(levelInfo, gameStatus)

const handleRefresh = async (): Promise<void> => {
  gameStatus.value = GameStatus.finished

  await initBoxes(levelInfo.value)

  Promise.resolve().then(() => {
    gameStatus.value = GameStatus.playing
  })
}

onMounted(() => {
  gameStatus.value = GameStatus.playing
})

watch(gameStatus, () => {
  if (gameStatus.value === GameStatus.complete) {
    completeModalVisible.value = true
  }
})

provide('currentLevel', currentLevel)
provide('gameStatus', gameStatus)
provide('gameLevels', gameLevels)
provide('levelInfo', levelInfo)
provide('boxes', boxes)
provide('areaSize', areaSize)
</script>
