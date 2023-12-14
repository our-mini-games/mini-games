<template>
  <Teleport to="body">
    <div v-if="visible" class="confirm-mask"></div>
    <div v-if="visible" class="confirm-container">
      <header class="header">{{ title }}</header>
      <div class="content">{{ content }}</div>

      <footer class="footer">
        <button
          class="btn btn-confirm"
          @click="callbacks.onConfirm"
        >
          确认
        </button>
        <button
          v-if="type === 'confirm'"
          class="btn btn-cancel"
          @click="callbacks.onCancel"
        >
          取消
        </button>
      </footer>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const visible = ref(false)
const type = ref('message')
const content = ref('')

const title = computed(() => {
  return type.value === 'confirm'
    ? '询问'
    : type.value === 'message'
      ? '提示'
      : '-'
})

const callbacks = {
  onConfirm: () => {},
  onCancel: () => {}
}

onMounted(() => {
  document.addEventListener('confirm:open', handleConfirmOpen)
})

onBeforeUnmount(() => {
  document.removeEventListener('confirm:open', handleConfirmOpen)
})

const handleConfirmOpen = ({ detail }: any) => {
  type.value = detail.type
  content.value = detail.content

  callbacks.onConfirm = () => {
    detail?.onConfirm?.()
    visible.value = false
  }

  callbacks.onCancel = () => {
    detail?.onCancel?.()
    visible.value = false
  }

  visible.value = true
}
</script>

<style lang="scss" scoped>
.confirm-mask {
  position: fixed;
  inset: 0;
  z-index: 8;
  width: 100vw;
  height: 100vh;
}
.confirm-container {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9;
  border-radius: 8px;
  background-color: #fff;
  transform: translate(-50%, -50%);

  .header {
    text-align: center;
    padding: 8px 16px;
    font-weight: 700;
  }

  .content {
    padding: 16px;
    text-align: center;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
  }
}
</style>
