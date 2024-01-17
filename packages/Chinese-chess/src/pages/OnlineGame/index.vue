<template>
  <div class="online-game">
    <game-lobby
      v-if="!currentRoom"
      :handleRoomJoin="handleRoomJoin"
      @update:mode="emits('update:mode', null)"
    />

    <game-main
      v-else
      :handleRoomLeave="handleRoomLeave"
    />
  </div>
</template>

<script setup lang="ts">
import useSocket from '@/composables/useSocket'
import { Socket } from 'socket.io-client'
import events from '@/definitions/events'
import { USER_INFO_KEY } from '@/definitions'
import { ChatInfo, Room, User } from '@/types'
import { Modal, message } from 'ant-design-vue'
import GameLobby from './GameLobby.vue'
import GameMain from './GameMain.vue'

const emits = defineEmits<(e: 'update:mode', value: null) => void>()

const socket = useSocket()

const rooms = ref<Room[]>([])
const currentUser = ref<User | null>(JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? 'null'))
const currentRoom = ref<Room | null>(null)
const context = ref<any>(null)
const chatList = ref<ChatInfo[]>([])

onMounted(() => {
  if (!socket.value) {
    throw new Error('程序出错')
  }

  socketHandler(socket.value as Socket)
})

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.disconnect()
  }
})

const socketHandler = (socket: Socket) => {
  socket.on('connect_error', err => {
    message.error(err.message)
  })

  socket.on(events.client.connect, () => {
    // 用户信息更新
    socket.on(events.user.update, (user) => {
      currentUser.value = user
      // 将用户和当前 socket 连接绑定
      currentUser.value!.socketId = socket.id as any
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))

      if (user.roomId) {
        Modal.destroyAll()
        Modal.confirm({
          title: '检测你还有未结束的游戏哦，是否重新进入？',
          onOk: () => {
            handleRoomJoin({ id: user.roomId } as any)
          },
          onCancel: () => {
            handleRoomLeave(user.roomId)
          }
        })
      }
    })

    // 房间列表变动
    socket.on(events.room.list, data => {
      rooms.value = data
    })

    // 用户加入房间
    socket.on(events.room.join, (user, data) => {
      if (!currentUser.value || currentUser.value.id === user.id) {
        currentUser.value = user
      }
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))

      const room = rooms.value.find(room => room.id === user.roomId)
      if (!room) {
        throw new Error('程序出错，房间不存在', user.roomId)
      }
      currentRoom.value = room
      context.value = data
    })
    // 用户离开房间
    socket.on(events.room.leave, (user, data) => {
      if (currentUser.value?.id === user.id) {
        currentUser.value = user

        localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))

        currentRoom.value = null
        context.value = null
        chatList.value.length = 0
      } else {
        context.value = data
      }
    })

    socket.on(events.room.info, room => {
      currentRoom.value = room
    })

    socket.on(events.room.offline, (user, data) => {
      message.destroy()
      message.info(`用户${user.nickname + ''}掉线了`)

      context.value = data
    })

    socket.on(events.room.context, data => {
      context.value = data
    })

    socket.on(events.room.chat, msg => {
      // message.value = msg
    })

    socket.on(events.room.seatRequest, () => {
      Modal.destroyAll()
      Modal.confirm({
        title: '提示',
        content: '对方申请更换阵营，是否同意？',
        onOk: () => {
          socket.emit(events.room.seatResponse, {
            userId: currentUser.value!.id,
            roomId: currentRoom.value!.id,
            isAgree: true
          })
        },
        onCancel: () => {
          socket.emit(events.room.seatResponse, {
            userId: currentUser.value!.id,
            roomId: currentRoom.value!.id,
            isAgree: false
          })
        }
      })
    })

    socket.on(events.room.seatResponse, (user, data, isAgree) => {
      message.destroy()
      if (currentUser.value?.id === user.id) {
        message.info(`对方${isAgree ? '同意' : '拒绝'}更换阵营`)
      }
      context.value = data
    })

    socket.on(events.game.undoRequest, () => {
      Modal.destroyAll()
      Modal.confirm({
        title: '提示',
        content: '对方申请悔棋，是否同意？',
        onOk: () => {
          socket.emit(events.game.undoResponse, {
            userId: currentUser.value!.id,
            roomId: currentRoom.value!.id,
            isAgree: true
          })
        },
        onCancel: () => {
          socket.emit(events.game.undoResponse, {
            userId: currentUser.value!.id,
            roomId: currentRoom.value!.id,
            isAgree: false
          })
        }
      })
    })

    socket.on(events.game.undoResponse, (user, data, isAgree) => {
      message.destroy()
      if (currentUser.value?.id === user.id) {
        message.info(`对方${isAgree ? '同意' : '拒绝'}悔棋`)
      }
      message.info(`用户「${user.nickname + ''}」悔棋了！！！！！！！！！！！！！`)
      context.value = data
    })

    socket.on(events.game.giveUp, data => {
      context.value = data
    })

    socket.on(events.game.start, (data) => {
      message.destroy()
      message.info('游戏开始')
      context.value = data
    })

    socket.on(events.game.over, (data) => {
      message.destroy()
      message.info('游戏结束')
      context.value = data
    })

    socket.on(events.room.chat, (chatInfo: ChatInfo) => {
      chatList.value.push(chatInfo)
    })

    socket.on(events.error.roomMax, () => {
      message.destroy()
      message.info('当前房间容纳人数已满，去其他房间逛逛吧～')
    })
  })

  socket.on(events.client.disconnect, (userInfo: User) => {
    message.destroy()
    message.error('服务器连接中断，88')
  })
}

const handleRoomJoin = (room: Room): void => {
  if (socket.value && currentUser.value) {
    socket.value.emit(events.room.join, {
      userId: currentUser.value.id,
      roomId: room.id
    })
  }
}

const handleRoomLeave = (roomId?: number | string): void => {
  if (socket.value && currentUser.value && (roomId ?? currentRoom.value)) {
    socket.value.emit(events.room.leave, {
      userId: currentUser.value.id,
      roomId: roomId ?? currentRoom.value!.id
    })
  }
}

provide('socket', socket)
provide('rooms', rooms)
provide('currentRoom', currentRoom)
provide('currentUser', currentUser)
provide('context', context)
provide('chatList', chatList)
</script>
