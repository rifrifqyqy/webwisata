<template>
  <div class="mx-12 flex justify-between max-sm:mx-4 max-sm:flex-col">
    <aside class="sidebar-category">
      <h1
        class="mb-4 rounded-md bg-green-600 py-2 text-center text-3xl font-semibold text-white"
      >
        Category
      </h1>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'breakfast' }"
        @click="setSelectedCategory('breakfast')"
      >
        <img src="/images/hotdog1.jpg" alt="" :class="[styledCtgImg, '']" />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Breakfast
        </h1>
      </div>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'wrap' }"
        @click="setSelectedCategory('wrap')"
      >
        <img
          src="https://img.freepik.com/free-photo/chicken-wrap_144627-33297.jpg?t=st=1717947172~exp=1717950772~hmac=57aa719457460779c21afe5b6e28d7ab6e10765506d976c3cd927027023d558a&w=996"
          alt=""
          :class="[styledCtgImg, '']"
        />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Wraps
        </h1>
      </div>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'sandwich' }"
        @click="setSelectedCategory('sandwich')"
      >
        <img src="/images/sandwich1.jpg" alt="" :class="[styledCtgImg, '']" />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Sandwich
        </h1>
      </div>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'salad' }"
        @click="setSelectedCategory('salad')"
      >
        <img
          src="https://facts.net/wp-content/uploads/2023/11/11-subway-salad-nutrition-facts-1700294617.jpg"
          alt=""
          :class="[styledCtgImg, '']"
        />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Salads
        </h1>
      </div>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'drink' }"
        @click="setSelectedCategory('drink')"
      >
        <img
          src="https://www.auctionfactory.com/uploaded_files7/33a-soda-fountain_file_1606070592.jpg"
          alt=""
          :class="[styledCtgImg, '']"
        />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Drinks
        </h1>
      </div>
      <div
        class="ctg-box group"
        :class="{ active: selectedCategory === 'sides' }"
        @click="setSelectedCategory('sides')"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDXNYhsX5JQIovHUYd1eJdrGkBkBKUSfMfVRZFisDRMtqUlPZYBUaNzphfU3vUdw7uxI&usqp=CAU"
          alt=""
          :class="[styledCtgImg, '']"
        />
        <h1
          class="stroke-current group-hover:scale-110 group-hover:stroke-yellow-400"
        >
          Sides
        </h1>
      </div>
    </aside>
    <aside class="sidebar-mobile">
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'breakfast' }"
        @click="setSelectedCategory('breakfast')"
      >
        Breakfast
      </div>
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'wrap' }"
        @click="setSelectedCategory('wrap')"
      >
        Wraps
      </div>
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'sandwich' }"
        @click="setSelectedCategory('sandwich')"
      >
        Sandwich
      </div>
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'salad' }"
        @click="setSelectedCategory('salad')"
      >
        Salads
      </div>
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'drink' }"
        @click="setSelectedCategory('drink')"
      >
        Drinks
      </div>
      <div
        class="menu-nav"
        :class="{ active: selectedCategory === 'sides' }"
        @click="setSelectedCategory('sides')"
      >
        Sides
      </div>
    </aside>
    <div class="prods-container">
      <div v-for="p in filteredProducts" :key="p.id">
        <CardProducts :products="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "menu",
});
useHead({
  title: "Subway | Menu",
  meta: [{ name: "description", content: "Subway Menus" }],
});
const styledCtgImg = "group-hover:brightness-100 group-hover:grayscale-0";

import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import productsData from "~/data/menu.json";

const products = JSON.parse(JSON.stringify(productsData));
const selectedCategory = ref(null);

const setSelectedCategory = (category) => {
  selectedCategory.value = category;
  window.localStorage.setItem("selectedCategory", category);
};

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products;
  }
  return products.filter(
    (product) => product.category === selectedCategory.value,
  );
});

onMounted(() => {
  const storedCategory = window.localStorage.getItem("selectedCategory");
  if (storedCategory && !selectedCategory.value) {
    selectedCategory.value = storedCategory;
  }

  // Add event listener to clear localStorage on refresh
  window.addEventListener("beforeunload", handleBeforeUnload);
});

// Clean up the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});

const handleBeforeUnload = () => {
  window.localStorage.removeItem("selectedCategory");
};
</script>

<style scoped>
.prods-container {
  @apply grid h-fit grid-cols-4 gap-4 max-sm:grid-cols-2 max-sm:gap-2;
}
.sidebar-category {
  @apply sticky top-[100px] flex h-max w-[280px] flex-col gap-2 rounded-lg border border-green-600 p-2 max-sm:hidden;
}

.ctg-box {
  @apply relative flex h-[50px] cursor-pointer overflow-hidden rounded-lg transition-all hover:ring-2 hover:ring-yellow-500;
  h1 {
    @apply m-auto text-3xl font-semibold text-yellow-500 transition-all group-hover:scale-110;
  }
  img {
    @apply absolute -z-10 h-full w-full object-cover brightness-50 grayscale transition-all;
  }
}
.ctg-box.active {
  @apply h-[100px] ring-2 ring-yellow-500;
  h1 {
    @apply rounded-lg bg-green-600 px-5 py-1 text-zinc-100;
  }
  img {
    @apply brightness-75 grayscale-0;
  }
}
.sidebar-mobile {
  scrollbar-width: none;
  @apply sticky top-[58px] z-10 -mx-4 mb-4 hidden items-center gap-4 overflow-x-scroll bg-[#f7f7f7] px-4 py-2 font-semibold text-green-700 shadow-sm max-sm:flex;
}
.menu-nav {
  @apply  cursor-pointer rounded-sm bg-zinc-200 px-4 py-1 font-medium text-zinc-600/60 transition-all hover:bg-green-600 hover:text-yellow-300;
}
.menu-nav.active {
  @apply bg-green-600 text-yellow-300;
}
</style>
