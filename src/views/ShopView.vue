<template>
  <PageTitle title="Shop" />
  <section>
    <div class="container">
      <section class="row">
        <section class="col-2">
      <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Categories</p>
        <SfIconChevronLeft :class="open ? 'rotate-90' : '-rotate-90'" />
      </div>
    </template>
    <ul class="mt-2 mb-6">
      <li v-for="(category, index) in categories" :key="category.id">
        <SfListItem
          size="sm"
          tag="a"
          :href="category.link"
          :class="[
            'first-of-type:mt-2 rounded-md active:bg-primary-100',
            { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': index === 0 },
          ]"
        >
          <template #suffix>
            <SfIconCheck v-if="index === 0" size="sm" class="text-primary-700" />
          </template>
          <span class="flex items-center" v-on:click="displayCategoryProducts(category.id, category.name)">
            {{ category.name }}
       
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
</section>
<section class="col-9 mx-5 -mt-14">
  <section class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 -mt-14">
    <ProductItem v-for="product in displayedProducts" :key="product.id" :product="product" />
  <!-- <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" v-for="product in products" :key="product.id">
    <div class="relative">
      <SfLink href="#" class="block">
        <img
          :src="product.imageSrc"
          :alt="product.imageAlt"
          class="block object-cover h-auto rounded-md aspect-square"
          width="300"
          height="300"
        />
      </SfLink>
      <SfButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <SfLink href="#" variant="secondary" class="no-underline"> {{ product.name}} </SfLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">123</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        {{ product.description }}
      </p>
      <span class="block pb-2 font-bold typography-text-lg">{{ product.price}}</span>
      <SfButton size="sm" class="bg-black">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </SfButton>
    </div>
  </div> -->
  </section>
</section>

</section>

    </div>




    <!-- <div class="shop d-flex justify-content-center">
      <p class="lead">
        Clicking the <strong>"Take me to the shop"</strong> button will redirect you to the shop. You can return to the
        homepage otherwise.
      </p>
     
    </div>
    <section class="d-flex justify-content-center pt-2">
      <a class="btn-book-a-table fs-5" href="https://virginsintltrading.fygaroshops.com/products/search/?category=10734&page=1">
        Take me to the shop
      </a>
      <RouterLink class="return-home btn btn-link rounded text-decoration-none fs-5" :to="{ name: 'home' }">Return to home
      </RouterLink> -->

    </section>
</template>


<script setup>
import PageTitle from "../components/PageTitle.vue";
import ProductList from "../components/ProductList.vue";
import ProductItem from "../components/ProductItem.vue";

import { ref, onMounted, onBeforeMount, watchEffect, computed, nextTick, watch } from 'vue';
import { computedAsync } from '@vueuse/core'
import { getCurrentInstance } from 'vue'
import { useOffsetPagination } from '@vueuse/core'
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfIconChevronRight, usePagination,
  SfListItem,
  SfRating, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite
} from '@storefront-ui/vue';

import axios from "axios";

let products = ref([]);
let displayedProductsSource = ref([]);
let productsSource = ref([]);
const categories = ref([]);
const subcategories = ref([]);
let itemsCount = ref(0);
const triggerProp = ref(10);
const componentInstance = getCurrentInstance();
const displayCategoryProducts = async (id = 0, name = "") => {
  products.value = productsSource.value;
  products.value = products.value.filter(p => { 
    return p.category.filter(c => c.id === id).length > 0;
  });
  localStorage.setItem("products", JSON.stringify(products.value));
  localStorage.setItem("itemCount", products.value.length);
  displayedProductsSource.value = products.value;
  itemsCount.value = products.value.length;
  // currentPage.value = triggerProp.value++;
  console.log("itemsCount", itemsCount.value);
};

onBeforeMount(async () => {
  let cats = JSON.parse(localStorage.getItem("categories"));
let aluminiumCat = cats.filter(c => c.name == "Aluminium")[0];

    let res = await axios.get("https://fygaroapi.fly.dev/api/productv2");
    categories.value = res.data["categories"];
    products.value = res.data["products"];
    products.value = products.value.filter(p => p["show_in_website"]);
    productsSource.value = products.value;
    localStorage.setItem("products", JSON.stringify(products.value));
    localStorage.setItem("productsSource", JSON.stringify(products.value));
    localStorage.setItem("categories", JSON.stringify(categories.value));
    localStorage.setItem("itemCount", res.data["productsCount"]);
  
    await nextTick();
    displayCategoryProducts(aluminiumCat.id, aluminiumCat.name);
});


onMounted(async () => {
//   setTimeout(() => {
//   if (!localStorage.getItem("reloaded")) {
//     localStorage.setItem("reloaded", true);
//     window.location.reload();
//   }
  
//  }, 100);


triggerProp.value++;
  await nextTick();
  
});

const fetchData = () => {

};

const pageCountChange = () => {
console.log("Page Count");
};

const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  totalItems:  sessionStorage.getItem("itemCount"),
  currentPage: 1,
  pageSize: 12,
  maxPages: sessionStorage.getItem("itemCount") / 12,
});


const displayedProducts = computedAsync(async () => {
  const startIndex = (currentPage.value * 12) - 12;
  const endIndex = startIndex + 12;
  let capturedProducts = [];
  if (!localStorage.getItem("products")) {
    let res = await axios.get("https://fygaroapi.fly.dev/api/productv2");
    categories.value = res.data["categories"];
    products.value = res.data["products"];
    products.value = products.value.filter(p => p["show_in_website"]);
    localStorage.setItem("products", JSON.stringify(products.value));
    localStorage.setItem("categories", JSON.stringify(categories.value));
    localStorage.setItem("itemCount", res.data["productsCount"]);
    capturedProducts = JSON.parse(localStorage.getItem("products"));
  }
  else {
    capturedProducts = JSON.parse(localStorage.getItem("products"));
  }
  
  return capturedProducts.sort((a, b) => {
  const titleA = a['name'].toUpperCase(); // ignore upper and lowercase
  const titleB = b['name'].toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  // names must be equal
  return 0;
}).slice(startIndex, endIndex);
}, JSON.parse(localStorage.getItem("products")));

const open = ref(true);

</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
</style>
