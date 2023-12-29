<template>
  <div class="chinese-chess">
    <input
      v-if="!nickname"
      @keydown="handleMouseDown"
    />

    <template v-else>
      <mode-selector
        v-if="currentMode === null"
        v-model:mode="currentMode"
      />

      <offline-game
        v-else-if="currentMode === GameMode.OFFLINE"
      />

      <online-game
        v-else
        v-model:mode="currentMode"
      />
    </template>

    <!-- <component
      v-else
      :is="comp"
      v-model:mode="currentMode"
      @room:join="handleRoomJoin"
      @room:leave="handleRoomLeave"
      @room:request-seat="handleRoomRequestSeat"
      @room:chat="handleRoomChat"
      @game:ready="handleGameReady"
      @game:change="handleGameChange"
    /> -->
  </div>
</template>

<script setup lang="ts">
import { GameMode, NICKNAME_KEY } from './definitions'
// import { createAnimation } from './libs/Animation'

// // eslint-disable-next-line @typescript-eslint/promise-function-async
// const GameLobby = defineAsyncComponent(() => import('./pages/GameLobby.vue'))
// // // eslint-disable-next-line @typescript-eslint/promise-function-async
// // const GameMain = defineAsyncComponent(() => import('./pages/GameMain.vue'))
// // eslint-disable-next-line @typescript-eslint/promise-function-async
const OfflineGame = defineAsyncComponent(() => import('./pages/OfflineGame.vue'))
const OnlineGame = defineAsyncComponent(() => import('./pages/OnlineGame/index.vue'))

const currentMode = ref<GameMode | null>(null)

const nickname = ref('')

// const comp = computed(() => {
//   return currentMode.value === GameMode.ONLINE
//     ? GameLobby
//     : ''
// })

onMounted(() => {
  nickname.value = localStorage.getItem(NICKNAME_KEY) ?? ''
})

const handleMouseDown = (e: KeyboardEvent): void => {
  const target = e.target as HTMLInputElement
  if (e.key === 'Enter' && target.value.trim()) {
    nickname.value = target.value.trim()

    localStorage.setItem(NICKNAME_KEY, nickname.value)
  }
}
</script>

<style lang="scss" scoped>
</style>
