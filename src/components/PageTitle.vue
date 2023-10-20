<template>
  <section class="row">
    <h1>{{ title }}</h1>
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
