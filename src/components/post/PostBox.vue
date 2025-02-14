<!-- 
TODO: 

- Loaging spinner
- Word limit spinner
- Drafts function
- icon function:
    "fas fa-image",
    "fas fa-chart-bar",
    "fas fa-list-ul",
    "fas fa-smile",
    "fas fa-clock",
    "fas fa-map-marker-alt",
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

    <div v-if="showImageUpload" class="image-upload-section">
      <div class="upload-header">
        <label for="file-upload" class="file-label">📁 Choose File </label>
        <input type="file" id="file-upload" accept="image/*" multiple class="file-input" @change="handleFileUpload" />
        <button class="close-upload-btn" @click="showImageUpload = false">✖</button>
      </div>


      <div class="image-preview-container" v-if="imagePreviews.length">
        <div v-for="(image, index) in imagePreviews" :key="index" class="image-preview">
          <img :src="image" alt="uploaded image" class="uploaded-image" />
          <button class="remove-image-btn" @click="removeImage(index)">✖</button>
        </div>
      </div>
    </div>

    <div class="post-actions">
      <div class="icons">
        <button class="icon-btn" @click="toggleImageUpload">
          <i class="fas fa-image"></i>
        </button>
      </div>
      <button class="post-btn" :disabled="!postText.trim() && imagePreviews.length === 0" @click="handlePost">
        <span v-if="isLoading" class="spinner"></span>
        <span v-else>Post</span>
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
const imagePreviews = ref([]);
const imageFiles = ref([]);
const showImageUpload = ref(false);
const isLoading=ref(false);

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

const toggleImageUpload = () => {
  showImageUpload.value = !showImageUpload.value;
};

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviews.value.push(e.target.result);
        imageFiles.value.push(file);
      };
      reader.readAsDataURL(file);
    }
  });

  event.target.value = "";
};

const removeImage = (index) => {
  imagePreviews.value.splice(index, 1);
  imageFiles.value.splice(index, 1);
};

const handlePost = async () => {
  if (!postText.value.trim() && imageFiles.value.length === 0) return;

  isLoading.value = true;

  try {
    await store.dispatch("postModule/createPost", {
      content: postText.value,
      images: imageFiles.value,
    });

    postText.value = "";
    imagePreviews.value = [];
    imageFiles.value = [];
    showImageUpload.value = false;
    adjustHeight();
  } catch (error) {
    console.error("Error posting:", error);
  } finally {
    isLoading.value = false;
  }
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
  overflow-y: hidden;
}

.image-upload-section {
  margin-top: 15px;
  padding: 10px;
  background: #1a1a1a;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #333;
}

.upload-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-upload-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-input {
  display: none;
}

.file-label {
  display: inline-block;
  background: #222;
  color: #ccc;
  padding: 2px 3px;
  border-radius: 5px;
  border: 1px solid #444;
  cursor: pointer;
  text-align: center;
}

.file-label:hover {
  background: #333;
}

.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.image-preview {
  position: relative;
  width: 100px;
  height: 100px;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.remove-image-btn {
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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

.spinner {
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .post-input {
    min-height: 40px;
  }
}
</style>
