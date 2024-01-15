<template>
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
        class="msg-input"
        placeholder="按「回车」键发送"
        style="width: 70%"
        @keydown="handleInputKeydown"
      />
      <a-button
        type="primary"
        class="btn-send"
        style="width: 30%"
        @click="handleSend"
      >
        发送
      </a-button>
    </a-input-group>
  </section>
</template>

<script setup lang="ts">
import { ChatInfo, User } from '@/types'
import { message } from 'ant-design-vue'

const emits = defineEmits<(e: 'chat', content: string) => void>()

const chatList = inject('chatList', ref<ChatInfo[]>([]))
const currentUser = inject('currentUser', ref<User | null>(null))

const msg = ref<string>()
let lastTime = Date.now()

const chatListRef = ref<HTMLElement | null>(null)

watch(chatList, () => {
  nextTick(() => {
    if (chatListRef.value) {
      chatListRef.value.scroll(0, chatListRef.value.scrollHeight + 32)
    }
  })
}, { deep: true, immediate: true })

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
.chat-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
      }

      .content {
        word-break: break-all;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
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

  :deep(.msg-input *),
  :deep(.btn-send *) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
  }
}
</style>
