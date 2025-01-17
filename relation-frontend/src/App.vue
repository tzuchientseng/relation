<template>
  <div id="app">
    <LoginPage></LoginPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPage from './components/auth/LoginPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
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
