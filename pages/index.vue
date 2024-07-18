<template>
  <section>
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
          Temukan destinasi wisata dengan spot foto menakjubkan yang sempurna
          untuk mempercantik feed media sosial Anda. Dari pemandangan alam yang
          memukau hingga arsitektur unik dan seni lokal yang instagramable,
          tempat ini ideal untuk pecinta fotografi. Bawa kamera Anda dan nikmati
          momen berharga di berbagai spot luar biasa ini.
        </p>
        <ButtonPrimary
          to="/destinasi"
          styled="bg-mainn-50 text-lg mt-4 rounded-sm w-fit"
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
          :desc="item.description"
          :rating="item.rating"
          :price="item.lowestPrice"
          :location="item.location"
          :maps="item.maps"
          :to="`/destinasi/${item.id}`"
        />
      </div>
    </section>

    <section class="mt-16 flex flex-col gap-8">
      <h1 class="styled h1">Frequently Asked Questions</h1>
      <HomeFaqAccordion />
    </section>
    <section>
      <div class="container mx-auto hidden p-4">
        <h1 class="mb-4 text-2xl font-bold">
          Perhitungan Biaya Transportasi dan Paket Wisata
        </h1>
        <form @submit.prevent="calculateTotal">
          <div class="mb-4">
            <label
              for="transport"
              class="block text-sm font-medium text-gray-700"
              >Transportasi</label
            >
            <select
              v-model="selectedTransport"
              id="transport"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option
                v-for="(price, vehicle) in transportOptions"
                :key="vehicle"
                :value="price"
              >
                {{ vehicle }} - Rp {{ price.toLocaleString() }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label for="tour" class="block text-sm font-medium text-gray-700"
              >Paket Wisata</label
            >
            <select
              v-model="selectedTour"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option
                v-for="(price, tour) in tourOptions"
                :key="tour"
                :value="price"
              >
                {{ tour }} - Rp {{ price.toLocaleString() }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <button
              type="submit"
              class="w-full rounded bg-blue-500 px-4 py-2 text-white"
            >
              Hitung Total
            </button>
          </div>
          <div v-if="totalCost !== null" class="mt-4 rounded bg-green-100 p-4">
            <h2 class="text-xl font-bold">
              Total Biaya: Rp {{ totalCost.toLocaleString() }}
            </h2>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script setup>
import { formatRupiah } from "@/utils/formatCurrency";
import { ref } from "vue";
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
      const lowestPrice = Math.min(...item.paketwisata.map((p) => p.price));
      return {
        ...item,
        lowestPrice: formatRupiah(lowestPrice),
      };
    });
  }
  return [];
});

const transportOptions = {
  Mobil: 500000,
  Motor: 100000,
  Kereta: 200000,
};

const tourOptions = {
  Perorang: 200000,
  Grup: 1500000,
};

const selectedTransport = ref(0);
const selectedTour = ref(0);
const totalCost = ref(null);

const calculateTotal = () => {
  totalCost.value = selectedTransport.value + selectedTour.value;
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
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
