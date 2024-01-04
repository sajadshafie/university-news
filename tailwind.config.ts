import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./untils/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/*.{js,ts,jsx,tsx,mdx}",
    "./common/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0% ": { transform: "translateY(1px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "640px",
        // => @media (min-width: 640px) { ... }
        sm: "868px",
        // => @media (min-width: 768px) { ... }
        md: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        lg: "1536px",
      },
      fontSize: {
        sm: "0.6rem",
        md: "0.7rem",
        md2: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        xs: "12px",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      colors: {
        main: "#059669",
        main_dark: "#166534",
        text: "#27272a",
        sub_main: "#bbf7d0",
        secondary: "#6b7280",
        pink: "#ff49db",
        caption: "#adb5bd",
        green: "#13ce66",
        variant: "#252323",
        red: "#e63946",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        gray400: "#6b7280",
        light: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
export default config;
