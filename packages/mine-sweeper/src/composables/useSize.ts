import { ComputedRef, Ref, computed, onMounted } from 'vue'
import { LevelInfo } from '../types'
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

  onMounted(() => {
    const elem = el.value!
    const parent = elem.parentElement!

    const { width, height } = parent.getBoundingClientRect()

    const minScale = width > viewBoxSize.value.width ? 1 : width / viewBoxSize.value.width

    const panzoom = Panzoom(elem, {
      handleStartEvent: () => {
        // override default behavior
      },
      startScale: minScale,
      startX: width / 2 - viewBoxSize.value.width * minScale / 2,
      startY: height / 2 - viewBoxSize.value.height * minScale / 2,
      maxScale: 5,
      minScale,
      origin: '0 0',
      step: 0.05,
      isSVG: true
    })

    parent.addEventListener('wheel', panzoom.zoomWithWheel)
  })

  return {
    areaSize,
    gap,
    viewBoxSize
  }
}
