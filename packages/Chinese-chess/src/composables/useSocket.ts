import { GameStatus, USER_INFO_KEY } from '@/definitions'
import events from '@/definitions/events'
import { ChessManual, GameContext, Message, Room, User } from '@/types'
import { initChessPieces } from '@/utils'
import { io, type Socket } from 'socket.io-client'

// const createContext = (): GameContext => {
//   return {
//     players: null,
//     status: GameStatus.Init,
//     firstCamp: Camp.RED,
//     currentCamp: Camp.RED,
//     manual: [],
//     chessPieces: []
//   }
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSocket = ($: any) => {
  const socket = ref<Socket | null>(null)

  const currentUser = ref<User | null>(JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? 'null'))
  const message = ref<Message[]>([])
  const chessManual = ref<ChessManual[]>([])
  // const context = ref<GameContext>(createContext())

  const rooms = ref<Room[]>([])

  const currentRoom = ref<Room | null>(null)

  const context = computed<GameContext | null>(() => {
    return currentRoom.value?.context ?? null
  })

  const players = computed(() => context.value?.players ?? null)

  // const currentRoom = computed(() => {
  //   return rooms.value.find(({ users }) => users.find(user => user.id === currentUser.value?.id))
  // })

  const isInit = computed(() => context.value?.status === GameStatus.Init)

  onMounted(() => {
    socket.value = io('ws://localhost:10086')

    socket.value.on(events.client.connect, () => {
      console.log('连接成功', socket.value)
      if (!currentUser.value) {
        currentUser.value = {
          id: socket.value!.id,
          nickname: `用户-${Math.random().toString().slice(2, 8)}`,
          socketId: socket.value!.id
        }
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(currentUser.value))
      }

      // 将用户和当前 socket 连接绑定
      currentUser.value.socketId = socket.value!.id

      socket.value!.emit(events.global.register, currentUser.value)

      // 房间列表变动
      socket.value!.on(events.room.list, data => {
        rooms.value = data
      })

      // 用户加入房间
      socket.value!.on(events.room.join, (data) => {})
      // 用户离开房间
      socket.value!.on(events.room.leave, data => {})

      socket.value!.on(events.room.info, room => {
        console.log('room:info', room)
        currentRoom.value = room
      })

      socket.value!.on(events.room.chat, msg => {
        message.value = msg
      })

      socket.value!.on(events.room.seatRequest, (user: User) => {
        $.Message.open({
          type: 'confirm',
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          content: `用户「${user.nickname}」申请更换阵营`,
          onConfirm: () => {
            socket.value!.emit(events.room.seatResponse, {
              roomId: currentRoom.value!.id,
              user: currentUser.value!,
              isAgree: true
            })
          },
          onCancel: () => {
            socket.value!.emit(events.room.seatResponse, {
              roomId: currentRoom.value!.id,
              user: currentUser.value!,
              isAgree: false
            })
          }
        })
      })

      socket.value!.on(events.room.seatResponse, agree => {
        $.Message.open({
          type: 'message',
          content: `对方${agree ? '同意' : '拒绝'}更换阵营`
        })
      })

      socket.value!.on(events.game.start, () => {
        socket.value!.emit(events.game.start, {
          roomId: currentRoom.value!.id,
          chessPieces: initChessPieces()
        })
      })

      // socket.value!.on(events.game.change, data => {
      //   console.log(events.game.change, data)
      //   // context.value = data
      // })
    })

    socket.value.on(events.client.disconnect, (userInfo: User) => {
      console.log('88', userInfo.nickname)
    })
  })

  const handleRoomJoin = (room: Room): void => {
    if (socket.value && currentUser.value) {
      socket.value.emit(events.room.join, {
        userId: currentUser.value.id,
        roomId: room.id
      })
    }
  }

  const handleRoomLeave = (): void => {
    if (socket.value && currentUser.value && currentRoom.value) {
      socket.value.emit(events.room.leave, {
        userId: currentUser.value.id,
        roomId: currentRoom.value.id
      })
    }
  }

  const handleRoomChat = (msg: string): void => {
    if (socket.value && currentRoom.value && currentUser.value) {
      socket.value.emit(events.room.chat, {
        userId: currentUser.value.id,
        roomId: currentRoom.value.id,
        msg
      })
    }
  }

  const handleGameChange = (room: Room, user: User, value: any): void => {
    console.log(1111)
    // if (socket.value) {
    //   socket.value.emit(events.game.change, room.id, [
    //     ...context.value,
    //     {
    //       id: Date.now() + Math.random().toString().slice(2, 10),
    //       userId: user.id,
    //       roomId: room.id,
    //       value,
    //       createdTime: Date.now()
    //     }
    //   ])
    // }
  }

  const handleRoomRequestSeat = (): void => {
    if (isInit.value && socket.value && currentRoom.value && currentUser.value) {
      socket.value.emit(events.room.seatRequest, {
        roomId: currentRoom.value.id,
        user: currentUser.value
      })
    }
  }

  const handleGameReady = (): void => {
    if (isInit.value && socket.value && currentRoom.value && currentUser.value) {
      socket.value.emit(events.game.ready, {
        roomId: currentRoom.value.id,
        user: currentUser.value
      })
    }
  }

  return {
    currentUser,
    currentRoom,
    rooms,
    message,
    context,
    chessManual,
    players,
    isInit,
    handleRoomJoin,
    handleRoomLeave,
    handleRoomChat,
    handleGameChange,
    handleRoomRequestSeat,
    handleGameReady
  }
}
