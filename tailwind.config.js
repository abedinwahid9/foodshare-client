/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      firstColor: "#4CAF50",
      secondColor: "#FFC107",
      thirdColor: "#3F51B5",
    },
  },
  plugins: [require("daisyui")],
};
