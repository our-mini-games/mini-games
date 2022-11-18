<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="finished-modal"
      @contextmenu.prevent="() => false"
    >
      <div class="wrapper">
        <img
          class="head-pic"
          :src="gameStatus === 'complete' ? CompletePic : DefeatPic"
          height="100"
        />

        <img
          class="btn-close"
          :src="ClosePic"
          width="44"
          @click="visible = false"
        />

        <div class="level">
          <div class="label">
            当前难度
          </div>
          <div class="value">
            {{ levelInfo.text }}
          </div>
        </div>

        <div class="info">
          <div class="row">
            <div class="label">
              用&emsp;&emsp;时：
            </div>
            <div class="value">
              {{ formatTime(gameTime) }}
            </div>
          </div>

          <div class="row">
            <div class="label">
              最佳记录：
            </div>
            <div class="value">
              {{ formatTime(bestRecord) }}
            </div>
          </div>
        </div>

        <div class="operations">
          <div
            class="btn btn-confirm"
            @click="visible = false"
          >
            知道了
          </div>
          <div
            class="btn btn-again"
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
import { inject, ref, computed, watch, Ref } from 'vue'
import { GameStatus, LevelInfo } from '../../types'

import CompletePic from '../../assets/img/complete.png'
import DefeatPic from '../../assets/img/defeat.png'
import ClosePic from '../../assets/img/close.png'
import { formatTime } from '../../lib/utils'
import { MINE_SWEEPER_STATISTICS } from '../../config/constants'

const visible = ref(false)
const gameStatus = inject('gameStatus', ref<GameStatus>('finished'))
const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!
const gameTime = inject<Ref<number>>('gameTime')!

const bestRecord = computed(() => {
  const statistics = JSON.parse(localStorage.getItem(MINE_SWEEPER_STATISTICS) ?? 'null')
  // const _a = visible.value
  if (!statistics) {
    return gameTime.value
  }

  try {
    const completeInfo = statistics[levelInfo.value.level].filter((item: any) => item[0] === 'complete')
    if (completeInfo.length === 0) {
      return 0
    }
    return Math.min(...completeInfo.map((item: any) => item[1]))
  } catch {
    return 0
  }
})

const handleAgain = (): void => {
  visible.value = false
  gameStatus.value = 'playing'
}

watch(gameStatus, (val) => {
  if (val === 'complete' || val === 'defeat') {
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
  background-color: transparent;

  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    padding: 56px 16px 38px 16px;
    background-color: #cdcee5;
    border-radius: 16px;
    box-shadow: 0 4px 16px #888;
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

    .level {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .value {
        font-size: 20px;
        font-weight: 700;
        color: #0088ff;
      }
    }

    .info {
      width: 90%;
      margin: 32px auto;
      padding: 16px;
      border-radius: 16px;
      box-sizing: border-box;
      background-color: #e6e8f7;

      .row {
        display: flex;
        align-items: center;

        &:not(:first-child) {
          margin-top: 16px;
        }

        > * {
          width: 50%;
        }

        .label {
          text-align: right;
        }

        .value {
          font-size: 20px;
          color: #0088ff;
        }
      }
    }

    .operations {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;

      .btn {
        padding: 6px 16px;
        border-radius: 4px;
        border: 1px solid #f1f1f1;
        background-color: #f1f1f1;
        cursor: pointer;

        &.btn-again {
          color: #fff;
          border-color: #0088ff;
          background-color: #0088ff;
        }
      }
    }
  }
}
</style>
