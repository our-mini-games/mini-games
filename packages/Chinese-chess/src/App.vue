<template>
  <a-config-provider
    :theme="{
      algorithm: theme.defaultAlgorithm
    }"
  >
    <div class="chinese-chess">
      <a-button v-if="loading" @click="loading = false">放弃加载资源</a-button>
      <a-spin
        :spinning="loading"
        tip="资源加载中..."
      >
        <a-input
          v-if="!nickname"
          placeholder="请输入您的昵称，按“回车”提交"
          style="position: fixed; left: 50%; top: 50%; width: 300px; transform: translate(-50%, -50%);"
          @keydown="handleMouseDown"
        />

        <template v-else>
          <mode-selector
            v-if="currentMode === null"
            v-model:mode="currentMode"
          />

          <offline-game
            v-else-if="currentMode === GameMode.OFFLINE"
            v-model:mode="currentMode"
          />

          <online-game
            v-else
            v-model:mode="currentMode"
          />
        </template>
      </a-spin>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { GameMode, NICKNAME_KEY } from './definitions'
import { loadResources } from './libs/Resource'
import OnlineGame from './pages/OnlineGame/index.vue'

const OfflineGame = defineAsyncComponent(() => import('./pages/OfflineGame.vue'))
// const OnlineGame = defineAsyncComponent(() => import('./pages/OnlineGame/index.vue'))

const currentMode = ref<GameMode | null>(null)

const nickname = ref('')
const resources = ref<any>({})
const loading = ref(false)

onMounted(async () => {
  nickname.value = localStorage.getItem(NICKNAME_KEY) ?? ''

  loading.value = true
  try {
    resources.value = await loadResources()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  } finally {
    loading.value = false
  }
})

const handleMouseDown = (e: KeyboardEvent): void => {
  const target = e.target as HTMLInputElement
  if (e.key === 'Enter' && target.value.trim()) {
    nickname.value = target.value.trim()

    localStorage.setItem(NICKNAME_KEY, nickname.value)
  }
}

provide('resources', resources)
provide('nickname', nickname)
</script>

<style lang="scss" scoped>
.chinese-chess {
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 640px) {
    height: calc(100vh - 98px); // 预留点空间，底部看不到啊兄弟
  }

  .ant-spin-nested-loading {
    height: 100%;
  }
}
</style>
