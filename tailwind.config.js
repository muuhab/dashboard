/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sidebar-shape": "url('/images/shapeSidebar.png')",
      },
      colors: {
        purple: {
          main: "var(--purple-main)",
          1: "var(--purple-1)",
          2: "var(--purple-2)",
          light: {
            main: "var(--purple-light-main)",
          },
        },
        blue: {
          main: "var(--blue-main)",
          1: "var(--blue-1)",
        },
        red: {
          main: "var(--red-main)",
          1: "var(--red-1)",
          2: "var(--red-2)",
          3: "var(--red-3)",
          4: "var(--red-4)",
        },
        green: {
          main: "var(--green-main)",
          1: "var(--green-1)",
          2: "var(--green-2)",
          3: "var(--green-3)",
        },
        yellow: {
          main: "var(--yellow-main)",
          1: "var(--yellow-1)",
        },
        dark: {
          main: "var(--dark-main)",
          1: "var(--dark-1)",
          2: "var(--dark-2)",
          3: "var(--dark-3)",
          4: "var(--dark-4)",
          5: "var(--dark-5)",
          6: "var(--dark-6)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
