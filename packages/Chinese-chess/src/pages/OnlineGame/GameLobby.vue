<template>
  <div class="lobby-container">
    <header class="header">
      <a-button
        class="btn-back"
        @click="handleBack"
      >
        首页
      </a-button>
      <h1 class="title">
        游戏大厅
      </h1>
    </header>

    <section class="rooms-wrapper">
      <a-empty
        v-if="rooms.length === 0"
        :image="Empty.PRESENTED_IMAGE_SIMPLE"
      >
        <template #description>
          <span>空间列表正在加载中，请耐心等候</span>
        </template>
      </a-empty>
      <ul v-else class="rooms">
        <li
          v-for="room of rooms"
          :key="room.id"
          class="room"
          @click="handleRoomJoin(room)"
        >
          <h3 class="title">{{ room.name }} 房</h3>
          <div class="number">({{ room.users.length }}/{{ room.limit }})</div>
          <div class="status">
            {{
              room.status === GameStatus.Finished
                ? '游戏结束'
                : room.status === GameStatus.Playing
                  ? '游戏中'
                  : '空闲'
            }}
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Room } from '@/types'
import { GameStatus } from 'chinese-chess-service'
import { Empty } from 'ant-design-vue'

defineProps<{
  handleRoomJoin: (room: Room) => void
}>()

const emits = defineEmits<(e: 'update:mode', value: null) => void>()

const rooms = inject('rooms', ref<Room[]>([]))

const handleBack = () => {
  emits('update:mode', null)
}
</script>

<style lang="scss" scoped>

.header {
  position: relative;
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

.rooms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 32px;

  .room {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 108px;
    height: 108px;
    border-radius: 8px;
    background-color: #f1f1f1;
    box-shadow: 0 0 1px var(--dark);
    cursor: pointer;

    .title {
      margin: 0;
    }

    &:hover {
      box-shadow: 0 0 8px var(--red);
    }
  }
}
</style>
