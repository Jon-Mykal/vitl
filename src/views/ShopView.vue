<template>
  <PageTitle title="Shop" />
  <section>
    <div class="shop d-flex justify-content-center">
      <p class="lead">
        Clicking the <strong>"Take me to the shop"</strong> button will redirect you to the shop. You can return to the
        homepage otherwise.
      </p>

    </div>
    <section class="d-flex justify-content-center pt-2">
      <a class="btn-book-a-table fs-5" href="https://virginsintltrading.fygaroshops.com/products/">
        Take me to the shop
      </a>
      <RouterLink class="return-home btn btn-link rounded text-decoration-none fs-5" :to="{ name: 'home' }">Return to home
      </RouterLink>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import PageTitle from "../components/PageTitle.vue";
// onMounted(() => {
//   window.location.href = "https://virginsintltrading.fygaroshops.com/products/";
//   //   alert("Works");
// });
</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
</style>
