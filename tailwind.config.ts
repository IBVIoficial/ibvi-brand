import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // IBVI Brand Colors
        ibvi: {
          teal: {
            DEFAULT: "#28515A",
            50: "#E8F0F2",
            100: "#C2D9DE",
            200: "#9CC2CA",
            300: "#76ABB6",
            400: "#5094A2",
            500: "#28515A",
            600: "#234751",
            700: "#1E3D48",
            800: "#19333F",
            900: "#142936",
            950: "#0F1F2D"
          },
          gold: {
            DEFAULT: "#F3BA57",
            50: "#FEF9EC",
            100: "#FDF0D1",
            200: "#FBE7B6",
            300: "#F9DE9B",
            400: "#F7D580",
            500: "#F3BA57",
            600: "#F0A82E",
            700: "#E89605",
            800: "#C07D04",
            900: "#986403",
            950: "#704A02"
          },
          charcoal: "#1C1C1C",
          cream: "#FEF9EC",
          navy: "#0E1316",
        },
        // Semantic colors
        success: "#27AE60",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3498DB",
        
        // shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        // IBVI spacing scale
        'xxs': '4px',
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
        'xxxl': '96px',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // IBVI type scale
        'display': ['72px', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'small': ['12px', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config