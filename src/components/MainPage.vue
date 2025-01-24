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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 97vh;
  background-color: #000000; /* 父容器背景色 */
}

.container {
  display: flex;
  width: 100vw;
  max-width: 80%;
  height: 100%;
  justify-content: space-around;
  align-items: center; /* 子容器內容垂直置中 */
  border-radius: 8px; /* 圓角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
  padding: 20px;
}

.logout-btn {
  margin-bottom: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff416c, #ff4b2b); /* 漸層背景 */
  border: none;
  border-radius: 7px; /* 圓角按鈕 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* 添加陰影效果 */
  cursor: pointer;
  transition: all 0.3s ease; /* 添加過渡效果 */
}

.logout-btn:hover {
  background: linear-gradient(135deg, #ff4b2b, #ff416c); /* 懸停時反向漸層 */
  transform: scale(1.05); /* 懸停時放大效果 */
}

.logout-btn:active {
  transform: scale(0.95); /* 點擊時縮小效果 */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 點擊時降低陰影 */
}
</style>
