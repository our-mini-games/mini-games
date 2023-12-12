<template>
  <div class="chinese-chess">
    <mode-selector v-if="currentMode === null" />

    <offline-game v-else-if="currentMode === GameMode.OFFLINE" />

    <component
      v-else
      :is="comp"
      v-model:mode="currentMode"
      @room:join="handleRoomJoin"
      @room:leave="handleRoomLeave"
      @room:request-seat="handleRoomRequestSeat"
      @room:chat="handleRoomChat"
      @game:ready="handleGameReady"
      @game:change="handleGameChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useSocket } from './composables/useSocket'
import { GameMode } from './definitions'
import Message from './components/Message'

import { getMoveList } from './utils'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const Gamelobby = defineAsyncComponent(() => import('./pages/GameLobby.vue'))
// eslint-disable-next-line @typescript-eslint/promise-function-async
const GameMain = defineAsyncComponent(() => import('./pages/GameMain.vue'))
// eslint-disable-next-line @typescript-eslint/promise-function-async
const OfflineGame = defineAsyncComponent(() => import('./pages/OfflineGame.vue'))

const currentMode = ref<GameMode | null>(null)

const comp = computed(() => {
  return currentMode.value === GameMode.ONLINE
    ? currentRoom.value ? GameMain : Gamelobby
    : ''
})

onMounted(() => {
  Message.install()
  ;(window as any).getMoveList = getMoveList
})

const {
  currentUser,
  currentUserCamp,
  currentRoom,
  rooms,
  message,
  context,
  chessManual,
  players,
  isInit,
  handleRoomJoin,
  handleRoomLeave,
  handleRoomChat,
  handleRoomRequestSeat,
  handleGameReady,
  handleGameChange
} = useSocket({
  Message
})

provide('currentMode', currentMode)
provide('currentUser', currentUser)
provide('currentUserCamp', currentUserCamp)
provide('rooms', rooms)
provide('currentRoom', currentRoom)
provide('message', message)
provide('context', context)
provide('chessManual', chessManual)
provide('players', players)
provide('isInit', isInit)
</script>

<style lang="scss" scoped>
</style>
