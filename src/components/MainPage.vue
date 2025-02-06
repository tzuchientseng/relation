<template>
  <div id="app">
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
import { ref, onMounted, defineProps } from 'vue';
import NavBar from './NavBar.vue';
import NewsBar from './NewsBar.vue';
import PostBar from './PostBar.vue';

const props = defineProps<{ name?: string }>();
const userName = props.name?.trim() || "Guest";

const displayedText = ref('');
const showAnimatedText = ref(false);
const showApp = ref(false);

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

    animateText(`Hello, ${userName}!`);

    setTimeout(() => {
      showApp.value = true;
    }, 1200);
  }, 1000);
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

/* Centered Logo */
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

/* Animated Text */
.animated-text {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

/* Full App Container */
.container {
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  /* transform: translateY(0px); */
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  /* transform: none; */
}

/* Responsive: Hide news on smaller screens */
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
