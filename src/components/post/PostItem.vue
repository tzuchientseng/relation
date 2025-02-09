<!-- 
# TODO:

- 需要顯示所有照片
- RWD: post-info

-->
<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.avatar" alt="" class="avatar" />
      <div class="post-info">
        <strong>{{ post.username }}</strong>
        <span>@{{ post.userId }}</span>
        <span class="post-time"> ● {{ formatDate(post.createTime) }}</span>
      </div>
    </div>

    <p class="post-content">{{  post.content }}</p>

    <div v-if="post.media && post.media.length">
      <img :src="post.media[0]" alt="Post Media" class="post-media">
    </div>

    <div class="post-actions">
      <button @click="likePost(post.id)" :class="{ liked: post.isLiked }">❤️ {{ post.likes }}</button>
      <button @click="retweetPost(post.id)" :class="{ retweeted: post.isRetweeted }">🔁{{ post.retweets }}</button>
      <button @click="deletePost(post.id)">🗑️</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from 'vuex';

// props from Parent
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const store = useStore();

function formatDate(date: Date | string): string {
  // return new Date(date).toLocaleString();
  const past = new Date(date).getTime();
  const now = Date.now();
  const diffInSeconds = Math.floor((now - past) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} days ago`;
}

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
</script>

<style scoped>
.post {
  background-color: #000000;
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  margin-bottom: 10px
}

.post-header {
  display: flex;
  align-items: center;
}

.avatar{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
}

.post-media {
  width: 100%;
  /* max-height: 400px; */
  border-radius: 7px;
}

.post-info {
  color: white;
  display: flex;
  gap: 10px;
}

.post-content {
  color: white;
  text-align: left;
  padding: 10px;
}

.post-time {
    margin-top: 2px;
    font-size: 0.9rem;
    color: #777;
    font-style: italic;
}

.post-actions {
  display: flex;
  gap: 10px;
}

button {
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 17px;
  margin: 2px;
}

.liked {
  color: red;
}

.retweeted {
  color: green;
}

@media (max-width: 480px) {

.post-info {
  font-size: 70%;
}

.post-time {
  font-size: 70%;
}
}

.post-content {
  font-size: 77%;
}
</style>
