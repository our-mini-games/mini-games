<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="finished-modal"
      @contextmenu.prevent="() => false"
    >
      <div class="wrapper arcade-panel arcade-dialog">
        <img
          class="head-pic"
          :src="gameStatus === GameStatus.Complete ? CompletePic : DefeatPic"
          height="100"
        />

        <img
          class="btn-close"
          :src="ClosePic"
          width="44"
          @click="visible = false"
        />

        <div class="info">
          {{ gameStatus === GameStatus.Complete ? '恭喜，挑战成功' : '别气馁，再接再厉' }}
        </div>

        <div class="operations">
          <div
            class="arcade-button"
            @click="visible = false"
          >
            知道了
          </div>
          <div
            class="arcade-button arcade-button--primary"
            @click="handleAgain"
          >
            再来一局
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { GameStatus } from '../config/index.js'

import CompletePic from '../assets/imgs/complete.png'
import DefeatPic from '../assets/imgs/defeat.png'
import ClosePic from '../assets/imgs/close.png'

const visible = ref(false)
const gameStatus = inject('gameStatus', ref(GameStatus.Finished))
const setGameStatus = inject('setGameStatus', (_status: GameStatus) => {})

const handleAgain = (): void => {
  visible.value = false
  setGameStatus(GameStatus.Playing)
}

watch(gameStatus, (val) => {
  if (val === GameStatus.Complete || val === GameStatus.Defeat) {
    visible.value = true
  }
}, {
  immediate: true
})

</script>

<style lang="scss" scoped>
.finished-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: var(--arcade-scrim);

  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    padding: 56px 16px 38px 16px;
    transform: translate(-50%, -50%);

    .head-pic {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -60px);
    }

    .btn-close {
      position: absolute;
      left: 50%;
      bottom: 0;
      cursor: pointer;
      transform: translate(-50%, 22px);
    }

    .info {
      padding: 16px;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
    }

    .operations {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
  }
}
</style>
