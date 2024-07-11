<template>
  <div>
    <button :class="buttonClasses">
      <slot />
    </button>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps({
  styled: {
    type: String,
    default: "",
  },
});

const buttonClasses = computed(() => {
  return twMerge(
    " border border-green-600 bg-white px-5 py-2 font-semibold text-green-600 hover:opacity-80 max-md:px-3 max-md:py-1 max-md:text-[14px]",
    props.styled,
  );
});
</script>
