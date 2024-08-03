<template>
  <div>test id: {{ id }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const id = Number(route.params.id);
</script>

<style scoped></style>
