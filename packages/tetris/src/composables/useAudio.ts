import { Ref } from 'vue'
import AudioMp3 from '../assets/music/audio.mp3'
import { Noop } from '../types'

const noop: Noop = () => {}

export interface AudioReturnType {
  start: Ref<Noop>
  move: Ref<Noop>
  clear: Ref<Noop>
  fall: Ref<Noop>
  gameover: Ref<Noop>
  rotate: Ref<Noop>
  stop: Ref<Noop>
}

export default (): AudioReturnType => {
  // const oAudio = new Audio(AudioMp3)
  const start = ref(noop)
  const killStart = ref(noop)
  const move = ref(noop)
  const clear = ref(noop)
  const fall = ref(noop)
  const gameover = ref(noop)
  const rotate = ref(noop)
  const stop = ref(noop)

  // @todo 记录所有 source 进行 stop

  onMounted(() => {
    const context = new AudioContext()
    const req = new XMLHttpRequest()
    req.open('GET', AudioMp3, true)
    req.responseType = 'arraybuffer'

    req.onload = () => {
      context.decodeAudioData(
        req.response,
        buf => {
          // 将 audio 解码转为 buffer
          const getSource = (): AudioBufferSourceNode => {
            // 创建 source 源
            const source = context.createBufferSource()
            source.buffer = buf
            source.connect(context.destination)
            return source
          }

          killStart.value = (): void => {
            // 游戏开始的音乐只播放一次
            start.value = () => {}
          }

          // 游戏开始
          start.value = () => {
            killStart.value()
            getSource().start(0, 3.7202, 3.6224)
          }

          // 消除
          clear.value = () => getSource().start(0, 0, 0.7675)

          // 立即下落
          fall.value = () => getSource().start(0, 1.2558, 0.3546)

          // 游戏结束
          gameover.value = () => getSource().start(0, 8.1276, 1.1437)

          // 变换
          rotate.value = () => getSource().start(0, 2.2471, 0.0807)

          // 左右移动 / 按键声
          move.value = () => getSource().start(0, 2.9088, 0.1437)

          // 停止播放
          // @todo
          stop.value = () => getSource().stop()
        },
        error => {
          console.error('音频读取错误', error)
        }
      )
    }

    req.send()
  })

  return {
    start,
    move,
    clear,
    fall,
    gameover,
    rotate,
    stop
  }
}
