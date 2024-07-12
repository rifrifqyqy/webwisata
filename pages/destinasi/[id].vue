<template>
  <div>
    DestinasiDettails{{ destination.title }} harga:
    {{ destination.lowestPrice }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = Number(route.params.id);
const apiUrl = "/api/destination";
const { data, error } = await useFetch(apiUrl);

if (error.value) {
  console.error("Error fetching data:", error.value);
}

const destination = computed(() => {
  if (data.value) {
    const item = data.value.find((destination) => destination.id === id);
    if (item) {
      const lowestPrice = Math.min(...item.price.map((p) => p.pricepkg));
      return {
        ...item,
        lowestPrice: formatRupiah(lowestPrice),
      };
    }
  }
  return null;
});
useHead({
  title: `TouTour | ${destination.value.title}`,
  meta: [{ name: "description", content: "Destinasi Wisata" }],
});
</script>

<style scoped></style>
