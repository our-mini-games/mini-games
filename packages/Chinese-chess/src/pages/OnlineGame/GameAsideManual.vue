<template>
  <section class="section manual-wrapper">
    <ul
      class="list manual-list"
      ref="manualListRef"
    >
      <li
        v-for="(item, index) of manual"
        :key="item.value + item.camp + index"
        class="manual-item"
      >
        <a-badge
          :color="colorMapper[item.camp]"
          :text="`[${index + 1}] ${item.value}`"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ComputedRef } from 'vue'
import { Camp } from 'chinese-chess-service'
import { colorMapper } from '@/definitions/index.js'

const manualListRef = ref<HTMLElement | null>(null)

const manual = inject<ComputedRef<Array<{
  camp: Camp
  value: string
}>>>('manual')
watch(() => manual?.value, () => {
  nextTick(() => {
    if (manualListRef.value) {
      manualListRef.value.scroll(0, manualListRef.value.scrollHeight + 32)
    }
  })
}, { immediate: true })
</script>

<style lang="scss" scoped>
.manual-wrapper {
  height: 100%;
  background-color: #fff;
  overflow-y: auto;

  .list {
    height: 100%;
    padding: 16px 0;

    .manual-item {
      display: inline-block;
      width: 50%;
      margin: 4px 0;
      padding: 0 16px;

      &:nth-child(even) {
        text-align: left;
      }
    }
  }
}
</style>
