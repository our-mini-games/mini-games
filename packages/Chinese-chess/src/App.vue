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

    <canvas id="canvas" width="400" height="300"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useSocket } from './composables/useSocket'
import { GameMode } from './definitions'
import Message from './components/Message'

import { getMoveList } from './utils'
// import { createAnimation } from './libs/Animation'

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

  // // @todo
  // // 测试动画
  // const c = document.querySelector<HTMLCanvasElement>('#canvas')!
  // const ctx = c.getContext('2d')!
  // const font = new FontFace('STXINGKAI', 'url(STXINGKAI.ttf)')
  // // eslint-disable-next-line @typescript-eslint/promise-function-async
  // const loadPic = (pic: string): Promise<HTMLImageElement> => {
  //   return new Promise(resolve => {
  //     const swordPic = new Image()
  //     swordPic.onload = () => {
  //       resolve(swordPic)
  //     }
  //     swordPic.src = pic
  //   })
  // }
  // font.load().then(f => {
  //   (document.fonts as any).add(f)
  // }).then(async () => await document.fonts.ready.then())
  //   .then(async () => {
  //     const swordPic = await loadPic('sword.png')
  //     const winPic = await loadPic('win.png')
  //     // const { run, stop } = registerCheckAnimation(ctx, 400, 300)
  //     // const { run, stop } = registerCheckMateAnimation(ctx, 400, 300, swordPic)
  //     // const { run, stop } = registerWinnerAnimation(ctx, 400, 300, winPic, 0)
  //     // const { run, stop } = registerWinnerAnimation(ctx, 400, 300, winPic, 1)
  //     // run()

  //     const animations = createAnimation(ctx, {
  //       width: 400,
  //       height: 300,
  //       resource: {
  //         swordPic,
  //         winPic
  //       },
  //       stopCallback: (name, camp) => {
  //         console.log('stop: ', name)
  //         switch (name) {
  //           case 'check':
  //             animations.checkMate.run()
  //             break
  //           case 'check-mate':
  //             animations.redWin.run()
  //             break
  //           case 'win':
  //             if (camp === 0) {
  //               animations.blackWin.run()
  //             } else {
  //               // console.log('黑GG')
  //               animations.check.run()
  //             }
  //             break
  //           default:
  //             break
  //         }
  //       }
  //     })

  //     animations.check.run()
  // })
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
