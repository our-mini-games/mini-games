<template>
  <a-modal
    :visible="visible"
    title="难度设置"
    width="400px"
    centered
    :footer="null"
    @cancel="$emit('close')"
  >
    <div class="leaves">
      <div
        v-for="item of levels"
        :key="item.level"
        class="item"
        :class="{
          current: currentLevel === item.level
        }"
        @click="handleItemClick(item.level)"
      >
        {{ item.text }}
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { levels } from '../../config'

const emits = defineEmits<{ (e: 'close'): void }>()

const visible = ref(true)

const currentLevel = inject('currentLevel', ref(0))

const handleItemClick = (level: number) => {
  if (currentLevel.value !== level) {
    currentLevel.value = level
    emits('close')
  }
}
</script>

<style lang="scss" scoped>
.leaves {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  .item {
    width: 160px;
    height: 44px;
    line-height: 42px;
    text-align: center;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
    background-color: transparent;
    cursor: pointer;

    &.current {
      color: #fff;
      background-color: #0088ff;
    }

    &:hover:not(.current) {
      color: #fff;
      background-color: rgba($color: #0088ff, $alpha: 0.7);
    }
  }
}
</style>
