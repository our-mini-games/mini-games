// @ts-expect-error
import UnitPath from 'unit-path'
import type { ComputedRef, Ref } from 'vue'
import { nextTick, ref } from 'vue'
import { SolitaireNumber, SolitaireSuits } from '../config/index.js'
import { SolitaireGroupItem, WindowSize } from '../types/index.js'
import { SolitaireGroup } from './useSolitaire.js'

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
    viewBoxHeight,
    isRotate,
    scale
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
      const oDropTargets = document.querySelectorAll<SVGAElement>('.drop-target')
      const oSourceGroup = document.querySelector<SVGAElement>(`.inactive-solitaire-${inactiveGroup.value.length - 1}`)!

      const sourceSolitaires = inactiveGroup.value.at(-1)![index]

      const targetRect = oDropTargets[index].getBoundingClientRect()
      const sourceRect = oSourceGroup.getBoundingClientRect()

      animationSolitaire.value = {
        visible: true,
        x: 0,
        y: 0,
        suit: sourceSolitaires.suit,
        number: sourceSolitaires.number
      }

      const points = unitPath.setPath('LINE', { x: sourceRect.left, y: sourceRect.top }, { x: targetRect.left, y: targetRect.top })
        .getPoints(10)
        .map((point: { x: number, y: number }) => ({
          x: point.x / scale,
          y: point.y / scale
        }))

      return new Promise(resolve => {
        const run = (): void => {
          if (points.length <= 0) {
            stop()
            resolve()
            return
          }

          const { x, y } = points.shift()!
          animationSolitaire.value.x = isRotate ? y : x
          animationSolitaire.value.y = isRotate ? (viewBoxHeight - windowSize.value.solitaireSize.height - x) : y

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

      collectedGroup.value.push([])
      await nextTick()

      const oTargetGroup = document.querySelector<SVGAElement>(`.receive-group-${length}`)!
      const targetRect = oTargetGroup.getBoundingClientRect()

      let last: SolitaireGroupItem

      for (let i = 0; i < 13; i++) {
        const oSourceSolitaire = document.querySelector<SVGAElement>(`.active-solitaire-${index}-${sourceSolitaires.length - 1}`)!
        const sourceRect = oSourceSolitaire.getBoundingClientRect()

        last = sourceSolitaires.pop()!

        animationSolitaire.value = {
          visible: true,
          x: 0,
          y: 0,
          suit: last.suit,
          number: last.number
        }

        const points = unitPath.setPath('LINE', { x: sourceRect.left, y: sourceRect.top }, { x: targetRect.left, y: targetRect.top })
          .getPoints(10)
          .map((point: { x: number, y: number }) => ({
            x: point.x / scale,
            y: point.y / scale
          }))

        await (async () => {
          return await new Promise(resolve => {
            const run = (): void => {
              if (points.length <= 0) {
                stop()
                resolve(null)
                return
              }

              const { x, y } = points.shift()!
              animationSolitaire.value.x = isRotate ? y : x
              animationSolitaire.value.y = isRotate ? (viewBoxHeight - windowSize.value.solitaireSize.height - x) : y

              requestId = requestAnimationFrame(run)
            }
            inAnimation.value = true
            run()
          })
        })()

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
