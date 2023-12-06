<template>
  <div class="chinese-chess">
    <mode-selector v-if="!currentMode" />

    <component
      :is="comp"
      @room:join="handleRoomJoin"
      @room:leave="handleRoomLeave"
      @room:request-seat="handleRoomRequestSeat"
      @room:chat="handleRoomChat"
      @game:ready="handleGameReady"
    />
  </div>
</template>

<script setup lang="ts">
import { useSocket } from './composables/useSocket'
import { GameMode } from './definitions'
import Message from './components/Message'

const Gamelobby = defineAsyncComponent(() => import('./pages/GameLobby.vue'))
const GameMain = defineAsyncComponent(() => import('./pages/GameMain.vue'))

const currentMode = ref<GameMode | null>(null)

const comp = computed(() => {
  return currentMode.value === GameMode.ONLINE
    ? currentRoom.value ? GameMain : Gamelobby
    : ''
})

onMounted(() => {
  Message.install()
})

const {
  currentUser,
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
  handleGameReady
} = useSocket({
  Message
})

provide('currentMode', currentMode)
provide('currentUser', currentUser)
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
