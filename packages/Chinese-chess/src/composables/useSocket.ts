import { io, type Socket } from 'socket.io-client'
import { USER_INFO_KEY, NICKNAME_KEY } from '@/definitions'

const useSocket = () => {
  const socket = ref<Socket | null>(null)

  onMounted(() => {
    const user = JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? '{}')
    socket.value = io(import.meta.env.VITE_SOCKET, {
      transports: ['websocket'],
      query: {
        id: user?.id ?? '',
        nickname: user?.nickname ?? localStorage.getItem(NICKNAME_KEY) ?? ''
      }
    })
  })

  return socket
}

export default useSocket
