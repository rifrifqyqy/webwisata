<template>
  <NuxtLink :to="to">
    <button :class="[styledButton]">
      <slot />
    </button>
  </NuxtLink>
</template>

<script setup>
import { twMerge } from "tailwind-merge";
const props = defineProps({
  styled: {
    type: String,
    default: "",
  },
  to: {},
});

const styledButton = computed(() => {
  return twMerge(
    " bg-green-600 px-5 py-2 font-semibold text-white hover:opacity-80 max-md:px-3 max-md:py-1 max-md:text-[16px] w-full",
    props.styled,
  );
});
</script>
