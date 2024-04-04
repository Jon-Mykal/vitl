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
      <li v-for="(category, index) in categories" :key="category.key">
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
          <span class="flex items-center">
            {{ category.name }}
       
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
</section>
<ProductList :products="products" />

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
        <div class="flex pt-1 bor`der-t-4 border-transparent">
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

import { ref, onMounted, onBeforeMount } from 'vue';
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
const categories = ref([]);
onBeforeMount(async () => {
    let res = await axios.get("https://localhost:7004/api/productv2");
    products.value = res.data["products"];
    categories.value = res.data["categories"];
})

const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage, maxVisiblePages } = usePagination({
  totalItems: 150,
  currentPage: 2,
  pageSize: 10,
  maxPages: 1,
});




const open = ref(true);

// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//       description: 'Lightweight • Non slip • Flexible outsole • Easy to wear on and off'
//     },
//     {
//     "id": 2,
//     "name": "Classic V-Neck",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
//     "imageAlt": "Front of men's Classic V-Neck in white.",
//     "price": "$40",
//     "color": "White",
//     "description": "Breathable fabric • Ribbed collar • Comfort fit"
//   },
//   {
//     "id": 3,
//     "name": "Summer Shorts",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
//     "imageAlt": "Front of men's Summer Shorts in blue.",
//     "price": "$45",
//     "color": "Blue",
//     "description": "Quick-dry material • Adjustable drawstring • Mesh lining"
//   },
//   {
//     "id": 4,
//     "name": "Polo Shirt",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
//     "imageAlt": "Front of men's Polo Shirt in green.",
//     "price": "$50",
//     "color": "Green",
//     "description": "Soft cotton pique • Classic collar • Two-button placket"
//   },
//   {
//     "id": 5,
//     "name": "Denim Jacket",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg",
//     "imageAlt": "Front of men's Denim Jacket in denim.",
//     "price": "$90",
//     "color": "Denim",
//     "description": "Rugged denim • Point collar • Buttoned cuffs"
//   },
//   {
//     "id": 6,
//     "name": "Leather Belt",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-06.jpg",
//     "imageAlt": "Front of men's Leather Belt in brown.",
//     "price": "$35",
//     "color": "Brown",
//     "description": "Genuine leather • Metal buckle • Adjustable fit"
//   },
//   {
//     "id": 7,
//     "name": "Running Sneakers",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-07.jpg",
//     "imageAlt": "Front of men's Running Sneakers in red.",
//     "price": "$120",
//     "color": "Red",
//     "description": "High traction sole • Breathable mesh • Durable design"
//   },
//   {
//     "id": 8,
//     "name": "Beanie Hat",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-08.jpg",
//     "imageAlt": "Front of men's Beanie Hat in gray.",
//     "price": "$25",
//     "color": "Gray",
//     "description": "Warm knit • Fold-over brim • One size fits all"
//   },
//   {
//     "id": 9,
//     "name": "Sunglasses",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-09.jpg",
//     "imageAlt": "Front of men's Sunglasses in black.",
//     "price": "$85",
//     "color": "Black",
//     "description": "UV protection • Scratch-resistant lenses • Lightweight frame"
//   },
//   {
//     "id": 10,
//     "name": "Wristwatch",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-10.jpg",
//     "imageAlt": "Front of men's Wristwatch in silver.",
//     "price": "$250",
//     "color": "Silver",
//     "description": "Quartz movement • Stainless steel • Water-resistant"
//   },
//   {
//     "id": 11,
//     "name": "Casual Backpack",
//     "href": "#",
//     "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-11.jpg",
//     "imageAlt": "Front of Casual Backpack in olive.",
//     "price": "$70",
//     "color": "Olive",
//     "description": "Spacious main compartment • Padded straps • Durable material"
//   }
//     // More products...
//   ]
</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
</style>
