<template>
  <div class="sidebar">
    <a class="menu-item" href="#">
      <i class="fas fa-home"></i>
      Home
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-search"></i>
      Explore
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-bell"></i>
      Notifications
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-envelope"></i>
      Messages
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-brain"></i>
      Grok
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-bookmark"></i>
      Bookmarks
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-briefcase"></i>
      Jobs
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-users"></i>
      Communities
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-star"></i>
      Premium
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-check-circle"></i>
      Verified Orgs
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-user"></i>
      Profile
    </a>
    <a class="menu-item" href="#">
      <i class="fas fa-ellipsis-h"></i>
      More
    </a>
    <a class="post-button" href="#">Post</a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000;
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
  padding: 17px 0;
  width: 100%;
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
  margin-top: 20%;
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
</style>

