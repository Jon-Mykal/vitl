<template>
  <section class="main-bg py-0 my-0">
    <section class="container pb-4">
    <section class="row">
      <h1 class="px-5  text-white fw-bolder display-4">{{ title }}</h1>
    </section>
  </section>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  required: false,
});
</script>

<style lang="css" scoped>
.main-bg {
  background-color: #ce1212;

}
</style>
