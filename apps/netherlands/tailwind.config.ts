import type { Config } from "tailwindcss";
import tailwindConfig from "@repo/ui/tailwindConfig";

export default {
  presets: [tailwindConfig],

  content: [
    "../../packages/ui/**/*.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
} satisfies Config;