<template>
  <div class="container mx-auto">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="itemsCarousel"
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: 'mt-[30%] max-md:mt-[25%] text-green-500',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: 'mt-[30%] max-md:mt-[25%] left-0 w-fit ml-[64px] text-green-500',
      }"
      :ui="{
        item: 'basis-full',
      }"
      class="overflow-hidden rounded-xl"
      arrows
    >
      <img
        :src="item"
        class="h-[450px] w-full object-cover brightness-75 max-sm:h-[220px]"
        draggable="false"
      />
    </UCarousel>
  </div>
</template>

<script setup>
const itemsCarousel = [
  "https://img.freepik.com/free-photo/smiley-teenagers-eating-burgers-outdoors-with-drink_23-2148666618.jpg?t=st=1717925858~exp=1717929458~hmac=d9affd7fcca57f4827e0d46189e7918256d17b4a06c184b8b7ae407011aa9500&w=1380",
  "/images/sandwich1.jpg",
  "/images/hotdog1.jpg",
  "/images/resto1.jpg",
  "https://img.freepik.com/free-photo/vegan-sandwiches-lunch-beach_53876-74946.jpg?t=st=1717925813~exp=1717929413~hmac=b87d8533374394265a67b371b1a835b7d15c89358a048819b6c7bb5c419a81af&w=996",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<style scoped></style>
