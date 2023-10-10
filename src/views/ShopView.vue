<template>
  <div>
    Clicking this button will redirect you to the shop. You can return to the
    homepage otherwise.
    <a href="https://virginsintltrading.fygaroshops.com/products/">
      Take me to the shop
    </a>
    <RouterLink :to="{ name: 'home' }">Return to home</RouterLink>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// onMounted(() => {
//   window.location.href = "https://virginsintltrading.fygaroshops.com/products/";
//   //   alert("Works");
// });
</script>

<style lang="scss" scoped></style>
