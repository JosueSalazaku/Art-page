/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#000000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
