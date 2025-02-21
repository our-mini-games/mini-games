<template>
  <section class="enhancements-wrapper">
    <h2 class="title">
      左键功能
    </h2>
    <div class="behaviors">
      <a-tooltip
        v-for="item of behaviors"
        :key="item.type"
        :title="item.label"
        placement="top"
      >
        <div
          class="item"
          :class="{
            current: leftButtonBehaviors === item.type,
            [item.type]: true
          }"
          @click="leftButtonBehaviors = item.type"
        ></div>
      </a-tooltip>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'

import OpenPic from '../../assets/img/open.png'
import DoubtfulPic from '../../assets/img/doubtful.png'
import BugPic from '../../assets/img/bug.png'
import { LeftButtonBehaviors } from '../../types'

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
  gap: 1rem;

  .title {
    width: 5em;
    height: 2.2rem;
    margin: 0;
    padding: 0 0.5em;
    line-height: 2.2rem;
    font-size: 1rem;
    text-align: center;
    color: var(--white);
    background-color: var(--bg-cell-color);
    border-radius: 0.25rem;
    box-sizing: border-box;
  }

  .behaviors {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;

    .item {
      width: 2.2rem;
      height: 2.2rem;
      border: 1px solid var(--bg-color-1);
      background-color: var(--bg-cell-color-revealed);
      background-size: cover;
      background-position: center;
      border-radius: 0.25rem;
      cursor: pointer;

      &:hover {
        border-color: var(--white);
      }

      &.current {
        background-color: var(--bg-cell-color);
        border-color: var(--primary-color);
      }

      &.open {
        background-image: url('@/assets/img/revealed-1.png');
      }

      &.doubtful {
        background-image: url('@/assets/img/doubtful-1.png');
      }

      &.marked {
        background-image: url('@/assets/img/flag-1.png');
      }
    }
  }
}
</style>
