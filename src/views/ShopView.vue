<template>
  <PageTitle title="Shop" />
  <section>
    <div class="container">
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
            {{ category.label }}
            <SfCounter class="ml-2 typography-text-sm font-normal">{{ category.counter }}</SfCounter>
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
    </div>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#" class="block">
        <img
          src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
          alt="Great product"
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
      <SfLink href="#" variant="secondary" class="no-underline"> Athletic mens walking sneakers </SfLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">123</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        Lightweight • Non slip • Flexible outsole • Easy to wear on and off
      </p>
      <span class="block pb-2 font-bold typography-text-lg">$2345,99</span>
      <SfButton size="sm" class="bg-black">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </SfButton>
    </div>
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

import { ref } from 'vue';
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfListItem,
  SfRating, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite
} from '@storefront-ui/vue';

const categories = ref([
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
]);

const open = ref(true);
</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
</style>
