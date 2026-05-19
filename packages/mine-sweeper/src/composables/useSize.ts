import { ComputedRef, Ref, computed, onMounted, onBeforeUnmount } from 'vue'
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

  let panzoom: any = null
  let resizeObserver: ResizeObserver | null = null

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const initPanzoom = (): void => {
    if (!el.value) return

    const elem = el.value
    const parent = elem.parentElement!

    const { width, height } = parent.getBoundingClientRect()

    // 移动端使用更适合的缩放策略
    const scaleX = width / viewBoxSize.value.width
    const scaleY = height / viewBoxSize.value.height
    const minScale = isMobile
      ? Math.min(scaleX, scaleY) * 0.9 // 移动端稍微缩小一点，留出边距
      : (width > viewBoxSize.value.width ? 1 : scaleX)

    panzoom = Panzoom(elem, {
      handleStartEvent: () => {
        // override default behavior
      },
      startScale: minScale,
      startX: width / 2 - viewBoxSize.value.width * minScale / 2,
      startY: height / 2 - viewBoxSize.value.height * minScale / 2,
      maxScale: isMobile ? 3 : 5,
      minScale: minScale * 0.5,
      origin: '0 0',
      step: isMobile ? 0.1 : 0.05,
      isSVG: true,
      // 移动端禁用鼠标滚轮缩放，使用触摸缩放
      noBind: isMobile
    })

    // 桌面端添加滚轮缩放
    if (!isMobile) {
      parent.addEventListener('wheel', panzoom.zoomWithWheel)
    }
  }

  const handleResize = (): void => {
    if (panzoom) {
      panzoom.reset()
      // 重新计算缩放
      setTimeout(() => {
        if (!el.value) return
        const parent = el.value.parentElement!
        const { width, height } = parent.getBoundingClientRect()
        const scaleX = width / viewBoxSize.value.width
        const scaleY = height / viewBoxSize.value.height
        const minScale = isMobile
          ? Math.min(scaleX, scaleY) * 0.9
          : (width > viewBoxSize.value.width ? 1 : scaleX)

        panzoom.zoom(minScale)
        panzoom.pan(
          width / 2 - viewBoxSize.value.width * minScale / 2,
          height / 2 - viewBoxSize.value.height * minScale / 2
        )
      }, 100)
    }
  }

  onMounted(() => {
    initPanzoom()

    // 监听窗口大小变化
    resizeObserver = new ResizeObserver(handleResize)
    if (el.value?.parentElement) {
      resizeObserver.observe(el.value.parentElement)
    }
  })

  onBeforeUnmount(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (panzoom) {
      panzoom.destroy()
    }
  })

  return {
    areaSize,
    gap,
    viewBoxSize
  }
}
