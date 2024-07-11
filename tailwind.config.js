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
      colors: {
        mainn: {
          50: "#ff9f1c",
          100: "#ff9f3c",
          200: "#ff9f1c",
          300: "#ff9f1c",
        },
        dark: {
          50: "#212529",
          100: "#343a40",
          200: "#495057",
          300: "#868e96",
        },
        light: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
        },
        seconds: {
          50: "#2ec4b6",
          100: "#5cdbd3",
          200: "#8ee4c8",
          300: "#cbf3f0",
        },
      },
    },
  },
  plugins: [],
};
