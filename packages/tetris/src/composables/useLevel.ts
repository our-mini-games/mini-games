import { ComputedRef, Ref } from 'vue'
import { defaultLevel, levelConfig } from '../config/index.js'

interface ReturnType {
  initialLevel: Ref<number>
  level: Ref<number>
  levelInfo: ComputedRef<{
    level: number
    speed: number
  }>
  speed: ComputedRef<number>
  maxScore: ComputedRef<number>
}

export default (score: Ref<number>): ReturnType => {
  const initialLevel = ref(defaultLevel)
  const level = ref(initialLevel.value)

  const levelInfo = computed(() => {
    return levelConfig.find(item => item.level === level.value)!
  })

  const speed = computed(() => levelInfo.value.speed)

  const maxScore = computed(() => {
    console.log(initialLevel.value)
    if (initialLevel.value === 1) {
      return levelInfo.value.maxScore
    }

    return levelInfo.value.maxScore - levelConfig.find(item => item.level === initialLevel.value - 1)!.maxScore
  })

  watch(score, (newScore) => {
    if (newScore > maxScore.value) {
      level.value = Math.min(levelConfig.length, level.value + 1)
    }
  }, { immediate: true })

  return {
    initialLevel,
    level,
    levelInfo,
    speed,
    maxScore
  }
}
