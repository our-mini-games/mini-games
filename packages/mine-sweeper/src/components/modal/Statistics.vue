<template>
  <a-modal
    :visible="visible"
    title="战绩统计"
    width="800px"
    centered
    :footer="null"
    @cancel="$emit('close')"
  >
    <div class="statistics">
      <div class="records">
        <div
          v-for="item of records"
          :key="item.title"
          class="item"
        >
          <h2 class="title">
            {{ item.title }}
          </h2>

          <div class="row">
            <div class="label">
              胜&emsp;&emsp;率：
            </div>
            <div class="value">
              {{ item.successRate }}
            </div>
          </div>

          <div class="row">
            <div class="label">
              已玩局数：
            </div>
            <div class="value">
              {{ item.total }}
            </div>
          </div>

          <div class="row">
            <div class="label">
              最佳记录：
            </div>
            <div class="value">
              {{ item.best }}
            </div>
          </div>
        </div>
      </div>

      <div class="operations">
        <div
          class="btn btn-clear"
          @click="handleClear"
        >
          清空记录
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MINE_SWEEPER_STATISTICS } from '../../config/constants'
import { formatTime } from '../../lib/utils'

defineEmits<(e: 'close') => void>()

const visible = ref(true)

const statistics = ref<any>(JSON.parse(localStorage.getItem(MINE_SWEEPER_STATISTICS) ?? 'null'))

const level1Info = computed(() => statistics.value?.[1] || [])
const level2Info = computed(() => statistics.value?.[2] || [])
const level3Info = computed(() => statistics.value?.[3] || [])

const getRate = (arr: any[]): string => {
  if (arr.length === 0) {
    return '0.00%'
  }

  const c = arr.filter(item => item[0] === 'complete')

  return (100 * c.length / arr.length).toFixed(2) + '%'
}

const getBest = (arr: any[]): number => {
  const c = arr.filter(item => item[0] === 'complete')

  if (c.length === 0) {
    return 0
  }

  return Math.min(...c.map(i => i[1]))
}

const records = computed(() => [
  {
    title: '简单',
    successRate: getRate(level1Info.value),
    total: level1Info.value.length,
    best: formatTime(getBest(level1Info.value))
  },
  {
    title: '中等',
    successRate: getRate(level2Info.value),
    total: level2Info.value.length,
    best: formatTime(getBest(level2Info.value))
  },
  {
    title: '困难',
    successRate: getRate(level3Info.value),
    total: level3Info.value.length,
    best: formatTime(getBest(level3Info.value))
  }
])

const handleClear = (): void => {
  localStorage.removeItem(MINE_SWEEPER_STATISTICS)
  statistics.value = null
}
</script>

<style lang="scss" scoped>
.records {
  display: flex;
  justify-content: space-between;

  .item {
    position: relative;
    width: 240px;
    padding: 16px;
    border: 1px solid #f1f1f1;
    border-radius: 16px;

    .title {
      position: absolute;
      left: 50%;
      top: 0;
      margin: 0;
      padding: 0 16px;
      font-size: 18px;
      line-height: 24px;
      background-color: #fff;
      transform: translate(-50%, -12px);
    }

    .row {
      display: flex;
      align-items: center;

      &:not(:first-child) {
        margin-top: 16px;
      }

      > * {
        width: 50%;
      }

      .label {
        text-align: right;
      }

      .value {
        font-size: 20px;
        color: #0088ff;
      }
    }
  }
}

.operations {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 32px;

  .btn {
    padding: 6px 16px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
    background-color: #f1f1f1;
    cursor: pointer;

    &.btn-clear {
      color: #fff;
      border-color: #0088ff;
      background-color: #0088ff;
    }
  }
}
</style>
