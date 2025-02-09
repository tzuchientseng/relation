<template>
  <div>
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PostItem from './PostItem.vue';

const props = defineProps<{
  posts: any[];
}>();
</script>
