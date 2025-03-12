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
import { LevelInfo } from '../../types/index.js'

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
    width: 18rem;
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
    background-color: var(--finished-color-bg);
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem var(--shadow-color);
    transform: translate(-50%, -50%);

    .head-pic {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -4.5rem);
    }

    .btn-close {
      position: absolute;
      left: 50%;
      bottom: 0;
      cursor: pointer;
      transform: translate(-50%, 1.25rem);
    }

    .level {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .value {
        font-size: 1rem;
        font-weight: 700;
        color: var(--primary-color);
      }
    }

    .operations {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      margin-top: 1.5rem;

      .btn {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid var(--border-color);
        background-color: var(--border-color);
        cursor: pointer;

        &.btn-refresh {
          color: var(--white);
          border-color: var(--primary-color);
          background-color: var(--primary-color);
        }
      }
    }
  }
}
</style>
