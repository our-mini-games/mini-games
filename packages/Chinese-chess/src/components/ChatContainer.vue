<template>
  <section class="section chat-container">
    <ul ref="msgListRef" class="msg-list">
      <li
        v-for="msg of currentMessage"
        :key="msg.id"
        class="msg-item"
        :class="{
          'system-msg': msg.type === 'SystemMessage',
          current: msg.user.id === currentUser?.id
        }"
      >
        <div
          v-if="msg.type === 'SystemMessage'"
          class="icon icon-trumpet"
        ></div>
        <div v-else class="nickname">{{ msg.user.nickname }}：</div>
        <div class="msg">{{ msg.msg }}</div>
      </li>
    </ul>

    <input
      type="text"
      class="chat-input"
      placeholder="按回车键（Enter）发送"
      @keydown="handleKeyDown"
    />
  </section>
</template>

<script setup lang="ts">
import { Room, User } from '@/types/index.js'

const emits = defineEmits<(e: 'game:chat', msg: string) => void>()

const msgListRef = ref<HTMLUListElement | null>(null)

const message = inject('message', ref<any[]>([]))
const currentRoom = inject('currentRoom', ref<Room | null>(null))
const currentUser = inject('currentUser', ref<User | null>(null))

const currentMessage = computed(() => {
  return message.value.filter(({ roomId }) => currentRoom.value?.id === roomId)
})

watch(message, () => {
  nextTick(() => {
    if (msgListRef.value) {
      msgListRef.value.scroll(0, 1000)
    }
  })
}, { immediate: true })

const handleKeyDown = (e: KeyboardEvent): void => {
  const target = e.target as HTMLInputElement
  const { value } = target

  if (e.key === 'Enter' && value) {
    emits('game:chat', value)
    target.value = ''
  }
}
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  min-height: 0;

  .msg-list {
    flex: 1;
    overflow-y: auto;

    .msg-item {
      display: flex;
      font-size: 14px;
      line-height: 18px;
      padding: 1px 4px;
      margin: 1px 0;

      .nickname {
        color: var(--dark);
        font-weight: 700;
        white-space: nowrap;
      }

      .msg {
        word-break: break-all;
      }

      &.system-msg {
        background-color: rgba($color: #D24735, $alpha: 0.3);
        .nickname {
          color: var(--error);
        }

        .icon-trumpet {
          width: 18px;
          height: 18px;
          background: url(@/assets/icons/trumpet.svg);
          background-size: 18px 18px;
        }
      }

      &.current {
        .nickname {
          color: var(--success);
        }
      }
    }
  }

  .chat-input {
    margin: 8px 0;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--line);
    outline: none;

    &:focus {
      border-color: #0088ff;
    }
  }
}
</style>
