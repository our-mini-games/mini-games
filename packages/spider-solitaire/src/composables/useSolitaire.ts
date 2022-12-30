
import { Ref } from 'vue'
import { GameMode } from '../config'
import { initializeTheGame } from '../lib/helper'
import type { SolitaireGroupItem } from '../types'

export type SolitaireGroup = SolitaireGroupItem[][]

interface SolitaireReturnType {
  mode: Ref<GameMode>
  activeGroup: Ref<SolitaireGroup>
  deactiveGroup: Ref<SolitaireGroup>
  collectedGroup: Ref<SolitaireGroup>
  init: () => void
}

export default (): SolitaireReturnType => {
  const mode = ref(GameMode.hard)

  // 游戏中的牌组
  const activeGroup = ref<SolitaireGroup>([])
  // 未开启的牌组
  const deactiveGroup = ref<SolitaireGroup>([])
  // 已收集的牌组
  const collectedGroup = ref<SolitaireGroup>([])

  const init = (): void => {
    const data = initializeTheGame(mode.value)

    activeGroup.value = data.activeGroup
    deactiveGroup.value = data.deactiveGroup

    collectedGroup.value = []
  }

  return {
    mode,
    activeGroup,
    deactiveGroup,
    collectedGroup,
    init
  }
}
