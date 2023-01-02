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
          :xlink:href="`#${item.at(-1)!.suit}-${item.at(-1)!.number}`"
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

    <!-- 控制台 -->
    <g
      name="control-wrapper"
      transform="translate(320, 510)"
    >
      <g
        v-for="(button, index) of buttons"
        :key="button"
        class="btn"
        :transform="`translate(0, ${index * 36})`"
        @click="handleButtonClick(button)"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="30"
          stroke="#333"
          fill="transparent"
          rx="8"
          ry="8"
        />
        <text
          dominant-baseline="middle"
          text-anchor="middle"
          font-size="16"
          font-weight="bold"
          font-family="Gill Sans, serif"
          x="50"
          y="18"
        >
          {{ button }}
        </text>
      </g>
    </g>

    <!-- 动画中的牌 -->
    <g
      v-if="animationSolitaire.visible"
      name="animation-solitaire"
      :transform="`translate(${animationSolitaire.x}, ${animationSolitaire.y})`"
    >
      <use
        :xlink:href="`#${animationSolitaire.suit}-${animationSolitaire.number}`"
      />
    </g>
  </svg>

  <ChooseModeModal
    v-if="chooseModeModalVisible"
    @close="chooseModeModalVisible = false"
  />
</template>

<script setup lang="ts">
import { gap, solitaireSize } from '../../config'
import { getOpenedSolitaireTop } from '../../lib/helper'

import GraphDefs from './GraphDefs.vue'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const ChooseModeModal = defineAsyncComponent(() => import('../modal/ChooseMode.vue'))
const chooseModeModalVisible = ref(false)

const svgRef = ref<SVGAElement>()
const movingSolitaireRef = ref<SVGAElement[]>([])

const buttons = ['重新开始', '选择难度']

const {
  mode,
  activeGroup,
  deactiveGroup,
  collectedGroup,
  movingGroup,
  animationSolitaire,
  inAnimation,
  init,
  dropIt,
  collectIt,
  dealCards
} = useSolitaire()

onMounted(() => {
  init()
})

const handleButtonClick = (button: string): void => {
  if (inAnimation.value) {
    return
  }
  switch (button) {
    case '重新开始':
      init()
      break
    case '选择难度':
      chooseModeModalVisible.value = true
      break
    default:
      break
  }
}

const {
  isDraging,
  handleMousedown
} = useEvent(
  'drop-target',
  svgRef,
  movingSolitaireRef,
  activeGroup,
  movingGroup,
  inAnimation,
  dropIt,
  collectIt
)

provide('mode', mode)
</script>

<style lang="scss" scoped>
.game-wrapper {
  box-shadow: 0 0 2px #888;
  user-select: none;

  // .btn {
  //   * {
  //     pointer-events: none;
  //   }
  // }
}
</style>
