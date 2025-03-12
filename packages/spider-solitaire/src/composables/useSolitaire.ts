
import { ComputedRef, Ref, ref, watch } from 'vue'
import { GameMode } from '../config/index.js'
import { initializeTheGame } from '../lib/helper.js'
import { canICollectIt } from '../lib/validator.js'
import type { SolitaireGroupItem, WindowSize } from '../types/index.js'
import useAnimations, { AnimationSolitaire } from './useAnimations.js'

export type SolitaireGroup = SolitaireGroupItem[][]

export interface MovingGroupRecord {
  index: number
  subIndex: number
  source: SolitaireGroupItem[]
  solitaires: SolitaireGroupItem[]
}

export interface SolitaireReturnType {
  mode: Ref<GameMode>
  activeGroup: Ref<SolitaireGroup>
  inactiveGroup: Ref<SolitaireGroup>
  collectedGroup: Ref<SolitaireGroup>
  movingGroup: Ref<MovingGroupRecord>
  animationSolitaire: Ref<AnimationSolitaire>
  inAnimation: Ref<boolean>
  init: () => void
  dropIt: (targetGroupIdx: number, sourceIdx: number, movingSolitaires: SolitaireGroupItem[]) => void
  collectIt: (index: number) => void
  dealCards: () => Promise<void>
}

const defaultMode = JSON.parse(localStorage.getItem('SPIDER_SOLITAIRE_MODE') ?? '0') as GameMode

export default (windowSize: ComputedRef<WindowSize>): SolitaireReturnType => {
  const mode = ref(defaultMode)

  // 游戏中的牌组
  const activeGroup = ref<SolitaireGroup>([])
  // 未开启的牌组
  const inactiveGroup = ref<SolitaireGroup>([])
  // 已收集的牌组
  const collectedGroup = ref<SolitaireGroup>([])
  // 移动中的牌组
  const movingGroup = ref<MovingGroupRecord>({
    index: -1,
    subIndex: -1,
    source: [],
    solitaires: []
  })

  const {
    animationSolitaire,
    inAnimation,
    runDealAnimation,
    runCollectAnimation
  } = useAnimations(activeGroup, inactiveGroup, collectedGroup, windowSize)

  const init = (): void => {
    const data = initializeTheGame(mode.value)

    activeGroup.value = data.activeGroup
    inactiveGroup.value = data.inactiveGroup

    collectedGroup.value = []
    movingGroup.value = {
      index: -1,
      subIndex: -1,
      source: [],
      solitaires: []
    }
  }

  watch(mode, () => {
    localStorage.setItem('SPIDER_SOLITAIRE_MODE', `${mode.value}`)
    init()
  })

  /**
   * 放置牌
   * @param targetGroupIdx - 目标牌组在 activeGroup 中的索引
   * @param sourceIdx - 源牌组（被移动牌所在）在 activeGroup 中的索引
   * @param movingSolitaires - 被移动的牌组
   */
  const dropIt = (targetGroupIdx: number, sourceIdx: number, movingSolitaires: SolitaireGroupItem[]): void => {
    // 添加被移动的牌到目标牌组
    activeGroup.value[targetGroupIdx].push(...movingSolitaires)
    // // 移除源牌组中的牌
    // 打开源牌组最后一张牌
    const last = activeGroup.value[sourceIdx].at(-1)
    if (last) {
      last.isOpen = true
    }
  }

  /**
   * 收集牌
   * @todo 完成动画
   */
  const collectIt = async (index: number): Promise<void> => {
    // 收集
    await runCollectAnimation(index)
    // 打开被收集牌组最后一张牌
    const last = activeGroup.value[index].at(-1)
    if (last) {
      last.isOpen = true
    }

    if (collectedGroup.value.length === 8) {
      setTimeout(() => {
        alert('游戏完成')
      })
    }
  }

  /**
   * 派牌
   */
  const dealCards = async (): Promise<void> => {
    if (inAnimation.value || inactiveGroup.value.length === 0) {
      return
    }

    // 所有牌组中都得有牌
    if (activeGroup.value.some(item => item.length === 0)) {
      alert('所有可放置牌组中都必须有牌')
      return
    }

    const solitaires = inactiveGroup.value.at(-1)!

    for (let i = 0; i < solitaires.length; i++) {
      await runDealAnimation(i)
      activeGroup.value[i].push({
        ...solitaires[i],
        isOpen: true
      })
    }
    // 删除最后一项
    inactiveGroup.value.pop()

    // 检测牌组是否可被收集
    for (let j = 0; j < activeGroup.value.length; j++) {
      if (canICollectIt(activeGroup.value[j])) {
        await collectIt(j)
      }
    }
  }

  return {
    mode,
    activeGroup,
    inactiveGroup,
    collectedGroup,
    movingGroup,
    animationSolitaire,
    inAnimation,
    init,
    dropIt,
    collectIt,
    dealCards
  }
}
