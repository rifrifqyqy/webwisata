<template>
  <div>
    <nav
      class="navbar sticky top-0 z-[999] mt-2 flex items-center justify-between px-24 py-3 transition-all duration-300 max-md:px-8"
    >
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/">
          <img
            src="/images/logo.png"
            alt=""
            class="logo w-[180px] transition-all max-md:w-[120px]"
          />
        </NuxtLink>
        <ul
          class="flex gap-8 text-[20px] font-semibold text-green-700 max-md:gap-2 max-sm:hidden"
        >
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
      </div>

      <buttonPrimary
        styled="rounded-lg bg-green-700 px-5 text-[20px] text-yellow-300 ring-inset ring-green-400 hover:opacity-80 active:ring-2 max-sm:hidden"
      >
        Order Now
      </buttonPrimary>
      <button class="hidden max-sm:block" @click="toggleNav">
        <Hamburger  fill="fill-green-600" />
      </button>
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

    <footer class="mt-16 bg-green-800">
      <section class="grid grid-cols-5 max-sm:grid-cols-2 px-24 py-12 max-sm:px-8 max-sm:py-4 text-white">
        <img src="/images/subway.png" alt="" class="col-span-2 w-[200px] max-sm:w-[150px] max-sm:mb-6" />
        <div class="menu-list">
          <h1>Navigation</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Menu</NuxtLink></li>
          </ul>
        </div>
        <div class="menu-list">
          <h1>Follow Us</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Menu</NuxtLink></li>
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

      <div class="col-span-5 mt-4 flex justify-center bg-green-700 py-2 max-sm:px-4 ">
        <h1 class="text-md w-fit text-white max-sm:text-sm text-center">
          © 2024 Subway IP LLC by PT Sari Sandwich Indonesia | All rights
          reserved. Designed by Rifqy Hamdani |
          <span class="ml-2">Made with</span>
          <span
            class="ml-2 rounded-md bg-zinc-700 px-3 py-1 font-semibold text-green-400 hover:opacity-80"
          >
            <NuxtLink to="https://nuxt.com/">Nuxt3</NuxtLink>
          </span>
        </h1>
      </div>
    </footer>
  </div>
</template>

<!-- el scripto -->
<script setup>
import Hamburger from "~/components/Icons/Hamburger.vue";
import Close from "~/components/Icons/Close.vue";
import { ref } from "vue";
const styledMenuNav =
  "hover:text-amber-400 transition-all duration-300 hover:border-b-2 border-amber-400 max-md:text-[16px]";

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
  @apply text-amber-400;
}
.scrolled {
  @apply border-b border-green-600 bg-white;
}
.logo-resize {
  @apply scale-75;
}
footer {
  section .menu-list {
    h1 {
      @apply text-[20px] font-semibold max-sm:text-[16px]
    }
    li {
      @apply max-sm:text-[14px]
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
</style>
