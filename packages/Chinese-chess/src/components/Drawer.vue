<template>
  <Teleport to="body">
    <div class="drawer">
      <div v-if="open" class="drawer-mask" @click="close"></div>
      <div v-if="open" class="drawer-container" :style="{ width }">
        <h2 class="title">
          {{ title }}

          <close-outlined @click="close" />
        </h2>
        <div class="drawer-body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  open: boolean
  title?: string
  width?: string | number
}>(), {
  width: '40%'
})

const emits = defineEmits<(e: 'update:open', value: boolean) => void>()

const close = () => {
  emits('update:open', false)
}
</script>

<style lang="scss" scoped>
.drawer {
  .drawer-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }

  .drawer-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    height: 100%;
    background-color: #fff;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      height: 44px;
      margin: 0;
      border-bottom: 1px solid #404040;
    }

    .drawer-body {
      flex: 1;
      min-height: 0;
      padding: 16px;
      overflow-y: auto;
      box-sizing: border-box;
    }
  }
}
</style>
