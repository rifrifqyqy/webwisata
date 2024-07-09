<template>
  <section class="relative mt-12 max-sm:mt-8">
    <Swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :spaceBetween="150"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
      ref="swiperRef"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="photoframe">
          <img :src="slide.imgUrl" alt="" class="photoimg" />
          <div class="profile">
            <img src="/images/subwaylogo.png" alt="" class="w-[42px]" />
            <div>
              <h1>Subway Indonesia</h1>
              <p>#subwayindonesia</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
    <div class="swiper-button-prev btnprev">
      <img src="/images/arrowl.svg" alt="" class="w-[32px]" />
    </div>
    <div class="swiper-button-next btnnext">
      <img src="/images/arrowr.svg" alt="" class="w-[32px]" />
    </div>
    <div class="mt-24">
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];

    const slides = [
      {
        id: 1,
        imgUrl: "/images/ads1.png",
      },
      {
        id: 2,
        imgUrl: "/images/ads2.png",
      },
      {
        id: 3,
        imgUrl: "/images/kwave.png",
      },
      {
        id: 4,
        imgUrl: "/images/adsway3.png",
      },
      {
        id: 5,
        imgUrl: "/images/adsway1.png",
      },
      {
        id: 6,
        imgUrl: "/images/adsway2.png",
      },
      {
        id: 7,
        imgUrl:
          "https://www.subway.co.id/wp-content/uploads/2021/08/Screenshot-2023-05-29-111333.png",
      },
    ];
    return { modules, slides };
  },
};
</script>

<style>
.swiper {
  @apply h-full overflow-hidden px-12 max-sm:w-[300px] md:w-[600px] lg:w-[800px] xl:w-[1200px];
}

.swiper-slide {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  @apply h-fit w-[350px] overflow-hidden max-sm:w-[280px];
}

.swiper-slide .photoimg {
  @apply h-full w-full;
}

.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
  @apply h-fit w-fit rounded-full bg-green-600 p-2 transition-all active:scale-90;

  &::after {
    @apply hidden;
  }
}
.photoframe {
  @apply bg-white p-4 max-sm:p-2;

  .profile {
    @apply mt-4 flex items-center gap-2 max-sm:mt-2;
    h1 {
      @apply text-lg font-semibold text-zinc-800 max-sm:text-[16px] max-sm:leading-tight;
    }
    p {
      @apply text-sm italic text-amber-500;
    }
  }
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  @apply bg-opacity-80;
}

.swiper-pagination {
  @apply mb-[-50px] flex items-center justify-center text-lime-600;
  .swiper-pagination-bullet {
    @apply bg-green-600 opacity-30 transition-all duration-500 ease-in-out;
  }
  .swiper-pagination-bullet-active {
    @apply h-3 w-8 rounded-lg bg-green-600 opacity-100;
  }
}
</style>
