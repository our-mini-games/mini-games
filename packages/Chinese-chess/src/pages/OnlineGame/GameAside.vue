<template>
  <div class="game-aside">
    <section class="section manual-wrapper">
      <ul
        class="list manual-list"
        ref="manualListRef"
      >
        <li
          v-for="(item, index) of manual"
          :key="item.value + item.camp + index"
          class="manual-item"
        >
          <a-badge
            :color="colorMapper[item.camp]"
            :text="`[${index + 1}] ${item.value}`"
          />
        </li>
      </ul>
    </section>
    <section class="section chat-wrapper">
      <ul
        class="list chat-list"
        ref="chatListRef"
      >
        <li
          v-for="item of chatList"
          :key="item.userId + item.createdTime"
          class="chat-item"
          :class="{
            'is-system': item.userId === '',
            'is-self': item.userId === currentUser?.id
          }"
        >
          <div
            v-if="item.userId !== ''"
            class="nickname"
          >
            {{ item.nickname }}
          </div>
          <div class="content">
            <SoundOutlined v-if="item.userId === ''" />
            {{ item.content }}
          </div>
        </li>
      </ul>
      <a-input-group compact>
        <a-input
          v-model:value="msg"
          allow-clear
          placeholder="按「回车」键发送"
          style="width: 70%"
          @keydown="handleInputKeydown"
        />
        <a-button
          type="primary"
          style="width: 30%"
          @click="handleSend"
        >
          发送
        </a-button>
      </a-input-group>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Camp } from 'chinese-chess-service'
import { colorMapper } from '../../definitions'
import { ComputedRef } from 'vue'
import { message } from 'ant-design-vue'
import { ChatInfo, User } from '@/types'

const emits = defineEmits<(e: 'chat', content: string) => void>()

const manualListRef = ref<HTMLElement | null>(null)
const chatListRef = ref<HTMLElement | null>(null)

const msg = ref<string>()
let lastTime = Date.now()

const manual = inject<ComputedRef<Array<{
  camp: Camp
  value: string
}>>>('manual')
const chatList = inject('chatList', ref<ChatInfo[]>([]))

const currentUser = inject('currentUser', ref<User | null>(null))

watch(() => manual?.value, () => {
  nextTick(() => {
    if (manualListRef.value) {
      manualListRef.value.scroll(0, manualListRef.value.scrollHeight + 32)
    }
  })
})
watch(chatList, () => {
  nextTick(() => {
    if (chatListRef.value) {
      chatListRef.value.scroll(0, chatListRef.value.scrollHeight + 32)
    }
  })
}, { deep: true })

const handleInputKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && msg.value) {
    handleSend()
  }
}

const handleSend = () => {
  if (!msg.value) {
    return
  }

  const currentTime = Date.now()
  if (currentTime - lastTime < 1000) {
    message.destroy()
    message.info('喝杯茶休息一下吧')
    return
  }

  emits('chat', msg.value)
  msg.value = undefined
  lastTime = currentTime
}
</script>

<style lang="scss" scoped>
.game-aside {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  .section {

    .list {
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow-y: auto;
    }
  }

  .manual-wrapper {
    height: 40%;

    .list {
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
  }

  .chat-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;

    .list {
      flex: 1;
      min-height: 0;
      padding: 16px;

      .chat-item {
        & + .chat-item {
          margin-top: 8px;
        }

        .nickname {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }

        .content {
          word-break: break-all;
        }

        &.is-self {
          padding-left: 32px;

          .nickname,
          .content {
            text-align: right;
          }
        }

        &.is-system {
          background-color: var(--red);
          margin-left: -16px;
          margin-right: -16px;
          padding: 0 16px;
          color: #fff;
        }
      }
    }
  }
}
</style>
