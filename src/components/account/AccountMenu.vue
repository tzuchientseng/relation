<template>
  <div class="profile-container">
    <!-- Profile Component -->
    <div class="profile-component" @click="toggleMenu">
      <img :src="profileImage" alt="Profile Picture" class="profile-image" />
      <div class="profile-info">
        <h3>{{ userName }}</h3>
        <p>_{{ Account }}_</p>
      </div>

      <!-- Menu Dropdown -->
      <div 
        class="menu-dropdown" 
        :class="{ 'active': isMenuVisible }"
      >
        <AccountProfile 
          :name="userName"
          :profileImage="profileImage"
          :friendsCount="friendsCount"
        />
        <p>Setting</p>
        <button class="logout-btn" @click="handleLogout">Logout {{ userName }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import defaultImagePath from '@/assets/male.png';
import AccountProfile from './AccountProfile.vue';

const store = useStore();
const isMenuVisible = ref(false);
const friendsCount = ref(0);

// 從 Vuex 取得 `account` 和 `userName`
const Account = computed(() => store.state.auth.account?.trim() || "_Account_");
const userName = computed(() => store.state.auth.userName?.trim() || "Guest");

// 計算 profileImage，若 `avatar` 為空則使用 `defaultImagePath`
const profileImage = computed(() => {
  const avatar = store.state.auth.avatar?.trim();
  return avatar ? avatar : defaultImagePath;
});

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const handleClickOutside = (event: Event) => {
  const profileComponent = document.querySelector('.profile-component');
  if (profileComponent && !profileComponent.contains(event.target as Node)) {
    isMenuVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

const handleLogout = () => {
  store.dispatch("auth/logout");
};
</script>

<style scoped>
.profile-container {
  position: relative;
  display: inline-block;
  margin-top: 30px;
}

.profile-component {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h3 {
  margin: 0;
  font-size: 1rem;
}

.profile-info p {
  margin: 0;
  color: gray;
}

.menu-dropdown {
  position: absolute;
  bottom: 100%;
  left: 0;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  z-index: 10;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-dropdown.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.profile-component:hover .menu-dropdown {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.menu-dropdown p {
  margin: 0;
  padding: 10px;
  cursor: pointer;
}

.menu-dropdown p:hover {
  background: #333;
  border-radius: 5px;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}

.menu-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.logout-btn {
  padding: 10px;
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

@media (max-width: 768px) {
  .profile-info,

  .more-options {
    display: none;
  }

  .profile-info {
    display: none;
  }

  .logout-btn {
    font-size: 0.7rem;

  }
}
</style>
