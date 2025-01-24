<template>
  <div class="profile-container">
    <!-- 外層 Profile Component -->
    <div class="profile-component" @click="toggleMenu">
      <img :src="profileImage" alt="Profile Picture" class="profile-image" />
      <div class="profile-info">
        <h3>{{ name }}</h3>
        <p>{{ username }}</p>
      </div>
      <button @click.stop="handleClick" class="more-options">...</button>
    </div>

    <!-- 彈出的選單，帶過渡效果 -->
    <transition name="menu-slide">
      <div v-if="showMenu" class="menu-dropdown">
        <p>Setting</p>
        <button class="logout-btn" @click="handleLogout">Logout {{ username }}</button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import defaultImagePath from '../assets/male.png'; // 確保正確引入圖片
import { useStore } from 'vuex';

const defaultImage = defaultImagePath; // 預設圖片
const profileImage = ref(defaultImage); // 綁定圖片
const name = ref('Sunny Tseng');
const username = ref('__SunnyTseng__');
const showMenu = ref(false); // 控制選單顯示狀態
const store = useStore();

const handleLogout = () => {
  store.dispatch("auth/logout");
};

// 模擬 API 請求
const fetchProfileImage = async () => {
  try {
    const response = await fetch('https://api.example.com/user/profilePict');
    if (response.ok) {
      const data = await response.json();
      if (data && data.image) {
        profileImage.value = data.image; // 取得有效圖片
      }
    } else {
      console.error('Failed to fetch profile image:', response.status);
    }
  } catch (error) {
    console.error('Error fetching profile image:', error);
  }
};

onMounted(() => {
  fetchProfileImage();
});

// 切換選單顯示狀態
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// 偵測其他按鈕點擊
const handleClick = (event: MouseEvent) => {
  console.log('更多選項按鈕被點擊');
};
</script>

<style scoped>
/* 外層容器 */
.profile-container {
  position: relative;
  display: inline-block;
  margin-top: 30px;
}

/* Profile Component */
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

.more-options {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 選單樣式 */
.menu-dropdown {
  position: absolute;
  bottom: 100%; /* 選單顯示在 Profile 上方 */
  left: 0;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  z-index: 10;
  opacity: 1; /* 配合過渡效果 */
  transform: translateY(0); /* 初始位置 */
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

/* 過渡效果 */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease; /* 平滑過渡效果 */
}

.menu-slide-enter-from {
  opacity: 0; /* 初始透明度 */
  transform: translateY(10px); /* 初始位置稍微下移 */
}

.menu-slide-leave-to {
  opacity: 0; /* 離開時透明 */
  transform: translateY(10px); /* 離開時下移 */
}

.logout-btn {
  padding: 10px;
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

@media (max-width: 768px) {
  .profile-info,

  .more-options {
    display: none;
  }

  .profile-info {
    display: none;
  }
}
</style>
