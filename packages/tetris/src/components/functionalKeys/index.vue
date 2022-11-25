<template>
  <section class="functional-keys">
    <div
      v-for="item of keys"
      :key="item.value"
      class="key-item"
    >
      <span class="key"></span>
      <span class="desc">
        {{ item.label }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const keys = [
  { label: '开/关机', value: 'onOrOff' },
  { label: '重新开始', value: 'reboot' },
  { label: '暂停/恢复', value: 'pause' },
  { label: '模式', value: 'mode' },
  { label: '88', value: 'bye' }
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
  transform: translateX(-50%);

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
      border-bottom: 2px solid var(--key-color-dark);
      border-right: 2px solid var(--key-color-dark);
      box-shadow: -2px -2px 4px var(--shadow-color-light),
        2px 2px 4px var(--shadow-color-dark);
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
  }
}
</style>
