import { ComputedRef, Ref } from 'vue'
import Hammer from 'hammerjs'
import { canICollectIt, canIDropIt, canSolitairesMove } from '../lib/validator'
import { SolitaireGroupItem, WindowSize } from '../types'
import { MovingGroupRecord, SolitaireGroup, SolitaireReturnType } from './useSolitaire'
import { getIntersectionRate } from '../lib/helper'

export interface UseEventReturnType {
  isDragging: Ref<boolean>
  validTargets: Ref<number[]>
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

  const flushValidTargets = (): void => {
    validTargets.value = []
  }

  // 当前选中的牌
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let targetSolitaire: SolitaireGroupItem | null = null

  // 被移动牌组处于 activateGroup 中的索引位置
  let sourceIdx = -1
  // 存储当前可放置的目标牌组索引
  const validTargets = ref<number[]>([])

  const isDragging = ref(false)

  const collectValidDropTargets = (solitaire: SolitaireGroupItem): number[] => {
    return activeGroup.value.reduce<number[]>((targets, group, index) => {
      if (index !== sourceIdx && canIDropIt(group, solitaire)) {
        targets.push(index)
      }
      return targets
    }, [])
  }

  const handleDragStart = (clientX: number, clientY: number, solitaires: SolitaireGroupItem[], subIndex: number): void => {
    if (!inAnimation.value && canSolitairesMove(solitaires, subIndex)) {
      sourceIdx = activeGroup.value.indexOf(solitaires)
      const targetCard = solitaires[subIndex]
      const targets = collectValidDropTargets(targetCard)
      if (!targets.length) {
        flushValidTargets()
        return
      }
      validTargets.value = targets

      startPosition.left = windowSize.value.isRotate ? clientY : clientX
      startPosition.top = windowSize.value.isRotate ? (windowSize.value.width - clientX) : clientY

      targetSolitaire = solitaires[subIndex]

      movingGroup.value = {
        index: sourceIdx,
        subIndex,
        source: solitaires,
        solitaires: solitaires.slice(subIndex)
      }
      // 暂时移除当前牌组中被移动的元素
      solitaires.splice(subIndex)

      isDragging.value = true
    }
  }

  const handleDragMove = (clientX: number, clientY: number): void => {
    if (!svgRef.value || !movingGroup.value.solitaires.length) {
      return
    }

    const x = windowSize.value.isRotate ? clientY : clientX
    const y = windowSize.value.isRotate ? (windowSize.value.width - clientX) : clientY

    movingSolitaireRef.value.forEach(target => {
      target.style.transform = `translate(${(x - startPosition.left) / windowSize.value.scale}px, ${(y - startPosition.top) / windowSize.value.scale}px)`
    })
  }

  const handleDragEnd = (): void => {
    if (!svgRef.value || !movingGroup.value.solitaires.length) {
      return
    }
    // 获取鼠标最后所在位置是否在牌组区域（每组牌最后一张的位置）
    const dropTargets = document.querySelectorAll<SVGAElement>(`.${dropTargetClassName}`)
    const movingRect = movingSolitaireRef.value[0].getBoundingClientRect()

    let isDrop = false
    let collectableIndex = -1

    // 只检查预先验证过的有效目标位置
    for (const targetIndex of validTargets.value) {
      const intersectionRate = getIntersectionRate(movingRect, dropTargets[targetIndex].getBoundingClientRect())

      if (intersectionRate > 0.4) {
        dropIt(targetIndex, sourceIdx, movingGroup.value.solitaires)
        isDrop = true

        if (canICollectIt(activeGroup.value[targetIndex])) {
          collectableIndex = targetIndex
        }
        break
      }
    }

    isDragging.value = false
    // 清空有效目标列表
    validTargets.value = []

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
  const initHammer = (): void => {
    const mc = new Hammer(svgRef.value!)
    mc.on('panstart', (e: HammerInput) => {
      if (e.target.matches('.active-solitaire')) {
        const index = Number(e.target.dataset.index!)
        const subIndex = Number(e.target.dataset.subIndex!)
        handleDragStart(e.deltaX, e.deltaY, activeGroup.value[index], subIndex)
      }
    })
    mc.on('panmove', (e: HammerInput) => {
      handleDragMove(e.deltaX, e.deltaY)
    })
    mc.on('panend', () => {
      handleDragEnd()
    })
  }

  onMounted(() => {
    initHammer()
  })

  return {
    isDragging,
    validTargets
  }
}
