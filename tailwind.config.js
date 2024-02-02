
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "sans-self"],
        sans: ["Prompt", "sans-self"], //ทำให้ทั้งหมดเป็น font itim
        prompt: ["Prompt", "sans-self"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro", "synthwave"],
  },
};
