import UnitPath from 'unit-path'
import { ComputedRef, Ref } from 'vue'
import { SolitaireNumber, solitaireSize, SolitaireSuits } from '../config'
import { getOpenedSolitaireTop } from '../lib/helper'
import { SolitaireGroupItem, WindowSize } from '../types'
import { SolitaireGroup } from './useSolitaire'

interface UseAnimationsReturnType {
  animationSolitaire: Ref<AnimationSolitaire>
  inAnimation: Ref<boolean>
  runDealAnimation: (index: number) => Promise<void>
  runCollectAnimation: (index: number) => Promise<void>
}

export interface AnimationSolitaire {
  visible: boolean
  x: number
  y: number
  suit: SolitaireSuits
  number: SolitaireNumber
}

export default (
  activeGroup: Ref<SolitaireGroup>,
  inactiveGroup: Ref<SolitaireGroup>,
  collectedGroup: Ref<SolitaireGroup>,
  windowSize: ComputedRef<WindowSize>
): UseAnimationsReturnType => {
  const unitPath = new UnitPath()

  const {
    unopenedGroupGap,
    openedGroupGap,
    padding,
    viewBoxHeight,
    activeAreaSize,
    inactiveAreaSize
  } = windowSize.value

  const animationSolitaire = ref<AnimationSolitaire>({
    visible: false,
    x: -1,
    y: -1,
    suit: SolitaireSuits.spade,
    number: SolitaireNumber.ace
  })
  const inAnimation = ref(false)

  const {
    runDealAnimation
  } = (() => {
    let requestId = 0

    /**
     * 开启发牌动画
     * @param index
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const runDealAnimation = (index: number): Promise<void> => {
      const sourceSolitaires = inactiveGroup.value.at(-1)![index]
      const { length } = inactiveGroup.value

      const targetSolitaire = activeGroup.value[index]

      const targetLeft = index * (activeAreaSize.gap + solitaireSize.width)
      const targetTop = getOpenedSolitaireTop(targetSolitaire, targetSolitaire.length, unopenedGroupGap, openedGroupGap)

      const sourceLeft = Math.floor(activeAreaSize.width - inactiveAreaSize.width) +
        (5 - length) * (inactiveAreaSize.gap + solitaireSize.width)
      const sourceTop =
        viewBoxHeight -
        padding.top * 2 -
        solitaireSize.height

      animationSolitaire.value = {
        visible: true,
        x: sourceLeft,
        y: sourceTop,
        suit: sourceSolitaires.suit,
        number: sourceSolitaires.number
      }

      const points = unitPath.setPath('LINE', { x: sourceLeft, y: sourceTop }, { x: targetLeft, y: targetTop })
        .getPoints(10)

      return new Promise(resolve => {
        const run = (): void => {
          if (points.length <= 0) {
            stop()
            resolve()
            return
          }

          const { x, y } = points.shift()
          animationSolitaire.value.x = x
          animationSolitaire.value.y = y

          requestId = requestAnimationFrame(run)
        }
        inAnimation.value = true
        run()
      })
    }

    const stop = (): void => {
      cancelAnimationFrame(requestId)
      animationSolitaire.value.visible = false
      inAnimation.value = false
    }

    return {
      runDealAnimation
    }
  })()

  const {
    runCollectAnimation
  } = (() => {
    let requestId = 0

    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const runCollectAnimation = async (index: number): Promise<void> => {
      const sourceSolitaires = activeGroup.value[index]
      const { length } = collectedGroup.value

      const targetLeft = openedGroupGap * length
      const targetTop = viewBoxHeight - solitaireSize.height

      let last: SolitaireGroupItem

      for (let i = 0; i < 13; i++) {
        const sourceLeft = padding.left + index * (activeAreaSize.gap + solitaireSize.width)
        const sourceTop = getOpenedSolitaireTop(sourceSolitaires, sourceSolitaires.length - 1, unopenedGroupGap, openedGroupGap)

        last = sourceSolitaires.pop()!

        animationSolitaire.value = {
          visible: true,
          x: sourceLeft,
          y: sourceTop,
          suit: last.suit,
          number: last.number
        }

        const points = unitPath.setPath('LINE', { x: sourceLeft, y: sourceTop }, { x: targetLeft, y: targetTop })
          .getPoints(10)

        await (async () => {
          return await new Promise(resolve => {
            const run = (): void => {
              if (points.length <= 0) {
                stop()
                resolve(null)
                return
              }

              const { x, y } = points.shift()
              animationSolitaire.value.x = x
              animationSolitaire.value.y = y

              requestId = requestAnimationFrame(run)
            }
            inAnimation.value = true
            run()
          })
        })()

        if (i === 0) {
          collectedGroup.value.push([])
        }
        collectedGroup.value[length].push(last)
      }
    }

    const stop = (): void => {
      cancelAnimationFrame(requestId)
      animationSolitaire.value.visible = false
      inAnimation.value = false
    }

    return {
      runCollectAnimation
    }
  })()

  return {
    animationSolitaire,
    inAnimation,
    runDealAnimation,
    runCollectAnimation
  }
}
