<template>
  <div class="profile-component">
    <!-- 使用 :src 動態綁定圖片 -->
    <img :src="profileImage" alt="Profile Picture" class="profile-image" />
    <div class="profile-info">
      <h3>{{ name }}</h3>
      <p>{{ username }}</p>
    </div>
    <button @click="handleClick" class="more-options">...</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import defaultImagePath from '../assets/male.png'; // 確保正確引入圖片

const defaultImage = defaultImagePath; // 預設圖片
const profileImage = ref(defaultImage); // 綁定圖片
const name = ref('Sunny Tseng');
const username = ref('__SunnyTseng__');

// 模擬 API 請求
const fetchProfileImage = async () => {
  try {
    const response = await fetch('https://api.example.com/user/profilePict');
    if (response.ok) {
      const data = await response.json();
      if (data && data.image) {
        profileImage.value = data.image; // 僅覆蓋有效圖片
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

const handleClick = () => {
  console.log('More options clicked');
};
</script>

<style scoped>
.profile-component {
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
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

@media (max-width: 600px) {
  .profile-info, 
  .more-options {
    display: none;
  }
}
</style>
