<template>
  <main class="mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1 max-sm:gap-2">
    <!-- carousel -->
    <HomeCarousel />
    <!-- carousel end -->
    <article class="grid gap-4 max-sm:gap-2">
      <div
        class="row-span-2 flex h-full w-full flex-col justify-between rounded-xl bg-neutral-800 px-4 py-2"
      >
        <h1 class="logo w-[60%]">
          <img src="/images/subway.png" alt="" class="max-sm:w-[200px]" />
        </h1>
        <p class="text-white max-sm:text-[14px]">
          Spoil your taste buds with a selection of sandwiches, salads, and
          other healthy dishes from Subway. Every bite is filled with unbeatable
          flavors and fresh ingredients made to order..
        </p>
      </div>

      <section class="row-span-1 grid grid-cols-2 gap-4 max-sm:gap-2">
        <NuxtLink to="/our_menu">
          <div
            class="group relative flex h-full border-spacing-y-6 cursor-pointer overflow-hidden rounded-xl bg-hotdog1 bg-cover bg-center"
          >
            <div
              class="duration-600 absolute z-[2] h-full w-full bg-black/40 transition-all group-hover:bg-black/0"
            />
            <h1
              class="inset-0 z-10 m-auto text-2xl font-bold text-amber-300 transition-all group-hover:scale-110 max-sm:text-[16px]"
            >
              OUR MENU
            </h1>
          </div>
        </NuxtLink>
        <NuxtLink to="/promo">
          <div
            class="group relative flex h-full border-spacing-y-6 cursor-pointer overflow-hidden rounded-xl bg-resto1 bg-cover bg-center max-sm:h-[70px]"
          >
            <div
              class="duration-600 absolute z-[2] h-full w-full bg-black/40 transition-all group-hover:bg-black/0"
            />
            <h1
              class="inset-0 z-10 m-auto text-2xl font-bold text-amber-300 transition-all group-hover:scale-110 max-sm:text-[16px]"
            >
              SUBWAY PROMO
            </h1>
          </div>
        </NuxtLink>
      </section>
    </article>
  </main>

  <section
    class="mx-auto mt-12 grid grid-cols-4 overflow-hidden rounded-lg border border-yellow-500 bg-white max-sm:grid-cols-2"
  >
    <HomeLabel imgSrc="/images/vege.png" styled="style">
      <template #text>
        Product from <br />
        Organic Farm
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/onlinefood.png" styled="style">
      <template #text>
        Online Deliveries <br />
        Available
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/disc.png" styled="style">
      <template #text>
        Promotion of <br />
        The Week
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/bigsandwich.png" styled="style">
      <template #text>
        Extra Size <br />
        Extra YUMMYY
      </template>
    </HomeLabel>
  </section>
  <section class="mt-12">
    <h1 class="styled h1">
      <span>#SUBWAYINDONESIA</span>
      PROMO
    </h1>
    <HomeCarouselPromo />
  </section>
  <section class="flex flex-col gap-8">
    <h1 class="styled h1">Subway FAQ</h1>
    <HomeFaqAccordion />
  </section>
</template>

<script setup>
const styled = "px-24";
</script>

<style scoped>
nav {
  li {
    color: rgb(255, 255, 255);
  }
}
.style {
  @apply w-max border-b-[3px] border-transparent px-12 py-6 hover:border-green-600 max-md:px-4 max-md:text-[12px];
}
.styled.h1 {
  @apply text-center text-3xl font-bold text-green-600 max-sm:text-xl;

  span {
    @apply italic;
  }
}
</style>
import type { UButton } from '#build/components'; import type { UButton } from
'#build/components';
