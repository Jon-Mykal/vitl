<template>
    <div>
        <ul>
            <ProductItem v-for="product in products" :key="product.id" />
        </ul>
        <ul>
            <li v-for="product in products" :key="product.id"></li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, ref, defineProps } from "vue";
import ProductItem from './ProductItem.vue';
import axios from "axios";
const props = defineProps({
    products: Array
});
let products = ref([]);
onBeforeMount(async () => {
    let res = await axios.get("https://localhost:7004/api/productv2");
    products = res.data["products"];
})

</script>

<style lang="scss" scoped>

</style>