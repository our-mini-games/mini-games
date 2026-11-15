<template>
  <div class="klotski">
    <header class="header">
      <h1 class="title arcade-title">华容道</h1>
      <button class="arcade-button" @click="handleBack">
        返回
      </button>
      <div class="arcade-meter step-info">
        步数 <strong>{{ step }}</strong>
      </div>
      <div class="arcade-meter">
        用时 <strong>{{ timeFormat }}</strong>
      </div>
      <button class="arcade-button" @click="reset">
        重开
      </button>
    </header>
    <main class="klotski-board arcade-table">
      <div
        v-for="item of klotskiItems"
        :key="item.name"
        :data-name="item.name"
        class="klotski-item"
        :class="[`item-w-${item.w}`, `item-h-${item.h}`, `item-${item.name}`]"
        :style="{
          left: `${parseFloat(gap) + item.x * size}px`,
          top: `${parseFloat(gap) + item.y * size}px`
        }"
      >
        <div class="inner">
          <div class="cover"></div>
          <div class="name">
            {{ PERSONS_MAP[item.name] }}
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="level-info">
        <span class="level-number">
          第
          {{ currentLevelInfo?.level || 0 }}
          关
        </span>
        <span class="level-name">
          {{ currentLevelInfo?.name || '未知' }}
        </span>
      </div>
      <button
        v-if="gameStatus === KlotskiGameStatus.Completed && currentLevel < classicalLayouts.length"
        class="arcade-button arcade-button--primary btn-next"
        @click="nextLevel"
      >
        下一关
      </button>
    </footer>
    <CompleteModal
      v-if="completeModalVisible"
      :current-level="currentLevel"
      :game-status="gameStatus"
      @close="closeCompleteModal"
      @next="nextLevel"
      @set-level="setLevel"
    />
  </div>
</template>

<script setup lang="ts">
import { KlotskiGameStatus, useKlotski } from '../composables/useKlotski.js'
import { classicalLayouts, PERSONS_MAP } from '../config/index.js'
import { useSize } from '../composables/useSize.js'

const { gap, size, size1, size2, boxWidth, boxHeight } = useSize()

const {
  klotskiItems,
  step,
  usedTime,
  gameStatus,
  currentLevel,
  currentLevelInfo,
  nextLevel,
  reset,
  setLevel
} = useKlotski()

const timeFormat = computed(() => {
  const minutes = Math.floor(usedTime.value / 60)
  const seconds = usedTime.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

watch(gameStatus, (status) => {
  if (status === KlotskiGameStatus.Completed) {
    completeModalVisible.value = true
  }
}, { immediate: true })

const completeModalVisible = ref(false)
const CompleteModal = defineAsyncComponent(async () => await import('./CompleteModal.vue'))

const closeCompleteModal = (): void => {
  completeModalVisible.value = false
}

const handleBack = (): void => {
  window.location.href = '/mini-games'
}
</script>

<style lang="scss" scoped>
.klotski {
  display: flex;
  min-height: 100svh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  box-sizing: border-box;
  padding: 12px v-bind('gap');
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 440px;
  gap: 8px;

  .title {
    flex-basis: 100%;
    margin-bottom: 4px;
    text-align: center;
    font-size: clamp(30px, 6vw, 46px);
  }

}

.klotski-board {
  position: relative;
  width: v-bind('boxWidth');
  height: v-bind('boxHeight');
  padding: v-bind('gap');
  background:
    repeating-linear-gradient(to right, #a2d2bc15 0 1px, transparent 1px v-bind('size1')) 10px 10px,
    repeating-linear-gradient(to bottom, #a2d2bc15 0 1px, transparent 1px v-bind('size1')) 10px 10px,
    var(--arcade-felt);
  box-sizing: border-box;

  .klotski-item {
    position: absolute;
    z-index: 2;
    width: v-bind('size1');
    height: v-bind('size1');
    border-radius: 7px;
    background: linear-gradient(145deg, #e6e5cc, #a7c2a2);
    color: var(--arcade-ink);
    box-shadow: inset 0 0 0 2px var(--arcade-well), inset 0 -5px 0 #809a85;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &.item-caocao {
      background: linear-gradient(145deg, #f6dc9f, #c89655);
      box-shadow: inset 0 0 0 2px var(--arcade-well), inset 0 -5px 0 #ae8b54;
    }

      .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        pointer-events: none;

        .cover {
          flex: 1;
          aspect-ratio: 1 / 1;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .name {
          text-align: center;
          padding: 0.1rem;
          font-size: 1rem;
          font-weight: 700;
        }
      }

    &.item-w-1 {
      // 小兵
      &.item-h-1 {
        .inner {
          flex-direction: column;
          .cover {
            height: 100%;
            background-position: center;
            background-image: url('@/assets/imgs/pawn.png');
          }
          .name {
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 1rem;
          }
        }
      }

      // 竖将
      &.item-h-2 {
        height: v-bind('size2');
        .inner {
          flex-direction: column;
          .cover {
            width: 100%;
            background-position: center;
          }
          .name {}
        }
      }
    }

    &.item-w-2 {
      width: v-bind('size2');
      // 横将
      &.item-h-1 {
        .inner {
          .cover {
            height: 100%;
            background-position: 0 center;
            background-image: url('@/assets/imgs/guanyu.png');
          }
          .name {}
        }
      }

      // 曹操
      &.item-h-2 {
        height: v-bind('size2');
        .inner {
          flex-direction: column;
          .cover {
            height: 100%;
            background-position: center;
            background-image: url('@/assets/imgs/caocao.png');
          }
          .name {}
        }
      }
    }

    &.item-guanyu {
      .inner {
        .cover {
          background-image: url('@/assets/imgs/guanyu.png');
        }
      }
    }
    &.item-zhangfei {
      .inner {
        .cover {
          background-image: url('@/assets/imgs/zhangfei.png');
        }
      }
    }
    &.item-zhaoyun {
      .inner {
        .cover {
          background-image: url('@/assets/imgs/zhaoyun.png');
        }
      }
    }
    &.item-huangzhong {
      .inner {
        .cover {
          background-image: url('@/assets/imgs/huangzhong.png');
        }
      }
    }
    &.item-machao {
      .inner {
        .cover {
          background-image: url('@/assets/imgs/machao.png');
        }
      }
    }
  }
}

.klotski-board::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: v-bind('size2');
  height: 10px;
  transform: translate(-50%, 5px) skewX(-45deg);
  background-color: var(--arcade-well);
  background-image: linear-gradient(to right, transparent 30%, var(--arcade-jade) 30%, var(--arcade-jade) 70%, transparent 70%);
  background-size: 8px 10px;
  background-repeat: repeat-x;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--arcade-muted);

  .level-name {
    margin-left: 4px;
    color: var(--arcade-gold);
    font-weight: 700;
  }
}
</style>
