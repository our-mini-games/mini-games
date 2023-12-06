<template>
  <div
    class="camp-seat"
    :class="[
      seatCamp
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
      {{ user?.nickname || '空' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Camp } from '@/definitions'
import type { GameContext, User } from '@/types'
import { ComputedRef } from 'vue'

const props = defineProps<{
  user?: User
  isSelf?: boolean
}>()

const context = inject<ComputedRef<GameContext | null>>('context')!

const seatCamp = computed(() => {
  return props.isSelf
    ? 'red'
    : 'black'
})

const isActive = computed(() => {
  return props.isSelf
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
