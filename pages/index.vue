<template>
  <HomeCarouselTravel />
  <section class="mt-16">
    <NuxtMarquee
      :gradient="true"
      gradient-color="#f7f7f7"
      auto-fill
      class="flex"
      :loop="0"
    >
      <div v-for="sponsor in marqueeimg" :key="sponsor.id" class="mx-8">
        <img
          :src="sponsor.img"
          alt=""
          class="h-16 grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
    </NuxtMarquee>
  </section>
  <section class="mt-12 grid grid-cols-2 text-dark-50">
    <div class="">
      <img src="/images/photographer.png" alt="" class="mx-auto w-[70%]" />
    </div>
    <div class="my-auto mr-12">
      <p
        class="w-fit rounded-full bg-seconds-300 px-4 py-1 text-xs font-semibold uppercase text-seconds-50"
      >
        photography
      </p>
      <h1 class="text-4xl font-semibold leading-normal">
        Destinasi wisata dengan beragam spot foto menakjubkan.
      </h1>
      <p class="text-dark-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        officia molestias placeat rerum ab sapiente quod iure, commodi vero
        tenetur?
      </p>
      <ButtonPrimary styled="bg-mainn-50 text-lg mt-4 rounded-sm w-fit"
        >Lihat Destinasi</ButtonPrimary
      >
    </div>
  </section>
  <section class="mt-16 flex flex-col gap-8">
    <div class="ml-2">
      <h1 class="text-[32px] font-semibold">Tempat Wisata</h1>
      <p class="text-dark-200">Berbagai tempat wisata di indonesia</p>
    </div>
    <div class="flex flex-wrap justify-center gap-4">
      <CardTravel
        v-for="(item, index) in processedData.slice(0, 4)"
        :key="index"
        :image="item.thumb"
        :title="item.title"
        :rating="item.rating"
        :price="item.lowestPrice"
        :location="item.location"
      />
    </div>
  </section>

  <section class="mt-16 flex flex-col gap-8">
    <h1 class="styled h1">Tou Tour FAQ</h1>
    <HomeFaqAccordion />
  </section>
</template>

<script setup>
import { formatRupiah } from "@/utils/formatCurrency";
const styled = "px-24";
const marqueeimg = [
  {
    id: 1,
    img: "/images/bnb.png",
  },
  {
    id: 2,
    img: "/images/pesona.png",
  },
  {
    id: 3,
    img: "/images/malyabhara.png",
  },
  {
    id: 4,
    img: "/images/aeon.png",
  },
  {
    id: 5,
    img: "/images/bintangb.png",
  },
  {
    id: 6,
    img: "/images/airasia.png",
  },
  {
    id: 7,
    img: "https://ayunafamily.com/wp-content/uploads/2018/11/Logo-GoWet-1.png",
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d4/Trans_Studio_logo_2011.svg/1200px-Trans_Studio_logo_2011.svg.png",
  },
];

const apiUrl = "/api/destination";
const { data, error } = await useFetch(apiUrl);

if (error.value) {
  console.error("Error fetching data:", error.value);
}

const processedData = computed(() => {
  if (data.value) {
    return data.value.map((item) => {
      const lowestPrice = Math.min(...item.price.map((p) => p.pricepkg));
      return {
        ...item,
        lowestPrice: formatRupiah(lowestPrice),
      };
    });
  }
  return [];
});
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
  @apply text-center text-3xl font-bold text-mainn-50 max-sm:text-xl;

  span {
    @apply italic;
  }
}
</style>
import type { UButton } from '#build/components'; import type { UButton } from
'#build/components';
