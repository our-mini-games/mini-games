<template>
  <div v-if="visible" class="mobile-hint">
    <div class="hint-content">
      <div class="hint-item">
        <span class="icon">👆</span>
        <span class="text">点击：翻开格子</span>
      </div>
      <div class="hint-item">
        <span class="icon">👆👆</span>
        <span class="text">长按：标记旗帜</span>
      </div>
      <div class="hint-item">
        <span class="icon">✌️</span>
        <span class="text">双指缩放：调整视图</span>
      </div>
    </div>
    <button class="close-btn" @click="closeHint">×</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
const HINT_KEY = 'MINE_SWEEPER_MOBILE_HINT_SHOWN'

onMounted(() => {
  // 检查是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  // 检查是否已经显示过提示
  const hasShownHint = localStorage.getItem(HINT_KEY)
  
  if (isMobile && !hasShownHint) {
    visible.value = true
  }
})

const closeHint = (): void => {
  visible.value = false
  localStorage.setItem(HINT_KEY, 'true')
}
</script>

<style lang="scss" scoped>
.mobile-hint {
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  
  .hint-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .hint-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 14px;
      
      .icon {
        font-size: 18px;
        min-width: 30px;
        text-align: center;
      }
      
      .text {
        white-space: nowrap;
      }
    }
  }
  
  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    padding: 0 4px;
    opacity: 0.7;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (min-width: 769px) {
  .mobile-hint {
    display: none;
  }
}
</style>
