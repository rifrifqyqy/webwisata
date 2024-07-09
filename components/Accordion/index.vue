<template>
  <div>
    <button
      @click="toggle"
      :aria-expanded="isOpen"
      :aria-controls="id"
      class="accordion-button"
      :class="buttonClass"
    >
      <slot name="header"></slot>
      <i :class="[iconClass, isOpen ? openIcon : closeIcon]"></i>
    </button>
    <div v-show="isOpen" :id="id" :class="contentStyled">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { twMerge } from "tailwind-merge";
const props = defineProps({
  openIcon: {
    type: String,
    default: "i-heroicons-chevron-up-20-solid",
  },
  closeIcon: {
    type: String,
    default: "i-heroicons-chevron-down-20-solid",
  },
  buttonClass: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  contentStyled: {
    type: String,
    default: "",
  },
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const buttonClass = computed(() => {
  return twMerge(
    "flex justify-between items-center w-full bg-green-600 text-white px-4 py-2 cursor-pointer",
    props.buttonClass,
  );
});
const contentStyled = computed(() => {
  return twMerge(
    "p-4 border mt-2 border-zinc-300",
    props.contentStyled,
  );
});
</script>

<style>
.accordion-content {
  padding: 1rem;
}
</style>
