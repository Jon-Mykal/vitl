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
      <li v-for="(category, index) in categories" :key="category.id" v-on:click="displayCategoryProducts(category.id, category.name)">
        <SfListItem
          size="sm"
          tag="a"
          :href="category.link"
          :class="[
            'first-of-type:mt-2 rounded-md active:bg-primary-100',
            { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium active-category': category.id === selectedCategory.id},
          ]"
        >
        
          <template #suffix>
            <SfIconCheck v-if="category.id === selectedCategory.id" size="sm" class="text-primary-700" />
          </template>
          <span class="flex items-center">
            {{ category.name }}
       
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
</section>
<section class="col-9 mx-5-mt-14">
  <section class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8-mt-14">
    <ProductItem v-for="product in displayedProducts" :key="product.external_id" :product="product" />
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
<nav class="flex justify-between items-end border-t border-neutral-200" role="navigation" aria-label="pagination">
    <SfButton
      size="lg"
      aria-label="Go to previous page"
      :disabled="selectedPage <= 1"
      variant="tertiary"
      class="gap-3 !px-3 sm:px-6"
      @click="prev"
    >
      <template #prefix>
        <SfIconChevronLeft />
      </template>
      <span class="hidden sm:inline-flex"> Previous </span>
    </SfButton>
    <ul class="flex justify-center">
      <li v-if="!pages.includes(1)">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === 1 },
          ]"
        >
          <button
            type="button"
            class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="selectedPage === 1"
            @click="setPage(1)"
          >
            1
          </button>
        </div>
      </li>
      <li v-if="startPage > 2">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button type="button" disabled aria-hidden="true" class="px-4 py-3 md:w-12 rounded-md text-neutral-500">
            ...
          </button>
        </div>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === totalPages">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button
            type="button"
            class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="endPage - 1 === selectedPage"
            @click="setPage(endPage - 1)"
          >
            {{ endPage - 1 }}
          </button>
        </div>
      </li>
      <li v-for="page in pages" :key="`page-${page}`">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent',
            { 'font-medium border-t-4 !border-primary-700': selectedPage === page },
          ]"
        >
          <button
            type="button"
            :class="[
              'min-w-[38px] px-3 sm:px-4 py-3 md:w-12 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900',
              { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
            ]"
            :aria-label="`Page ${page} of ${totalPages}`"
            :aria-current="selectedPage === page"
            @click="setPage(page)"
          >
            {{ page }}
          </button>
        </div>
      </li>
      <li v-if="maxVisiblePages === 1 && selectedPage === 1">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button
            type="button"
            class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-label="`Page 2 of ${totalPages}`"
            @click="setPage(2)"
          >
            2
          </button>
        </div>
      </li>
      <li v-if="endPage < totalPages - 1">
        <div class="flex pt-1 border-t-4 border-transparent">
          <button type="button" disabled aria-hidden="true" class="px-4 py-3 md:w-12 rounded-md text-neutral-500">
            ...
          </button>
        </div>
      </li>
      <li v-if="!pages.includes(totalPages)">
        <div
          :class="[
            'flex pt-1 border-t-4 border-transparent',
            { 'font-medium border-t-4 !border-primary-500': selectedPage === totalPages },
          ]"
        >
          <button
            type="button"
            class="min-w-[38px] px-3 sm:px-4 py-3 md:w-12 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
            :aria-current="totalPages === selectedPage"
            @click="setPage(totalPages)"
          >
            {{ totalPages }}
          </button>
        </div>
      </li>
    </ul>
    <SfButton
      size="lg"
      aria-label="Go to next page"
      :disabled="selectedPage >= totalPages"
      variant="tertiary"
      class="gap-3 !px-3 sm:px-6"
      @click="next"
    >
      <span class="hidden sm:inline-flex"> Next </span>
      <template #suffix>
        <SfIconChevronRight />
      </template>
    </SfButton>
  </nav>
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
import orderBy  from 'lodash/orderBy';

let products = ref([]);
let displayedProductsSource = ref([]);
let productsSource = ref([]);
const categories = ref([]);
const subcategories = ref([]);
let categoryTrack = ref({});
let selectedCategory = ref({});
// let selectedCategory = ref({});

let itemsCount = ref(0);
let triggerProp =  ref(sessionStorage.getItem("triggerProp") || 0);
const componentInstance = getCurrentInstance();
const displayCategoryProducts = async (id = 0, name = "") => {
  displayedProducts.value = [];
  products.value = productsSource.value;
  products.value = products.value.filter(p => { 
    return p.category.filter(c => c.id === id).length > 0;
  });
  sessionStorage.setItem("products", JSON.stringify(products.value));
  sessionStorage.setItem("itemCount", products.value.length);
  // if (id == 0) {
  //   id = 10734;
  //   name = 'Aluminium';
  // }
  sessionStorage.setItem("selectedCategory", JSON.stringify({ id, name }));
  selectedCategory.value = { id, name };
  displayedProductsSource.value = products.value;
  itemsCount.value = products.value.length;
  // currentPage.value = triggerProp.value++;
  console.log("itemsCount", itemsCount.value);
  // if (triggerProp.value > 1) {
    displayedProductsPerCategory();
    // window.location.reload();
  // }
  
};


watch(selectedCategory, () => {
  console.log("Changed");
})
onBeforeMount(async () => {
// let aluminiumCat = cats.filter(c => c.name == "Aluminium")[0];
// selectedCategory.value = { id: 10734, name: 'Aluminium'};
    // tri
   
    if (triggerProp.value === 0) {
      triggerProp.value++;
      sessionStorage.setItem('triggerProp', triggerProp.value)
      displayCategoryProducts(10734, 'Aluminium');  
    }
    else {

    }

    // (triggerProp.value === 1) {
    //   console.log(selectedCategory.value);
    // }
 
});


onMounted(async () => {
  let res = await axios.get("https://fygaroapi.fly.dev/api/productv2");

    categories.value = res.data["categories"];
    products.value = res.data["products"];
    products.value = orderBy(products.value.filter(p => p["show_in_website"]), ['name'], ['asc']);
    productsSource.value = products.value;
    
// let aluminiumCat =  categories.value.filter(c => c.name == "Aluminium")[0];
    sessionStorage.setItem("products", JSON.stringify(products.value));
    sessionStorage.setItem("productsSource", JSON.stringify(products.value));
    sessionStorage.setItem("categories", JSON.stringify(categories.value));
    
    // sessionStorage.setItem("itemCount", res.data["productsCount"]);
    selectedCategory.value = JSON.parse(sessionStorage.getItem("selectedCategory"));
  
    await nextTick();
    displayCategoryProducts(selectedCategory.value.id, selectedCategory.value.name);
  
    
  
});

const fetchData = () => {

};

const pageCountChange = () => {
console.log("Page Count");
};

const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  totalItems:  sessionStorage.getItem("itemCount"),
  currentPage: 1,
  pageSize: 12
});


const displayedProducts = ref([])
const displayedProductsPerCategory = () => {
  const startIndex = (selectedPage.value * 12) - 12;
  const endIndex = startIndex + 12;
  let capturedProducts = [];
  if (!sessionStorage.getItem("products")) {
    // console.log("In this block")
    // let res = await axios.get("https://fygaroapi.fly.dev/api/productv2");
    // categories.value = res.data["categories"];
    // products.value = res.data["products"];
    // products.value = products.value.filter(p => p["show_in_website"]);
    sessionStorage.setItem("products", JSON.stringify(products.value));
    sessionStorage.setItem("categories", JSON.stringify(categories.value));
    sessionStorage.setItem("itemCount", res.data["productsCount"]);
    capturedProducts = JSON.parse(sessionStorage.getItem("products"));

  }
  else {
    capturedProducts = JSON.parse(sessionStorage.getItem("products"));
    console.log(capturedProducts);
  }
  
  
  // console.log(capturedProducts);
  // return capturedProducts.sort((a, b) => {
  // const titleA = a['name'].toUpperCase(); // ignore upper and lowercase
  // const titleB = b['name'].toUpperCase(); // ignore upper and lowercase
  // console.log(titleA, titleB);
  // return titleA.localeCompare(titleB);})
  displayedProducts.value = capturedProducts/*.slice(startIndex, endIndex);*/
  
};
const displayedProductsV2 = ref(async () => {
  const startIndex = (selectedPage.value * 12) - 12;
  const endIndex = startIndex + 12;
  let capturedProducts = [];
  if (!sessionStorage.getItem("products")) {
    console.log("In this block")
    let res = await axios.get("https://fygaroapi.fly.dev/api/productv2");
    categories.value = res.data["categories"];
    products.value = res.data["products"];
    products.value = products.value.filter(p => p["show_in_website"]);
    sessionStorage.setItem("products", JSON.stringify(products.value));
    sessionStorage.setItem("categories", JSON.stringify(categories.value));
    sessionStorage.setItem("itemCount", res.data["productsCount"]);
    capturedProducts = JSON.parse(sessionStorage.getItem("products"));

  }
  else {
    capturedProducts = JSON.parse(sessionStorage.getItem("products"));
    console.log(capturedProducts);
  }
  
  
  console.log(capturedProducts);
  // return capturedProducts.sort((a, b) => {
  // const titleA = a['name'].toUpperCase(); // ignore upper and lowercase
  // const titleB = b['name'].toUpperCase(); // ignore upper and lowercase
  // console.log(titleA, titleB);
  // return titleA.localeCompare(titleB);})
  return capturedProducts/*.slice(startIndex, endIndex);*/
});

const open = ref(true);

</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
.active-category {
  background-color: #ce1212;
  color: white;
}
</style>
