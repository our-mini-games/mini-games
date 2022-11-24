<template>
  <section class="operating-keys">
    <div class="dir-keys">
      <div
        v-for="item of dirKeys"
        :key="item.value"
        class="key-item"
        :class="item.value.toLowerCase()"
      >
        <span class="key"></span>
        <span class="desc">{{ item.label }}</span>
      </div>
    </div>

    <div class="big-key">
      <span class="key"></span>
    </div>
  </section>
</template>

<script setup lang="ts">
const dirKeys = [
  { label: '置底', value: 'ArrowUp' },
  { label: '左移', value: 'ArrowLeft' },
  { label: '右移', value: 'ArrowRight' },
  { label: '加速', value: 'ArrowBottom' }
]
</script>

<style lang="scss" scoped>
.operating-keys {
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    box-sizing: border-box;
  }
}
.dir-keys {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100px;
  height: 120px;

  .key-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    width: 36px;

    &.arrowup {
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    &.arrowleft {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &.arrowright {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &.arrowbottom {
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }

    .key {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid #f1f1f1;
      box-sizing: border-box;
    }

    .desc {
      width: 100%;
      text-align: center;
      font-size: 12px;
      transform: scale(0.5);
      color: #bababa;
    }
  }
}

.big-key {
  .key {
    display: block;
    width: 72px;
    height: 72px;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
  }
}
</style>
