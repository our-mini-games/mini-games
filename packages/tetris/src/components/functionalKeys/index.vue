<template>
  <section class="functional-keys">
    <button
      v-for="item of keys"
      :key="item.value"
      class="key-item"
      :data-key="item.value"
    >
      <span class="key"></span>
      <span class="desc">
        {{ item.label }}
      </span>
    </button>
  </section>
</template>

<script setup lang="ts">
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
  gap: 18px;
  position: absolute;
  right: -10px;
  bottom: 25px;
  border: none;
  padding: 2px 10px 6px 8px;
  border-radius: 12px;
  box-shadow: -2px -2px 4px var(--shadow-color-light) inset,
    2px 2px 4px var(--shadow-color-dark) inset;
  transform: translateX(-80%);

  .key-item {
    position: relative;
    width: 16px;
    border: none;
    background: none;
    overflow: visible;

    .key {
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--key-color);
      border: 1px solid var(--key-color-dark);

      // border-bottom: 2px solid var(--key-color-dark);
      // border-right: 2px solid var(--key-color-dark);
      box-shadow: 2px 2px var(--key-color-dark);
      pointer-events: none;
    }

    .desc {
      position: absolute;
      left: 50%;
      top: 100%;
      width: max-content;
      margin-top: 10px;
      font-size: 12px;
      color: #bababa;
      text-align: center;
      transform-origin: center top;
      transform: scale(0.66) translateX(-75%);
    }

    &:active .key {
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  }
}
</style>
