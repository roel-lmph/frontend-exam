import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        gothamLight: ["Gotham-Light", "sans-serif"],
        gothamMedium: ["Gotham-Medium", "sans-serif"],
        gothamBook: ["Gotham-Book", "sans-serif"],
      },

    },
  },
  plugins: [],
};
export default config;
