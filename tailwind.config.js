/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hotdog1: "url('/images/hotdog1.jpg') ",
        resto1: "url('/images/resto1.jpg')",
      },
      boxShadow: {
        card1: "rgba(0, 0, 0, 0.08) 0px 4px 12px;",
      },
    },
  },
  plugins: [],
};
