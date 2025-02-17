import { ComputedRef, ref } from 'vue'
import { SolitaireSize, WindowSize } from '../types'

export const useWindow = (): ComputedRef<WindowSize> => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const isRotate = ref(false) // 是否旋转

  const defaultViewBoxWidth = 2560
  const resolutionWidth = 1204

  const viewBoxWidth = computed(() => {
    return resolutionWidth
  })

  const solitaireSize = computed(() => {
    // 纸牌宽高比 5:7
    return {
      width: resolutionWidth * 180 / defaultViewBoxWidth,
      height: resolutionWidth * 252 / defaultViewBoxWidth,
      radius: resolutionWidth * 16 / defaultViewBoxWidth,

      // 字体大小
      font: {
        textLength: resolutionWidth * 24 / defaultViewBoxWidth,
        size: resolutionWidth * 36 / defaultViewBoxWidth
      },
      fontMargin: {
        top: resolutionWidth * 8 / defaultViewBoxWidth,
        left: resolutionWidth * 8 / defaultViewBoxWidth,
        right: resolutionWidth * 8 / defaultViewBoxWidth,
        bottom: resolutionWidth * 4 / defaultViewBoxWidth
      },

      // 内边距
      get padding () {
        return {
          left: this.fontMargin.left + this.font.textLength + this.fontMargin.right,
          top: this.fontMargin.top + this.font.size / 2
        }
      },

      // 图案区大小
      get patternArea () {
        const { left, top } = this.padding
        const width = this.width - left * 2
        const height = this.height - top * 2
        return {
          width,
          height,
          center: {
            x: width / 2 + left,
            y: height / 2 + top
          }
        }
      },

      // 图案大小
      patternSize: {
        sm: resolutionWidth * 24 / defaultViewBoxWidth,
        md: resolutionWidth * 36 / defaultViewBoxWidth,
        lg: resolutionWidth * 44 / defaultViewBoxWidth,
        xl: resolutionWidth * 64 / defaultViewBoxWidth,
        xxl: resolutionWidth * 128 / defaultViewBoxWidth
      },

      get patternGaps () {
        return {
          md2x: this.patternArea.width - this.patternSize.md * 2, // md 横向排两个
          md4y: (this.patternArea.height - this.patternSize.md * 4) / 3, // md 竖向排四个

          lg2x: this.patternArea.width - this.patternSize.lg * 2, // lg 横向排两个
          lg3y: (this.patternArea.height - this.patternSize.lg * 3) / 2 // lg 竖向排三个
        }
      }
    } as SolitaireSize
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
      height: Math.floor(viewBoxHeight.value - padding.value.top * 2 - solitaireSize.value.height),
      gap: Math.floor((w - (10 * solitaireSize.value.width)) / (10 - 1))
    }
  })

  // 收牌区
  const receiveAreaSize = computed(() => {
    const w = Math.floor(activeAreaSize.value.width * 0.3)
    return {
      width: w,
      height: solitaireSize.value.height,
      gap: Math.floor((w - (8 * solitaireSize.value.width)) / (8 - 1))
    }
  })

  const controlAreaSize = computed(() => ({
    width: Math.floor(activeAreaSize.value.width * 0.3),
    height: solitaireSize.value.height
  }))

  // 发牌区（未开启牌组）
  const inactiveAreaSize = computed(() => {
    const w = Math.floor(activeAreaSize.value.width * 0.3)
    return {
      width: w,
      height: solitaireSize.value.height,
      gap: Math.floor((w - (5 * solitaireSize.value.width)) / (5 - 1))
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
    solitaireSize: solitaireSize.value,
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
