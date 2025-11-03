/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dpsd: ["DPSDbeyond", "ui-sans-serif", "system-ui","Taler","Kirana","Jvmiy"],
      },
    },
  },
  plugins: [],
};