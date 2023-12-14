<template>
  <div class="game-main">
    <chess-main
      class="chess-main-container"
      @room:leave="emits('room:leave')"
      @room:request-seat="emits('room:request-seat')"
      @game:ready="emits('game:ready')"
      @game:change="emits('game:change', $event)"
    />
    <aside v-if="false" class="aside">
      <chess-manual class="section chess-manual" />
      <chat-container
        class="section chat-container"
        @game:chat="emits('room:chat', $event)"
      />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { GameContext } from '@/types'

const emits = defineEmits<{
  (e: 'room:chat', msg: string): void
  (e: 'room:leave'): void
  (e: 'room:request-seat'): void
  (e: 'game:ready'): void
  (e: 'game:change', context: GameContext): void
}>()

</script>

<style lang="scss" scoped>
@mixin Border ($outlineColor: #fff) {
  border: 4px solid var(--line);
  border-radius: 4px;
  outline-offset: -7px;
  outline: 1px solid $outlineColor;
}
.game-main {
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 1px;

  .chess-main-container {
    flex: 1;
    background-color: var(--light);
    @include Border;
  }

  .aside {
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 320px;
    height: 100%;
    overflow: hidden;

    .section {
      padding: 8px;
      @include Border(var(--line));

      &.chess-manual {
        height: 240px;
      }

      &.chat-container {
        flex: 1;
      }
    }
  }
}
</style>
