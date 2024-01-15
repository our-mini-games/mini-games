<template>
  <div class="lobby-container">
    <header class="header">
      <a-button
        class="btn-back"
        @click="handleBack"
      >
        游戏大厅
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
          <h3 class="title">{{ room.name }} 房</h3>
          <div class="number">({{ room.users.length }}/{{ room.limit }})</div>
          <div class="status">
            {{
              room.status === GameStatus.Finished
                ? '游戏结束'
                : room.status === GameStatus.Playing
                  ? '游戏中'
                  : '空闲'
            }}
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Room } from '@/types'
import { GameStatus } from 'chinese-chess-service'

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

.header {
  position: relative;
  padding: 8px;

  .btn-back {
    position: absolute;
    left: 8px;
    top: 8px;
  }

  .title {
    margin: 0;
    text-align: center;
    line-height: 24px;
  }
}

.rooms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .room {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 108px;
    height: 108px;
    box-shadow: 0 0 1px #666;
    cursor: pointer;

    .title {
      margin: 0;
    }
  }
}
</style>
