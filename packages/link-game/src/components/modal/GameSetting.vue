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
              v-for="item of gameConfig"
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
import { gameConfig, Level, LINK_GAME_LEVEL } from '../../config';
const emit = defineEmits<{ (e: 'close'): void }>()

const currentLevel = inject('currentLevel', ref(Level.easy))


const handleItemClick = (level: Level) => {
  currentLevel.value = level

  try {
    localStorage.setItem(LINK_GAME_LEVEL, `${level}`)
  } catch {}

  emit('close')
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
    width: 500px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 4px #888;
    transform: translate(-50%, -50%);

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding: 0 16px;
      border-bottom: 1px solid #f1f1f1;

      .title {
        font-size: 18px;
      }

      .btn {
        border: 0;
        background-color: transparent;
        cursor: pointer;
      }
    }

    .wrapper {
      padding: 32px;

      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        margin: 0;
        list-style: none;

        .item {
          width: 160px;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #f1f1f1;
          cursor: pointer;

          &.current {
            border-color: #0088ff;
            background-color: #0088ff;

            .row {
              .label {
                color: #e1e1e1;
              }
              .value {
                color: #fff;
              }
            }
          }

          &:hover {
            border-color: #0088ff;
          }

          .row {
            display: flex;
            align-items: center;
            line-height: 2;

            .label {
              color: #5c5c5c;
            }

            .value {
              color: #333;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
