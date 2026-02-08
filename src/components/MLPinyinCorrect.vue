<template>
  <div class="pinyin-tool-card">
    <div class="header">
      <h3>{{ $t('education.pinyin_check_title') }}</h3>
      <p>{{ $t('education.pinyin_check_hint') }}</p>
    </div>

    <div class="interaction-area">
      <div 
        v-for="(char, index) in currentWord" 
        :key="index" 
        class="char-box"
      >
        <el-popover
          v-if="isVowel(char.base)"
          placement="top"
          :width="200"
          trigger="click"
        >
          <template #reference>
            <div class="pinyin-char active" :class="{ 'is-correct': char.status === 'correct' }">
              {{ char.selected || char.base }}
            </div>
          </template>
          
          <div class="tone-selector">
            <div 
              v-for="tone in getTones(char.base)" 
              :key="tone"
              class="tone-btn"
              @click="selectTone(index, tone)"
            >
              {{ tone }}
            </div>
          </div>
        </el-popover>

        <div v-else class="pinyin-char disabled">
          {{ char.base }}
        </div>
      </div>
    </div>

    <div class="result-area" v-if="isComplete">
      <el-alert 
        :title="$t('education.pinyin_complete_title')" 
        type="success" 
        :description="$t('education.pinyin_result_desc', { result: resultString })"
        show-icon 
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 模拟数据逻辑保持不变
const currentWord = ref([
  { base: 'h', selected: null, status: 'normal' },
  { base: 'a', selected: null, status: 'normal' }, 
  { base: 'o', selected: null, status: 'normal' }
])

const toneMap = {
  'a': ['ā', 'á', 'ǎ', 'à'],
  'o': ['ō', 'ó', 'ǒ', 'ò'],
  'e': ['ē', 'é', 'ě', 'è'],
  'i': ['ī', 'í', 'ǐ', 'ì'],
  'u': ['ū', 'ú', 'ǔ', 'ù'],
  'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
}

const isVowel = (char) => !!toneMap[char]
const getTones = (char) => toneMap[char]

const selectTone = (index, tone) => {
  currentWord.value[index].selected = tone
  // 校验逻辑
  if (tone === 'ǎ') {
    currentWord.value[index].status = 'correct'
  }
}

const isComplete = computed(() => {
  return currentWord.value.every(c => !isVowel(c.base) || c.selected)
})

const resultString = computed(() => {
  return currentWord.value.map(c => c.selected || c.base).join('')
})
</script>

<style scoped lang="scss">
/* 样式保持不变 */
.pinyin-tool-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}
.interaction-area {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
}
.pinyin-char {
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f5f7fa;
  color: #909399;
  &.active {
    cursor: pointer;
    background: #e3f2fd;
    color: #1a237e;
    border: 2px solid transparent;
    &:hover { border-color: #1a237e; }
  }
  &.is-correct {
    background: #e8f5e9;
    color: #2e7d32;
  }
}
.tone-selector {
  display: flex;
  gap: 5px;
  justify-content: space-between;
  .tone-btn {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    &:hover { background: #eee; }
  }
}
.result-area { margin-top: 20px; }
</style>