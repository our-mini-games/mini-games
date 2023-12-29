<template>
  <div class="lobby-container">
    <header class="header">
      <a-button
        @click="handleBack"
      >
        Back
      </a-button>
      <h1 class="title">
        Room
      </h1>
    </header>

    <section class="rooms-wrapper">
      <ul class="rooms">
        <li
          v-for="room of rooms"
          :key="room.id"
          class="room"
          @click="handleRoomJoin(room)"
        >
          {{ room.name }}({{ room.users.length }})
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Room } from '@/types'

defineProps<{
  handleRoomJoin: (room: Room) => void
}>()

const emits = defineEmits<(e: 'update:mode', value: null) => void>()

const rooms = inject('rooms', ref<Room[]>([]))

const handleBack = () => {
  emits('update:mode', null)
}
</script>

<style lang="scss" scoped>
.rooms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .room {
    width: 108px;
    height: 108px;
    text-align: center;
    line-height: 108px;
    box-shadow: 0 0 1px #666;
    cursor: pointer;
  }
}
</style>
