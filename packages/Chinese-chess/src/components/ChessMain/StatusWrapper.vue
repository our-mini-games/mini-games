<template>
  <div class="status-wrapper">
    <button
      class="btn btn-back"
      @click="handleBtnBackClick"
    >
      返回大厅
    </button>
    <div class="decide-first">
      <div
        v-for="option of firstOptions"
        :key="option.value"
        class="option"
        :class="[
          first === option.value ? 'active' : '',
          option.value === Camp.RED ? 'red' : 'black'
        ]"
        @click="handleOptionClick(option.value)"
      >
        {{ option.label }}
      </div>
    </div>

    <button
      v-if="!!player"
      class="btn btn-ready"
      :disabled="isStatusBtnDisabled"
      @click="handleBtnReadyClick"
    >
      准备 {{ player?.isReady ? 'true' : 'false' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { Camp, GameStatus } from '@/definitions'
import { GameContext, Players, User } from '@/types'
import { ComputedRef } from 'vue'

const emits = defineEmits<{
  (e: 'room:leave'): void
  (e: 'game:ready'): void
}>()

const players = inject<ComputedRef<Players>>('players')!
const context = inject<ComputedRef<GameContext>>('context')!
const currentUser = inject('currentUser', ref<User | null>(null))

const firstOptions = [{
  label: '红先',
  value: Camp.RED
}, {
  label: '黑先',
  value: Camp.BLACK
}]
const first = ref(Camp.RED)

const isStatusBtnDisabled = computed(() => {
  return !(context.value.status === GameStatus.Init || context.value.status === GameStatus.Finished)
})

const player = computed(() => currentUser.value
  ? currentUser.value.id === players.value?.[0].id
    ? players.value[0]
    : currentUser.value.id === players.value?.[1].id
      ? players.value[1]
      : null
  : null
)

const handleOptionClick = (val: Camp): void => {
  if (isStatusBtnDisabled.value) {
    return
  }

  first.value = val
}

const handleBtnBackClick = (): void => {
  emits('room:leave')
}

const handleBtnReadyClick = (): void => {
  if (isStatusBtnDisabled.value) {
    return
  }

  emits('game:ready')
}
</script>

<style lang="scss" scoped>
.status-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;

  .btn {
    text-align: center;
    &.btn-back {
      margin-bottom: auto;
    }

    &.btn-ready {
      margin-top: auto;
    }
  }

  .decide-first {
    display: flex;
    align-items: center;
    width: 128px;
    margin: 16px 0;

    .option {
      position: relative;
      width: 64px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 14px;
      cursor: pointer;

      &.red {
        color: var(--red);
        border-top-left-radius: 64px;
      }

      &.black {
        color: var(--black);
        border-top-right-radius: 64px;
      }

      &.active {
        color: #fff;

        &.red {
          background-color: var(--red);
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;

          &::after {
            content: '';
            position: absolute;
            right: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--red);
            clip-path: path('M0 0, L0 32, Q0 0 64 0z');
          }
        }

        &.black {
          background-color: var(--black);
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;

          &::after {
            content: '';
            position: absolute;
            left: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--black);
            clip-path: path('M64 32, L64 0, Q64 32 0 32z');
          }
        }
      }
    }
  }

  .current-camp {
    > span {
      font-weight: 700;

      &.red {
        color: var(--red);
      }

      &.black {
        color: var(--black);
      }
    }
  }
}
</style>
