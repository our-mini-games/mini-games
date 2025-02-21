<template>
  <a-modal
    :visible="visible"
    title="游戏设置"
    width="600px"
    centered
    :footer="null"
    @cancel="$emit('close')"
  >
    <a-form
      :model="formState"
      name="gameSetting"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="选择难度"
        name="level"
        :rules="[
          { required: true, message: 'Please select a level' }
        ]"
      >
        <a-radio-group v-model:value="formState.level">
          <a-radio
            v-for="item of levels"
            :key="item.level"
            :value="item.level"
          >
            {{ item.text }}
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <template v-if="formState.level === 0">
        <a-form-item
          label="高度(9-24)"
          :name="['customSetting', 'row']"
          :rules="[
            {
              type: 'number',
              min: 9,
              max: 24,
              message: 'Range of 9 to 24'
            }
          ]"
        >
          <a-input-number
            v-model:value="formState.customSetting.row"
            :min="9"
            :max="24"
          />
        </a-form-item>

        <a-form-item
          label="宽度(9-30)"
          :name="['customSetting', 'column']"
          :rules="[
            {
              type: 'number',
              min: 9,
              max: 30,
              message: 'Range of 9 to 30'
            }
          ]"
        >
          <a-input-number
            v-model:value="formState.customSetting.column"
            :min="9"
            :max="30"
          />
        </a-form-item>

        <a-form-item
          label="地雷数量(10-668)"
          :name="['customSetting', 'totalOfMines']"
          :rules="[
            {
              type: 'number',
              min: 10,
              max: 668,
              message: 'Range of 10 to 668'
            }
          ]"
        >
          <a-input-number
            v-model:value="formState.customSetting.totalOfMines"
            :min="10"
            :max="668"
          />
        </a-form-item>
      </template>

      <a-form-item
        label="是否允许问号"
        name="useDoubtful"
      >
        <a-switch v-model:checked="formState.useDoubtful" />
      </a-form-item>

      <a-form-item
        label="是否使用左键增强"
        name="useLeftClickEnhancements"
      >
        <a-switch v-model:checked="formState.useLeftClickEnhancements" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 16, offset: 8 }">
        <a-space>
          <a-button
            type="primary"
            html-type="submit"
          >
            确定
          </a-button>

          <a-button
            type="default"
            @click="$emit('close')"
          >
            取消
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import { levels } from '../../config'
import { MINE_SWEEPER_SETTING } from '../../config/constants'
import { CustomSetting, LevelInfo } from '../../types'

interface FormState {
  level: LevelInfo['level']
  useDoubtful: boolean
  useLeftClickEnhancements: boolean
  customSetting: CustomSetting
}

const emit = defineEmits<(e: 'close') => void>()

const visible = ref(true)

const currentLevel = inject('currentLevel', ref<LevelInfo['level']>(0))
const useDoubtful = inject('useDoubtful', ref<boolean>(false))
const useLeftClickEnhancements = inject('useLeftClickEnhancements', ref(false))
const customSetting = inject('customSetting', ref<CustomSetting>({
  row: 10,
  column: 10,
  totalOfMines: 10
}))

const formState = reactive<FormState>({
  level: currentLevel.value,
  useDoubtful: useDoubtful.value,
  useLeftClickEnhancements: useLeftClickEnhancements.value,
  customSetting: customSetting.value
})

const onFinish = (values: any): void => {
  try {
    const localState = JSON.parse(localStorage.getItem(MINE_SWEEPER_SETTING) ?? 'null')

    if (!localState) {
      localStorage.setItem(MINE_SWEEPER_SETTING, JSON.stringify(values))
    } else {
      localState.level = values.level
      localState.useDoubtful = values.useDoubtful
      localState.useLeftClickEnhancements = values.useLeftClickEnhancements
      localState.customSetting = values.customSetting || localState.customSetting || {
        row: 10,
        column: 10,
        totalOfMines: 10
      }
      localStorage.setItem(MINE_SWEEPER_SETTING, JSON.stringify(localState))
    }

    customSetting.value = localState.customSetting
    useDoubtful.value = localState.useDoubtful
    currentLevel.value = localState.level
    useLeftClickEnhancements.value = localState.useLeftClickEnhancements

    emit('close')
  } catch {}
}
</script>
