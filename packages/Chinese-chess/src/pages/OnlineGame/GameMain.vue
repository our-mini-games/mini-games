<template>
  <div class="main-container">
    <header class="header">
      <a-button
        class="btn-back"
        size="small"
        @click="handleRoomLeave(currentRoom?.id)"
      >
        <LeftOutlined />
        退出
      </a-button>
      <h1 class="title">
        {{ currentRoom?.name }}
      </h1>
    </header>

    <main class="main">
      <camp-seat
        :isSpectator="!isPlayer"
        :user="enemyPlayer"
      />
      <div ref="gameMainRef" class="game-main"></div>
      <camp-seat
        :isSpectator="!isPlayer"
        :user="selfPlayer"
      />
    </main>

    <footer class="footer">
      <template v-if="isPlayer && [GameStatus.Init, GameStatus.Finished].includes(gameStatus)">
        <a-button
          @click="handleReadyBtnClick"
        >
          {{ selfPlayer?.isReady ? '取消准备' : '准备' }}
        </a-button>

        <a-radio-group
          v-model:value="firstCamp"
          name="firstCamp"
          :options="[
            { label: '红先', value: Camp.RED },
            { label: '黑先', value: Camp.BLACK }
          ]"
        />

        <!-- <a-button
          @click="handleSwitchCamp"
        >
          交换阵营
        </a-button> -->
      </template>
    </footer>
  </div>
</template>

<script setup lang="ts">
import events from '@/definitions/events'
import { Room } from '@/types'
import { createGameInterface, GameStatus, Camp, type GameContext, type UserLike } from 'chinese-chess-service'
import { loadResources } from '@/libs/Resource'
import { Socket } from 'socket.io-client'
import { message } from 'ant-design-vue'

defineProps<{
  handleRoomLeave: (roomId?: number | string) => void
}>()

const socket = inject('socket', ref<Socket | null>(null))
const context = inject('context', ref<GameContext | null>(null))
const currentRoom = inject('currentRoom', ref<Room | null>())
const currentUser = inject('currentUser', ref<UserLike | null>())

const firstCamp = ref(Camp.RED) // 玩家推荐先手

const gameMainRef = ref<HTMLElement | null>(null)

const gameInterface = ref<ReturnType<typeof createGameInterface> | null>(null)

onMounted(async () => {
  if (gameMainRef.value) {
    const resource = await loadResources()
    gameInterface.value = createGameInterface(resource)
    gameInterface.value.mount(gameMainRef.value)

    if (currentUserCamp.value === Camp.BLACK) {
      gameInterface.value.setRotate(Math.PI)
    }

    gameInterface.value.mainCanvas.addEventListener('click', (e) => {
      socket.value?.emit(events.game.pointer, {
        userId: currentUser.value?.id,
        roomId: currentRoom.value?.id,
        point: gameInterface.value?.getPointer(e)
      })
    })
    gameInterface.value.on('animation:finished', type => {
      if (type === 'check-mate') {
        runAnimation(context.value!.currentCamp === Camp.RED ? 'redWin' : 'blackWin')
      }
    })
  }
})

const currentUserCamp = computed(() => {
  if (!context.value || !currentUser.value) {
    return null
  }
  return context.value.players?.[Camp.RED]?.id === currentUser.value.id
    ? Camp.RED
    : context.value.players?.[Camp.BLACK]?.id === currentUser.value.id
      ? Camp.BLACK
      : null
})

const isPlayer = computed(() => {
  return currentUserCamp.value !== null
})

const players = computed(() => context.value?.players)

const selfPlayer = computed(() => {
  if (!players.value || !currentUser.value) {
    return null
  }

  if (!currentUserCamp.value) {
    return { ...players.value?.[Camp.RED], camp: Camp.RED }
  }
  return { ...players.value[currentUserCamp.value], camp: currentUserCamp.value }
})

const enemyPlayer = computed(() => {
  if (!players.value || !currentUser.value) {
    return null
  }
  if (!currentUserCamp.value) {
    return { ...players.value?.[Camp.BLACK], camp: Camp.BLACK }
  }
  return {
    ...players.value[currentUserCamp.value === Camp.RED ? Camp.BLACK : Camp.RED],
    camp: currentUserCamp.value === Camp.RED ? Camp.BLACK : Camp.RED
  }
})

const gameStatus = computed(() => context.value?.status ?? GameStatus.Init)

const handleReadyBtnClick = () => {
  if (socket.value && currentUser.value && currentRoom.value) {
    socket.value.emit(events.game.ready, {
      userId: currentUser.value.id,
      roomId: currentRoom.value.id,
      firstCamp: firstCamp.value
    })
  }
}

watch(context, () => {
  if (gameInterface.value && context.value) {
    handleContextChange(context.value, gameInterface.value)
  }
})

const handleContextChange = (context: GameContext, gameInterface: ReturnType<typeof createGameInterface>) => {
  if (context.status === GameStatus.Playing || context.status === GameStatus.Finished) {
    gameInterface.clearAll()
    gameInterface.drawChessPieces(context.chessPieces)

    if (context.activePiece) {
      if (context.players![context.currentCamp]!.id === currentUser.value!.id) {
        gameInterface.activePieceAnimation.stop()
        gameInterface.activePieceAnimation.run(context.activePiece)
      }
    } else {
      gameInterface.activePieceAnimation.stop()
    }

    if (context.allowPoints) {
      gameInterface.drawAllowPoints(context.allowPoints)
    }

    if (context.movePath.length > 0) {
      gameInterface.drawCurrentStop(context.movePath[0])
      gameInterface.drawLastStop(context.movePath.at(-1)!)
    }

    if (context.message.length > 0) {
      const msg = context.message.shift()
      if (msg.type === 'animation') {
        runAnimation(msg.content)
      } else if (msg.type === 'tips') {
        runTips(msg.content)
      }
    }

    if (context.status === GameStatus.Finished) {
      message.destroy()
      message.info('游戏结束')
    }
  }
}

const runAnimation = (name: string) => {
  if (!gameInterface.value) {
    return
  }

  switch (name) {
    case 'check':
      gameInterface.value.animations.check.run()
      break
    case 'checkMate':
      gameInterface.value.animations.checkMate.run()
      break
    case 'blackWin':
      gameInterface.value.animations.blackWin.run()
      break
    case 'redWin':
      gameInterface.value.animations.redWin.run()
      break
  }
}

const runTips = (content: string) => {
  if (context.value && currentUser.value && currentUserCamp.value) {
    if (context.value.players?.[currentUserCamp.value]?.id === currentUser.value.id) {
      message.destroy()
      message.info(content)
    }
  }
}

// const handleSwitchCamp = () => {
//   if (socket.value && currentUser.value && currentRoom.value) {
//     socket.value.emit(events.room.seatRequest, {
//       userId: currentUser.value.id,
//       roomId: currentRoom.value.id
//     })
//   }
// }

provide('context', context)
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .header {
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

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .game-main {
      flex: 1;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
  }
}
</style>
