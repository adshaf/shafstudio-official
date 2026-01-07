import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // blue-500
        "primary-dark": "#0b5ed7",
        accent: "#7c3aed",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        surface: "#eff6ff",
        "surface-alt": "#f3e8ff",
        "surface-card": "#f8fbff",
        "border-light": "#e2e8f0",
        "text-main": "#0f172a",
        "text-body": "#475569",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-noto-sans)", "sans-serif"],
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)",
        "cta-gradient": "linear-gradient(90deg, #3b82f6 0%, #7c3aed 100%)",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
