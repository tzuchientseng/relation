<template>
  <div class="post-container" :class="{ expanded: isScrollingDown, 'with-margin': !isScrollingDown }">
    <div class="tab-container" v-if="!isScrollingDown">
      <div :class="{ active: activeTab === 'for-you' }" id="for-you" @click="activeTab = 'for-you'">
        For You
      </div>
      <div :class="{ active: activeTab === 'following' }" id="following" @click="activeTab = 'following'">
        Following
      </div>
    </div>

    <!-- 貼文列表 -->
    <PostList v-if="activeTab === 'for-you'" :posts="forYouPosts" />
    <PostList v-else :posts="followingPosts" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { useStore } from 'vuex';
import PostList from './post/PostList.vue';

const store = useStore();

// 當前的 tab 狀態
const activeTab = ref<'for-you' | 'following'>('for-you');

// 取得 Vuex 貼文數據
const allPosts = computed(() => store.getters['postModule/getAllPosts']);

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

// 注入滾動狀態
const isScrollingDown = inject('isScrollingDown', ref(false));
</script>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
  width: 45%;
  height: auto;
  border: 1px solid #2F3336;
  transition: all 0.3s ease-in-out;
}

/* 向下滾動時，撐滿整個畫面 */
.post-container.expanded {
  width: 50vw;
  height: 100vh;
  border: none;
  padding-top: 0;
  margin-top: 0;
  margin-left: 0; /* 向下滾動時沒有 margin */
}

/* 向上滾動時，恢復 margin */
.post-container.with-margin {
  margin-left: 46px;
}

/* tab 控制 */
.tab-container {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #2F3336;
}

/* 讓 Tab 只有在未滾動時顯示 */
.post-container.expanded .tab-container {
  display: none;
}

/* Tab 樣式 */
#for-you,
#following {
  width: 50%;
  text-align: center;
  line-height: 50px;
  color: #71767B;
  cursor: pointer;
}

.active {
  font-weight: bold;
  color: #000;
  border-bottom: 2px solid #1DA1F2;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .post-container.expanded {
   width: 90vw; 
  }

  .post-container {
    width: 75%;
  }
}
</style>
