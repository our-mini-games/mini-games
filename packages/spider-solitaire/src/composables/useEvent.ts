import { ComputedRef, Ref } from 'vue'
import { canICollectIt, canIDropIt, canSolitairesMove } from '../lib/validator'
import { SolitaireGroupItem, WindowSize } from '../types'
import { MovingGroupRecord, SolitaireGroup, SolitaireReturnType } from './useSolitaire'
import { getIntersectionRate } from '../lib/helper'

export interface UseEventReturnType {
  isDragging: Ref<boolean>
  handleMousedown: (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number) => void
}

export default (
  dropTargetClassName: string,
  svgRef: Ref<SVGAElement | undefined>,
  movingSolitaireRef: Ref<any[]>,
  activeGroup: Ref<SolitaireGroup>,
  movingGroup: Ref<MovingGroupRecord>,
  inAnimation: Ref<boolean>,
  windowSize: ComputedRef<WindowSize>,
  dropIt: SolitaireReturnType['dropIt'],
  collectIt: SolitaireReturnType['collectIt']
): UseEventReturnType => {
  const startPosition = {
    left: 0,
    top: 0
  }

  // 当前选中的牌
  let targetSolitaire: SolitaireGroupItem | null = null

  // 被移动牌组处于 activateGroup 中的索引位置
  let sourceIdx = -1

  const isDragging = ref(false)

  const handleMousedown = (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number): void => {
    if (!inAnimation.value && canSolitairesMove(solitaires, index)) {
      startPosition.left = windowSize.value.isRotate ? e.clientY : e.clientX
      startPosition.top = windowSize.value.isRotate ? (windowSize.value.width - e.clientX) : e.clientY

      targetSolitaire = solitaires[index]

      movingGroup.value = {
        index: activeGroup.value.indexOf(solitaires),
        subIndex: index,
        source: solitaires,
        solitaires: solitaires.slice(index)
      }
      // 暂时移除当前牌组中被移动的元素
      solitaires.splice(index)

      sourceIdx = activeGroup.value.indexOf(solitaires)

      isDragging.value = true

      window.addEventListener('pointermove', handleMousemove, false)
      window.addEventListener('pointerup', handleMouseup, false)
    }
  }

  const handleMousemove = (e: MouseEvent): void => {
    if (!svgRef.value) {
      return
    }

    const {
      clientX,
      clientY
    } = e

    const x = windowSize.value.isRotate ? clientY : clientX
    const y = windowSize.value.isRotate ? (windowSize.value.width - clientX) : clientY

    movingSolitaireRef.value.forEach(target => {
      target.style.transform = `translate(${(x - startPosition.left) / windowSize.value.scale}px, ${(y - startPosition.top) / windowSize.value.scale}px)`
    })
  }

  const handleMouseup = (e: MouseEvent): void => {
    window.removeEventListener('pointermove', handleMousemove, false)
    window.removeEventListener('pointerup', handleMouseup, false)
    // 获取鼠标最后所在位置是否在牌组区域（每组牌最后一张的位置）
    const dropTargets = document.querySelectorAll<SVGAElement>(`.${dropTargetClassName}`)

    const movingRect = movingSolitaireRef.value[0].getBoundingClientRect()

    let isDrop = false
    let collectableIndex = -1

    for (let i = 0; i < dropTargets.length; i++) {
      // 跳过当前牌组
      if (i === sourceIdx) {
        continue
      }

      const intersectionRate = getIntersectionRate(movingRect, dropTargets[i].getBoundingClientRect())

      if (intersectionRate > 0.5) {
        if (!canIDropIt(activeGroup.value[i], targetSolitaire!)) {
          break
        }
        dropIt(i, sourceIdx, movingGroup.value.solitaires)
        isDrop = true

        if (canICollectIt(activeGroup.value[i])) {
          collectableIndex = i
        }
        break
      }
    }

    isDragging.value = false

    if (!isDrop) {
      // 没有放置成功，需要把临时被移动的数据都还原回去
      movingGroup.value.source.push(...movingGroup.value.solitaires)
    }

    movingGroup.value.source = []
    movingGroup.value.solitaires = []

    // 被放置的那组牌可以被收集了
    if (collectableIndex !== -1) {
      collectIt(collectableIndex)
    }
  }

  return {
    isDragging,
    handleMousedown
  }
}
