<template>
  <div class="chess-main-container">
    <status-wrapper
      @room:leave="emits('room:leave')"
      @game:ready="emits('game:ready')"
    />
    <main class="main-container">
      <div class="player-wrapper">
        <button
          v-if="isInit && currentUser && currentUser.id === (currentUserCamp === Camp.RED ? players?.[1] : players?.[0])?.id"
          class="btn btn-exchange"
          @click="handleExchange"
        >
          交换阵营
        </button>
        <camp-seat
          :user="currentUserCamp === Camp.RED ? players?.[1] : players?.[0]"
        />
      </div>

      <div class="wrapper">
        <game-controller
          @game:change="emits('game:change', $event)"
        />
      </div>

      <div class="player-wrapper">
        <camp-seat
          :user="currentUserCamp === Camp.RED ? players?.[0] : players?.[1]"
          is-self
        />
        <button
          v-if="isInit && currentUser && currentUser.id === (currentUserCamp === Camp.RED ? players?.[0] : players?.[1])?.id"
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
import { ComputedRef } from 'vue'
import { GameContext, Players, User } from '@/types'
import { Camp } from '@/definitions'

const emits = defineEmits<{
  (e: 'room:leave'): void
  (e: 'room:request-seat'): void
  (e: 'game:ready'): void
  (e: 'game:change', context: GameContext): void
}>()

const isInit = inject<ComputedRef<boolean>>('isInit')!
const players = inject<ComputedRef<Players>>('players')!
const currentUser = inject('currentUser', ref<User | null>(null))
const currentUserCamp = inject<ComputedRef<Camp | null>>('currentUserCamp')!

const handleExchange = (): void => {
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
