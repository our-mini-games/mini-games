<template>
  <div class="link-game">
    <PageHeader
      @set-level="gameSettingModalVisible = true"
      @refresh="handleRefresh"
    />

    <LinkGame />

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
import { gameConfig, GameStatus, Level, LINK_GAME_LEVEL } from './config'

import PageHeader from './components/header/index.vue'
import LinkGame from './components/LinkGame.vue'
import PageFooter from './components/footer/index.vue'
import { getBoxes } from './lib/utils'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const GameSettingModal = defineAsyncComponent(() => import('./components/modal/GameSetting.vue'))
// eslint-disable-next-line @typescript-eslint/promise-function-async
const CompleteModal = defineAsyncComponent(() => import('./components/modal/Finished.vue'))

let initialLevel = Level.easy

try {
  initialLevel = JSON.parse(localStorage.getItem(LINK_GAME_LEVEL) ?? '0')
} catch {}

const currentLevel = ref(initialLevel)
const gameStatus = ref(GameStatus.playing)

const levelInfo = computed(() => gameConfig[currentLevel.value])

const gameSettingModalVisible = ref(false)
const completeModalVisible = ref(false)

const scale = ref(1)

const boxes = useBoxes(levelInfo, gameStatus)

const handleRefresh = async (): Promise<void> => {
  gameStatus.value = GameStatus.finished

  boxes.value = await getBoxes(levelInfo.value)

  gameStatus.value = GameStatus.playing
}

watch(gameStatus, () => {
  if (gameStatus.value === GameStatus.complete) {
    completeModalVisible.value = true
  }
})

provide('currentLevel', currentLevel)
provide('gameStatus', gameStatus)
provide('levelInfo', levelInfo)
provide('boxes', boxes)

provide('scale', scale)
</script>

<style lang="scss" scoped>
.link-game {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  min-height: 100%;
  padding: 32px;
  box-sizing: border-box;
}
</style>
