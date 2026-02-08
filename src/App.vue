<template>
  <router-view />

  <AIAssistant />
</template>

<script setup>
import AIAssistant from '@/components/AIAssistant.vue'
</script>

<style>
/* 全局样式兜底 */
body {
  margin: 0;
  overflow-x: hidden; /* 防止横向滚动条 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* --- 图片懒加载过渡动画 (v-lazy指令用) --- */
.img-lazy-loading {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background-color: #f0f2f5; /* 没加载出来时显示浅灰色背景占位 */
}

.img-lazy-loaded {
  opacity: 1;
}
</style>