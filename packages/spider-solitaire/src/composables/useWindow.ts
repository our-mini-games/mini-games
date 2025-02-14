import { ComputedRef, ref } from 'vue'
import { solitaireSize } from '../config/game.config'
import { WindowSize } from '../types'

export const useWindow = (): ComputedRef<WindowSize> => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const isRotate = ref(false) // 是否旋转

  const viewBoxWidth = computed(() => {
    return 2560
  })

  const scale = computed(() => {
    return width.value / viewBoxWidth.value
  })

  const viewBoxHeight = computed(() => {
    // 1440
    return height.value / scale.value
  })

  const padding = computed(() => ({
    left: Math.floor(viewBoxWidth.value * 0.05),
    top: Math.floor(viewBoxHeight.value * 0.05)
  }))

  const activeAreaSize = computed(() => {
    const w = Math.floor(viewBoxWidth.value - padding.value.left * 2)
    return {
      width: w,
      height: Math.floor(viewBoxHeight.value - padding.value.top * 2 - solitaireSize.height),
      gap: Math.floor((w - (10 * solitaireSize.width)) / (10 - 1))
    }
  })

  // 收牌区
  const receiveAreaSize = computed(() => {
    const w = Math.floor(activeAreaSize.value.width * 0.3)
    return {
      width: w,
      height: solitaireSize.height,
      gap: Math.floor((w - (8 * solitaireSize.width)) / (8 - 1))
    }
  })

  const controlAreaSize = computed(() => ({
    width: Math.floor(activeAreaSize.value.width * 0.3),
    height: solitaireSize.height
  }))

  // 发牌区（未开启牌组）
  const inactiveAreaSize = computed(() => {
    const w = Math.floor(activeAreaSize.value.width * 0.3)
    return {
      width: w,
      height: solitaireSize.height,
      gap: Math.floor((w - (5 * solitaireSize.width)) / (5 - 1))
    }
  })

  // 未开启的牌叠加间隙
  const unopenedGroupGap = computed(() => {
    return Math.floor(viewBoxHeight.value * 0.015)
  })

  // 已开启的牌叠加间隙
  const openedGroupGap = computed(() => {
    return Math.floor(viewBoxHeight.value * 0.03)
  })

  const handleResize = (): void => {
    isRotate.value = window.innerWidth < window.innerHeight
    width.value = isRotate.value ? window.innerHeight : window.innerWidth
    height.value = isRotate.value ? window.innerWidth : window.innerHeight
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const windowSize = computed<WindowSize>(() => ({
    width: width.value,
    height: height.value,
    scale: scale.value,
    isRotate: isRotate.value,
    unopenedGroupGap: unopenedGroupGap.value,
    openedGroupGap: openedGroupGap.value,
    padding: padding.value,
    viewBoxWidth: viewBoxWidth.value,
    viewBoxHeight: viewBoxHeight.value,
    activeAreaSize: activeAreaSize.value,
    receiveAreaSize: receiveAreaSize.value,
    controlAreaSize: controlAreaSize.value,
    inactiveAreaSize: inactiveAreaSize.value
  }))

  return windowSize
}
