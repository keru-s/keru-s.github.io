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
        background: "#05070B",
        foreground: "#F7F8FB",
        border: "rgba(255, 255, 255, 0.1)",
        card: {
          DEFAULT: "rgba(12, 16, 24, 0.78)",
          foreground: "#F7F8FB"
        },
        muted: {
          DEFAULT: "#8790A2",
          foreground: "#CBD3E1"
        },
        accent: {
          DEFAULT: "#DDE8FF",
          foreground: "#09111F"
        },
        surface: {
          DEFAULT: "#0D1017",
          secondary: "#111623",
          tertiary: "#171E2B"
        }
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(120, 180, 255, 0.20), transparent 42%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.12), transparent 32%)",
        "panel-glow":
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)"
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
