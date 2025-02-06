<template>
<div class="post-container">
  <div id="for-you">For you</div>
  <div id="following">Following</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'postBar',
  components:{


  },

  setup() {

    return {

    };
  }
})

</script>

<style scoped>
.post-container {
  /* background-color: white; */
  display: flex;
  margin-right: 4%;
  width: 45%; 
  height: 50px;
  border: 1px solid #2F3336;
}

#for-you {
  /* background-color: #f0f0f0; */
  width: 50%;
  color: #71767B;
  text-align: center;
  line-height: 50px; /* 垂直置中 */
  border-right: 1px solid #2F3336;
}

#following {
  /* background-color: #f0f0f0; */
  width: 50%;
  color: #71767B;
  text-align: center;
  line-height: 50px; /* 垂直置中 */
}

@media (max-width: 1200px) and (min-width: 768px) {
.post-container {
  width: 70%;
  margin-left: auto; /* 靠右對齊 */
}
}

@media (max-width: 768px) {
.post-container {
  width: 70%;
  margin-left: auto; /* 靠右對齊 */
}
}
</style>
