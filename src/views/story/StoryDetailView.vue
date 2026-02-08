<template>
  <div class="detail-paper-page">
    
    <nav class="paper-nav">
      <div class="nav-left" @click="goBack">
        <i class="bi bi-arrow-left"></i>
        <span>{{ $t('detail_paper.nav_back') }}</span>
      </div>
      <div class="nav-right">
        <button class="icon-btn"><i class="bi bi-three-dots"></i></button>
      </div>
    </nav>

    <div class="scroll-wrapper">
      <div class="art-container">
        
        <div class="art-frame">
          <div class="media-box">
            <img :src="post.image" class="main-img" alt="Story">
            <div v-if="post.type === 'video'" class="play-mark">
              <i class="bi bi-play-fill"></i>
            </div>
          </div>
          <div class="art-label" v-if="post.location">
            <span class="vertical-line"></span>
            <span class="label-text">{{ post.location }}</span>
          </div>
        </div>

        <div class="inscription-area">
          
          <div class="author-row" @click="$router.push('/user/profile')">
            <img :src="post.avatar" class="author-face">
            <div class="author-info">
              <div class="name">{{ post.user }}</div>
              <div class="sub">{{ $t('detail_paper.date_prefix') }} {{ post.date }} {{ $t('detail_paper.date_suffix') }}</div>
            </div>
            <button class="follow-ink-btn" :class="{active: isFollowing}" @click.stop="toggleFollow">
              {{ isFollowing ? $t('detail_paper.btn_following') : $t('detail_paper.btn_follow') }}
            </button>
          </div>

          <div class="content-body">
            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-text">{{ post.desc }}</p>
            <div class="tags-group">
              <span v-for="tag in post.tags" :key="tag" class="ink-tag"># {{ tag }}</span>
            </div>
          </div>

          <div class="comments-scroll">
            <div class="comment-divider">
              <span>{{ $t('detail_paper.comment_title') }}</span>
            </div>
            <div v-for="comment in comments" :key="comment.id" class="comment-item">
              <img :src="comment.avatar" class="cmt-avatar">
              <div class="cmt-content">
                <span class="cmt-user">{{ comment.user }}</span>
                <span class="cmt-text">{{ comment.content }}</span>
              </div>
            </div>
          </div>

          <div class="interaction-footer">
            <div class="seal-action" @click="toggleLike">
              <div class="seal-box" :class="{ stamped: post.isLiked }">
                {{ post.isLiked ? $t('detail_paper.seal_liked') : $t('detail_paper.seal_like') }}
              </div>
              <span class="count">{{ post.likes }}</span>
            </div>
            
            <div class="input-ink">
              <input v-model="newComment" :placeholder="$t('detail_paper.input_ph')" @keyup.enter="sendComment">
              <button class="send-ink-btn" @click="sendComment">
                <i class="bi bi-send"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const isFollowing = ref(false)
const newComment = ref('')
const post = ref({})
const comments = ref([])

// [Database] 模拟数据加载 (根据语言切换)
const loadMockData = () => {
  const isEn = locale.value === 'en'
  
  post.value = {
    id: 1,
    type: 'image',
    title: isEn ? 'Hongcun after rain is ink painting itself' : '雨后的宏村，简直就是水墨画本人',
    desc: isEn 
      ? 'Walking on the bluestone road, watching the horse-head walls looming in the mist. Time seems to stand still here.\n\nMy foreign friend asked if this is CG effect, I told him, this is China Style.'
      : '走在青石板路上，看着马头墙在雾气中若隐若现。这里的时间仿佛是静止的，每一帧都像是从古画里走出来的。\n\n外国人朋友问我这是不是CG特效，我告诉他，这就是China Style。',
    image: 'https://images.unsplash.com/photo-1629737976779-797740f93026?w=800&q=80',
    user: 'Traveler_Lee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lee',
    location: isEn ? 'Anhui · Hongcun' : '安徽 · 宏村',
    date: isEn ? 'Spring 2025' : '乙巳年 · 春',
    tags: isEn ? ['Neo-Chinese', 'Architecture', 'Travel'] : ['新中式', '古建筑', '旅行摄影'],
    likes: 1208,
    isLiked: false
  }

  comments.value = [
    { id: 1, user: 'Jack', content: isEn ? 'Too beautiful! Like a painting.' : 'Too beautiful! 像画一样。', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack' },
    { id: 2, user: 'Art_Fan', content: isEn ? 'Great composition, saved.' : '构图很有意境，收藏了。', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Art' }
  ]
}

watch(locale, loadMockData)

const goBack = () => {
  if (window.history.length > 1) router.back()
  else router.push('/story')
}

const toggleFollow = () => {
  isFollowing.value = !isFollowing.value
  ElMessage({ 
    message: isFollowing.value ? t('detail_paper.msg_followed') : t('detail_paper.msg_unfollowed'), 
    type: 'success', 
    plain: true 
  })
}

const toggleLike = () => {
  post.value.isLiked = !post.value.isLiked
}

const sendComment = () => {
  if (!newComment.value.trim()) return
  comments.value.push({
    id: Date.now(),
    user: t('detail_paper.me'),
    content: newComment.value,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'
  })
  newComment.value = ''
  
  setTimeout(() => {
    const el = document.querySelector('.comments-scroll')
    if (el) el.scrollTop = el.scrollHeight
  }, 100)
}

onMounted(() => {
  loadMockData()
  console.log('Detail loaded:', route.params.id)
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700&display=swap');

$ink-black: #2c2c2c;
$paper-color: #f4f0e6;
$seal-red: #b52a1c;

.detail-paper-page {
  background-color: $paper-color;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dcbba3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
  padding-top: 60px;
  font-family: 'Noto Serif SC', serif;
  color: $ink-black;
  display: flex; justify-content: center; align-items: center;
}

/* 导航 */
.paper-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 60px;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 30px; z-index: 100;
  background: rgba(244, 240, 230, 0.9); backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  
  .nav-left { 
    display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px; font-weight: bold;
    i { font-size: 18px; }
    &:hover { opacity: 0.7; }
  }
  .icon-btn { background: none; border: none; font-size: 20px; color: $ink-black; cursor: pointer; }
}

/* 主体容器 */
.art-container {
  width: 90vw; max-width: 1100px; height: 85vh;
  background: #fff; box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  display: flex; overflow: hidden; border-radius: 4px; /* 稍微圆角，不像手机那么圆 */
}

/* 左侧：画 */
.art-frame {
  flex: 1.5; background: #1a1a1a; position: relative;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  
  .media-box {
    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
    img { max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  }
  
  .art-label {
    position: absolute; bottom: 30px; left: 30px; color: rgba(255,255,255,0.8);
    display: flex; align-items: center; gap: 10px;
    .vertical-line { width: 1px; height: 40px; background: rgba(255,255,255,0.5); }
    .label-text { writing-mode: vertical-rl; letter-spacing: 2px; font-size: 12px; }
  }
}

/* 右侧：题跋 */
.inscription-area {
  flex: 1; padding: 30px; display: flex; flex-direction: column;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  max-width: 450px; min-width: 350px; position: relative;
}

/* 作者 */
.author-row {
  display: flex; align-items: center; gap: 12px; margin-bottom: 25px; cursor: pointer;
  .author-face { width: 44px; height: 44px; border-radius: 50%; border: 2px solid $ink-black; }
  .author-info {
    flex: 1;
    .name { font-weight: bold; font-size: 15px; }
    .sub { font-size: 11px; color: #666; font-family: sans-serif; }
  }
  .follow-ink-btn {
    border: 1px solid $ink-black; background: transparent; padding: 4px 14px;
    font-size: 12px; color: $ink-black; cursor: pointer; transition: 0.3s;
    &:hover { background: $ink-black; color: #fff; }
    &.active { border-color: #999; color: #999; }
  }
}

/* 正文 */
.content-body {
  flex-shrink: 0; margin-bottom: 20px;
  .post-title { font-size: 20px; font-weight: bold; margin-bottom: 15px; font-family: sans-serif; line-height: 1.4; }
  .post-text { font-size: 15px; line-height: 1.8; color: #444; margin-bottom: 15px; white-space: pre-wrap; }
  .tags-group {
    display: flex; flex-wrap: wrap; gap: 8px;
    .ink-tag { font-size: 12px; color: $seal-red; cursor: pointer; &:hover { text-decoration: underline; } }
  }
}

/* 评论区 */
.comments-scroll {
  flex: 1; overflow-y: auto; padding-right: 5px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #ddd; }
  
  .comment-divider { 
    text-align: center; margin: 15px 0; position: relative; 
    span { background: #fff; padding: 0 10px; font-size: 12px; color: #999; position: relative; z-index: 1; }
    &::after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: #eee; }
  }
  
  .comment-item {
    display: flex; gap: 10px; margin-bottom: 15px;
    .cmt-avatar { width: 28px; height: 28px; border-radius: 50%; }
    .cmt-content {
      font-size: 13px; line-height: 1.5;
      .cmt-user { font-weight: bold; margin-right: 6px; color: #555; }
      .cmt-text { color: #333; }
    }
  }
}

/* 底部互动 */
.interaction-footer {
  margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1);
  display: flex; align-items: center; gap: 15px;
  
  .seal-action {
    display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer;
    .seal-box {
      width: 40px; height: 40px; border: 2px solid $ink-black; border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Ma Shan Zheng'; font-size: 14px; transition: 0.3s;
      &.stamped { background: #fff; border-color: #fff; color: $seal-red; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transform: rotate(-8deg); border: 2px solid $seal-red; }
    }
    .count { font-size: 10px; color: #999; }
  }
  
  .input-ink {
    flex: 1; display: flex; align-items: center; background: rgba(0,0,0,0.03); border-radius: 4px; padding: 0 10px; height: 40px;
    input { flex: 1; border: none; background: transparent; outline: none; font-size: 13px; font-family: 'Noto Serif SC', serif; }
    .send-ink-btn { border: none; background: transparent; color: $ink-black; cursor: pointer; font-size: 16px; &:hover { transform: scale(1.1); } }
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .detail-paper-page { display: block; height: auto; }
  .art-container { flex-direction: column; width: 100%; height: auto; box-shadow: none; border-radius: 0; margin-bottom: 0; }
  .art-frame { height: 50vh; }
  .inscription-area { min-width: 100%; height: auto; min-height: 50vh; }
}
</style>