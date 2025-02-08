<template>
  <div class="main-page">
    <!-- Initial Logo View -->
    <div v-if="!showAnimatedText && !showApp" class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>

    <!-- Animated Text View -->
    <div v-if="showAnimatedText && !showApp" class="animated-text">
      <h1>{{ displayedText }}</h1>
    </div>

    <!-- Full Application View -->
    <transition name="fade">
      <div v-if="showApp" class="container">
        <NavBar />
        <PostBar />
        <div id="news">
          <NewsBar />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import NavBar from './NavBar.vue';
import NewsBar from './NewsBar.vue';
import PostBar from './PostBar.vue';

// 維持原本的變數 / 狀態
const displayedText = ref('');
const showAnimatedText = ref(false);
const showApp = ref(false);

const store = useStore();
const userName = computed(() => store.state.auth.userName?.trim() || "Guest");

// 打字動畫
const animateText = (text: string) => {
  let i = 0;
  displayedText.value = "";
  const interval = setInterval(() => {
    displayedText.value += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, 50);
};

onMounted(() => {
  setTimeout(() => {
    showAnimatedText.value = true;

    // animateText(`Hello, ${userName}!`);
    animateText(`Hello, ${userName.value}!`);

    setTimeout(() => {
      showApp.value = true;
    }, 1200);
  }, 1000);
});
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 97vh; */
  min-height: 97vh;
  background-color: #000000;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.logo {
  width: 150px;
  animation: fadeIn 1s ease-in-out;
}

.animated-text {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.container {
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media (max-width: 1200px) {
  #news {
    display: none;
  }
}
@media (max-width: 768px) {
  #news {
    display: none;
  }
}
</style>
