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
import type { User } from '@/types'
import { ComputedRef } from 'vue'

const props = defineProps<{
  user?: User
  isSelf?: boolean
  isSpectator?: boolean
}>()

const currentUserCamp = inject<ComputedRef<Camp | null>>('currentUserCamp')!

const seatCamp = computed(() => {
  if (!currentUserCamp.value === null || props.isSpectator) {
    return 'black'
  }

  return props.isSelf
    ? currentUserCamp.value === Camp.BLACK
      ? 'black'
      : 'red'
    : currentUserCamp.value === Camp.BLACK
      ? 'red'
      : 'black'
})

const isActive = computed(() => {
  if (props.isSpectator) {
    return false
  }

  return props.isSelf
    ? currentUserCamp.value === Camp.RED
    : currentUserCamp.value === Camp.BLACK
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
