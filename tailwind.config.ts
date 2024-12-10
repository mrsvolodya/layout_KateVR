import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondTextColor: "#05c2df",
        thirdTextColor: "#929292",
      },
      width: {
        "58px": "58px",
      },
    },
  },
  plugins: [],
};
export default config;
