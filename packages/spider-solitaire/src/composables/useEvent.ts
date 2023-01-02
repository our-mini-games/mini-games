import { Ref } from 'vue'
import { canICollectIt, canIDropIt, canSolitairesMove } from '../lib/validator'
import { SolitaireGroupItem } from '../types'
import { solitaireSize } from '../config'
import { MovingGroupRecord, SolitaireGroup, SolitaireReturnType } from './useSolitaire'

export interface UseEventReturnType {
  isDraging: Ref<boolean>
  handleMousedown: (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number) => void
}

export default (
  dropTargetClassName: string,
  svgRef: Ref<SVGAElement | undefined>,
  movingSolitaireRef: Ref<SVGAElement[]>,
  activeGroup: Ref<SolitaireGroup>,
  movingGroup: Ref<MovingGroupRecord>,
  inAnimation: Ref<boolean>,
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

  const isDraging = ref(false)

  const handleMousedown = (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number): void => {
    if (!inAnimation.value && canSolitairesMove(solitaires, index)) {
      startPosition.left = e.clientX
      startPosition.top = e.clientY

      targetSolitaire = solitaires[index]

      movingGroup.value = {
        index: activeGroup.value.indexOf(solitaires),
        sIndex: index,
        source: solitaires,
        solitaires: solitaires.slice(index)
      }
      // 暂时移除当前牌组中被移动的元素
      solitaires.splice(index)

      sourceIdx = activeGroup.value.indexOf(solitaires)

      isDraging.value = true

      window.addEventListener('mousemove', handleMousemove, false)
      window.addEventListener('mouseup', handleMouseup, false)
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

    movingSolitaireRef.value.forEach(target => {
      target.style.transform = `translate(${clientX - startPosition.left}px, ${clientY - startPosition.top}px)`
    })
  }

  const handleMouseup = (e: MouseEvent): void => {
    // 获取鼠标最后所在位置是否在牌组区域（每组牌最后一张的位置）
    const {
      clientX,
      clientY
    } = e

    const { width, height } = solitaireSize

    const dropTargets = document.querySelectorAll<SVGAElement>(`.${dropTargetClassName}`)

    let isDrop = false
    let collectableIndex = -1

    for (let i = 0; i < dropTargets.length; i++) {
      const { left, top } = dropTargets[i].getBoundingClientRect()

      if (
        clientX >= left && clientX <= (left + width) &&
        clientY >= top && clientY <= (top + height) &&
        canIDropIt(activeGroup.value[i], targetSolitaire!)
      ) {
        dropIt(i, sourceIdx, movingGroup.value.solitaires)
        isDrop = true

        if (canICollectIt(activeGroup.value[i])) {
          collectableIndex = i
        }
        break
      }
    }

    isDraging.value = false

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

    window.removeEventListener('mousemove', handleMousemove, false)
    window.removeEventListener('mouseup', handleMouseup, false)
  }

  return {
    isDraging,
    handleMousedown
  }
}
