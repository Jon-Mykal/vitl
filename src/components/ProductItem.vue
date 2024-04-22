<template>
 <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#" class="block">
        <img
          :src="prodImage"
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
      <RouterLink :to="{name: 'ProductDetails', params: {product}, query: {id: product.external_id} }" variant="secondary" class="no-underline"> {{ product.name}} </RouterLink>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        {{ product.description }}
      </p>
      <span class="block pb-2 font-bold typography-text-lg">${{ new Intl.NumberFormat('en-US').format(product.price)}}</span>
      <SfButton size="sm" class="bg-black">
       <!-- <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>> -->
        <RouterLink :to="{name: 'ProductDetails', params: {product}, query: {id: product.external_id} }" >View</RouterLink>
      </SfButton>
    </div>
  </div>
</template>

<script setup>
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
import { RouterLink } from 'vue-router';
 const props = defineProps({
    product: Object
 })
 const prodImage = props.product.images.length ? props.product.images[0]['image'] : '';
 console.log(prodImage);
</script>

<style lang="scss" scoped>

</style>