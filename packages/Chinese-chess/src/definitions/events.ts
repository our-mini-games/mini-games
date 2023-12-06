export default {
  global: {
    connection: 'connection',
    disconnect: 'disconnect',
    // 用户主动注册进入
    register: 'user:register'
  },
  room: {
    list: 'room:list',
    create: 'room:create',
    join: 'room:join',
    leave: 'room:leave',
    info: 'room:info',
    seatRequest: 'room:seat:request',
    seatResponse: 'room:seat:response',
    chat: 'room:chat'
  },
  error: {
    roomMax: 'error:room:max',
    roomNotFound: 'error:room:not-found',
    roomProcess: 'error:room:process'
  },
  game: {
    ready: 'game:ready',
    start: 'game:start',
    change: 'game:change'
  },
  client: {
    connect: 'connect',
    disconnect: 'disconnect'
  }
}
