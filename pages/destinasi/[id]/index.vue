<template>
  <!-- <div>{{ data }}</div> -->
  <main class="container mt-12 grid grid-cols-6 gap-16">
    <section class="main-content">
      <div class="gallery-wrapper">
        <section class="thumb-wrapper">
          <div v-for="item in imgGallery" :key="item.id">
            <img
              :src="item.imageUrl"
              alt=""
              class="gallery-thumb"
              :class="{ active: item.imageUrl === selectedImage }"
              @click="selectImage(item.imageUrl)"
            />
          </div>
        </section>
        <img :src="selectedImage" alt="" class="img-gallery" />
      </div>
      <article class="flex flex-col gap-12">
        <section class="overview">
          <h1>Deskripsi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            impedit quis neque maiores earum molestiae rerum culpa soluta saepe
            harum. Maiores quas minus, totam unde exercitationem delectus? Rem
            facere doloribus est officia similique exercitationem sapiente enim,
            inventore ipsa ducimus labore consectetur perferendis illo
            laudantium, voluptatibus iure sint tenetur perspiciatis recusandae?
            Commodi fuga explicabo sequi laudantium rem. Sint ipsa, sequi soluta
            distinctio, autem reprehenderit ipsum minus iure quam magni quos
            illo. Cum eligendi impedit eveniet, ducimus nostrum debitis
            quibusdam, vitae blanditiis obcaecati numquam minus consequatur
            laboriosam consequuntur necessitatibus culpa aut exercitationem
            sapiente? Eveniet amet dolore asperiores, odit est vitae tempore
            debitis.
          </p>
        </section>
        <div class="flex flex-col gap-4">
          <h1 class="text-[24px] font-semibold uppercase">Fasilitas</h1>
          <section class="facility-wrapper">
            <div v-for="fac in facilityData" :key="fac.id">
              <div class="label">
                <img :src="fac.icon" alt="" />
                <article>
                  <p>{{ fac.description }}</p>
                  <h1>{{ fac.name }}</h1>
                </article>
              </div>
            </div>
          </section>
        </div>
        <section class="flex flex-col gap-4">
          <h1 class="text-[24px] font-semibold uppercase">Lokasi</h1>
          <div>
            <iframe
              :src="data.mapsFrame"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full"
            ></iframe>
          </div>
        </section>
      </article>
    </section>

    <aside class="side-nav">
      <section class="flex flex-col gap-4">
        <h1 class="text-4xl font-semibold">{{ data.title }}</h1>
        <section class="flex items-center justify-between">
          <div
            class="flex w-fit items-center justify-between rounded-full bg-amber-100 pr-4"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4999 9.04175C23.0857 9.04174 22.7499 9.37752 22.7499 9.79173C22.7499 10.2059 23.0857 10.5417 23.4999 10.5417L23.4999 9.04175ZM27.2462 10.5281L27.5303 9.83397L27.5301 9.83387L27.2462 10.5281ZM31.6407 14.1001L31.0193 14.52L31.0197 14.5207L31.6407 14.1001ZM33.2916 19.4659L34.0416 19.4659L34.0416 19.4647L33.2916 19.4659ZM30.4226 26.3064L29.8172 25.8636C29.8081 25.8761 29.7994 25.8889 29.7911 25.9019L30.4226 26.3064ZM27.5791 30.7459L26.9476 30.3414L26.9449 30.3456L27.5791 30.7459ZM23.4999 37.2084L22.8661 37.6093C23.0036 37.8268 23.243 37.9585 23.5003 37.9584C23.7576 37.9583 23.9968 37.8263 24.1341 37.6087L23.4999 37.2084ZM19.4207 30.7596L20.0546 30.3587L20.0526 30.3556L19.4207 30.7596ZM16.5772 26.3122L17.2091 25.9082C17.2008 25.8953 17.1921 25.8826 17.183 25.8701L16.5772 26.3122ZM13.7083 19.4718L12.9583 19.471V19.4718H13.7083ZM15.3591 14.1001L15.9801 14.5207L15.9801 14.5206L15.3591 14.1001ZM19.7536 10.534L20.0373 11.2282L20.0386 11.2277L19.7536 10.534ZM23.501 10.5417C23.9152 10.5411 24.2505 10.2049 24.2499 9.79064C24.2493 9.37643 23.913 9.04114 23.4988 9.04175L23.501 10.5417ZM23.4999 21.9413C23.0857 21.9413 22.7499 22.2771 22.7499 22.6913C22.7499 23.1055 23.0857 23.4413 23.4999 23.4413V21.9413ZM23.4999 15.4905C23.0857 15.4905 22.7499 15.8263 22.7499 16.2405C22.7499 16.6548 23.0857 16.9905 23.4999 16.9905L23.4999 15.4905ZM23.5184 23.4528C23.9325 23.4426 24.2599 23.0986 24.2497 22.6846C24.2395 22.2705 23.8955 21.9431 23.4814 21.9533L23.5184 23.4528ZM20.6405 21.1142L21.287 20.7339L21.287 20.7339L20.6405 21.1142ZM20.6405 17.8431L19.9941 17.4627L19.9941 17.4627L20.6405 17.8431ZM23.4814 17.004C23.8955 17.0142 24.2395 16.6868 24.2497 16.2727C24.2599 15.8586 23.9325 15.5147 23.5184 15.5045L23.4814 17.004ZM23.4999 10.5417C24.6873 10.5418 25.8633 10.7729 26.9624 11.2223L27.5301 9.83387C26.2508 9.31082 24.882 9.04178 23.4999 9.04175L23.4999 10.5417ZM26.9621 11.2222C28.6104 11.8968 30.0221 13.0443 31.0193 14.52L32.2621 13.6802C31.0992 11.9591 29.4527 10.6208 27.5303 9.83397L26.9621 11.2222ZM31.0197 14.5207C32.0088 15.9809 32.5388 17.7035 32.5416 19.4671L34.0416 19.4647C34.0383 17.402 33.4184 15.3873 32.2617 13.6795L31.0197 14.5207ZM32.5416 19.4659C32.5416 20.6555 32.3549 21.5589 31.9411 22.4917C31.5163 23.4496 30.8428 24.4614 29.8172 25.8636L31.028 26.7491C32.0548 25.3451 32.8158 24.2193 33.3123 23.0999C33.8199 21.9554 34.0416 20.8418 34.0416 19.4659H32.5416ZM29.7911 25.9019L26.9476 30.3414L28.2107 31.1504L31.0542 26.7109L29.7911 25.9019ZM26.9449 30.3456L22.8657 36.8081L24.1341 37.6087L28.2134 31.1462L26.9449 30.3456ZM24.1338 36.8075L20.0545 30.3587L18.7869 31.1606L22.8661 37.6093L24.1338 36.8075ZM20.0526 30.3556L17.2091 25.9082L15.9453 26.7163L18.7888 31.1636L20.0526 30.3556ZM17.183 25.8701C16.1572 24.4645 15.4836 23.4526 15.0586 22.4952C14.6449 21.5631 14.4583 20.6612 14.4583 19.4718H12.9583C12.9583 20.8478 13.1799 21.96 13.6876 23.1038C14.184 24.2222 14.9449 25.3479 15.9714 26.7544L17.183 25.8701ZM14.4583 19.4725C14.46 17.707 14.99 15.9824 15.9801 14.5207L14.7382 13.6795C13.5802 15.3891 12.9603 17.4062 12.9583 19.471L14.4583 19.4725ZM15.9801 14.5206C16.9781 13.0469 18.3897 11.9014 20.0373 11.2282L19.47 9.83967C17.5484 10.6248 15.902 11.9608 14.7381 13.6795L15.9801 14.5206ZM20.0386 11.2277C21.1372 10.7765 22.3133 10.5435 23.501 10.5417L23.4988 9.04175C22.1164 9.04378 20.7475 9.31498 19.4687 9.84019L20.0386 11.2277ZM23.4999 23.4413C24.9202 23.4413 26.2326 22.6836 26.9427 21.4536L25.6437 20.7036C25.2015 21.4695 24.3843 21.9413 23.4999 21.9413V23.4413ZM26.9427 21.4536C27.6528 20.2236 27.6528 18.7082 26.9427 17.4782L25.6437 18.2282C26.0858 18.9941 26.0858 19.9377 25.6437 20.7036L26.9427 21.4536ZM26.9427 17.4782C26.2326 16.2482 24.9202 15.4905 23.4999 15.4905L23.4999 16.9905C24.3843 16.9905 25.2015 17.4623 25.6437 18.2282L26.9427 17.4782ZM23.4814 21.9533C22.5828 21.9754 21.7428 21.5087 21.287 20.7339L19.9941 21.4945C20.7262 22.7388 22.0752 23.4884 23.5184 23.4528L23.4814 21.9533ZM21.287 20.7339C20.8311 19.9591 20.8311 18.9982 21.287 18.2234L19.9941 17.4627C19.2621 18.707 19.2621 20.2503 19.9941 21.4945L21.287 20.7339ZM21.287 18.2234C21.7428 17.4486 22.5828 16.9819 23.4814 17.004L23.5184 15.5045C22.0752 15.4689 20.7262 16.2185 19.9941 17.4627L21.287 18.2234Z"
                fill="#F7A300"
              />
            </svg>

            <p class="text-[16px] font-medium text-mainn-50">
              {{ data.location }}
            </p>
          </div>
        </section>
      </section>
      <section
        class="flex items-center justify-between rounded-xl border border-amber-500 px-4 py-3 font-semibold"
      >
        <div class="flex w-1/2 items-center gap-2 border-r border-amber-500">
          <img src="/images/star.svg" alt="" class="h-8 w-8" />
          <p class="text-[20px]">{{ data.rating }}</p>
        </div>
        <div class="flex w-1/2 justify-end text-[18px]">
          <h1 class="rounded-md bg-zinc-200 px-3 py-1 text-zinc-600">
            1225 Ulasan
          </h1>
        </div>
      </section>
      <section class="flex justify-between">
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-bold text-mainn-50">
            {{ formatCurrency(lowestPrice) }}
          </h1>
          <p class="text-zinc-400">mulai dari</p>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="/images/package.svg"
            alt=""
            class="h-10 w-10 rounded-full bg-zinc-200 p-1"
          />
          <p class="font-semibold text-zinc-400">
            {{ data.paketwisata.length }} Paket tersedia
          </p>
        </div>
      </section>
      <UButton
        class="flex justify-center rounded-sm bg-mainn-50 px-4 py-3 text-xl font-bold uppercase hover:bg-mainn-50/80"
        @click="goToCheckout"
      >
        <p>Pesan Sekarang</p>
      </UButton>
    </aside>
  </main>
</template>

<script setup>
const data = useAttrs().destination;
const router = useRouter();
// Data array gambar
const imgGallery = data.gallery;
const facilityData = [
  {
    id: 1,
    name: "Wifi",
    description: "Internet Access",
    icon: "/images/wifi.svg",
  },
  {
    id: 2,
    name: "Toilet Available",
    description: "Toilet",
    icon: "/images/toilet.svg",
  },
  {
    id: 2,
    name: "Shopping Area",
    description: "Shopping",
    icon: "/images/shopping-bag.svg",
  },
  {
    id: 2,
    name: "Wifi",
    description: "Internet Access",
    icon: "/images/shopping-bag.svg",
  },
  {
    id: 2,
    name: "Wifi",
    description: "Internet Access",
    icon: "/images/shopping-bag.svg",
  },
  {
    id: 2,
    name: "Wifi",
    description: "Internet Access",
    icon: "/images/shopping-bag.svg",
  },
];
const selectedImage = ref(imgGallery[0].imageUrl);
const lowestPrice = Math.min(...data.paketwisata.map((item) => item.price));
const highestPrice = Math.max(...data.paketwisata.map((item) => item.price));
// fungsi untuk memformat harga ke rupiah
const formatCurrency = (value) => {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

// Fungsi untuk mengubah gambar utama
const selectImage = (image) => {
  selectedImage.value = image;
};

const goToCheckout = () => {
  router.push(`/destinasi/${data.id}/checkout`);
};
</script>

<style scoped>
.main-content {
  @apply col-span-4 flex flex-col gap-12;
}
.side-nav {
  @apply sticky top-28 col-span-2 flex h-fit flex-col gap-8;
}
.gallery-wrapper {
  @apply mx-auto grid w-full grid-cols-8 justify-items-center;
}
.img-gallery {
  @apply col-span-6 h-[450px] w-full rounded-sm object-cover object-top;
}
.thumb-wrapper {
  @apply col-span-2 flex h-fit flex-wrap justify-start gap-2;
}
.gallery-thumb {
  @apply h-[70px] w-[70px] cursor-pointer rounded-sm border-2 border-transparent p-1 transition-all duration-300 object-cover;

  &:hover {
    @apply border-zinc-300;
  }

  &.active {
    @apply border-mainn-50;
  }
}

.overview {
  @apply flex flex-col gap-4;

  h1 {
    @apply text-[24px] font-semibold uppercase;
  }
  p {
    @apply text-[16px] text-zinc-500;
  }
}
.facility-wrapper {
  @apply grid gap-6 rounded-md border border-zinc-300 bg-zinc-100 px-4 py-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;

  .label {
    @apply flex items-center gap-4;
    img {
      @apply h-[50px] w-[50px] rounded-full bg-amber-100;
    }
    p {
      @apply text-[14px] text-zinc-400;
    }
    h1 {
      @apply text-[16px] font-semibold;
    }
  }
}
</style>
