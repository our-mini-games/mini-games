<template>
  <section class="enhancements-wrapper">
    <h2 class="title">
      左键功能
    </h2>
    <div class="behavious">
      <div
        v-for="item of behavious"
        :key="item.type"
        class="item"
        :class="{
          current: leftButtonBehavious === item.type
        }"
        @click="leftButtonBehavious = item.type"
      >
        <img :src="item.pic" width="44" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'

import OpenPic from '../../assets/img/open.png'
import DoubtfulPic from '../../assets/img/doubtful.png'
import BugPic from '../../assets/img/bug.png'
import { LeftButtonBehavious } from '../../types'

const useDoubtful = inject('useDoubtful', ref(false))

const leftButtonBehavious = inject('leftButtonBehavious', ref<LeftButtonBehavious>('open'))

const behavious = computed(() => <Array<{
  label: string
  type: LeftButtonBehavious
  pic: string
}>>[
  {
    label: '铲子',
    type: 'open',
    pic: OpenPic
  },
  ...(useDoubtful.value
    ? [{
        label: '问号',
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
  gap: 16px;

  .title {
    width: 60px;
    height: 44px;
    margin: 0;
    padding: 0 8px;
    line-height: 22px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #0088ff;
    box-sizing: border-box;
  }

  .behavious {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1;

    .item {
      border: 1px solid #fff;
      cursor: pointer;

      &:hover {
        border-color: #f1f1f1;
      }

      &.current {
        border-color: #0088ff;
      }

      img {
        display: block;
      }
    }
  }
}
</style>
