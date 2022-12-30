<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <GraphDefs />
  <svg
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
            />
          </template>
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
        :transform="`translate(${(solitaireSize.width + gap.unopened) * index})`"
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
          :xlink:href="`#${item[0].suit}-${SolitaireNumber.king}`"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { SolitaireGroup } from '../../composables/useSolitaire'

import { gap, SolitaireNumber, solitaireSize } from '../../config'
import { SolitaireGroupItem } from '../../types'

import GraphDefs from './GraphDefs.vue'

const activeGroup = inject('activeGroup', ref<SolitaireGroup>([]))
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deactiveGroup = inject('deactiveGroup', ref<SolitaireGroup>([]))
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const collectedGroup = inject('collectedGroup', ref<SolitaireGroup>([]))

const getOpenedSolitaireTop = (group: SolitaireGroupItem[], index: number): number => {
  const unopenedLength = group.filter(item => !item.isOpen).length
  return (unopenedLength - 1) * gap.unopened + (index - unopenedLength) * gap.opened
}
</script>

<style lang="scss" scoped>
.game-wrapper {
  box-shadow: 0 0 2px #888;
}
</style>
