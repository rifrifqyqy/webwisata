<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full gap-2' }">
    <template #default="{ item, index, open }">
      <UButton
        variant="ghost"
        class="hover:bg-dark-100 group flex justify-between bg-white shadow-sm transition-all duration-300"
        :ui="{ rounded: 'rounded-none', padding: {} }"
        :class="[open && 'bg-dark-100']"
      >
        <span
          class="text-dark-50 truncate px-4 py-2 text-xl group-hover:text-white max-sm:px-2 max-sm:py-0 max-sm:text-[16px]"
          :class="[open && 'text-white']"
        >
          {{ item.label }}</span
        >

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="text-dark-50 h-5 w-5 min-w-6 transform transition-transform duration-200 group-hover:text-white"
            :class="[open && 'rotate-180 text-white']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
      <p
        class="px-4 text-lg text-gray-900 max-sm:text-[14px] max-sm:leading-normal dark:text-white"
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
      "Yes! Your friendly sandwich artist will make your freshly made sandwich however you want it. In fact, there are over 2 million sandwich varieties available from our menu choices, so you can have your Subway® sandwich with any combination of ingredients we offer. Consider those varieties as 2 million delicious sandwiches—all with your name on them.",
  },
  {
    label: "Can Subway Menus Accomodate My Special Dietary Needs?",
    content:
      "While the Subway® brand maintains a consistent menu globally, it adapts to accommodate diverse dietary preferences. For example, in India, where a significant portion of the population is Hindu and abstains from beef, and Muslim consumers avoid pork, these ingredients are replaced with options like chicken, lamb, or turkey. Additionally, Subway® sandwiches are made fresh to order, allowing customers to customize their meals to meet their specific dietary requirements by adding or omitting ingredients as desired.",
  },
  {
    label:
      "Does any of your food products use Monosodium Glutamate (MSG) as a flavor enhancer?",
    content:
      "Subway® does not add MSG to any of our standard menu items. However, some ingredients like hydrolyzed or textured vegetable proteins and autolyzed yeast, which contain glutamates, may cause similar sensitivities. For specific details on which Subway® foods contain autolyzed yeast and hydrolyzed proteins, please visit our websites nutrition section for ingredient listings. We also provide a document in the nutrition section titled Ingredient Information for People with Food Allergies, which identifies menu items containing these ingredients. Please note, snack chips and pre-packaged salad dressings available in our restaurants may contain MSG, so we recommend checking the ingredient list on the package.",
  },
];
</script>

<style scoped></style>
