<template>
  <section class="row">
    <section class="col-6 px-5">
      <img :src="productData?.images[0]?.image" class="img-responsive" alt="">
    </section>
    <section class="col-6 px-5">
      <h1 class="mb-1 font-bold typography-headline-4">{{ productData.name }}</h1>
 
      <div  v-if="productData.product_versions">
        <strong class="block font-bold tw-typography-headline-5 display-5" v-if="versionPrice > 0">${{ new Intl.NumberFormat('en-US').format(versionPrice)}} JMD</strong>
      <span class="block typography-headline-3 text-danger pt-3" v-else>{{ 'No price available. Please select an option'}}</span>
      <label class="pt-2">
        <label class="pb-2" for="">Product Options</label>
    <select @change="updateVersionPrice($event)" class="form-control px-5">
      <option value="0">-- Select an option --</option>
      <option v-for="prodVersion in productVersionOptions" :key="prodVersion[0]" :value="prodVersion[1]['optionPrice']">
        {{ prodVersion[1]['optionName'] }}
      </option>
    </select>
    
  </label>
      </div>
      <strong v-else class="block font-bold tw-typography-headline-5 display-5">${{ new Intl.NumberFormat('en-US').format(productData.price)}} JMD</strong>
      <button class="btn-book-a-table px-5 mt-3 text-uppercase font-bold" :disabled="!buyingEnabled">Buy</button>
      <!-- <span class="block pb-2 font-bold typography-text-lg"></span> -->

      <!-- <div class="py-4 mb-4 border-gray-200 border-y">
        <div
          class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md"
        >
          <SfIconShoppingCartCheckout />
          1 in cart
        </div>
        <div class="items-start xs:flex">
          <div class="flex flex-col items-stretch xs:items-center xs:inline-flex">
            <div class="flex border border-neutral-300 rounded-md">
              <SfButton
                variant="tertiary"
                :disabled="count <= min"
                square
                class="rounded-r-none p-3"
                :aria-controls="inputId"
                aria-label="Decrease value"
                @click="dec()"
              >
                <SfIconRemove />
              </SfButton>
              <input
                :id="inputId"
                v-model="count"
                type="number"
                class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                :min="min"
                :max="max"
                @input="handleOnChange"
              />
              <SfButton
                variant="tertiary"
                :disabled="count >= max"
                square
                class="rounded-l-none p-3"
                :aria-controls="inputId"
                aria-label="Increase value"
                @click="inc()"
              >
                <SfIconAdd />
              </SfButton>
            </div>
            <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
              <strong class="text-neutral-900">{{ max }}</strong> in stock
            </p>
          </div>

        </div>
  
      </div> -->

    </section>
  </section>
  <section class="d-flex justify-content-center">
    <a href="/shop" class="text-center btn btn-outline-secondary">Back to Products</a>
  </section>
  </template>
  
  <style>
  .btn-custom {
    background-color: rgba(206, 18, 18, 0.8);
  }
  .btn-book-a-table:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
</style>
  

  <script lang="ts" setup>
  import { onMounted, ref, } from 'vue';
  import { useRoute, useRouter} from 'vue-router'
  import {
    SfButton,
    SfCounter,
    SfLink,
    SfRating,
    SfIconSafetyCheck,
    SfIconCompareArrows,
    SfIconWarehouse,
    SfIconPackage,
    SfIconFavorite,
    SfIconSell,
    SfIconShoppingCart,
    SfSelect,
    SfIconAdd,
    SfIconRemove,
    useId,
    SfIconShoppingCartCheckout,
  } from '@storefront-ui/vue';
  import { clamp } from '@storefront-ui/shared';
  import { useCounter } from '@vueuse/core';
  import map  from 'lodash/map';

  const props = defineProps({
    id: String,
    product: Object
  });
   const route = useRoute();
   let data = localStorage.getItem("products")?.toString();
   let currentProducts = JSON.parse(data || '');
   let productData = currentProducts.filter(p => p.external_id == route.query.id)[0];
   let prodHasVersions = ref(false);
   let versionPrice = ref(0);
   console.log(productData);
  let buyingEnabled = ref(false);
   let prodVersions = productData.product_versions;
    let productVersionOptions = ref(new Map());
    let productVersionOptions_temp = [];
    onMounted(() => {
     
      for (const version in prodVersions) {
        let prodVersion = prodVersions[version];
        let optionName = map(prodVersion.product_options, (obj) => { return obj.name}).join(' - ');
        let optionPrice = prodVersion.price;
        let option = {optionName, optionPrice};
        productVersionOptions.value.set(prodVersion.code, option);
      }

      prodHasVersions.value = productData.product_versions != null;
      if (!prodHasVersions.value) {
        buyingEnabled.value = true;
      }
    });
   const updateVersionPrice = ({target}) => {
    const {value} = target;
    versionPrice.value = value;
    if (versionPrice.value > 0) {
      buyingEnabled.value = true
    }
    else {
      buyingEnabled.value = false;
    }
   };
  const inputId = useId();
  const min = ref(1);
  const max = ref(999);
  const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
  function handleOnChange(event: Event) {
    const currentValue = (event.target as HTMLInputElement)?.value;
    const nextValue = parseFloat(currentValue);
    set(clamp(nextValue, min.value, max.value));
  }
  </script>
  
  