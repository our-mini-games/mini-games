import { ComputedRef, Ref } from 'vue'
import { Level, LINK_GAME_LEVEL } from '../config/index.js'
import { getSize } from '../lib/utils.js'
import { LevelInfo } from '../types/index.js'

export const useGameConfig = (): {
  areaSize: ComputedRef<{ width: number, height: number }>
  gameLevels: ComputedRef<LevelInfo[]>
  isInitialized: Ref<boolean>
  currentLevel: Ref<Level>
  levelInfo: ComputedRef<LevelInfo>
} => {
  const width = ref(1)
  const height = ref(1)

  const isVertical = computed(() => width.value < height.value)

  const gameLevels = computed<LevelInfo[]>(() => {
    return [{
      level: Level.easy,
      text: '简单',
      row: 8,
      column: 8,
      totalOfItems: 8, // 使用 8 种元素 8 * 8
      size: getSize(8, 8, width.value, height.value),
      useBoundary: false,
      rearrangement: 3,
      tips: 3
    },
    {
      level: Level.middle,
      text: '中等',
      row: isVertical.value ? 10 : 12,
      column: isVertical.value ? 12 : 10,
      totalOfItems: 15, // 使用 15 种元素 8 * 15
      size: getSize(isVertical.value ? 10 : 12, isVertical.value ? 12 : 10, width.value, height.value),
      useBoundary: false,
      rearrangement: 2,
      tips: 2
    },
    {
      level: Level.hard,
      text: '困难',
      row: isVertical.value ? 16 : 12,
      column: isVertical.value ? 12 : 16,
      totalOfItems: 32, // 使用 32 种元素 6 * 32
      size: getSize(isVertical.value ? 16 : 12, isVertical.value ? 12 : 16, width.value, height.value),
      useBoundary: false,
      rearrangement: 1,
      tips: 2
    },
    {
      level: Level.extreme,
      text: '地狱',
      row: isVertical.value ? 16 : 12,
      column: isVertical.value ? 12 : 16,
      totalOfItems: 32, // 使用 32 种元素 6 * 32
      size: getSize(isVertical.value ? 16 : 12, isVertical.value ? 12 : 16, width.value, height.value),
      useBoundary: true,
      rearrangement: 1,
      tips: 1
    }]
  })
  const areaSize = computed(() => {
    const { column, row, size } = levelInfo.value

    return {
      width: (column + 1) * size,
      height: (row + 1) * size
    }
  })

  // 是否已经初始化
  const isInitialized = ref(false)
  // 当前游戏难度
  const currentLevel = ref(Level.easy)
  // 当前游戏难度详细信息
  const levelInfo = computed(() => gameLevels.value.find(item => item.level === currentLevel.value)!)

  const handleResize = (): void => {
    width.value = Math.floor(window.innerWidth)
    height.value = Math.floor(window.innerHeight - 88)
  }

  onMounted(() => {
    handleResize()
    try {
      currentLevel.value = JSON.parse(localStorage.getItem(LINK_GAME_LEVEL) ?? '0')
    } catch {}
    isInitialized.value = true
  })

  return {
    areaSize,
    gameLevels,
    isInitialized,
    currentLevel,
    levelInfo
  }
}
