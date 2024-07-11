<template>
  <div class="card">
    <img :src="image" alt="" class="image" />
    <article class="header">
      <h1>{{ title }}</h1>
      <div class="mt-1 flex gap-4">
        <div class="flex items-center gap-2">
          <img src="/images/star.svg" class="w-[20px]" alt="" />
          <p>{{ rating }}</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="/images/map.svg" class="w-[20px]" alt="" />
          <p>{{ location }}</p>
        </div>
      </div>
    </article>
    <div class="price">
      <h1>{{ price }}</h1>
    </div>
    <div class="footer">
      <ButtonPrimary class="flex w-full" styled="bg-mainn-50 rounded-sm">
        Lihat Detail
      </ButtonPrimary>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  rating: {
    type: Number,
  },
  location: {
    type: String,
  },
  price: {
    type: String,
  },
});
</script>

<style scoped>
.card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @apply flex w-fit flex-col gap-2 rounded-md bg-white p-2 text-dark-50;

  .image {
    @apply h-[180px] w-[300px] rounded-sm;
  }
  .header {
    h1 {
      @apply line-clamp-1 min-w-fit max-w-min text-2xl font-semibold;
    }
  }
  .price {
    @apply text-xl font-bold;
  }
  .footer {
    @apply mt-2 flex w-full justify-between gap-2;
  }
}
</style>
