<template>
  <div id="app">
    <LoginPage v-if="!isAuthenticated"></LoginPage>
    <MainPage v-else></MainPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import LoginPage from './components/auth/LoginPage.vue';
import MainPage from './components/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
    MainPage,
  },
  setup() {
    const store = useStore();

    // 使用 Vuex 的 getter 判斷是否已經登入
    const isAuthenticated = computed(() => store.getters.isAuthenticated);

    return {
      isAuthenticated,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* 移除預設的 margin 和 padding，防止留白 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

