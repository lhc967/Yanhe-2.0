<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n' // 1. 引入 i18n

// 获取翻译函数 t
const { t } = useI18n()

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">
      {{ $t('common.count_is') }}: {{ count }}
    </button>
    
    <p>
      {{ $t('common.edit_hint_prefix') }}
      <code>components/HelloWorld.vue</code> 
      {{ $t('common.edit_hint_suffix') }}
    </p>
  </div>

  <p>
    {{ $t('common.check_out') }}
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>,
    {{ $t('common.vue_official_starter') }}
  </p>
  
  <p class="read-the-docs">
    {{ $t('common.read_docs_tip') }}
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  padding: 2em;
}
</style>