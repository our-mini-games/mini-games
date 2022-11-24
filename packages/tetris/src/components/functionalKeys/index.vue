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
  { label: '开关机', value: 'onOrOff' },
  { label: '重新开始', value: 'reboot' },
  { label: '暂停恢复', value: 'pause' },
  { label: '模式', value: 'mode' },
  { label: '88', value: 'bye' }
]
</script>

<style lang="scss" scoped>
.functional-keys {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

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
      border: 1px solid #f1f1f1;
      border-radius: 50%;
    }

    .desc {
      position: absolute;
      left: 50%;
      top: 100%;
      width: max-content;
      margin-top: 4px;
      font-size: 12px;
      color: #bababa;
      transform-origin: center top;
      transform: scale(0.5) translateX(-100%);
    }
  }
}
</style>
