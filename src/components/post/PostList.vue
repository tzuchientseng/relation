<template>
  <div>
    <!-- 用 v-for 產生多個 PostItem -->
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PostItem from './PostItem.vue';

const props = defineProps<{
  posts: any[]; // 可以改成貼文的型別 Post[]，但要先在這支檔案 import
}>();
</script>
