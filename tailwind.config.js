/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gray-gradient-r": "linear-gradient(to right, #f5f5f5 33%, #fff 27%)",
        "gray-gradient-l": "linear-gradient(to left, #f5f5f5 33%, #fff 27%)",
        "gray-gradient-diagnal": "linear-gradient(38deg, #f5f5f5 35%, #fff 27%)"
      },
      colors: {
        "primary": "#1F5092"
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "7.7rem"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
