<template>
  <div id="app">
    <div class="container">
      <NavBar></NavBar>
      <div id="posts">Posts</div>
      <div id="news">
        <NewsBar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import NewsBar from './NewsBar.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    NavBar,
    NewsBar,
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
  background-color: #000000;
}

.container {
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.logout-btn {
  margin-bottom: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  border: none;
  border-radius: 7px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: linear-gradient(135deg, #ff4b2b, #ff416c);
  transform: scale(1.05);
}

.logout-btn:active {
  transform: scale(0.95);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1200px) and (min-width: 768px) {
  #news{
    display: none;
  }
}

@media (max-width: 768px) {
  #news{
    display: none;
  }
}
</style>
