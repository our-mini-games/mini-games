<template>
  <GraphDefs />
  <svg
    ref="svgRef"
    width="800"
    height="600"
    viewBox="0 0 800 600"
    class="game-wrapper"
  >
    <g
      name="active-group"
      transform="translate(17, 20)"
    >
      <g name="bg">
        <template
          v-for="item in 10"
          :key="item"
        >
          <use
            xlink:href="#empty-solitaire"
            :x="(item - 1) * (gap.group + solitaireSize.width)"
          />
        </template>
      </g>

      <g name="active-solitaires">
        <g
          v-for="(item, index) of activeGroup"
          :key="index"
          :transform="`translate(${index * (gap.group + solitaireSize.width)}, 0)`"
        >
          <template
            v-for="(solitaire, sIndex) of item"
            :key="`${index}-${sIndex}`"
          >
            <use
              v-if="!solitaire.isOpen"
              xlink:href="#unopened-solitaire"
              :y="sIndex * gap.unopened"
            />
            <use
              v-else
              :xlink:href="`#${solitaire.suit}-${solitaire.number}`"
              :y="getOpenedSolitaireTop(item, sIndex)"
              @mousedown="(e: MouseEvent) => handleMousedown(e, item, sIndex)"
            />
          </template>

          <use
            v-if="isDraging"
            class="drop-target"
            xlink:href="#drop-target"
            fill="blue"
            :y="getOpenedSolitaireTop(item, item.length)"
          />
        </g>
      </g>
    </g>

    <g
      name="deactive-group"
      :transform="`translate(${800 - 17 - solitaireSize.width * 5 - gap.unopened * 4}, ${600 - 20 - solitaireSize.height})`"
    >
      <g
        v-for="(item, index) of deactiveGroup"
        :key="index"
        :transform="`translate(${(solitaireSize.width + gap.unopened) * (4 - index)})`"
        @click="dealCards"
      >
        <use
          xlink:href="#unopened-solitaire"
        />
      </g>
    </g>

    <g
      name="collected-group"
      :transform="`translate(17, ${600 - 20 - solitaireSize.height})`"
    >
      <g
        v-for="(item, index) of collectedGroup"
        :key="index"
        :transform="`translate(${(gap.opened) * index})`"
      >
        <use
          :xlink:href="`#${item[0].suit}-${item[0].number}`"
        />
      </g>
    </g>

    <g
      name="moving-group"
      transform="translate(17, 20)"
    >
      <g
        v-for="(item, index) of movingGroup.solitaires"
        :key="index"
        :transform="`translate(${movingGroup.index * (gap.group + solitaireSize.width)}, 0)`"
      >
        <use
          ref="movingSolitaireRef"
          :xlink:href="`#${item.suit}-${item.number}`"
          :y="getOpenedSolitaireTop(movingGroup.source, movingGroup.sIndex + index)"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
// import type { SolitaireGroup } from '../../composables/useSolitaire'

import { gap, solitaireSize } from '../../config'
import { SolitaireGroupItem } from '../../types'

import GraphDefs from './GraphDefs.vue'

const svgRef = ref<SVGAElement>()
const movingSolitaireRef = ref<SVGAElement[]>([])

const {
  // mode,
  activeGroup,
  deactiveGroup,
  collectedGroup,
  movingGroup,
  init,
  dropIt,
  collectIt,
  dealCards
} = useSolitaire()

onMounted(() => {
  init()

  console.log(activeGroup.value, deactiveGroup.value)
})

// const activeGroup = inject('activeGroup', ref<SolitaireGroup>([]))
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const deactiveGroup = inject('deactiveGroup', ref<SolitaireGroup>([]))
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const collectedGroup = inject('collectedGroup', ref<SolitaireGroup>([]))

// const dropIt = inject('dropIt', (targetGroupIdx: number, sourceIdx: number, targetIdx: number) => {})

const {
  isDraging,
  handleMousedown
} = useEvent(
  'drop-target',
  svgRef,
  movingSolitaireRef,
  activeGroup,
  movingGroup,
  dropIt,
  collectIt
)

const getOpenedSolitaireTop = (group: SolitaireGroupItem[], index: number): number => {
  const unopenedLength = group.filter(item => !item.isOpen).length
  return (unopenedLength) * gap.unopened + (index - unopenedLength) * gap.opened
}
</script>

<style lang="scss" scoped>
.game-wrapper {
  box-shadow: 0 0 2px #888;
  user-select: none;
}
</style>
