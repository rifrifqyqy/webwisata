<template>
  <section class="relative">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination2',
        clickable: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper relative mt-4 flex"
    >
      <section
        class="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center text-white"
      >
        <div class="text-center">
          <h1 class="text-[54px] font-semibold">
            <span class="text-mainn-50">Travel </span>Around the World
          </h1>
          <p class="text-light-400 text-xl">
            Explore the whole world and enjoy the beauty
          </p>
          <ButtonPrimary styled="bg-mainn-50 text-lg mt-4 w-fit"
            >Lihat Destinasi Wisata</ButtonPrimary
          >
        </div>
      </section>
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <img :src="slide.imgUrl" class="brightness-[65%]" alt="" />
      </swiper-slide>

      <div class="z-50 w-full">
        <div class="swiper-pagination2"></div>
      </div>
    </swiper>
    <div class="swiper-button-prev btnprev">
      <img src="/images/arrowl.svg" alt="" class="w-[32px]" />
    </div>
    <div class="swiper-button-next btnnext">
      <img src="/images/arrowr.svg" alt="" class="w-[32px]" />
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "./travel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      {
        id: 1,
        imgUrl:
          "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        imgUrl:
          "https://images.unsplash.com/photo-1585257546151-78041a410c25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        imgUrl:
          "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1661883853185-165f5869e6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        imgUrl:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 8,
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1661940093732-66f82e7ca227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    return {
      modules: [Pagination, Navigation, Autoplay],
      slides,
    };
  },
};
</script>

<style scoped>
.swiper {
  @apply h-full w-full;
}

.swiper-slide {
  @apply relative h-[400px];
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
  @apply mx-4 h-fit w-fit rounded-full bg-amber-500 p-2 transition-all active:scale-90;

  &::after {
    @apply hidden;
  }
}
</style>
