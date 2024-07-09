<template>
  <div>
    <nav
      class="navbar fixed top-0 z-[999] flex w-full items-center justify-between bg-white px-24 py-3 transition-all duration-300 max-md:px-8"
    >
      <div class="flex items-center justify-between gap-12 bg-white">
        <NuxtLink to="/">
          <img
            src="/images/logo.png"
            alt=""
            class="logo w-[180px] transition-all max-md:w-[60px]"
          />
        </NuxtLink>
        <ul
          class="flex gap-8 text-[20px] font-semibold text-green-700 max-md:gap-2"
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
        styled="rounded-lg bg-green-700 px-5 text-[20px] text-yellow-300 ring-inset ring-green-400 hover:opacity-80 active:ring-2"
      >
        Order Now
      </buttonPrimary>
    </nav>

    <div class="mx-24 max-md:mx-8">
      <slot />
    </div>
  </div>
</template>

<!-- el scripto -->
<script setup>
const styledMenuNav =
  "hover:text-amber-400 transition-all duration-300 hover:border-b-2 border-amber-400 max-md:text-[14px]";

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
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  .menu-list {
    h1 {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
