import tailwindConfig from "@repo/ui/tailwindConfig";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],

  content: [
    "../../packages/ui/src/**/*.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
