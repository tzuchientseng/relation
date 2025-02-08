<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.avatar" alt="User Avatar" class="avatar" />
      <div class="post-info">
        <strong>{{ post.username }}</strong>
        <span>@{{ post.userId }}</span>
        <span class="post-time">{{ formatDate(post.createTime) }}</span>
      </div>
    </div>

    <p class="post-content">{{ post.content }}</p>

    <!-- 如果有 media，就顯示第一張圖（或看你要顯示全部也行） -->
    <div v-if="post.media && post.media.length">
      <img :src="post.media[0]" alt="Post Media" class="post-media" />
    </div>

    <div class="post-actions">
      <button @click="likePost(post.id)" :class="{ liked: post.isLiked }">
        ❤️ {{ post.likes }}
      </button>
      <button @click="retweetPost(post.id)" :class="{ retweeted: post.isRetweeted }">
        🔁 {{ post.retweets }}
      </button>
      <button @click="deletePost(post.id)">
        🗑️
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from 'vuex';

// 接收父層的單個 post
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const store = useStore();

// 按讚
function likePost(postId: string) {
  store.dispatch('postModule/likePost', postId);
}

// 轉推
function retweetPost(postId: string) {
  store.dispatch('postModule/retweetPost', postId);
}

// 刪除
function deletePost(postId: string) {
  store.dispatch('postModule/deletePost', postId);
}

// 日期格式化
function formatDate(date: Date | string) {
  return new Date(date).toLocaleString();
}
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background: white;
  margin-bottom: 15px;
}

.post-header {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-info {
  display: flex;
  flex-direction: column;
}

.post-content {
  margin: 10px 0;
}

.post-media {
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
}

.post-actions {
  display: flex;
  gap: 10px;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.liked {
  color: red;
}

.retweeted {
  color: green;
}
</style>
