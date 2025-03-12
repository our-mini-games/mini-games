import { Ref } from 'vue'
import AudioMp3 from '../assets/music/audio.mp3'
import { Noop } from '../types/index.js'

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

          const audioSourcePool: Map<'start' | 'clear' | 'fall' | 'gameover' | 'rotate' | 'move', AudioBufferSourceNode > = new Map()

          killStart.value = (): void => {
            // 游戏开始的音乐只播放一次
            start.value = () => {}
          }

          // 游戏开始
          start.value = () => {
            killStart.value()

            audioSourcePool.set('start', getSource()).get('start')!.start(0, 3.7202, 3.6224)
          }

          // 消除
          clear.value = () => audioSourcePool.set('clear', getSource()).get('clear')!.start(0, 0, 0.7675)

          // 立即下落
          fall.value = () => audioSourcePool.set('fall', getSource()).get('fall')!.start(0, 1.2558, 0.3546)

          // 游戏结束
          gameover.value = () => audioSourcePool.set('gameover', getSource()).get('gameover')!.start(0, 8.1276, 1.1437)

          // 变换
          rotate.value = () => audioSourcePool.set('rotate', getSource()).get('rotate')!.start(0, 2.2471, 0.0807)

          // 左右移动 / 按键声
          move.value = () => audioSourcePool.set('move', getSource()).get('move')!.start(0, 2.9088, 0.1437)

          // 停止播放
          stop.value = () => audioSourcePool.get('start')!.stop()
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
