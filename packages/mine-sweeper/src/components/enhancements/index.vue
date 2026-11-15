<template>
  <section class="enhancements-wrapper">
    <h2 class="title">
      操作模式
    </h2>
    <div class="behaviors">
      <a-tooltip
        v-for="item of behaviors"
        :key="item.type"
        :title="item.label"
        placement="top"
      >
        <button
          type="button"
          class="item"
          :aria-label="item.label"
          :aria-pressed="leftButtonBehaviors === item.type"
          :class="{
            current: leftButtonBehaviors === item.type,
            [item.type]: true
          }"
          @click="leftButtonBehaviors = item.type"
        ></button>
      </a-tooltip>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'

import OpenPic from '../../assets/img/open.png'
import DoubtfulPic from '../../assets/img/doubtful.png'
import BugPic from '../../assets/img/bug.png'
import { LeftButtonBehaviors } from '../../types/index.js'

const useDoubtful = inject('useDoubtful', ref(false))

const leftButtonBehaviors = inject('leftButtonBehaviors', ref<LeftButtonBehaviors>('open'))

const behaviors = computed(() => <Array<{
  label: string
  type: LeftButtonBehaviors
  pic: string
}>>[
  {
    label: '铲子',
    type: 'open',
    pic: OpenPic
  },
  ...(useDoubtful.value
    ? [{
        label: '可疑的',
        type: 'doubtful',
        pic: DoubtfulPic
      }]
    : []),
  {
    label: '标记',
    type: 'marked',
    pic: BugPic
  }
])
</script>

<style lang="scss" scoped>
.enhancements-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 8px;
  border: 1px solid var(--arcade-line);
  border-radius: var(--arcade-radius);
  background: var(--arcade-panel);

  .title {
    font-size: 13px;
    color: var(--arcade-muted);
  }

  .behaviors {
    display: flex;
    align-items: center;
    gap: 5px;

    .item {
      width: 30px;
      height: 30px;
      border: 1px solid var(--arcade-tile-edge);
      border-radius: 5px;
      background-color: var(--arcade-slot);
      background-size: cover;
      background-position: center;
      cursor: pointer;

      &:hover { border-color: var(--arcade-jade); }
      &.current {
        background-color: var(--arcade-tile);
        border-color: var(--arcade-gold);
      }

      &.open { background-image: url('@/assets/img/revealed-1.png'); }
      &.doubtful { background-image: url('@/assets/img/doubtful-1.png'); }
      &.marked { background-image: url('@/assets/img/flag-1.png'); }
    }
  }
}
</style>
