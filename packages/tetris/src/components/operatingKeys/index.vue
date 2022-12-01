<template>
  <section class="operating-keys">
    <div class="dir-keys">
      <button
        v-for="item of dirKeys"
        :key="item.value"
        class="keydown-shadow key-item "
        :data-label="item.label"
        :data-key="item.value"
        :class="item.value.toLowerCase()"
      >
        <span class="key"></span>
      </button>
    </div>

    <VolumeArea />

    <button
      data-key="Space"
      class="keydown-shadow big-key"
    >
      <span class="key"></span>
    </button>
  </section>
</template>

<script setup lang="ts">
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

  .keydown-shadow:active .key {
    transform: translate(2px, 2px);
    box-shadow: none
  }
}

.dir-keys {
  position: relative;
  width: 105px;
  min-width: 105px;
  height: 120px;

  .key-item {
    width: 36px;
    height: 36px;
    border: none;
    background: none;
    color: var(--desc-text);

    &.arrowup,
    &.arrowdown {
      display: block;
      margin: 0 auto;
    }

    &.arrowright {
      float: left;
    }

    &.arrowright {
      float: right;
    }

    &.arrowdown {
      margin-top: -4px
    }

    .key {
      display: inline-block;
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
      box-shadow: 2px 2px 0 var(--key-color-dark);
      pointer-events: none;
    }

    &::after {
      content: attr(data-label);
      display: block;
      transform: scale(.7) translate(2px, -2px);
      font-size: 12px;
    }
  }
}

.big-key {
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
    box-shadow: 2px 2px 0 var(--big-key-color-dark);
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
}
</style>
