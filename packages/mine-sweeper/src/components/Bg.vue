<template>
  <!-- 背景动画 -->
  <div class="background"></div>

  <!-- 粒子效果 -->
  <div class="particles" ref="particlesRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const particlesRef = ref<HTMLDivElement>()

onMounted(() => {
  const particlesContainer = particlesRef.value!
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.classList.add('particle')
    particle.style.left = `${Math.random() * 100}vw`
    particle.style.top = `${Math.random() * 100}vh`
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`
    particlesContainer.appendChild(particle)
  }
})
</script>

<style lang="scss" scoped>
/* 背景动画 */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--bg-color-1), var(--bg-color-2));
  z-index: -1;
  animation: pulse 5s infinite alternate;
}

/* 粒子效果 */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  :deep(.particle) {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--white);
    border-radius: 50%;
    opacity: 0.8;
    animation: float linear infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-100vh) translateX(calc(-50vw + 100%));
  }
}
</style>
