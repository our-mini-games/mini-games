<template>
  <div class="tetris">
    <LayoutVue>
      <template #main>
        <TetrisVue />
      </template>
      <template #operating>
        <OperatingKeys />
      </template>
      <template #functional>
        <FunctionalKeys />
      </template>
    </LayoutVue>
  </div>
</template>

<script setup lang="ts">
import LayoutVue from './components/layout/index.vue'
import TetrisVue from './components/tetris/index.vue'
import OperatingKeys from './components/operatingKeys/index.vue'
import FunctionalKeys from './components/functionalKeys/index.vue'
import { GameStatus } from './config'

const statusText = ref('Hello world')

const {
  gameStatus,
  gameMode,
  currentTetris,
  nextTetris,
  building,

  setGameStatus
} = useTetris()

const {
  score,
  highScore,
  setScore
} = useScore(gameStatus)

const {
  level,
  levelInfo,
  speed,
  maxScore
} = useLevel(score)

const switchNextType = useNextType(
  currentTetris,
  gameStatus,
  building
)

const { finalTips } = useFinalTips(
  gameStatus,
  currentTetris,
  building
)

watch(finalTips, (val) => {
}, { immediate: true })

const {
  handleTurnLeft,
  handleTurnRight,
  handleDecline,
  handleToBottomImmediate
} = useTransverseDisplacement(
  currentTetris,
  gameStatus,
  building,
  finalTips
)

const {
  removeAnimation
} = useAnimation(building, setGameStatus)

const {
  startup,
  run,
  stop,
  changeCurrent,
  setKeydownSpeed,
  handleReachBottom
} = useGame(
  gameStatus,
  currentTetris,
  nextTetris,
  building,
  speed,
  handleDecline,
  setGameStatus,
  removeAnimation,
  setScore
)

useEvent(
  gameMode,
  gameStatus,
  handleTurnLeft,
  handleTurnRight,
  handleToBottomImmediate,
  handleReachBottom,
  switchNextType,
  run,
  stop,
  changeCurrent,
  setKeydownSpeed
)

watch(gameStatus, (newStatus, oldStatus) => {
  switch (newStatus) {
    case GameStatus.Finished:
      console.log('Game Over.')
      statusText.value = 'Game Over'
      break
    case GameStatus.Playing:
      if (oldStatus !== GameStatus.Paused && oldStatus !== GameStatus.Animation) {
        setScore() // 重置计分
        startup()
      }
      statusText.value = 'Hello world'
      break
    case GameStatus.Paused:
      statusText.value = 'Paused'
      break
  }
}, { immediate: true })

provide('gameStatus', gameStatus)
provide('gameMode', gameMode)
provide('currentTetris', currentTetris)
provide('nextTetris', nextTetris)
provide('building', building)

provide('finalTips', finalTips)

provide('score', score)
provide('highScore', highScore)

provide('level', level)
provide('levelInfo', levelInfo)
provide('maxScore', maxScore)
provide('statusText', statusText)
</script>

<style lang="scss" scoped>
.tetris {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
