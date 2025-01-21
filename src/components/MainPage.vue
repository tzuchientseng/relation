<template>
  <div id="app">
    <div class="container">
      <NavBar></NavBar>
      <div id="posts">Posts</div>
      <div id="news">News</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
 
export default defineComponent({
  name: 'MainPage',
  components: {
   NavBar,
  },
});
 
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000; /* 父容器背景色 */
}

.container {
  /* background-color: gray; */
  display: flex;
  width: 100vw;
  max-width: 80%;
  height: 100%; /* 適當調整高度 */
  justify-content: space-around;
  align-items: center; /* 子容器內容垂直置中 */
  border-radius: 8px; /* 圓角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  padding: 20px;
}
</style>
