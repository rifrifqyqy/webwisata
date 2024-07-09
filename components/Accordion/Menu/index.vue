<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton
        variant="ghost"
        class=""
        :ui="{ rounded: 'rounded-none', padding: {} }"
        :class="[
          open && 'bg-green-600',
          'group border-b border-zinc-300 transition-all duration-300 hover:bg-green-600',
        ]"
      >
        <span
          :class="[
            'truncate px-4 py-2 text-lg text-green-600 group-hover:text-zinc-50 max-sm:px-0 max-sm:py-1 max-sm:text-[16px]',
            open && 'text-zinc-50',
          ]"
        >
          {{ item.label }}</span
        >

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="ms-auto h-5 w-5 transform text-green-600 transition-transform duration-200 group-hover:text-white"
            :class="[open && 'rotate-180 text-zinc-50']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
      <p
        class="px-4 text-lg leading-normal text-gray-900 max-sm:text-[14px] dark:text-white"
      >
        {{ item.content }}
      </p>
    </template>
  </UAccordion>
</template>

<script setup>
const items = [
  {
    label: "Can i get extra Toppings?",

    content:
      "Yes! Your friendly sandwich artist will make your freshly made sandwich however you want it. In fact, there are over 2 million sandwich varieties available from our menu choices, so you can have your Subway® sandwich with any combination of ingredients we offer. Consider those varieties as 2 million delicious sandwiches—all with your name on them.",
  },
  {
    label: "See Nutritions Serve",
    content:
      "While the Subway® brand maintains a consistent menu globally, it adapts to accommodate diverse dietary preferences. ",
  },
];
</script>

<style scoped></style>
