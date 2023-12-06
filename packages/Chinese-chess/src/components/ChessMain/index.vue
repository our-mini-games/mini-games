<template>
  <div class="chess-main-container">
    <status-wrapper
      @room:leave="emits('room:leave')"
      @game:ready="emits('game:ready')"
    />
    <main class="main-container">
      <div class="player-wrapper">
        <button
          v-if="isInit && currentUser && currentUser.id === players?.[1]?.id"
          class="btn btn-exchange"
          @click="handleExchange"
        >
          交换阵营
        </button>
        <camp-seat
          :user="players?.[1]"
        />
      </div>

      <div class="wrapper">
        <game-controller />
      </div>

      <div class="player-wrapper">
        <camp-seat
          :user="players?.[0]"
          is-self
        />
        <button
          v-if="isInit && currentUser && currentUser.id === players?.[0]?.id"
          class="btn btn-exchange"
          @click="handleExchange"
        >
          交换阵营
        </button>
      </div>
    </main>
    <spectator />
  </div>
</template>

<script setup lang="ts">
import { Camp } from '@/definitions'
import { ComputedRef } from 'vue'
import { GameContext, Players, User } from '@/types'

const emits = defineEmits<{
  (e: 'room:leave'): void
  (e: 'room:request-seat'): void
  (e: 'game:ready'): void
}>()

const context = inject<ComputedRef<GameContext | null>>('context')!
const isInit = inject<ComputedRef<boolean>>('isInit')!
const players = inject<ComputedRef<Players>>('players')!
const currentUser = inject('currentUser', ref<User | null>(null))

const handleExchange = () => {
  emits('room:request-seat')
}
</script>

<style lang="scss" scoped>
.chess-main-container {
  display: flex;

  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;

    .wrapper {
      position: relative;
      flex: 1;
    }

    .player-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
      .btn {
        margin: 0 auto;
      }
    }
  }
}
</style>
