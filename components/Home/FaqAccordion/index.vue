<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full gap-2' }">
    <template #default="{ item, index, open }">
      <UButton
        variant="ghost"
        class="group flex justify-between bg-white shadow-sm transition-all duration-300 hover:bg-dark-100"
        :ui="{ rounded: 'rounded-none', padding: {} }"
        :class="[open && 'bg-dark-100']"
      >
        <span
          class="truncate px-4 py-2 text-xl text-dark-50 group-hover:text-white max-sm:px-2 max-sm:py-0 max-sm:text-[16px]"
          :class="[open && 'text-white']"
        >
          {{ item.label }}</span
        >

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="h-5 w-5 min-w-6 transform text-dark-50 transition-transform duration-200 group-hover:text-white"
            :class="[open && 'rotate-180 text-white']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
      <p
        class="px-4 text-lg text-dark-200 max-sm:text-[14px] max-sm:leading-normal dark:text-white"
      >
        {{ item.content }}
      </p>
    </template>
  </UAccordion>
</template>

<script setup>
const items = [
  {
    label: "Bagaimana saya memesan tiket Wisata?",

    content:
      "Untuk memesan tiket wisata, kunjungi situs web atau aplikasi kami, pilih destinasi dan paket yang diinginkan, masukkan jumlah tiket, dan selesaikan pemesanan. Pembayaran dapat dilakukan dengan QRIS. Tiket dijual berdasarkan paket per orang dengan berbagai fasilitas. Setelah pembayaran, Anda akan menerima konfirmasi melalui email atau SMS. Kebijakan pembatalan dan perubahan tiket tergantung pada paket yang dipilih. Untuk masalah pemesanan atau pembayaran, hubungi layanan pelanggan kami.",
  },
  {
    label: "Bagaimana jika saya mengalami masalah saat memesan tiket?",
    content:
      "Jika Anda mengalami masalah saat memesan tiket atau selama proses pembayaran, jangan ragu untuk menghubungi tim dukungan pelanggan kami melalui email, telepon, atau chat di situs web kami. Kami siap membantu Anda menyelesaikan masalah secepat mungkin.",
  },
  {
    label:
      "Apakah tiket dijual berdasarkan paket per orang?",
    content:
      "Benar, tiket dijual berdasarkan paket per orang. Kami menawarkan berbagai paket yang dirancang untuk memenuhi kebutuhan berbagai jenis wisatawan. Setiap paket memiliki fasilitas dan harga yang berbeda, jadi pastikan untuk memilih yang paling sesuai dengan kebutuhan Anda.",
  },
];
</script>

<style scoped></style>
