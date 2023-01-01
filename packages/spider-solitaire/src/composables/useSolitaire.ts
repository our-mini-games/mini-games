
import { Ref } from 'vue'
import { GameMode } from '../config'
import { initializeTheGame } from '../lib/helper'
import { canICollectIt } from '../lib/validator'
import type { SolitaireGroupItem } from '../types'

export type SolitaireGroup = SolitaireGroupItem[][]

export interface MovingGroupRecord {
  index: number
  sIndex: number
  source: SolitaireGroupItem[]
  solitaires: SolitaireGroupItem[]
}

export interface SolitaireReturnType {
  mode: Ref<GameMode>
  activeGroup: Ref<SolitaireGroup>
  deactiveGroup: Ref<SolitaireGroup>
  collectedGroup: Ref<SolitaireGroup>
  movingGroup: Ref<MovingGroupRecord>
  init: () => void
  dropIt: (targetGroupIdx: number, sourceIdx: number, movingSolitaires: SolitaireGroupItem[]) => void
  collectIt: (index: number) => void
  dealCards: () => void
}

const defaultMode = JSON.parse(localStorage.getItem('SPIDER_SOLITAIRE_MODE') ?? '0') as GameMode

export default (): SolitaireReturnType => {
  const mode = ref(defaultMode)

  // 游戏中的牌组
  const activeGroup = ref<SolitaireGroup>([])
  // 未开启的牌组
  const deactiveGroup = ref<SolitaireGroup>([])
  // 已收集的牌组
  const collectedGroup = ref<SolitaireGroup>([])
  // 移动中的牌组
  const movingGroup = ref<MovingGroupRecord>({
    index: -1,
    sIndex: -1,
    source: [],
    solitaires: []
  })

  const init = (): void => {
    const data = initializeTheGame(mode.value)

    activeGroup.value = data.activeGroup
    deactiveGroup.value = data.deactiveGroup

    collectedGroup.value = []
    movingGroup.value = {
      index: -1,
      sIndex: -1,
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
    // activeGroup.value[sourceIdx] = activeGroup.value[sourceIdx].slice(0, targetIdx)
    // 打开源牌组最后一张牌
    const last = activeGroup.value[sourceIdx].at(-1)
    if (last) {
      last.isOpen = true
    }
  }

  /**
   * 收集牌
   * @todo 收集动画
   * @todo 完成动画
   */
  const collectIt = (index: number): void => {
    // 收集
    collectedGroup.value.push(activeGroup.value[index].splice(-13, 13))
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
   * @todo 派牌动画
   */
  const dealCards = (): void => {
    if (deactiveGroup.value.length === 0) {
      return
    }

    // 所有牌组中都得有牌
    if (activeGroup.value.every(item => item.length > 0)) {
      const solitaires = deactiveGroup.value.pop()!

      for (let i = 0; i < solitaires.length; i++) {
        activeGroup.value[i].push({
          ...solitaires[i],
          isOpen: true
        })
      }

      // 检测牌组是否可被收集
      activeGroup.value.forEach((solitaires, index) => {
        if (canICollectIt(solitaires)) {
          collectIt(index)
        }
      })
    }
  }

  return {
    mode,
    activeGroup,
    deactiveGroup,
    collectedGroup,
    movingGroup,
    init,
    dropIt,
    collectIt,
    dealCards
  }
}
