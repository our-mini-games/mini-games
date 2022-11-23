import { ComputedRef, Ref } from 'vue'
import { levelConfig } from '../config'

interface ReturnType {
  levelInfo: ComputedRef<{
    level: number
    speed: number
  }>
  speed: ComputedRef<number>
}

export default (level: Ref<number>): ReturnType => {
  const levelInfo = computed(() => {
    return levelConfig.find(item => item.level === level.value)!
  })

  const speed = computed(() => levelInfo.value.speed)

  return {
    levelInfo,
    speed
  }
}
