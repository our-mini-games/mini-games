import { ComputedRef, Ref } from 'vue'
import { defaultLevel, levelConfig } from '../config'

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
  const level = ref(initialLevel)

  const levelInfo = computed(() => {
    return levelConfig.find(item => item.level === level.value)!
  })

  const speed = computed(() => levelInfo.value.speed)

  const maxScore = computed(() => levelInfo.value.maxScore)

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
