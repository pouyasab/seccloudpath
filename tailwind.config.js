/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B1220",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569"
        },
        mist: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0"
        },
        accent: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          600: "#2563EB",
          700: "#1D4ED8"
        },
        ocean: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          600: "#0891B2"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        lift: "0 18px 45px rgba(2, 6, 23, 0.1)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.06), 0 20px 50px rgba(15, 23, 42, 0.08)",
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
        "card-lg":
          "0 10px 15px -3px rgba(15, 23, 42, 0.09), 0 4px 6px -4px rgba(15, 23, 42, 0.05)"
      },
      borderRadius: {
        xl: "1rem"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        "fade-up":
          "fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) both forwards",
        shimmer: "shimmer 8s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

