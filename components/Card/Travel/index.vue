<template>
  <div class="card">
    <section class="flex flex-col gap-2">
      <img :src="image" alt="" class="image" />
      <div class="mt-1 flex justify-between gap-4">
        <div
          class="flex items-center gap-2 rounded-full bg-amber-100 px-2 font-semibold text-mainn-50"
        >
          <img src="/images/star.svg" class="w-[20px]" alt="" />
          <p>{{ rating }}</p>
        </div>
        <NuxtLink :to="maps">
          <div
            class="flex items-center gap-2 rounded-full bg-amber-100 px-2 font-semibold text-mainn-50"
          >
            <img src="/images/map.svg" class="w-[20px]" alt="" />
            <p>{{ location }}</p>
          </div>
        </NuxtLink>
      </div>
      <article class="header" :class="{ 'pb-2': !showPrice }">
        <div class="body">
          <h1>{{ title }}</h1>
          <p>{{ desc }}</p>
        </div>
      </article>
      <div v-if="showPrice" class="price">
        <h1>{{ price }}</h1>
      </div>
    </section>

    <div v-if="showButton" class="footer">
      <NuxtLink :to="to" class="w-full">
        <ButtonPrimary styled="bg-mainn-50 rounded-md">
          Lihat Detail
        </ButtonPrimary>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  rating: Number,
  location: String,
  price: String,
  to: Object,
  desc: String,
  maps: String,
  showButton: {
    type: Boolean,
    default: true,
  },
  showPrice: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @apply flex w-fit flex-col justify-between rounded-md bg-white p-2 text-dark-50;

  .image {
    @apply h-[180px] w-[300px] rounded-md;
  }
  .header {
    @apply mx-2;
    h1 {
      @apply line-clamp-1 min-w-fit max-w-min text-2xl font-semibold;
    }
  }
  .price {
    @apply mx-2 border-t pt-2 text-xl font-bold;
  }
  .body {
    @apply min-w-fit max-w-min;
    p {
      @apply line-clamp-2 text-dark-200;
    }
  }
  .footer {
    @apply mt-4 flex w-full justify-between gap-2;
  }
}
</style>
