/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-gradient-from": "hsl(249, 99%, 64%)",
        "linear-gradient-to": "hsl(278, 94%, 30%)",
        red: "hsl(0, 100%, 66%)",

        white: "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
      spacing: {
        cardPos: "calc(50% - 264px)",
      },
      screens: {
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
