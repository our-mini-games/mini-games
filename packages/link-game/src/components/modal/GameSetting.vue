<template>
  <Teleport to="body">
    <div class="game-setting-modal">
      <section class="game-setting-container">
        <header class="header">
          <h2 class="title">难度设置</h2>
          <button
            class="btn btn-close"
            @click="$emit('close')"
          >
            <img src="/icons/close.png" width="32" />
          </button>
        </header>

        <div class="wrapper">
          <ul class="list">
            <li
              v-for="item of gameLevels"
              :key="item.level"
              class="item"
              :class="{
                current: item.level === currentLevel
              }"
              @click="handleItemClick(item.level)"
            >
              <div class="row">
                <div class="label">
                  难度：
                </div>
                <div class="value">
                  {{ item.text }}
                </div>
              </div>
              <div class="row">
                <div class="label">
                  行数：
                </div>
                <div class="value">
                  {{ item.row }}
                </div>
              </div>
              <div class="row">
                <div class="label">
                  列数：
                </div>
                <div class="value">
                  {{ item.column }}
                </div>
              </div>
              <div class="row">
                <div class="label">
                  元素：
                </div>
                <div class="value">
                  {{ item.totalOfItems }}（种）
                </div>
              </div>
              <div class="row">
                <div class="label">
                  边界：
                </div>
                <div class="value">
                  {{ item.useBoundary ? '有' : '无' }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { GameStatus, Level, LINK_GAME_LEVEL } from '../../config/index.js'
import { LevelInfo } from '../../types/index.js'

const emit = defineEmits<{
  close: []
}>()

const currentLevel = inject('currentLevel', ref(Level.easy))
const gameStatus = inject('gameStatus', ref(GameStatus.finished))
const gameLevels = inject('gameLevels', ref<LevelInfo[]>([]))

const handleItemClick = (level: Level): void => {
  gameStatus.value = GameStatus.finished
  currentLevel.value = level

  try {
    localStorage.setItem(LINK_GAME_LEVEL, `${level}`)
  } catch {}

  emit('close')

  Promise.resolve().then(() => {
    gameStatus.value = GameStatus.playing
  })
}
</script>

<style lang="scss" scoped>
.game-setting-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;

  .game-setting-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(30rem, 90vw);
    max-height: 90vh;
    overflow-y: auto;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25rem var(--shadow-color);
    transform: translate(-50%, -50%);

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.75rem;
      padding: 0 1rem;
      border-bottom: 1px solid var(--border-color);

      .title {
        font-size: 1rem;
      }

      .btn {
        border: 0;
        background-color: transparent;
        cursor: pointer;
      }
    }

    .wrapper {
      padding: 1.5rem;

      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin: 0;
        list-style: none;

        .item {
          width: 10rem;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          cursor: pointer;

          &.current {
            border-color: var(--primary-color);
            background-color: var(--primary-color);

            .row {
              .label {
                color: var(--disabled-color);
              }
              .value {
                color: var(--white);
              }
            }
          }

          &:hover {
            border-color: var(--primary-color);
          }

          .row {
            display: flex;
            align-items: center;
            line-height: 2;

            .label {
              color: var(--secondary-text-color);
            }

            .value {
              color: var(--primary-text-color);
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
