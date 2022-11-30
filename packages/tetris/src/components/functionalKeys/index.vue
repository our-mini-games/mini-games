<template>
  <section class="functional-keys">
    <div
      v-for="item of keys"
      :key="item.value"
      class="key-item"
      :class="[
        `${KEY_PREFIX}${item.value}`,
        {
          active: activeKeys.has(item.value)
        }
      ]"
    >
      <span class="key"></span>
      <span class="desc">
        {{ item.label }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { KEY_PREFIX } from '../../config/constants'

const activeKeys = inject('activeKeys', ref(new Set<string>()))

const keys = [
  { label: '开/关机', value: 'OnOrOff' },
  { label: '重新开始', value: 'Reboot' },
  { label: '暂停/恢复', value: 'Pause' },
  { label: '模式', value: 'Mode' }
]
</script>

<style lang="scss" scoped>
.functional-keys {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  right: 0;
  bottom: 32px;
  padding: 4px 4px 2px 8px;
  border-radius: 12px;
  box-shadow: -2px -2px 4px var(--shadow-color-light) inset,
    2px 2px 4px var(--shadow-color-dark) inset;
  transform: translateX(-80%);

  * {
    box-sizing: border-box;
  }

  .key-item {
    position: relative;
    width: 16px;

    .key {
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--key-color);
      // border-bottom: 2px solid var(--key-color-dark);
      // border-right: 2px solid var(--key-color-dark);
      box-shadow: 1px 1px var(--key-color-dark),
        2px 2px var(--key-color-dark);
      pointer-events: none;
      box-sizing: border-box;
    }

    .desc {
      position: absolute;
      left: 50%;
      top: 100%;
      width: max-content;
      margin-top: 10px;
      font-size: 12px;
      color: #bababa;
      transform-origin: center top;
      transform: scale(0.5) translateX(-100%);
    }

    &.active .key {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px var(--key-color-dark);
    }
  }
}
</style>
