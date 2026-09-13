import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1420",       // deep steel-navy — base dark surface
        paper: "#F1F3F1",     // cool steel-toned paper — base light surface
        steel: {
          100: "#E7EAEC",
          300: "#C7CDD1",
          500: "#8B95A1",
          700: "#5A6470",
          900: "#2B333D",
        },
        signal: "#D8580F",    // safety-orange accent — calls to action, alerts
        copper: "#B5651D",    // copper accent — technical/spec highlights
        line: "#D8DBDC",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
