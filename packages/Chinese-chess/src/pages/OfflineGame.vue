<template>
  <div class="offline-game">
    <header class="header">
      <a-button
        @click="handleBack"
      >
        退出
      </a-button>

      <h1 class="title">OFFLINE</h1>

      <a-button
        class="btn-restart"
        @click="handleRestart"
      >
        重新开始
      </a-button>

      <a-button
        :type="manualDrawerVisible ? 'primary' : 'dashed'"
        @click="manualDrawerVisible = !manualDrawerVisible"
      >
        查看棋谱
      </a-button>
    </header>

    <div ref="offlineMainRef" class="offline-game-container"></div>

    <drawer
      v-model:open="manualDrawerVisible"
      title="棋谱"
      class="drawer"
      width="80%"
    >
      <ul
        class="list manual-list"
      >
        <li
          v-for="(item, index) of (context?.manual ?? [])"
          :key="item.value + item.camp + index"
          class="manual-item"
        >
          <a-badge
            :color="colorMapper[item.camp]"
            :text="`[${index + 1}] ${item.value}`"
          />
        </li>
      </ul>
    </drawer>
  </div>
</template>

<script setup lang="ts">
import { GameMode, colorMapper } from '@/definitions'
import { message } from 'ant-design-vue'
import { Camp, createServer, createGameInterface, GameContext, GameStatus } from 'chinese-chess-service'

import Drawer from '@/components/Drawer.vue'

const emits = defineEmits<(e: 'update:mode', mode: GameMode | null) => void>()

const resources = inject('resources', ref<any>({}))
const offlineMainRef = ref<HTMLElement | null>(null)
const manualDrawerVisible = ref(false)

const server = createServer()
const context = ref<GameContext | null>(null)
const gameInterface = ref<ReturnType<typeof createGameInterface> | null>(null)

const user1 = { id: '1', nickname: '用户A', firstCamp: Camp.RED, isReady: false }
const user2 = { id: '2', nickname: '用户B', firstCamp: Camp.RED, isReady: false }

server.join(user1)
server.join(user2)

onMounted(() => {
  if (offlineMainRef.value) {
    server.readyOrCancelReady(user1, true)
    server.readyOrCancelReady(user2, true)
    gameInterface.value = createGameInterface(resources)

    gameInterface.value.mount(offlineMainRef.value)

    gameInterface.value.mainCanvas.addEventListener('click', (e) => {
      server.moveOrSelect(server.context.players![server.context.currentCamp]!, gameInterface.value!.getPointer(e))
    })

    server.on('game:start', context => { handleContextChange(context) })
    server.on('game:restart', () => { handleContextChange(server.context) })

    server.on('context:change', ({ context }) => { handleContextChange(context) })

    server.on('piece:select', ({ context }) => { handleContextChange(context) })

    server.on('piece:select:cancel', ({ context }) => { handleContextChange(context) })

    server.start()
  }
})

const handleContextChange = (value: GameContext) => {
  context.value = value
  if (gameInterface.value) {
    gameInterface.value.clearAll()
    gameInterface.value.drawChessPieces(context.value.chessPieces)

    if (context.value.activePiece) {
      gameInterface.value.activePieceAnimation.stop()
      gameInterface.value.activePieceAnimation.run(context.value.activePiece)
    } else {
      gameInterface.value.activePieceAnimation.stop()
    }

    if (context.value.allowPoints) {
      gameInterface.value.drawAllowPoints(context.value.allowPoints)
    }

    if (context.value.movePath.length > 0) {
      gameInterface.value.drawCurrentStop(context.value.movePath.at(-1)!)
      gameInterface.value.drawLastStop(context.value.movePath[0])
    }

    if (context.value.message.length > 0) {
      const msg = context.value.message.shift()
      if (msg.type === 'animation') {
        runAnimation(msg.content)
      } else if (msg.type === 'tips') {
        runTips(msg.content)
      }
    }

    if (context.value.status === GameStatus.Finished) {
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
  message.destroy()
  message.info(content)
}

const handleRestart = () => {
  server.restart()
}

const handleBack = (): void => {
  emits('update:mode', null)
}
</script>

<style lang="scss" scoped>
.offline-game {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 16px;

    .title {
      flex: 1;
      margin: 0;
      font-size: 16px;
      text-align: center;
    }

    .btn-restart {
      margin-left: auto
    }
  }

  .offline-game-container {
    flex: 1;
    position: relative;
    min-height: 0;
    margin-bottom: 32px;
  }
}

.manual-list {
  height: 100%;
  padding: 16px 0;

  .manual-item {
    display: inline-block;
    width: 50%;
    margin: 4px 0;
    padding: 0 16px;

    &:nth-child(even) {
      text-align: left;
    }
  }
}
</style>
