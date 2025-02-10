<!-- 
TODO: 

- Word limit spinner
- Drafts function

-->
<template>
  <div class="post-box">
    <div class="user-info">
      <img :src="userImage" alt="User avatar" class="avatar" />
      <textarea
        v-model="postText"
        placeholder="What is happening?!"
        class="post-input"
        rows="1"
        ref="textareaRef"
        @input="adjustHeight"
      />
    </div>

    <div class="post-actions">
      <div class="icons">
        <button v-for="icon in icons" :key="icon" class="icon-btn">
          <i :class="icon"></i>
        </button>
      </div>
      <button class="post-btn" :disabled="!postText.trim()" @click="postTweet">
        Post
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useStore } from 'vuex';
import defaultImagePath from '@/assets/male.png';

const store = useStore();

const userImage = computed(() => {
  const avatar = store.state.auth.avatar?.trim();
  return avatar ? avatar : defaultImagePath;
});

const postText = ref("");
const textareaRef = ref(null);

const adjustHeight = () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = "auto";
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
    }
  });
};

onMounted(() => {
  adjustHeight();
});

const icons = ref([
  "fas fa-image",
  "fas fa-chart-bar",
  "fas fa-list-ul",
  "fas fa-smile",
  "fas fa-clock",
  "fas fa-map-marker-alt",
]);

const postTweet = () => {
  alert(`Relation posted: ${postText.value}`);
  postText.value = "";
  adjustHeight();
};
</script>

<style scoped>
.post-box {
  width: auto;
  margin: 10px;
  background: #000;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
}

.user-info {
  margin: 20px;
  display: flex;
  align-items: start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-input {
  flex: 1;
  margin-top: 7px;
  min-height: 250px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  outline: none;
  resize: none;
  overflow-y: hidden; /* 隱藏滾動條 */
}

.post-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.icons {
  display: flex;
  gap: 10px;
}

.icon-btn {
  background: none;
  border: none;
  color: #1da1f2;
  font-size: 18px;
  cursor: pointer;
}

.post-btn {
  background: #1da1f2;
  border: none;
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}

.post-btn:disabled {
  background: #3a5469;
  cursor: not-allowed;
}
</style>
