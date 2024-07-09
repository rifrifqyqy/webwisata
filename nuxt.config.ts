// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Nuxt Subway",
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
