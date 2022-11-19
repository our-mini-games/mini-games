<template>
  <Teleport to="body">
    <div
      class="finished-modal"
      @contextmenu.prevent="() => false"
    >
      <div class="wrapper">
        <img
          class="head-pic"
          :src="`${PATHNAME}icons/complete.png`"
          height="100"
        />

        <img
          class="btn-close"
          :src="`${PATHNAME}icons/close.png`"
          width="44"
          @click="$emit('close')"
        />

        <div class="level">
          <div class="label">
            当前难度
          </div>
          <div class="value">
            {{ levelInfo.text }}
          </div>
        </div>

        <div class="operations">
          <div
            class="btn btn-refresh"
            @click="handleRefresh"
          >
            再来一局
          </div>
          <div
            class="btn btn-set-level"
            @click="$emit('set-level')"
          >
            更换难度
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { LevelInfo } from '../../types'

const PATHNAME = import.meta.env.VITE_APP_PATHNAME

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'set-level'): void
  (e: 'refresh'): void
}>()

const levelInfo = inject<Ref<LevelInfo>>('levelInfo')!

const handleRefresh = (): void => {
  emit('close')
  emit('refresh')
}
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

    .operations {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      margin-top: 32px;

      .btn {
        padding: 6px 16px;
        border-radius: 4px;
        border: 1px solid #f1f1f1;
        background-color: #f1f1f1;
        cursor: pointer;

        &.btn-refresh {
          color: #fff;
          border-color: #0088ff;
          background-color: #0088ff;
        }
      }
    }
  }
}
</style>
