import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        background: "#0B0C0F",
        foreground: "#F4F5F7",
        border: "rgba(255, 255, 255, 0.08)",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.02)",
          foreground: "#F4F5F7"
        },
        muted: {
          DEFAULT: "#7E8592",
          foreground: "#B3B9C4"
        },
        accent: {
          DEFAULT: "#A9BFDF",
          foreground: "#0B0C0F"
        },
        surface: {
          DEFAULT: "#0E1015",
          secondary: "#12151C",
          tertiary: "#181C25"
        }
      },
      boxShadow: {
        panel: "0 24px 60px rgba(0, 0, 0, 0.35)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
