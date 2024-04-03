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
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" v-for="product in products" :key="product.id">
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

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'Lightweight • Non slip • Flexible outsole • Easy to wear on and off'
    },
    {
    "id": 2,
    "name": "Classic V-Neck",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    "imageAlt": "Front of men's Classic V-Neck in white.",
    "price": "$40",
    "color": "White",
    "description": "Breathable fabric • Ribbed collar • Comfort fit"
  },
  {
    "id": 3,
    "name": "Summer Shorts",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    "imageAlt": "Front of men's Summer Shorts in blue.",
    "price": "$45",
    "color": "Blue",
    "description": "Quick-dry material • Adjustable drawstring • Mesh lining"
  },
  {
    "id": 4,
    "name": "Polo Shirt",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    "imageAlt": "Front of men's Polo Shirt in green.",
    "price": "$50",
    "color": "Green",
    "description": "Soft cotton pique • Classic collar • Two-button placket"
  },
  {
    "id": 5,
    "name": "Denim Jacket",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg",
    "imageAlt": "Front of men's Denim Jacket in denim.",
    "price": "$90",
    "color": "Denim",
    "description": "Rugged denim • Point collar • Buttoned cuffs"
  },
  {
    "id": 6,
    "name": "Leather Belt",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-06.jpg",
    "imageAlt": "Front of men's Leather Belt in brown.",
    "price": "$35",
    "color": "Brown",
    "description": "Genuine leather • Metal buckle • Adjustable fit"
  },
  {
    "id": 7,
    "name": "Running Sneakers",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-07.jpg",
    "imageAlt": "Front of men's Running Sneakers in red.",
    "price": "$120",
    "color": "Red",
    "description": "High traction sole • Breathable mesh • Durable design"
  },
  {
    "id": 8,
    "name": "Beanie Hat",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-08.jpg",
    "imageAlt": "Front of men's Beanie Hat in gray.",
    "price": "$25",
    "color": "Gray",
    "description": "Warm knit • Fold-over brim • One size fits all"
  },
  {
    "id": 9,
    "name": "Sunglasses",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-09.jpg",
    "imageAlt": "Front of men's Sunglasses in black.",
    "price": "$85",
    "color": "Black",
    "description": "UV protection • Scratch-resistant lenses • Lightweight frame"
  },
  {
    "id": 10,
    "name": "Wristwatch",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-10.jpg",
    "imageAlt": "Front of men's Wristwatch in silver.",
    "price": "$250",
    "color": "Silver",
    "description": "Quartz movement • Stainless steel • Water-resistant"
  },
  {
    "id": 11,
    "name": "Casual Backpack",
    "href": "#",
    "imageSrc": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-11.jpg",
    "imageAlt": "Front of Casual Backpack in olive.",
    "price": "$70",
    "color": "Olive",
    "description": "Spacious main compartment • Padded straps • Durable material"
  }
    // More products...
  ]
</script>

<style lang="css" scoped>
.return-home {
  color: #ce1212;
  ;
}
</style>
