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
    <a class="menu-item" href="#" @click="showGameModal = true">
      <i class="fas fa-gamepad"></i>
      <span>Game</span>
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-bookmark"></i>
      <span>Bookmarks</span>
    </a>
    <!-- <a class="menu-item" href="#">
      <i class="fas fa-briefcase"></i>
      <span>Jobs</span>
    </a> -->
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
    
    <!-- 遊戲彈窗 -->
    <div v-if="showGameModal" class="game-modal-overlay" @click.self="closeModal">
      <div class="game-modal">
        <button class="close-btn" @click="closeModal">&times;</button>
        <TileMatchingGame />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import AccountMenu from './AccountMenu.vue';
import TileMatchingGame from '../components/game/TileMatchingGame.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    AccountMenu,
    TileMatchingGame,
  },
  setup() {
    const store = useStore();
    const showGameModal = ref(false);

    const closeModal = () => {
      showGameModal.value = false;
    };

    return {
      showGameModal,
      closeModal,
    };
  },
});
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
  font-size: 20px;
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

@media (max-width: 1200px) and (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 10px;
    left: 10px;
    width: auto;
    padding: 15px;
  }

  .menu-item {
    padding: 12px 8px;
    font-size: 18px;
  }

  .menu-item span {
    display: inline;
  }

  .menu-item i {
    margin-right: 8px;
  }

  .post-button {
    width: 50px;
    padding: 8px;
    font-size: 14px;
    border-radius: 15px;
  }

  #nav-item {
    width: 40px;
  }

  .logout-btn {
    padding: 9px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0px;
    width: auto;
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

/* Modal overlay */
.game-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content */
.game-modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  position: relative;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000;
}

</style>
