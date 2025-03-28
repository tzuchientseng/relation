<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.user.avatar" alt="" class="avatar" />
      <div class="post-info">
        <strong>{{ post.user.name }}</strong>
        <span>@{{ post.username }}</span>
        <span class="post-time"> ● {{ formatDate(post.created_at) }}</span>
      </div>
    </div>

    <p class="post-content">{{ post.content }}</p>

    <div v-if="post.media && post.media.length > 0">
      <img v-if="currentMedia" :src="currentMedia.url" :alt="currentMedia.type" class="post-media" />
      <div class="carousel" v-if="post.media.length > 1">
        <button @click="prevMedia">‹</button>
        <button @click="nextMedia">›</button>
      </div>
    </div>

    <div class="post-actions">
      <button
        @click="likePost(post.id)"
        :class="{ liked: post.is_liked }"
      >
        ❤️ {{ post.likes }}
      </button>
      <!-- <button
        @click="retweetPost(post.id)"
        :class="{ retweeted: post.is_retweeted }"
      >
        🔁 {{ post.retweets }}
      </button> -->
      <!-- <button @click="deletePost(post.id)">🗑️</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';

import type { Post } from '@/store/modules/postModule';

const props = defineProps<{ post: Post }>();

const store = useStore();
const currentIndex = ref(0);
const currentMedia = ref(props.post.media && props.post.media.length > 0 ? props.post.media[0] : null);

function formatDate(dateStr: string): string {
  const past = new Date(dateStr).getTime();
  const now = Date.now();
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

function prevMedia() {
  if (props.post.media && currentIndex.value > 0) {
    currentIndex.value--;
    currentMedia.value = props.post.media[currentIndex.value];
  }
}

function nextMedia() {
  if (props.post.media && currentIndex.value < props.post.media.length - 1) {
    currentIndex.value++;
    currentMedia.value = props.post.media[currentIndex.value];
  }
}

// Dispatch
function likePost(postId: string) {
  store.dispatch('postModule/likePost', postId);
}
function retweetPost(postId: string) {
  store.dispatch('postModule/retweetPost', postId);
}
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

/* arrow */
.carousel > button {
  font-size: 170%;
  margin: 0 1%;
}

</style>
