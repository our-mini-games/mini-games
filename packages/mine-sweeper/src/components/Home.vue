<template>
  <div class="home">
    <!-- 主容器 -->
    <div class="container">
      <h1>扫雷</h1>

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
      <div class="buttons">
        <button class="btn" @click="handleClick('start')">开始游戏</button>
        <button class="btn" @click="handleClick('gameSetting')">游戏设置</button>
        <button class="btn" @click="handleClick('exit')">退出游戏</button>
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

// 粒子效果生成
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
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  /* 主容器 */
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 1;
  }

  /* 标题样式 */
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    background: linear-gradient(90deg, var(--border-color), var(--primary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glowText 2s infinite alternate;
  }

  /* 扫雷网格 */
  .mine-grid {
    display: grid;
    grid-template-columns: repeat(5, 2rem);
    grid-template-rows: repeat(5, 2rem);
    gap: 5px;
    margin: 20px 0;
  }

  .mine-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--border-color);
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: var(--bg-cell-color);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 0.3s ease;

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

  /* 按钮容器 */
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 按钮样式 */
  .btn {
    padding: .5rem 2rem;
    font-size: 1.5rem;
    color: var(--white);
    background: var(--bg-cell-color-flag);
    border: 2px solid var(--border-color);
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px var(--border-color);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, var(--bg-cell-color-flag), transparent);
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.5s ease;
      z-index: -1;
    }

    &:hover {
      background: var(--bg-cell-color-flag);
      box-shadow: 0 0 15px var(--border-color), 0 0 30px var(--border-color);
      transform: translateY(-5px);

      &::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}

@keyframes glowText {
  0% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
  100% {
    text-shadow: 0 0 20px #00ffaa, 0 0 40px #00ffaa, 0 0 60px #00ffaa;
  }
}
</style>
