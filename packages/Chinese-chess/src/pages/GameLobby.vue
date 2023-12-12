<template>
  <div class="game-lobby">
    <h1 class="title">
      Game Lobby
      <button class="btn" @click="handleBack">返回</button>
    </h1>

    <ul class="rooms">
      <li
        v-for="room of rooms"
        :key="room.id"
        class="room"
        @click="emits('room:join', room)"
      >
        <div class="value">{{ room.users.length }}</div>
        <div class="name">{{ room.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { GameMode } from '@/definitions'
import type { Room } from '@/types'

const emits = defineEmits<{
  (e: 'room:join', room: Room): void
  (e: 'update:mode', mode: GameMode | null): void
}>()

const rooms = inject('rooms', ref<Room[]>([]))

const handleBack = (): void => {
  emits('update:mode', null)
}
</script>

<style lang="scss" scoped>
.game-lobby {
  width: 100vw;
  height: 100vh;

  .title {
    text-align: center;
  }

  .rooms {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 64px;

    .room {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .value {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 8px;
        color: #fff;
        background-color: var(--light);
      }

      .name {
        text-align: center;
      }

      &:hover {
        .value {
          color: var(--success );
          border: 1px solid var(--success);
          background-color: transparent;
        }

        .name {
          color: var(--success);
        }
      }
    }
  }
}
</style>
