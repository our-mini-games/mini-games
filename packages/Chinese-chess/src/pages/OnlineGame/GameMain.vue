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

      <div class="mini-operations">
        <a-button
          @click="chatDrawerVisible = !chatDrawerVisible"
        >
          <message-outlined />
        </a-button>

        <a-button
          @click="manualDrawerVisible = !manualDrawerVisible"
        >
          <profile-outlined />
        </a-button>

        <drawer
          v-model:open="chatDrawerVisible"
          title="对话"
          width="90%"
        >
          <game-aside-chat @chat="handleChat" />
        </drawer>

        <drawer
          v-model:open="manualDrawerVisible"
          title="棋谱"
          width="90%"
        >
          <game-aside-manual />
        </drawer>
      </div>
    </header>

    <div class="container">
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

      <footer v-if="isPlayer" class="footer">
        <template v-if="[GameStatus.Init, GameStatus.Finished].includes(gameStatus)">
          <a-button
            :type="selfPlayer?.isReady ? 'primary' : 'default'"
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

          <a-button
            type="warning"
            @click="handleSwitchCamp"
          >
            交换阵营
          </a-button>
        </template>

        <template v-else>
          <a-button
            type="warning"
            :disabled="context?.currentCamp === currentUserCamp"
            @click="handleRequestUndo"
          >
            悔棋
          </a-button>

          <a-button
            type="warning"
            @click="handleGiveUp"
          >
            投降
          </a-button>
        </template>
      </footer>
    </div>

    <aside class="aside">
      <game-aside
        @chat="handleChat"
      />
    </aside>
  </div>
</template>

<script setup lang="ts">
import events from '@/definitions/events'
import { Room } from '@/types'
import { createGameInterface, GameStatus, Camp, type GameContext, type UserLike } from 'chinese-chess-service'
import { Socket } from 'socket.io-client'
import { Modal, message } from 'ant-design-vue'
import GameAside from './GameAside.vue'
import Drawer from '@/components/Drawer.vue'

defineProps<{
  handleRoomLeave: (roomId?: number | string) => void
}>()

const GameAsideChat = defineAsyncComponent(() => import('./GameAsideChat.vue'))
const GameAsideManual = defineAsyncComponent(() => import('./GameAsideManual.vue'))

const chatDrawerVisible = ref(false)
const manualDrawerVisible = ref(false)

const socket = inject('socket', ref<Socket | null>(null))
const context = inject('context', ref<GameContext | null>(null))
const currentRoom = inject('currentRoom', ref<Room | null>())
const currentUser = inject('currentUser', ref<UserLike | null>())
const resources = inject('resources', ref<any>({}))

const firstCamp = ref(Camp.RED) // 玩家推荐先手

const gameMainRef = ref<HTMLElement | null>(null)

const gameInterface = ref<ReturnType<typeof createGameInterface> | null>(null)

const manual = computed(() => context.value?.manual ?? [])

onMounted(async () => {
  if (gameMainRef.value) {
    gameInterface.value = createGameInterface(resources)
    gameInterface.value.mount(gameMainRef.value as Element)

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
      gameInterface.value?.animations.clear()

      if (context.value!.message.length > 0) {
        const msg = context.value!.message.shift()
        if (msg.type === 'animation') {
          runAnimation(msg.content)
        } else if (msg.type === 'tips') {
          runTips(msg.content)
        }
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
    handleContextChange(context.value, gameInterface.value as any)
  } else if (!gameInterface.value) {
    nextTick(() => {
      handleContextChange(context.value!, gameInterface.value! as any)
    })
  }
}, { immediate: true })

const handleContextChange = (context: GameContext, gameInterface: ReturnType<typeof createGameInterface>) => {
  if (context.status === GameStatus.Playing || context.status === GameStatus.Finished) {
    gameInterface.clearAll()
    gameInterface.setRotate(currentUserCamp.value === Camp.BLACK ? Math.PI : 0)
    gameInterface.drawChessPieces(context.chessPieces)

    if (context.activePiece) {
      if (context.players![context.currentCamp]!.id === currentUser.value!.id) {
        gameInterface.activePieceAnimation.stop()
        gameInterface.activePieceAnimation.run(context.activePiece, currentUserCamp.value === Camp.BLACK ? Math.PI : 0)
      }
    } else {
      gameInterface.activePieceAnimation.stop()
    }

    if (context.allowPoints) {
      gameInterface.drawAllowPoints(context.allowPoints)
    }

    if (context.movePath.length > 0) {
      gameInterface.drawCurrentStop(context.movePath.at(-1)!)
      gameInterface.drawLastStop(context.movePath[0])
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
      // message.destroy()
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

const handleSwitchCamp = () => {
  if (socket.value && currentUser.value && currentRoom.value) {
    socket.value.emit(events.room.seatRequest, {
      userId: currentUser.value.id,
      roomId: currentRoom.value.id
    })
  }
}

const handleRequestUndo = () => {
  Modal.confirm({
    title: '提示',
    content: '确定要悔棋吗？好丢人的哦～',
    onOk: () => {
      if (socket.value && currentUser.value && currentRoom.value) {
        socket.value.emit(events.game.undoRequest, {
          userId: currentUser.value.id,
          roomId: currentRoom.value.id
        })
      }
    }
  })
}

const handleGiveUp = () => {
  Modal.confirm({
    title: '提示',
    content: '确定要投降？好丢人的哦～',
    onOk: () => {
      if (socket.value && currentUser.value && currentRoom.value) {
        socket.value.emit(events.game.giveUp, {
          userId: currentUser.value.id,
          roomId: currentRoom.value.id
        })
      }
    }
  })
}

const handleChat = (content: string) => {
  if (socket.value && currentUser.value && currentRoom.value) {
    socket.value.emit(events.room.chat, {
      userId: currentUser.value.id,
      roomId: currentRoom.value.id,
      content
    })
  }
}

provide('context', context)
provide('manual', manual)
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

    .mini-operations {
      display: none;

      @media screen and (max-width: 640px) {
        position: absolute;
        right: 8px;
        top: 8px;
        display: flex;
        gap: 8px;
      }
    }
  }

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: calc(100% - 320px);

    @media screen and (max-width: 640px) {
      width: 100%;
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      position: relative;

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

  .aside {
    position: absolute;
    right: 0;
    top: 40px;
    width: 320px;
    height: calc(100% - 40px);

    @media screen and (max-width: 640px) {
      display: none;
    }
  }
}
</style>
