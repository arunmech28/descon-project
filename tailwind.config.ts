import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navmenu: "var(--textHover)"
      },
      backgroundColor: {
        'nav-menu-hover': '#005081'
      }
    },
  },
  plugins: [],
};
export default config;
