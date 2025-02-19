<template>
  <div class="home">
    <h1 class="title">
      连连看
    </h1>

    <section class="operations">
      <button
        class="btn btn-start"
        @click="handleBtnClick('start')"
      >
        开始游戏
      </button>
      <button
        class="btn btn-settings"
        @click="handleBtnClick('settings')"
      >
        难度设置
      </button>
      <button
        class="btn btn-back"
        @click="handleBtnClick('back')"
      >
        返回
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'start'): void
  (e: 'settings'): void
}>()

const handleBtnClick = (type: 'start' | 'settings' | 'back'): void => {
  switch (type) {
    case 'start':
      emits('start')
      break
    case 'settings':
      emits('settings')
      break
    case 'back':
      window.location.href = '/mini-games'
      break
    default:
      break
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #74ebd5, #9face6);
  overflow: hidden;

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
    text-shadow: 0 .5em 1em rgba(0, 0, 0, 1);
  }

  .operations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    .btn {
      width: max(90%, 20rem);
      line-height: 2;
      font-size: 1.6rem;
      border: none;
      border-radius: .5em;
      color: var(--white);
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s ease;
      box-shadow: 0 .5em 1em rgba(0, 0, 0, 0.2);

      &.btn-start {
        background-color: var(--green);

        &:hover {
          background-color: var(--green-hover);
          transform: scale(1.05);
        }
      }

      &.btn-settings {
        background-color: var(--orange);

        &:hover {
          background-color: var(--orange-hover);
          transform: scale(1.05);
        }
      }

      &.btn-back {
        background-color: var(--white);
        color: var(--primary-text-color);
      }
    }
  }
}
</style>
