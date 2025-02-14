<template>
  <GraphDefs />

  <svg
    ref="svgRef"
    :width="windowSize.width"
    :height="windowSize.height"
    :viewBox="`0 0 ${windowSize.viewBoxWidth} ${windowSize.viewBoxHeight}`"
    preserveAspectRatio="xMinYMin meet"
    class="game-wrapper"
  >
    <g
      :transform="`translate(${windowSize.padding.left}, ${windowSize.padding.top})`"
    >
      <!-- 活跃区 -->
      <g
        name="active-group"
      >
        <g name="bg">
          <g
            v-for="item in 10"
            :key="`active-group-bg-${item}`"
            :transform="`translate(${(item - 1) * (windowSize.activeAreaSize.gap + solitaireSize.width)}, 0)`"
          >
            <use
              xlink:href="#empty-solitaire"
              x="0"
              y="0"
            />
          </g>
        </g>

        <g name="active-solitaires">
          <g
            v-for="(item, index) of activeGroup"
            :key="index"
            :transform="`translate(${index * (windowSize.activeAreaSize.gap + solitaireSize.width)}, 0)`"
          >
            <template
              v-for="(solitaire, subIndex) of item"
              :key="`${index}-${subIndex}`"
            >
              <use
                v-if="!solitaire.isOpen"
                xlink:href="#unopened-solitaire"
                :y="subIndex * windowSize.unopenedGroupGap"
              />
              <use
                v-else
                :xlink:href="`#${solitaire.suit}-${solitaire.number}`"
                :y="getOpenedSolitaireTop(item, subIndex, windowSize.unopenedGroupGap, windowSize.openedGroupGap)"
                @pointerdown="(e: MouseEvent) => handleMousedown(e, item, subIndex)"
              />
            </template>

            <use
              v-if="isDragging"
              class="drop-target"
              xlink:href="#drop-target"
              fill="blue"
              :y="getOpenedSolitaireTop(item, item.length, windowSize.unopenedGroupGap, windowSize.openedGroupGap)"
            />
          </g>
        </g>
      </g>

      <!-- footer -->
      <g
        name="footer"
        :transform="`translate(0, ${windowSize.activeAreaSize.height})`"
      >
        <!-- 接收区 -->
        <g
          name="receive-group"
        >
          <g name="bg">
            <template
              v-for="(item, index) in collectedGroup"
              :key="`receive-group-bg-${index}`"
            >
              <use
                :xlink:href="`#${item.at(-1)!.suit}-${item.at(-1)!.number}`"
                :x="(index - 1) * (windowSize.receiveAreaSize.gap + solitaireSize.width)"
                y="0"
              />
            </template>
          </g>
        </g>
        <!-- 控制/计分区 -->
        <g
          name="control-wrapper"
          :transform="`translate(${windowSize.receiveAreaSize.width + Math.floor(windowSize.activeAreaSize.width * 0.05)}, 0)`"
        >
          <rect
            x="-8"
            y="8"
            :width="windowSize.controlAreaSize.width"
            :height="windowSize.controlAreaSize.height"
            fill="none"
            :stroke="colors.border"
          />
          <rect
            x="8"
            y="-8"
            :width="windowSize.controlAreaSize.width"
            :height="windowSize.controlAreaSize.height"
            fill="none"
            :stroke="colors.border"
          />

          <g
            :transform="`translate(${windowSize.controlAreaSize.width * 0.1}, ${windowSize.controlAreaSize.height * 0.1})`"
          >
            <g
              v-for="(button, index) of buttons"
              :key="button"
              class="btn"
              :transform="`translate(0, ${index * (windowSize.controlAreaSize.height * 0.8 - (solitaireSize.height / 4))})`"
              style="cursor: pointer;"
              @click="handleButtonClick(button)"
            >
              <rect
                x="0"
                y="0"
                :width="solitaireSize.width"
                :height="solitaireSize.height / 4"
                :stroke="colors.border"
                fill="transparent"
                :rx="solitaireSize.radius / 2"
                :ry="solitaireSize.radius / 2"
              />
              <text
                dominant-baseline="middle"
                text-anchor="middle"
                :font-size="solitaireSize.height / 8"
                font-weight="bold"
                font-family="Gill Sans, serif"
                :x="solitaireSize.width / 2"
                :y="solitaireSize.height / 8"
                :fill="colors.primary"
              >
                {{ button }}
              </text>
            </g>

            <g
              v-for="(item, index) of statistics"
              :key="item.name"
              :transform="`translate(${windowSize.controlAreaSize.width / 2}, ${solitaireSize.height / 8 + index * (windowSize.controlAreaSize.height / (statistics.length + 1))})`"
            >
              <text
                dominant-baseline="middle"
                text-anchor="middle"
                :font-size="solitaireSize.height / 8"
                :fill="colors.black"
              >
                {{ item.name }}：
              </text>
              <text
                dominant-baseline="middle"
                text-anchor="middle"
                :font-size="solitaireSize.height / 8"
                :transform="`translate(${solitaireSize.height / 4}, 0)`"
                :fill="colors.red"
                font-weight="bold"
              >
                {{ item.value }}
              </text>
            </g>
          </g>
        </g>
        <!-- 发牌区 -->
        <g
          name="inactive-group"
          :transform="`translate(${Math.floor(windowSize.activeAreaSize.width - windowSize.inactiveAreaSize.width - windowSize.padding.left)}, 0)`"
        >
          <use
            v-for="(_, index) in inactiveGroup"
            :key="`inactive-group-bg-${index}`"
            xlink:href="#unopened-solitaire"
            :x="(5 - index) * (windowSize.inactiveAreaSize.gap + solitaireSize.width)"
            y="0"
            @click="dealCards"
          />
        </g>
      </g>

      <!-- 移动中的牌 -->
      <g
        name="moving-group"
      >
        <g
          v-for="(item, index) of movingGroup.solitaires"
          :key="index"
          :transform="`translate(${movingGroup.index * (windowSize.activeAreaSize.gap + solitaireSize.width)}, 0)`"
        >
          <use
            ref="movingSolitaireRef"
            :xlink:href="`#${item.suit}-${item.number}`"
            :y="getOpenedSolitaireTop(movingGroup.source, movingGroup.subIndex + index, windowSize.unopenedGroupGap, windowSize.openedGroupGap)"
          />
        </g>
      </g>

      <!-- 动画中的牌 -->
      <g
        v-if="animationSolitaire.visible"
        name="animation-solitaire"
      >
        <use
          :xlink:href="`#${animationSolitaire.suit}-${animationSolitaire.number}`"
          :x="animationSolitaire.x"
          :y="animationSolitaire.y"
        />
      </g>
    </g>
  </svg>

  <ChooseModeModal
    v-if="chooseModeModalVisible"
    @close="chooseModeModalVisible = false"
  />
</template>

<script setup lang="ts">
import { solitaireSize, colors } from '../../config'
import { getOpenedSolitaireTop } from '../../lib/helper'

import GraphDefs from './GraphDefs.vue'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const ChooseModeModal = defineAsyncComponent(() => import('../modal/ChooseMode.vue'))
const chooseModeModalVisible = ref(false)

const svgRef = ref<SVGAElement>()
const movingSolitaireRef = ref<SVGAElement[]>([])

// const ipl = useImgPreload()
const buttons = ['重新开始', '选择难度']
// 统计
const statistics = computed(() => {
  return [
    { name: '难度', value: mode.value },
    { name: '步数', value: 0 },
    { name: '用时', value: 0 },
    { name: '分数', value: 0 }
  ]
})

const windowSize = useWindow()

const {
  mode,
  activeGroup,
  inactiveGroup,
  collectedGroup,
  movingGroup,
  animationSolitaire,
  inAnimation,
  init,
  dropIt,
  collectIt,
  dealCards
} = useSolitaire(windowSize)

onMounted(() => {
  init()
})

const handleButtonClick = (button: string): void => {
  if (inAnimation.value) {
    return
  }
  switch (button) {
    case '重新开始':
      // ipl.mockRender(0)
      // ipl.reload()
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
  isDragging,
  handleMousedown
} = useEvent(
  'drop-target',
  svgRef,
  movingSolitaireRef,
  activeGroup,
  movingGroup,
  inAnimation,
  windowSize,
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
