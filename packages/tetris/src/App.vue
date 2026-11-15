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
import { GameStatus } from './config/index.js'
import useTetris from './composables/useTetris.js'
import useScore from './composables/useScore.js'
import useLevel from './composables/useLevel.js'
import useTransverseDisplacement from './composables/useTransverseDisplacement.js'
import useAnimation from './composables/useAnimation.js'
import useGame from './composables/useGame.js'
import useAudio from './composables/useAudio.js'
import useFinalTips from './composables/useFinalTips.js'
import useEvent from './composables/useEvent.js'
import useNextType from './composables/useNextType.js'
const statusText = ref('Hello world')

const audio = useAudio()

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
} = useScore(gameStatus, gameMode)

const {
  initialLevel,
  level,
  levelInfo,
  speed,
  maxScore
} = useLevel(score)

const switchNextType = useNextType(
  currentTetris,
  gameStatus,
  gameMode,
  building
)

const { finalTips } = useFinalTips(
  gameStatus,
  currentTetris,
  building
)

// watch(finalTips, (val) => {
// }, { immediate: true })

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
  removeAnimation,
  finisedAnimation,
  stopFinishedAnimation,
  modeAnimation,
  stopModeAnimation,
  powerOnAnimation,
  stopPowerOnAnimation
} = useAnimation(building, gameMode, setGameStatus)

const {
  startup,
  run,
  stop,
  setKeydownSpeed,
  handleReachBottom
} = useGame(
  gameMode,
  gameStatus,
  currentTetris,
  nextTetris,
  building,
  speed,
  handleDecline,
  setGameStatus,
  removeAnimation,
  setScore,
  audio
)

/* const { activeKeys } = */ useEvent(
  initialLevel,
  gameMode,
  gameStatus,
  handleTurnLeft,
  handleTurnRight,
  handleToBottomImmediate,
  handleReachBottom,
  switchNextType,
  run,
  stop,
  setGameStatus,
  setKeydownSpeed,
  stopFinishedAnimation,
  stopModeAnimation,
  stopPowerOnAnimation,
  audio
)

watch(gameStatus, (newStatus, oldStatus) => {
  switch (newStatus) {
    case GameStatus.Finished:
      statusText.value = 'Game Over'
      finisedAnimation(() => { currentTetris.value = null })
      break
    case GameStatus.Playing:
      if (oldStatus !== GameStatus.Paused && oldStatus !== GameStatus.Animation) {
        level.value = initialLevel.value // 重置等级
        setScore() // 重置计分
        startup()
      }
      statusText.value = 'Hello world'
      break
    case GameStatus.Paused:
      statusText.value = 'Paused'
      break
    case GameStatus.ChooseMode:
      currentTetris.value = null
      statusText.value = 'Choose Mode'
      modeAnimation()
      break
    case GameStatus.PowerOff:
      stopFinishedAnimation(true)
      stopModeAnimation(true)
      currentTetris.value = null
      break
    case GameStatus.PowerOn:
      powerOnAnimation()
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

provide('initialLevel', initialLevel)
provide('level', level)
provide('levelInfo', levelInfo)
provide('maxScore', maxScore)
provide('statusText', statusText)

// provide('activeKeys', activeKeys)
</script>

<style lang="scss" scoped>
.tetris {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
