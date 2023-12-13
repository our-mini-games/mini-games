<template>
  <div class="offline-game">
    <button class="btn" @click="handleBack">返回</button>

    <div class="offline-game-container">
      <main ref="mainRef" class="main"></main>
      <aside class="aside">
        <div ref="manualRef" class="manual-list"></div>
        <div ref="chatListRef" class="chat-list">
          <div ref="chatInputRef" class="chat-input"></div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GameMode } from '@/definitions'
import { createController } from '@/libs/Controller'

const emits = defineEmits<(e: 'update:mode', mode: GameMode | null) => void>()

const mainRef = ref<HTMLElement | null>(null)
const manualRef = ref<HTMLElement | null>(null)
const chatListRef = ref<HTMLElement | null>(null)
const chatInputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (
    mainRef.value &&
    manualRef.value &&
    chatListRef.value &&
    chatInputRef.value
  ) {
    const font = new FontFace('PieceFont', 'url(fzlsft.ttf)')
    font.load().then(f => {
      (document.fonts as any).add(f)
    }).then(async () => await document.fonts.ready.then())
      .then(() => {
        const ctrl = createController({
          oMain: mainRef.value!,
          oManual: manualRef.value!,
          oChatList: chatListRef.value!,
          oChatInput: chatInputRef.value!
        })
        ctrl.initGame()
        ctrl.run()
      })
  }
})

const handleBack = (): void => {
  emits('update:mode', null)
}
</script>

<style lang="scss" scoped>
.offline-game {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .btn {
    position: absolute;
    left: 0;
    top: 0;
  }

  .offline-game-container {
    display: flex;
    height: 100%;

    .main {
      flex: 1;
    }

    .aside {
      width: 320px;

      .manual-list {
        height: 50%;
      }
    }
  }
}
</style>
