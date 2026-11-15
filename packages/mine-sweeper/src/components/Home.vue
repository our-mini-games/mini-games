<template>
  <div class="arcade-menu">
    <!-- 主容器 -->
    <div class="arcade-menu-content arcade-panel">
      <h1 class="arcade-title">扫雷</h1>

      <!-- 扫雷网格 -->
      <div class="mine-grid">
        <div class="mine-cell number number-1">1</div>
        <div class="mine-cell number number-2">2</div>
        <div class="mine-cell revealed"></div>
        <div class="mine-cell flag"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell mine"></div>
        <div class="mine-cell doubtful"></div>
        <div class="mine-cell mine"></div>
        <div class="mine-cell number number-1">1</div>
        <div class="mine-cell revealed"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell number number-4">4</div>
        <div class="mine-cell"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell revealed"></div>
        <div class="mine-cell number number-1">1</div>
        <div class="mine-cell"></div>
        <div class="mine-cell revealed"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell mine"></div>
        <div class="mine-cell"></div>
        <div class="mine-cell number number-3">3</div>
        <div class="mine-cell"></div>
        <div class="mine-cell"></div>
      </div>

      <!-- 按钮容器 -->
      <div class="arcade-menu-actions">
        <button class="arcade-button arcade-button--primary" @click="handleClick('start')">开始游戏</button>
        <button class="arcade-button" @click="handleClick('gameSetting')">游戏设置</button>
        <button class="arcade-button" @click="handleClick('exit')">返回合集</button>
      </div>
    </div>

    <GameSettingModal
      v-if="gameSettingVisible"
      @close="gameSettingVisible = false"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, inject, Ref, ref, defineAsyncComponent } from 'vue'
import { GameStatus } from '../types/index.js'

const GameSettingModal = defineAsyncComponent(async () => await import('./modal/GameSetting.vue'))

const gameStatus = inject<Ref<GameStatus>>('gameStatus')!
const gameSettingVisible = ref(false)
const handleClick = (type: 'start' | 'gameSetting' | 'exit'): void => {
  switch (type) {
    case 'start':
      gameStatus.value = 'playing'
      break
    case 'gameSetting':
      gameSettingVisible.value = true
      break
    case 'exit':
      window.location.href = '/mini-games'
      break
  }
}

onMounted(() => {
  // 扫雷网格交互
  const cells = document.querySelectorAll('.mine-cell')
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (!cell.classList.contains('flag')) {
        cell.classList.toggle('revealed')
      }
    })

    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault() // 阻止右键默认菜单
      cell.classList.toggle('flag') // 切换旗子状态
    })
  })
})
</script>
<style lang="scss" scoped>
.arcade-menu-content {
  .mine-grid {
    display: grid;
    grid-template-columns: repeat(5, 1.8rem);
    grid-template-rows: repeat(5, 1.8rem);
    gap: 4px;

    @media (min-width: 769px) {
      grid-template-columns: repeat(5, 2rem);
      grid-template-rows: repeat(5, 2rem);
      gap: 5px;
    }
  }

  .mine-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
    background-color: var(--bg-cell-color);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: background-color 150ms;

    @media (min-width: 769px) {
      width: 2rem;
      height: 2rem;
      border-radius: 5px;
      font-size: 1.2rem;
    }

    &.revealed {
      background-color: var(--bg-cell-color-revealed);
    }

    &.flag {
      background-image: url(@/assets/img/flag-1.png);
    }

    &.doubtful {
      background-image: url(@/assets/img/doubtful-1.png);
    }

    &.mine {
      border-color: var(--red);
      background-color: var(--bg-cell-color-mine);
      background-image: url(@/assets/img/mine-1.png);
    }

    &.number {
      background-color: var(--bg-cell-color-number);

      &.number-1 {
        color: var(--number-color-1);
      }
      &.number-2 {
        color: var(--number-color-2);
      }
      &.number-3 {
        color: var(--number-color-3);
      }
      &.number-4 {
        color: var(--number-color-4);
      }
      &.number-5 {
        color: var(--number-color-5);
      }
      &.number-6 {
        color: var(--number-color-6);
      }
      &.number-7 {
        color: var(--number-color-7);
      }
      &.number-8 {
        color: var(--number-color-8);
      }
    }

    &:hover {
      background-color: var(--bg-cell-color-hover);
      box-shadow: 0 0 .1rem var(--border-color);
    }
  }

}
</style>
