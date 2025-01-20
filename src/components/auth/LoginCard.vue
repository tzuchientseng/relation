<template>
<div class="login-container">
  <h1>Welcome to Relation!</h1>
  <h2>Connect, Share, and Grow Together</h2>
  <div class="buttons">
    <button class="google">Sign in with Google</button>
    <button class="apple"> Sign in with Apple</button>
    <div class="divider">---- or ----</div>
    <button class="create-account">create account</button>
    <p class="signin">Already have an account? <a href="#">Sign in</a></p>
  </div>
</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  /* background-color: white; */
}

h1 {
  font-size: clamp(1rem, 5vw, 2rem); /* 最小 2rem，螢幕寬度 5vw，最大 5rem */
  font-weight: bold;
  margin-bottom: 1rem;    
}

h2 {
  font-size: clamp(0.5rem, 4vw, 1rem); /* 最小 1.5rem，螢幕寬度 4vw，最大 3rem */
  font-weight: bold;
  margin-bottom: 3rem;    
}

.buttons{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

button{
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button.google {
  background-color: white;
  color: black;
}

button.apple {
  background-color: black;
  color: white;
  border: 1px solid white;
}

button.create-account {
  background-color: #1d9bf0;
  color: white;
}

.divider {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: gray;
}

/* 已有帳號樣式 */
.signin {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.signin a {
  color: #1d9bf0; /* 藍色連結 */
  text-decoration: none;
}
</style>
