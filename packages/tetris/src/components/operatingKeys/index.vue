<template>
  <section class="operating-keys">
    <div class="dir-keys">
      <button
        v-for="item of dirKeys"
        :key="item.value"
        class="key-item"
        :class="[
          item.value.toLowerCase(),
          `${KEY_PREFIX}${item.value}`
        ]"
      >
        <span class="key"></span>
        <span class="desc">{{ item.label }}</span>
      </button>
    </div>

    <VolumeArea />

    <button
      class="big-key"
      :class="`${KEY_PREFIX}Space`"
    >
      <span class="key"></span>
    </button>
  </section>
</template>

<script setup lang="ts">
import { KEY_PREFIX } from '../../config/constants'
import VolumeArea from './VolumeArea.vue'

const dirKeys = [
  { label: '置底', value: 'ArrowUp' },
  { label: '左移', value: 'ArrowLeft' },
  { label: '右移', value: 'ArrowRight' },
  { label: '加速', value: 'ArrowDown' }
]
</script>

<style lang="scss" scoped>
.operating-keys {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.dir-keys {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100px;
  height: 120px;

  .key-item {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // position: absolute;
    width: 36px;
    border: none;
    background: none;

    &.arrowup {
      // left: 50%;
      // top: 0;
      // transform: translateX(-50%);
    }
    &.arrowleft {
      // left: 0;
      // top: 50%;
      // transform: translateY(-50%);
    }
    &.arrowright {
      // right: 0;
      // top: 50%;
      // transform: translateY(-50%);
    }
    &.arrowdown {
      // left: 50%;
      // bottom: 0;
      // transform: translateX(-50%);
    }

    .key {
      display: block;
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--key-color);
      border: 1px solid var(--key-color-dark);
      // border-bottom-width: 2px;
      // border-right-width: 2px;
      // box-shadow: -4px -4px 8px var(--shadow-color-light),
      //   4px 4px 8px var(--shadow-color-dark);
      box-shadow: 1px 1px 0 var(--key-color-dark),
        2px 2px 0 var(--key-color-dark);
      pointer-events: none;
    }

    &:active .key {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 var(--key-color-dark);
    }

    .desc {
      width: 100%;
      text-align: center;
      font-size: 12px;
      transform: scale(0.5);
      color: var(--desc-text);
    }
  }
}

.big-key {
  margin-top: -32px;
  border: none;
  background: none;

  .key {
    display: block;
    position: relative;
    width: 72px;
    height: 72px;
    border: 1px solid var(--big-key-color-dark);
    // border-bottom-width: 3px;
    // border-right-width: 3px;
    border-radius: 50%;
    background-color: var(--big-key-color);
    box-shadow: 1px 1px 0 var(--big-key-color-dark),
      2px 2px 0 var(--big-key-color-dark),
      3px 3px 0 var(--big-key-color-dark);
    pointer-events: none;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   left: 10px;
    //   top: 14px;
    //   width: 6px;
    //   height: 12px;
    //   border-radius: 50%;
    //   background-color: #ffffffc7;
    //   transform-origin: center;
    //   transform: rotate(25deg);
    // }
    // &::after {
    //   content: '';
    //   position: absolute;
    //   left: 8px;
    //   top: 30px;
    //   width: 6px;
    //   height: 20px;
    //   border-radius: 50%;
    //   background-color: #ffffffc7;
    //   transform-origin: center;
    //   transform: rotate(-15deg);
    // }
  }

  &:active .key {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--big-key-color-dark);
  }
}
</style>
