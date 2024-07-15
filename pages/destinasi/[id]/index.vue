<template>
  <div>{{ data }}</div>
</template>

<script setup>
const data = useAttrs().destination;
</script>

<style scoped></style>
