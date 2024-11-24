import type { Config } from "tailwindcss";
import uiTailwindConfig from "@repo/ui/tailwindConfig";

export default {
  presets: [uiTailwindConfig],

  content: [
    "../../packages/ui/**/*.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
