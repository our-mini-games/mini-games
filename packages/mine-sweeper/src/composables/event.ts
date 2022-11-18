import { Box, BoxStatus, GameStatus, LeftButtonBehavious } from '../types'
import { Ref, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { isLeftButton, isRightButton } from '../lib/utils'

interface EventReturnType {
  handleMousedown: (item: Box, e: MouseEvent) => void
  handleMouseup: (item: Box, e: MouseEvent) => void
}

export default (
  el: Ref<HTMLElement | undefined>,
  boxes: Ref<Box[]>,
  useDoubtful: Ref<Boolean>,
  gameStatus: Ref<GameStatus>,
  remainingFlags: Ref<number>
): EventReturnType => {
  const useLeftClickEnhancements = inject('useLeftClickEnhancements', ref(false))
  const leftButtonBehavious = inject('leftButtonBehavious', ref<LeftButtonBehavious>('open'))

  let clickTimes = 0

  let cachedPos = {
    x: 0,
    y: 0
  }

  let isPause = false

  const rect = ref<DOMRect>()

  onMounted(() => {
    if (el.value) {
      rect.value = el.value.getBoundingClientRect()
    }

    document.addEventListener('mouseup', handleDocumentMouseup)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mouseup', handleDocumentMouseup)
  })

  const setClickTimes = (val: number): void => {
    clickTimes = Math.max(0, Math.min(2, val))
  }

  // 设置自身状态
  const setCurrentStatus = (item: Box, status: BoxStatus): void => {
    isPause = true

    item.status = status

    // 开启元素时，遇到空格子递归开启周边元素
    if (status === 'open' && item.type === 0) {
      setSurroundStatus(item, 'open')
    }
    isPause = false
  }

  // 设置周边元素状态
  const setSurroundStatus = (item: Box, status: BoxStatus): void => {
    isPause = true
    const { x, y } = item
    ;[
      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
      [x - 1, y], [x + 1, y],
      [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ].forEach(point => {
      const box = boxes.value.find(box => box.x === point[0] && box.y === point[1])
      if (box && (box.status === 'default' || box.status === 'active')) {
        setCurrentStatus(box, status)
      }
    })
    isPause = false
  }

  // 获取周边被标记元素统计
  const getSurroundMarkedCount = (item: Box): number => {
    const { x, y } = item
    return [
      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
      [x - 1, y], [x + 1, y],
      [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ].reduce((prev, point) => {
      const box = boxes.value.find(box => box.x === point[0] && box.y === point[1])
      if (box && (box.status === 'doubtful' || box.status === 'marked')) {
        prev++
      }
      return prev
    }, 0)
  }

  const clearActiveStatus = (): void => {
    boxes.value.forEach(box => {
      if (box.status === 'active') {
        box.status = 'default'
      }
    })
  }

  // 鼠标点击
  const handleMousedown = (item: Box, e: MouseEvent): void => {
    e.preventDefault()

    if (isPause || gameStatus.value !== 'playing') {
      return
    }

    const { x, y } = item

    cachedPos = { x, y }

    if (!useLeftClickEnhancements.value) {
      setClickTimes(clickTimes + 1)
    }

    if (clickTimes >= 2) {
      if (item.type !== 'mine' && item.status === 'open') {
        setSurroundStatus(item, 'active')
      }
      return
    }

    // 只有左键单击才会设置成 active 动画状态
    if (e.button === 0 && item.status === 'default') {
      item.status = 'active'
    }
  }

  const handleMouseup = (item: Box, e: MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()

    if (isPause || gameStatus.value !== 'playing') {
      return
    }

    if (!useLeftClickEnhancements.value) {
      setClickTimes(clickTimes - 1)
    }

    const { button } = e

    const { x, y, status } = item

    // 左键增强处理
    if (useLeftClickEnhancements.value) {
      switch (leftButtonBehavious.value) {
        case 'open':
          if (status === 'active' && x === cachedPos.x && y === cachedPos.y) {
            setCurrentStatus(item, 'open')
          } else {
            clearActiveStatus()
          }
          break
        case 'doubtful':
          if ((status === 'active' || status === 'marked') && x === cachedPos.x && y === cachedPos.y) {
            setCurrentStatus(item, 'doubtful')

            if (status === 'marked') {
              remainingFlags.value++
            }
          } else {
            clearActiveStatus()
          }
          break
        case 'marked':
          if ((status === 'active' || status === 'doubtful') && x === cachedPos.x && y === cachedPos.y) {
            setCurrentStatus(item, 'marked')
            remainingFlags.value--
          } else {
            clearActiveStatus()
          }
          break
        default:
          break
      }
      return
    }

    // 双击情况处理
    if (clickTimes >= 1) {
      setSurroundStatus(item, 'default')

      if (item.type !== 'mine' && getSurroundMarkedCount(item) >= item.type) {
        setSurroundStatus(item, 'open')
      }

      return
    }

    // 左键单击
    if (isLeftButton(button)) {
      if (status === 'active' && x === cachedPos.x && y === cachedPos.y) {
        setCurrentStatus(item, 'open')
      } else {
        clearActiveStatus()
      }
    } else if (isRightButton(button)) {
      // 右键单击
      if (item.status !== 'open') {
        if (useDoubtful.value) {
          if (item.status === 'doubtful') {
            item.status = 'marked'
            remainingFlags.value--
          } else if (item.status === 'marked') {
            item.status = 'default'
            remainingFlags.value++
          } else {
            item.status = 'doubtful'
          }
        } else {
          if (item.status === 'marked') {
            item.status = 'default'
            remainingFlags.value++
          } else {
            item.status = 'marked'
            remainingFlags.value--
          }
        }
      }
    }
  }

  const handleDocumentMouseup = (): void => {
    setClickTimes(0)
    isPause = false

    if (gameStatus.value !== 'playing') {
      return
    }

    clearActiveStatus()
  }

  return {
    handleMousedown,
    handleMouseup
  }
}
