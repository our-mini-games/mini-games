<template>
  <div class="spider-solitaire" style="opacity: 0.1;">
    <GameWrapper />
  </div>
</template>

<script setup lang="ts">
import GameWrapper from './components/GameWrapper/index.vue'

const {
  mode,
  activeGroup,
  deactiveGroup,
  collectedGroup,
  init
} = useSolitaire()

onMounted(() => {
  init()

  console.log(activeGroup.value, deactiveGroup.value)
})

provide('mode', mode)
provide('activeGroup', activeGroup)
provide('deactiveGroup', deactiveGroup)
provide('collectedGroup', collectedGroup)
</script>
