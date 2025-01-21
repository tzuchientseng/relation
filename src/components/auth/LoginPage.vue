<template>
  <div class="container">
    <div class="left-side">
      <img src="../../assets/logo.png" alt="logo" id="logo">
    </div>
    <div class="right-side">
      <LoginCard></LoginCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginCard from './LoginCard.vue';

</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.left-side {
  flex: 4;
  margin-top: 0px;
  display: flex;
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
}

#logo {
  max-width: 50%; /* 確保圖片不會超出父容器 */
  max-height: 50%; /* 確保圖片高度不會超過容器 */
  object-fit: contain; /* 確保圖片按比例縮放，適應容器 */
}

.right-side {
  flex: 3;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* background-color: #f0f0f0; */
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    margin-bottom: 70px;
  }

  .right-side {
    align-items: center;
  }
}
</style>
