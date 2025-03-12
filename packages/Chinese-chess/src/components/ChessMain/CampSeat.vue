<template>
  <div
    class="camp-seat"
    :class="[
      user?.camp
    ]"
  >
    <div class="finger-wrapper">
      <div
        v-show="isActive"
        class="icon icon-finger"
      ></div>
    </div>

    <icon-seat
      class="icon icon-seat"
      :empty="!user"
    />

    <div class="nickname">
      {{ user?.nickname || '空' }}{{ user?.offline ? '(掉线了~)' : '' }}
    </div>

    <div v-if="context?.status === GameStatus.Init && user?.isReady" class="ready-state">
      已准备
    </div>
  </div>
</template>

<script setup lang="ts">
import { Camp, type UserLike, GameContext, GameStatus } from 'chinese-chess-service'
// import { ComputedRef } from 'vue'

const props = defineProps<{
  user?: UserLike
  isSpectator?: boolean
}>()

const context = inject('context', ref<GameContext | null>(null))

// const seatCamp = computed(() => {
//   return props.isSelf
//     ? user.camp === Camp.BLACK
//       ? 'black'
//       : 'red'
//     : currentUserCamp.value === Camp.BLACK
//       ? 'red'
//       : 'black'
// })

const isActive = computed(() => {
  if (props.isSpectator) {
    return false
  }

  return props.user?.camp === Camp.RED
    ? context.value?.currentCamp === Camp.RED
    : context.value?.currentCamp === Camp.BLACK
})
</script>

<style lang="scss" scoped>
.camp-seat {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 32px;

  &.black {
    --color: var(--black);
  }

  &.red {
    --color: var(--red);
  }

  .icon-finger {
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
    background-image: url(@/assets/icons/finger.svg);
    animation: 1s ease-out poke infinite;
  }

  .icon-seat {
    fill: var(--color);
  }

  .nickname {
    color: var(--color);
  }
}

@keyframes poke {
  0%, 30%, 60%, 100% {
    transform: translateX(0);
  }

  15%, 45% {
    transform: translateX(6px);
  }
}
</style>
