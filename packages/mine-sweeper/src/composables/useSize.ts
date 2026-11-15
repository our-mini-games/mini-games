import { ComputedRef, Ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { LevelInfo } from '../types/index.js'
import Panzoom from '@panzoom/panzoom'

export const useSize = (el: Ref<HTMLElement | undefined>, levelInfo: Ref<LevelInfo>): {
  areaSize: number
  gap: number
  viewBoxSize: ComputedRef<{ width: number, height: number }>
} => {
  const areaSize = 32
  const gap = 0

  const viewBoxSize = computed(() => {
    const { column, row } = levelInfo.value
    return {
      width: column * areaSize + (column + 1) * gap,
      height: row * areaSize + (row + 1) * gap
    }
  })

  let panzoom: ReturnType<typeof Panzoom> | undefined
  let resizeObserver: ResizeObserver | undefined
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const measureBoard = (parent: HTMLElement): { scale: number, x: number, y: number } => {
    const { width, height } = parent.getBoundingClientRect()
    const board = viewBoxSize.value
    const scale = Math.min((width - 16) / board.width, (height - 16) / board.height, 1.4)
    return {
      scale,
      x: (width / scale - board.width) / 2,
      y: (height / scale - board.height) / 2
    }
  }

  const centerBoard = (): void => {
    const parent = el.value?.parentElement
    if (!panzoom || !parent || parent.clientWidth <= 16 || parent.clientHeight <= 16) return

    const { scale, x, y } = measureBoard(parent)
    panzoom.setOptions({ minScale: scale * 0.5 })
    panzoom.zoom(scale, { animate: false })
    panzoom.pan(x, y, { animate: false })
  }

  onMounted(() => {
    const elem = el.value
    const parent = elem?.parentElement
    if (!elem || !parent) return

    const { scale, x, y } = measureBoard(parent)
    panzoom = Panzoom(elem, {
      handleStartEvent: () => {},
      startScale: scale,
      startX: x,
      startY: y,
      maxScale: isMobile ? 3 : 5,
      minScale: scale * 0.5,
      origin: '0 0',
      step: isMobile ? 0.1 : 0.05,
      isSVG: true,
      noBind: isMobile
    })

    if (!isMobile) {
      parent.addEventListener('wheel', panzoom.zoomWithWheel)
    }
    resizeObserver = new ResizeObserver(centerBoard)
    resizeObserver.observe(parent)
  })

  watch(viewBoxSize, centerBoard, { flush: 'post' })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    if (panzoom) {
      el.value?.parentElement?.removeEventListener('wheel', panzoom.zoomWithWheel)
      panzoom.destroy()
    }
  })

  return {
    areaSize,
    gap,
    viewBoxSize
  }
}
