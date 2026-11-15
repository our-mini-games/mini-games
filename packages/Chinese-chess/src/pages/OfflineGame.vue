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

    <div class="mode-selector">
      <a-radio-group v-model:value="gameMode" button-style="solid">
        <a-radio-button value="pvp">人人对战</a-radio-button>
        <a-radio-button value="pve">人机对战</a-radio-button>
      </a-radio-group>

      <template v-if="gameMode === 'pve'">
        <a-select v-model:value="difficulty" style="width: 120px">
          <a-select-option value="easy">简单</a-select-option>
          <a-select-option value="medium">中等</a-select-option>
          <a-select-option value="hard">困难</a-select-option>
        </a-select>
      </template>
    </div>

    <div v-if="aiThinking" class="ai-thinking">
      <a-spin /> AI 思考中...
    </div>

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
import { GameMode, colorMapper } from '@/definitions/index'
import { message } from 'ant-design-vue'
import { Camp, createServer, createGameInterface, GameContext, GameStatus, switchCamp } from 'chinese-chess-service'
import { ChessAI, type AIDifficulty } from '@/libs/AI'

import Drawer from '@/components/Drawer.vue'

const emits = defineEmits<(e: 'update:mode', mode: GameMode | null) => void>()

const resources = inject('resources', ref<any>({}))
const offlineMainRef = ref<HTMLElement | null>(null)
const manualDrawerVisible = ref(false)

// AI 相关状态
const gameMode = ref<'pvp' | 'pve'>('pvp')
const difficulty = ref<AIDifficulty>('medium')
const aiThinking = ref(false)
const ai = ref<ChessAI | null>(null)

const server = createServer()
const context = ref<GameContext | null>(null)
const gameInterface = ref<ReturnType<typeof createGameInterface> | null>(null)

const user1 = { id: '1', nickname: '用户A', firstCamp: Camp.RED, isReady: false }
const user2 = { id: '2', nickname: '用户B', firstCamp: Camp.BLACK, isReady: false }

server.join(user1)
server.join(user2)

// 监听游戏模式变化，初始化 AI
watch(gameMode, (newMode) => {
  if (newMode === 'pve') {
    ai.value = new ChessAI(difficulty.value, Camp.BLACK)
    handleRestart()
  } else {
    ai.value = null
    handleRestart()
  }
})

// 监听难度变化，重新初始化 AI
watch(difficulty, (newDifficulty) => {
  if (gameMode.value === 'pve') {
    ai.value = new ChessAI(newDifficulty, Camp.BLACK)
    handleRestart()
  }
})

onMounted(() => {
  if (offlineMainRef.value) {
    server.readyOrCancelReady(user1, true)
    server.readyOrCancelReady(user2, true)

    gameInterface.value = createGameInterface(resources.value)

    gameInterface.value.mount(offlineMainRef.value as any)

    gameInterface.value.mainCanvas.addEventListener('click', (e) => {
      // 如果是 AI 回合或 AI 正在思考，不允许点击
      if (gameMode.value === 'pve' && (server.context.currentCamp === Camp.BLACK || aiThinking.value)) {
        return
      }
      server.moveOrSelect(server.context.players![server.context.currentCamp]!, gameInterface.value!.getPointer(e))
    })

    gameInterface.value.on('animation:finished', type => {
      if (type !== 'win') {
        gameInterface.value?.animations.clear()
      }

      if (context.value!.message.length > 0) {
        const msg = context.value!.message.shift()
        if (msg.type === 'animation') {
          runAnimation(msg.content)
        } else if (msg.type === 'tips') {
          runTips(msg.content)
        }
      }
    })

    server.on('game:start', context => { handleContextChange(context) })
    server.on('game:restart', () => { handleContextChange(server.context) })

    server.on('context:change', ({ context }) => { handleContextChange(context) })

    server.on('piece:select', ({ context }) => { handleContextChange(context) })

    server.on('piece:select:cancel', ({ context }) => { handleContextChange(context) })
    server.on('game:over', context => { handleContextChange(context) })

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
      console.log(switchCamp(context.value.currentCamp))
      gameInterface.value.drawCurrentStop(context.value.movePath.at(-1)!, switchCamp(context.value.currentCamp))
      gameInterface.value.drawLastStop(context.value.movePath[0], switchCamp(context.value.currentCamp))
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
      console.log(context.value.manual)
      message.info('游戏结束')
    }

    // AI 走棋逻辑
    if (gameMode.value === 'pve' && context.value.currentCamp === Camp.BLACK && context.value.status === GameStatus.Playing) {
      triggerAIMove()
    }
  }
}

const triggerAIMove = async () => {
  if (!ai.value || aiThinking.value) return

  aiThinking.value = true

  // 使用 setTimeout 让 UI 有时间更新
  await new Promise(resolve => setTimeout(resolve, 100))

  try {
    const move = ai.value.getBestMove({
      ...context.value,
      server,
    })

    if (move) {
      // 模拟 AI 点击起点
      server.moveOrSelect(user2, { x: move.from.x, y: move.from.y })
      // 模拟 AI 点击终点
      server.moveOrSelect(user2, { x: move.to.x, y: move.to.y })
    }
  } catch (error) {
    console.error('AI move error:', error)
  } finally {
    aiThinking.value = false
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
  // 如果是人机模式，初始化 AI
  if (gameMode.value === 'pve') {
    ai.value = new ChessAI(difficulty.value, Camp.BLACK)
  }

  server.readyOrCancelReady(user1, true)
  server.readyOrCancelReady(user2, true)
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

  .mode-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .ai-thinking {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    color: #666;
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
