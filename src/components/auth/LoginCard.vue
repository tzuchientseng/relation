<template>
  <div class="login-container">
    <h1>Welcome to Relation!</h1>
    <h2>Connect, Share, and Grow Together</h2>

    <div class="buttons">
      <button class="google">Sign in with Google</button>
      <button class="apple">Sign in with Apple</button>
      <button class="login" @click="$emit('toggleModal')">Login</button>
      <div class="divider">---- or ----</div>
      <p class="signin">No account yet?</p>
      <button class="create-account">Create Account</button>
    </div>

    <div v-if="showLogin" class="modal-overlay" @click.self="$emit('toggleModal')">
      <div class="modal-content">
        <button class="close-btn" @click="$emit('toggleModal')">&times;</button>
        <h3>Log In</h3>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <form @submit.prevent="$emit('login', { username: account, password: password })">
          <div class="form-group">
            <label for="account">Account</label>
            <input
              type="text"
              id="account"
              v-model="account"
              placeholder="guest"
              required
              autocomplete="username"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="guest"
              required
              autocomplete="current-password"
            />
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="isLoading" class="spinner"></span>
            <span v-else>Confirm</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
  showLogin: Boolean,
  isLoading: Boolean,
  errorMessage: String
});

const account = ref('');
const password = ref('');
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

h1 {
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: bold;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(0.5rem, 4vw, 1rem);
  font-weight: bold;
  margin-bottom: 3rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

button {
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
  background-color: green;
  color: white;
}

.divider {
  /* margin: 1rem 0; */
  font-size: 0.9rem;
  color: gray;
}

.signin {
  margin: 0px;
}

.login {
  background-color: #1d9bf0;
  color: white;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  /* background: linear-gradient(135deg, #047baa, #02919b); */
  background: linear-gradient(135deg, #0d0d0d, #161616);
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  text-align: center;
  animation: zoomIn 0.3s ease-in-out;
}

h3 {
  color: white;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  color: white;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border: 1px solid #1d9bf0;
}

.submit-btn {
  background-color: #1d9bf0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

p {
  margin-top: 1rem;
  color: white;
}

a {
  color: #1d9bf0;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  z-index: 1;
}


/* Zoom-In Animation */
@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #161616;
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  animation: zoomIn 0.3s ease-in-out;
}

@keyframes zoomIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
