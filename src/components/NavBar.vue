<template>
  <div class="sidebar">
    <img id="nav-item" src="../assets/logo.png" alt="icon">
    <a class="menu-item" href="#">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-search"></i>
      <span>Explore</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-bell"></i>
      <span>Notifications</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-envelope"></i>
      <span>Messages</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-brain"></i>
      <span>Grok</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-bookmark"></i>
      <span>Bookmarks</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-briefcase"></i>
      <span>Jobs</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-users"></i>
      <span>Communities</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-star"></i>
      <span>Premium</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-user"></i>
      <span>Profile</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-ellipsis-h"></i>
      <span>More</span>
    </a>
    <a class="post-button" href="#">Post</a>
    <AccountMenu />
    <!-- <button class="logout-btn" @click="handleLogout">Logout</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import AccountMenu from './AccountMenu.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
   AccountMenu ,
  },

  setup() {
    const store = useStore();

    const handleLogout = () => {
      store.dispatch("auth/logout");
    };

    return {
      handleLogout,
    };
  },
});

const store = useStore();

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #fff;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 17px 10px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-size: 22px;
}

.menu-item i {
  margin-right: 10px;
}

.menu-item:hover {
  background-color: #1a1a1a;
}

.post-button {
  background-color: #fff;
  color: #000;
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
}

.post-button:hover {
  background-color: #ddd;
}

#nav-item {
  margin-top: 20px;
  width: 50px;
}

.logout-btn {
  margin-top: 10px;
  margin-bottom: 100px;
  padding: 10px 10px;
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
  .sidebar {
    position: fixed;
    left: 10px;
    width: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .menu-item {
    padding: 10px;
  }

  .menu-item span {
    display: none;
  }

  .menu-item i {
    margin-right: 0;
  }

  .post-button {
    padding: 5px;
    font-size: 0.7rem;
    width: 40px;
  }
  .logout-btn {
    padding: 7px;
    font-size: 0.7rem;
  }
}

</style>
