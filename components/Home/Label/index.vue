<template>
  <div :class="styledBox">
    <img :src="imgSrc" alt="" class="w-[64px] max-sm:w-[42px]" />
    <h1 :class="textStyled">
      <slot name="text" />
    </h1>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";
const props = defineProps({
  styled: {
    type: String,
    default: "",
  },
  textStyled: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    default: "",
  },
});

const styledBox = computed(() => {
  return twMerge(
    "group flex w-fit items-center gap-4 rounded-tl-md rounded-tr-md border-b-2 bg-white px-6 py-4 transition-all duration-500 hover:border-b-4 hover:border-green-600",
    props.styled,
  );
});
const textStyled = computed(() => {
  return twMerge(
    "font-semibold text-green-600 transition-all duration-500 group-hover:scale-110",
    props.textStyled,
  );
});
</script>

<style scoped></style>
