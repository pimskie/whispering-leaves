/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",

        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",

        secondary: "var(--color-secondary)",
        secondaryHover: "var(--color-secondary-hover)",

        background: "var(--color-background)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
