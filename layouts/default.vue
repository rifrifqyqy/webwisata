<template>
  <div>
    <nav
      class="navbar sticky top-0 z-[999] mt-2 flex items-center justify-between px-24 py-2 transition-all duration-300 max-md:px-8"
    >
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/">
          <img
            :src="Logo"
            alt=""
            class="logo w-[200px] transition-all max-md:w-[120px]"
          />
        </NuxtLink>
        <ul
          class="text-dark-200 flex gap-8 text-[18px] max-md:gap-2 max-sm:hidden"
        >
          <li>
            <NuxtLink to="/" :class="styledMenuNav">Beranda</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/destinasi" :class="styledMenuNav"
              >Destinasi</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/promo" :class="styledMenuNav">Promo</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" :class="[styledMenuNav]"
              >Tentang Kami</NuxtLink
            >
          </li>
        </ul>
      </div>

      <buttonPrimary
        styled="rounded-sm bg-green-700 px-5 text-[20px] bg-mainn-50 text-light-50 ring-inset ring-green-400 hover:opacity-80 active:ring-2 max-sm:hidden"
      >
        Mulai Berwisata
      </buttonPrimary>
      <button class="hidden max-sm:block" @click="toggleNav">
        <Hamburger fill="fill-green-600" />
      </button>
    </nav>
    <nav class="bg-light-200 sticky top-[70px] z-20 flex justify-center">
      <ul class="flex w-fit gap-8 font-semibold">
        <li class="submenu-nav2 group">
          <NuxtLink to="/about">Pantai</NuxtLink>
          <div
            class="bg-dark-50 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
          />
        </li>
        <li class="submenu-nav2 group">
          <NuxtLink to="">Gunung</NuxtLink>
          <div
            class="bg-dark-50 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
          />
        </li>
        <li class="submenu-nav2 group">
          <NuxtLink to="">Restoran</NuxtLink>
          <div
            class="bg-dark-50 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
          />
        </li>
        <li class="submenu-nav2 group">
          <NuxtLink to="">Museum</NuxtLink>
          <div
            class="bg-dark-50 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
          />
        </li>
        <li class="submenu-nav2 group">
          <NuxtLink to="">Resort</NuxtLink>
          <div
            class="bg-dark-50 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
          />
        </li>
      </ul>
    </nav>
    <nav
      :class="[
        'nav-mobile',
        { show: isNavVisible },
        'fixed top-[48px] z-50 hidden h-fit w-full -translate-y-[100dvh] bg-white transition-all duration-300 max-sm:block',
      ]"
    >
      <ul class="text-green-600">
        <li>
          <NuxtLink to="/" :class="styledMenuNav">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/our_menu" :class="styledMenuNav">Menu</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/promo" :class="styledMenuNav">Promo</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" :class="[styledMenuNav]">About</NuxtLink>
        </li>
      </ul>
      <buttonPrimary
        styled="rounded-md mt-4 bg-green-700 max-md:py-2 max-md:text-[16px] px-5 text-yellow-400 ring-inset ring-green-400 hover:opacity-80 active:ring-2 w-full h-fit"
      >
        Order Now
      </buttonPrimary>
    </nav>

    <div class="mx-24 max-md:mx-4">
      <slot />
    </div>

    <footer class="bg-dark-50 mt-16">
      <section
        class="grid grid-cols-5 px-24 py-12 text-white max-sm:grid-cols-2 max-sm:px-8 max-sm:py-4"
      >
        <img
          src="/images/touravel.png"
          alt=""
          class="bg-light-100 col-span-2 w-[150px] rounded-md px-4 py-2 max-sm:mb-6 max-sm:w-[150px]"
        />
        <div class="menu-list">
          <h1>Navigation</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Menu</NuxtLink></li>
          </ul>
        </div>
        <div class="menu-list">
          <h1>Destinasi</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Pantai</NuxtLink></li>
            <li><NuxtLink to="/about">Gunung</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Museum</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Restaurant</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Resort</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col gap-4 max-sm:mt-4">
          <h1 class="text-xl max-sm:text-[16px]">Stay Connected</h1>
          <form action="" method="post" class="flex w-fit">
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your email address"
              class="px-4 py-3 text-green-600 max-sm:text-[14px]"
            />
            <buttonPrimary
              styled="rounded-none bg-yellow-500 p-0 h-full w-max flex p-2"
            >
              <img src="/images/Send.svg" alt="" class="h-full w-full" />
            </buttonPrimary>
          </form>
        </div>
      </section>

      <div
        class="bg-dark-100 col-span-5 mt-4 flex justify-center py-2 max-sm:px-4"
      >
        <h1 class="text-md w-fit text-center text-white max-sm:text-sm">
          © 2024 Touravel Destination | All rights reserved. Designed by Rifqy
          Hamdani
        </h1>
      </div>
    </footer>
  </div>
</template>

<!-- el scripto -->
<script setup>
import Logo from "../assets/images/touravel.png";
import Hamburger from "~/components/Icons/Hamburger.vue";
import Close from "~/components/Icons/Close.vue";
import { ref } from "vue";
const styledMenuNav =
  "hover:text-mainn-50 transition-all duration-300 hover:border-b-2 border-amber-400 max-md:text-[16px]";

import { onMounted, onUnmounted } from "vue";

const handleScroll = () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.classList.add("logo-resize");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("logo-resize");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isNavVisible = ref(false);

const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value;
};
</script>

<style scoped>
.router-link-exact-active {
  @apply text-mainn-50;
}
.scrolled {
  @apply border-light-300 border-b bg-white;
}
.logo-resize {
  @apply scale-75;
}
footer {
  section .menu-list {
    h1 {
      @apply text-[20px] font-semibold max-sm:text-[16px];
    }
    li {
      @apply max-sm:text-[14px];
    }
  }
}
.nav-mobile.show {
  @apply translate-y-0/* or whatever style you need to show the nav */;
}

.nav-mobile {
  @apply px-4 py-8;

  ul {
    @apply flex flex-col items-center justify-center gap-4;
  }
}
.submenu-nav2 {
  @apply flex cursor-pointer flex-col items-center gap-1 px-4 pt-1 transition-all;
}
</style>
