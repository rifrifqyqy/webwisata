<template>
  <div class="card bg-zinc-50">
    <NuxtLink :to="`/our_menu/${products.id} `">
      <div
        class="relative z-0 h-[200px] w-full overflow-hidden rounded-md bg-amber-100 max-sm:h-[140px] max-sm:rounded-sm"
      >
        <img :src="products.image" alt="" class="h-full w-full object-cover" />
        <h3 class="category">{{ products.category }}</h3>
      </div>
      <div class="body mt-2 flex flex-col max-sm:mt-1 max-sm:px-1">
        <h1 class="title">{{ products.title }}</h1>

        <p class="line-clamp-2 text-zinc-400 max-sm:text-[12px]">
          {{ products.description }}
        </p>
        <h2 class="price">{{ formatPrice(products.price) }}</h2>
      </div>
    </NuxtLink>
    <UButton
      :to="`/our_menu/${products.id} `"
      block
      class="mt-4 bg-green-600 text-xl hover:bg-green-600/80 max-sm:rounded-sm max-sm:py-0 max-sm:text-[14px]"
      >Lihat
    </UButton>
  </div>
</template>

<script setup>
const { products } = defineProps(["products"]);
const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
</script>

<style scoped>
.card {
  @apply flex h-full max-h-fit w-[260px] flex-col justify-between rounded-lg p-2 shadow-md max-sm:w-full max-sm:rounded-md max-sm:p-1;

  .title {
    @apply text-xl font-semibold leading-normal text-green-600 max-sm:text-[16px];
  }
  .price {
    @apply text-xl font-bold text-yellow-500 max-sm:text-[16px];
  }
  .category {
    @apply absolute top-0 m-2 w-fit rounded-sm bg-green-100 px-3 py-1 text-sm font-medium uppercase text-green-600 max-sm:px-2 max-sm:py-0 max-sm:text-[10px];
  }
}
</style>
import type { UButton } from '#build/components';
