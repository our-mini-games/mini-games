<template>
  <div class="spectator">
    <camp-seat
      v-for="item of seats"
      :key="item.id"
      :user="item.user"
    />
  </div>
</template>

<script setup lang="ts">
import { Room, Players } from '@/types'
import { ComputedRef } from 'vue'

const currentRoom = inject('currentRoom', ref<Room | null>(null))
const players = inject<ComputedRef<Players>>('players')!

const users = computed(() => {
  return (currentRoom.value?.users || []).filter(user => {
    return user.id !== players.value?.[0]?.id &&
      user.id !== players.value?.[1]?.id
  })
})
const seats = computed(() => {
  return Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      user: users.value[index] ?? null
    }
  })
})
</script>

<style lang="scss" scoped>
.spectator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  width: 200px;

  :deep(.nickname) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
