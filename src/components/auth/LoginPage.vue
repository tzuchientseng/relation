<template>
  <div v-if="showIcon" class="icon">
    <img src="@/assets/logo.png" alt="Logo" class="icon-img">
  </div>

  <div v-else class="container">
    <transition name="left-slide" appear>
      <div class="left-side">
        <img src="@/assets/logo.png" alt="logo" id="logo">
      </div>
    </transition>

    <transition name="right-slide" appear>
      <div class="right-side">
        <LoginCard 
          :showLogin="showLogin" 
          :isLoading="isLoading" 
          :errorMessage="errorMessage"
          @toggleModal="toggleLoginModal"
          @login="handleLogin"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import LoginCard from './LoginCard.vue';

const store = useStore();
const showLogin = ref(false);
const showIcon = ref(true);
const isLoading = ref(false);
const errorMessage = ref("");

const toggleLoginModal = () => {
  showLogin.value = !showLogin.value;
  errorMessage.value = "";
};

const handleLogin = async (payload: { username: string; password: string }) => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await store.dispatch("auth/login", payload);
    toggleLoginModal();
    showIcon.value = false;
  } catch (error: any) {
    console.error(error);
    errorMessage.value = error?.response?.data?.message || "Login failed. Please try again.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    showIcon.value = false;
  }, 1000);
});
</script>

<style scoped>
.left-slide-enter-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.left-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.right-slide-enter-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.right-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.icon {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.icon-img {
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.left-side {
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

#logo {
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
}

.right-side {
  flex: 3;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    margin-bottom: 70px;
  }

  .left-side {
    height: auto;
    max-height: 30vh;
    /* flex: none; */
  }

  .right-side {
    flex: 3;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
