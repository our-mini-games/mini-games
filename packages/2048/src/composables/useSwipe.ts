import Hammer from 'hammerjs'
import { Direction } from '../config'

export default (
  el: string,
  handleSwipe: (dir: Direction, e: HammerInput) => void
): void => {
  const mc = ref<HammerManager | null>(null)

  onMounted(() => {
    const oEl = document.querySelector<HTMLElement>(el)

    if (!oEl) {
      throw new TypeError('el is not a selector')
    }

    mc.value = new Hammer(oEl, {
      recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_ALL }]
      ]
    })

    mc.value.get('swipe').set({
      threshold: 5
    })

    mc.value.on('swipeup', (e: HammerInput) => {
      handleSwipe(Direction.Up, e)
    })

    mc.value.on('swiperight', (e: HammerInput) => {
      handleSwipe(Direction.Right, e)
    })

    mc.value.on('swipedown', (e: HammerInput) => {
      handleSwipe(Direction.Down, e)
    })

    mc.value.on('swipeleft', (e: HammerInput) => {
      handleSwipe(Direction.Left, e)
    })
  })

  onBeforeMount(() => {
    if (mc.value) {
      mc.value.off('swipeup')
      mc.value.off('swiperight')
      mc.value.off('swipedown')
      mc.value.off('swipeleft')
    }
  })
}
