<template>
      <section class="col-9 mx-5 -mt-14">
  <section class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 -mt-14">
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
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
</template>

<script setup>
import ProductItem from './ProductItem.vue';
const props = defineProps({
    products: Array
})
</script>

<style lang="scss" scoped>

</style>