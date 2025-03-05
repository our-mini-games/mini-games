import { Ref } from 'vue'

export const useSize = (): { size: Ref<number>, gap: string, size1: Ref<string>, size2: Ref<string>, boxWidth: Ref<string>, boxHeight: Ref<string> } => {
  const size = ref(10)
  const gap = '10px'

  const size1 = computed(() => `${size.value}px`)
  const size2 = computed(() => `${size.value * 2}px`)

  const boxWidth = computed(() => `${size.value * 4 + parseInt(gap) * 2}px`)
  const boxHeight = computed(() => `${size.value * 5 + parseInt(gap) * 2}px`)

  onMounted(() => {
    const { innerWidth } = window
    size.value = Math.min(Math.floor((innerWidth - 4 * parseInt(gap)) / 4), 80)
  })
  return { size, gap, size1, size2, boxWidth, boxHeight }
}
