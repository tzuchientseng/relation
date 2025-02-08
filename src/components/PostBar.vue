<template>
  <div class="post-container">
    <div class="tab-container">
      <div :class="{ active: activeTab === 'for-you' }" id="for-you" @click="activeTab = 'for-you'">
        For You
      </div>
      <div :class="{ active: activeTab === 'following' }" id="following" @click="activeTab = 'following'">
        Following
      </div>
    </div>

    <!-- 根據 activeTab 顯示不同的 PostList -->
    <PostList v-if="activeTab === 'for-you'" :posts="forYouPosts" />
    <PostList v-else :posts="followingPosts" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import PostList from './post/PostList.vue'; // 調整到你實際的路徑

const store = useStore();

// 預設頁籤
const activeTab = ref<'for-you' | 'following'>('for-you');

// 如果需要在載入時呼叫後端 API，就解開下面註解
// onMounted(() => {
//   store.dispatch('postModule/fetchPosts');
// });

const allPosts = computed(() => store.getters['postModule/getAllPosts']);

// 簡單分一半貼文給 for-you, 另一半給 following
const forYouPosts = computed(() =>
  allPosts.value.length
    ? allPosts.value.slice(0, Math.ceil(allPosts.value.length / 2))
    : []
);

const followingPosts = computed(() =>
  allPosts.value.length
    ? allPosts.value.slice(Math.ceil(allPosts.value.length / 2))
    : []
);
</script>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  width: 45%;
  border: 1px solid #2F3336;
}

.tab-container {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #2F3336;
}

#for-you,
#following {
  width: 50%;
  text-align: center;
  line-height: 50px;
  color: #71767B;
  cursor: pointer;
  transition: background-color 0.3s;
}

#for-you {
  border-right: 1px solid #2F3336;
}

.active {
  font-weight: bold;
  color: #000;
  border-bottom: 2px solid #1DA1F2; /* Twitter blue */
}

@media (max-width: 1200px) and (min-width: 768px) {
.post-container {
  width: 70%;
  margin-left: auto; /* 靠右對齊 */
}
}

@media (max-width: 768px) {
.post-container {
  width: 75%;
  margin-left: auto; /* 靠右對齊 */
}
}
</style>
