<template>
  <div class="account-profile">
    <p class="setting-style" @click.stop="toggleOverlay">Account Profile</p>

    <div v-if="showOverlay" class="overlay-div">
      <div class="overlay-content">
        <img :src="computedProfileImage" alt="Profile Picture" class="overlay-profile-image" />
        <h4>{{ computedName }}</h4>
        <p>Friends: {{ computedFriendCount }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import defaultImagePath from '@/assets/male.png';

const showOverlay = ref(false);

const toggleOverlay = () => {
  showOverlay.value = !showOverlay.value;
};

const props = defineProps({
  profileImage: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "Guest",
  },
  friendCount: {
    type: Number,
    default: 0,
  },
});

// 計算顯示圖片，若 profileImage 為空則使用預設圖片
const computedProfileImage = computed(() => props.profileImage || defaultImagePath);
const computedName = computed(() => props.name || "Guest");
const computedFriendCount = computed(() => props.friendCount || 0);
</script>

<style scoped>
.setting-style {
  margin: 0;
  padding: 10px;
  cursor: pointer;
  color: white;
  background: linear-gradient(135deg, #4a90e2, #007aff);
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s ease;
}

.setting-style:hover {
  background: linear-gradient(135deg, #007aff, #4a90e2);
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.overlay-div {
  position: fixed;
  top: 10%;
  left: 180%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  width: 300px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.overlay-div:hover {
  transform: translate(-50%, -50%) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.overlay-content {
  text-align: center;
}

.overlay-profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #4a90e2;
}

h4 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

p {
  margin: 5px 0;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .overlay-div {
    top: -90%;
    left: 80%;
    width: 90%;
  }

  .overlay-profile-image {
    width: 80px;
    height: 80px;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
