<template>
  <div class="shop">
    Clicking this button will redirect you to the shop. You can return to the
    homepage otherwise.
    <a
      class="btn-book-a-table"
      href="https://virginsintltrading.fygaroshops.com/products/"
    >
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

<style lang="css" scoped>
@media (min-width: 1024px) {
  .shop {
    min-height: 60vh;
    display: flex;
    align-items: center;
  }
}
</style>
