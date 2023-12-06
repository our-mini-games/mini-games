<template>
  <section class="section chess-manual">
    <ul ref="listRef" class="list">
      <li
        v-for="(item, index) of chessManual"
        :key="item.id"
        class="item"
        :class="item.camp === Camp.RED ? 'red' : 'black'"
      >
        <span class="index">
          {{ index + 1 }}
        </span>
        <span class="value">
          {{ item.value }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Camp } from '@/definitions'
import type { ChessManual } from '@/types'

const chessManual = inject('chessManual', ref<ChessManual[]>([]))
const listRef = ref<HTMLUListElement | null>(null)

watch(chessManual, () => {
  nextTick(() => {
    if (listRef.value) {
      listRef.value.scroll(0, 1000)
    }
  })
}, { immediate: true })
</script>

<style lang="scss" scoped>
.chess-manual {
  min-height: 0;

  .list {
    height: 100%;
    overflow-y: auto;

    .item {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      width: 50%;
      height: 20px;
      padding: 0 16px;

      &:nth-child(2n + 1) {
        justify-content: flex-end;
      }

      &.black {
        color: var(--black);
        .index {
          background-color: var(--black);
        }
      }

      &.red {
        color: var(--red);

        .index {
          background-color: var(--red);
        }
      }

      .index {
        width: 16px;
        height: 16px;
        color: #fff;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
      }
    }
  }
}
</style>
