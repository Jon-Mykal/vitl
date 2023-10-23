<template>
  <section class="container-fluid">
    <section class="row px-5">
      <h1 class="px-5 mx-5 text-white fw-bolder display-4">{{ title }}</h1>
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
.row {
  background-color: #ce1212;
}
</style>
