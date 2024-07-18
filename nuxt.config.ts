// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "nuxt-marquee"],
  css: ["~/assets/css/tailwind.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Nuxt Touravel",
      meta: [
        {
          name: "description",
          content: "Subway Indonesia",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/favicon.svg",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
