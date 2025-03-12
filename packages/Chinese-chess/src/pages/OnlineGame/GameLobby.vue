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
          ref="roomsRef"
          :data-id="room.id"
          @click="handleRoomJoin(room)"
        >
          <h3 class="title">{{ room.name }} 房</h3>
          <div class="number">({{ room.users.length }}/{{ room.limit }})</div>
          <div class="container">
            <icon-seat
              class="icon icon-seat"
              :style="{ fill: colorMapper.red }"
              :empty="room.users.length < 1"
            />
            <div class="wrapper"></div>
            <icon-seat
              class="icon icon-seat"
              :style="{ fill: colorMapper.black }"
              :empty="room.users.length < 2"
            />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Room } from '@/types/index.js'
import { GameStatus, createGameInterface, ChessPiece, colorMapper } from 'chinese-chess-service'
import { Empty } from 'ant-design-vue'

defineProps<{
  handleRoomJoin: (room: Room) => void
}>()

const emits = defineEmits<(e: 'update:mode', value: null) => void>()

const rooms = inject('rooms', ref<Room[]>([]))
const resources = inject('resources', ref<any>({}))
const giList = ref(new Map<Room['id'], ReturnType<typeof createGameInterface>>())
const roomsRef = ref<HTMLElement[]>([])

watch(rooms, async () => {
  if (rooms.value.length > 0 && giList.value.size === 0) {
    rooms.value.forEach(({ id }) => {
      giList.value.set(id, createGameInterface(resources.value))
    })

    await nextTick()

    giList.value.forEach((gi, key) => {
      const el = roomsRef.value.find(item => item.getAttribute('data-id') === (key + ''))?.querySelector('.wrapper') as HTMLElement

      if (el) {
        gi.mount(el)
      }
    })
  }

  await nextTick()

  rooms.value.forEach(item => {
    const gi = giList.value.get(item.id)
    if (!gi) {
      return
    }
    switch (item.status) {
      case GameStatus.Init:
        gi.clearAll()
        break
      case GameStatus.Playing:
        gi.clearAll()
        gi.drawChessPieces([new ChessPiece(11), new ChessPiece(21)])
        break
      case GameStatus.Finished:
        gi.clearAll()
        break
      default:
        break
    }
  })
})

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
    // width: 108px;
    // height: 108px;
    border-radius: 8px;
    box-shadow: 0 0 1px var(--dark);
    cursor: pointer;

    .title {
      margin: 0;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 0 16px;

      .wrapper {
        position: relative;
        width: 120px;
        height: 120px;
        transform: rotate(90deg);
      }
    }

    &:hover {
      box-shadow: 0 0 8px var(--red);
    }
  }
}
</style>
