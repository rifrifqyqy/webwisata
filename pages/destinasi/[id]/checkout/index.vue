<template>
  <h1 class="mt-8 text-4xl font-semibold uppercase">Menu Checkout</h1>
  <section class="mt-8 grid grid-cols-5 gap-10">
    <div class="col-span-3 mx-auto w-full">
      <form
        class="flex flex-col gap-6 border border-light-400 p-8"
        @submit.prevent="submitForm"
        :ref="formCheckout"
        id="checkoutForm"
      >
        <div class="form-wrap mb-4">
          <label
            class="mb-2 flex w-full items-center gap-2 font-semibold uppercase"
          >
            <span class="step-number">1</span>
            Nama Pemesan</label
          >
          <input
            type="text"
            v-model="nama"
            :class="[formInput, formBorder]"
            placeholder="Masukkan Nama Anda"
            required
          />
        </div>
        <div class="form-wrap mb-4">
          <label class="mb-2 w-full font-semibold uppercase">
            <span class="step-number">2</span>
            Waktu Perjalanan</label
          >
          <div class="col-span-2 flex gap-4 max-xl:col-span-1">
            <div class="w-full">
              <input
                type="date"
                v-model="tanggalMulai"
                :class="[formInput, formBorder]"
                aria-placeholder="masukkan tanggal mulai"
                required
              />
              <p class="text-dark-50">Tanggal pergi</p>
            </div>
            <div class="w-full">
              <input
                type="date"
                v-model="tanggalSelesai"
                :class="[formInput, formBorder]"
                aria-placeholder="masukkan tanggal mulai"
                required
              />
              <p class="text-dark-50">Tanggal pulang</p>
            </div>
          </div>
        </div>
        <div class="form-wrap mb-4">
          <label class="mb-2 w-full font-semibold uppercase">
            <span class="step-number">3</span>
            Jumlah Peserta</label
          >
          <div class="">
            <div class="flex items-center gap-4">
              <button
                @click="decrementJumlahPeserta"
                class="h-fit transition-all active:scale-110"
              >
                <img src="/images/Minus.svg" alt="" class="w-12" />
              </button>

              <input
                type="number"
                v-model.number="jumlahPeserta"
                :class="[formInput, formBorder, 'text-center']"
                required
              />

              <button
                @click="incrementJumlahPeserta"
                class="h-fit transition-all active:scale-110"
              >
                <img src="/images/plus.svg" alt="" class="w-12" />
              </button>
            </div>
          </div>
        </div>
        <h1 class="mb-4 font-semibold uppercase">
          <span class="step-number">4</span>
          Pilih Paket
        </h1>
        <div class="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 max-xl:grid-cols-1">
          <div
            v-for="option in data.paketwisata"
            :key="option.id"
            class="mb-2 flex w-full items-center"
          >
            <div
              class="checkbox relative w-full overflow-hidden rounded-md border-2"
              :class="
                paket.find((p) => p.id === option.id)
                  ? 'border-mainn-50'
                  : 'border-light-400'
              "
            >
              <input
                type="checkbox"
                :value="option.id"
                @change="handlePaketChange($event, option)"
                class="h-20 w-full cursor-pointer appearance-none rounded-sm checked:border-transparent focus:outline-none"
                :id="`paketform`"
              />

              <div
                class="absolute left-0 top-0 -z-20 flex h-full w-full items-center p-4 transition-all"
                :class="
                  paket.find((p) => p.id === option.id)
                    ? 'bg-amber-100'
                    : 'bg-white'
                "
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center gap-4">
                    <img
                      :src="option.imageUrl"
                      alt=""
                      class="w-[2.625rem] rounded-md object-cover object-left"
                    />
                    <h1>{{ option.name }}</h1>
                  </div>
                  <p class="font-semibold">
                    {{ formatCurrency(option.price) }}
                  </p>
                </div>
              </div>
            </div>
            <label
              :for="`paketform-${option.id}`"
              class="hidden text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {{ option.name }} - Rp{{ option.price.toLocaleString() }}
            </label>
          </div>
        </div>
        <div class="form-wrap mb-4">
          <label
            class="mb-2 flex w-full items-center gap-2 font-semibold uppercase"
          >
            <span class="step-number">5</span>
            Nomor ponsel</label
          >
          <div class="col-span-2">
            <input
              type="text"
              @input="validateNumber"
              v-model="noponsel"
              :class="[formInput, formBorder]"
              placeholder="Masukkan Nomor Ponsel Anda"
              required
            />
            <p class="text-dark-50">
              Mohon untuk tidak memasukkan kode negara (+62)
            </p>
          </div>
        </div>
        <div class="form-wrap mb-4">
          <label
            class="mb-2 flex w-full items-center gap-2 font-semibold uppercase"
          >
            <span class="step-number">6</span>
            Alamat Email</label
          >
          <div class="col-span-2">
            <input
              type="email"
              v-model="emailuser"
              :class="[formInput, formBorder]"
              placeholder="Masukkan Alamat Email Anda"
              required
            />
            <p class="text-dark-50">Contoh: namaanda@gmail.com</p>
          </div>
        </div>
      </form>
    </div>

    <aside class="sticky top-32 col-span-2 flex h-fit flex-col gap-8">
      <section class="flex flex-col">
        <div>
          <CardTravel
            :key="data.id"
            :image="data.thumb"
            :title="data.title"
            :desc="data.description"
            :rating="data.rating"
            :showPrice="false"
            :location="data.location"
            :maps="data.maps"
            :showButton="false"
            :to="`/destinasi/${data.id}`"
          />
        </div>
      </section>
      <section class="border border-light-400 p-6">
        <h2 class="mb-4 text-2xl font-bold uppercase">Ringkasan Pemesanan</h2>
        <section class="mt-8 flex flex-col gap-4">
          <div class="resume" v-if="nama">
            <h1>Nama Pemesan</h1>
            {{ nama }}
          </div>
          <div v-if="tanggalMulai && tanggalSelesai" class="resume">
            <h1>Waktu Perjalanan</h1>
            <div>
              <p>{{ tanggalMulai }} sampai {{ tanggalSelesai }}</p>
            </div>
          </div>
          <div class="resume" v-if="jumlahPeserta">
            <h1>Jumlah Peserta</h1>
            {{ jumlahPeserta }}
          </div>
          <div class="resume" v-if="hargaPaket > 0">
            <h1>Paket yang dipilih</h1>
            <ul class="flex flex-col gap-2">
              <li
                v-for="p in paket"
                :key="p.id"
                class="flex items-center justify-start gap-2 rounded-md border border-mainn-50 bg-amber-50 px-4 py-2 text-amber-600"
              >
                <span class="mr-2">
                  <img :src="p.imageUrl" alt="" class="w-6" />
                </span>
                <div>
                  {{ p.name }} <span class="text-end">(</span> Rp{{
                    p.price.toLocaleString()
                  }}<span> )</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="resume">
            <h1 class="text-black">Harga Paket Wisata</h1>
            {{
              hargaPaket > 0
                ? `Rp${hargaPaket.toLocaleString()}`
                : "Pilih paket wisata anda"
            }}
          </div>
        </section>

        <h1
          class="mt-8 border-2 border-mainn-50 bg-amber-100 py-2 text-center text-2xl font-bold"
          v-if="totalBill"
        >
          {{ totalBill }}
        </h1>

        <button
          type="submit"
          @click="submitButton"
          class="mt-8 w-full bg-mainn-50 px-4 py-2 text-xl font-bold uppercase text-white"
          form="checkoutForm"
        >
          Submit
        </button>
      </section>
    </aside>
  </section>
  <!-- modal -->
  <Modal :isVisible="isModalVisible" :closeModal="closeModal" />
</template>

<script setup>
import { ref } from "vue";
// modal state
const isModalVisible = ref(false);
const closeModal = () => {
  isModalVisible.value = false;
  setTimeout(() => {
    window.location.href = "/";
  }, 500);
};
// form state base
const nama = ref("");
const tanggalMulai = ref("");
const tanggalSelesai = ref("");
const noponsel = ref("");
const emailuser = ref("");
const jumlahPeserta = ref(1);
const paket = ref([]);
const hargaPaket = ref(0);
const data = useAttrs().destination;
const formCheckout = ref(null);
// form style variable
const formInput =
  "border-2  border-transparent border-b-light-400 p-4 w-full placeholder:text-dark-300 text-black";
const formBorder =
  "col-span-2 outline-none transition-all focus:border-2 focus:border-mainn-50 focus:bg-transparent";

//fungsi input noponsel
const validateNumber = (event) => {
  const value = event.target.value.replace(/\D/g, "");
  noponsel.value = value;
};

// form jumlah peserta
const decrementJumlahPeserta = () => {
  if (jumlahPeserta.value > 1) {
    jumlahPeserta.value--;
  }
};

const incrementJumlahPeserta = () => {
  jumlahPeserta.value++;
};
// fungsi konversi ke rupiah
const formatCurrency = (value) => {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
const handlePaketChange = (e, selectedPaket) => {
  const { value, checked } = e.target;
  if (checked) {
    paket.value.push(selectedPaket);
    hargaPaket.value += selectedPaket.price;
  } else {
    paket.value = paket.value.filter((p) => p.id.toString() !== value);
    hargaPaket.value -= selectedPaket.price;
  }
};
// const handlePaketChange = (e, selectedPaket) => {
//   const { value, checked } = e.target;

//   if (checked) {
//     hargaPaket.value += selectedPaket.price;
//   } else {
//     hargaPaket.value -= selectedPaket.price;
//   }
// };

const calculateTotalDays = () => {
  const start = new Date(tanggalMulai.value);
  const end = new Date(tanggalSelesai.value);
  if (start.getTime() === end.getTime()) {
    return 1;
  }
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const calculateTotalBill = () => {
  const totalDays = calculateTotalDays();
  return totalDays * jumlahPeserta.value * hargaPaket.value;
};

const submitForm = () => {
  const paketString = paket.value.map((p) => p.name).join(", ");
  // menghitung jumlah hari
  const totalDaysValue = calculateTotalDays();
  const totalBillValue = calculateTotalBill();
  const payload = {
    nama: nama.value,
    tanggalMulai: tanggalMulai.value,
    tanggalSelesai: tanggalSelesai.value,
    jumlahPeserta: jumlahPeserta.value,
    noponsel: noponsel.value,
    emailuser: emailuser.value,
    paket: paketString,
    totalDays: totalDaysValue,
    totalBill: totalBillValue,
    hargaPaket: hargaPaket.value,
  };

  fetch("http://localhost:8080/jwdtp1/submit_form.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Mengatur header konten ke JSON
    },
    body: JSON.stringify(payload), // Mengonversi objek ke format JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      isModalVisible.value = true;
    })
    .catch((error) => {
      console.error("Error during submission:", error);
    });
};
// button submit

const submitButton = () => {
  if (formCheckout.value) {
    formCheckout.value.submit();
  }
};
const totalBill = computed(() =>
  hargaPaket.value > 0 && tanggalMulai.value && tanggalSelesai.value
    ? `Rp${calculateTotalBill().toLocaleString()}`
    : "",
);
</script>

<style scoped>
.form-wrap {
  @apply grid grid-cols-3 items-center gap-4 focus-within:text-mainn-50;
}
.form-input {
  @apply w-full border-2 border-transparent border-b-light-400 p-4 text-black placeholder:text-dark-300;
}
.form-border {
  @apply col-span-2 outline-none transition-all focus:border-2 focus:border-mainn-50 focus:bg-transparent;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.step-number {
  @apply rounded-full bg-amber-100 px-4 py-1 font-bold text-mainn-50;
}

.resume {
  @apply flex justify-between;

  h1 {
    @apply font-bold uppercase;
  }
}
</style>
