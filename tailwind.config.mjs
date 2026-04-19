/** Mirrors CSS variables in `app/globals.css` for editor tooling & legacy tooling */
const config = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28429a",
        secondary: "#2583c5",
        accent: "#4fa3e0",
        "bg-dark": "#080d1a",
        "bg-card": "#0d1527",
        "bg-surface": "#111b33",
        "text-primary": "#e8edf8",
        "text-secondary": "#8fa3c8",
        "border-subtle": "#1e2d50",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "var(--font-space-grotesk)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

