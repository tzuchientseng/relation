<template>
  <div>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import PostItem from './PostItem.vue';

const store = useStore();

const posts = computed(() => store.state.postModule.posts);

onMounted(() => {
  store.dispatch('postModule/fetchPosts');
});
</script>
