<!-- <template>
  <div
    v-if="!currentRoom"
    class="game-lobby"
  >
    <h1 class="title">
      Rooms
      <a-button class="btn" @click="handleBack">返回</a-button>
    </h1>

    <ul class="rooms">
      <li
        v-for="room of rooms"
        :key="room.id"
        class="room"
        @click="() => handleRoomJoin(room)"
      >
        <div class="value">{{ room.users.length }}</div>
        <div class="name">{{ room.name }}</div>
      </li>
    </ul>
  </div>

  <game-main
    v-else
  />
</template>

<script setup lang="ts">
// import { useSocket } from '@/composables/useSocket'
import { GameMode } from '@/definitions'
import type { Room } from '@/types'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const GameMain = defineAsyncComponent(() => import('./GameMain.vue'))

const emits = defineEmits<{
  (e: 'room:join', room: Room): void
  (e: 'update:mode', mode: GameMode | null): void
}>()

const handleBack = (): void => {
  emits('update:mode', null)
}

// const {
//   currentUser,
//   currentUserCamp,
//   currentRoom,
//   rooms,
//   context,
//   chessManual,
//   players,
//   isInit,
//   handleRoomJoin,
//   handleRoomLeave,
//   handleRoomChat,
//   handleRoomRequestSeat,
//   handleGameReady,
//   handleGameChange
// } = useSocket()

// provide('currentUser', currentUser)
// provide('currentUserCamp', currentUserCamp)
// provide('rooms', rooms)
// provide('currentRoom', currentRoom)
// provide('context', context)
// provide('chessManual', chessManual)
// provide('players', players)
// provide('isInit', isInit)
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
</style> -->

<template>
  <div></div>
</template>
