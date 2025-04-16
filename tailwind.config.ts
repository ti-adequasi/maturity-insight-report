import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      // Add modern color palette
      colors: {
        ...require('tailwindcss/defaultTheme').colors,
        
        // Add custom modern colors
        brand: {
          50: '#f0f5ff',
          100: '#e6eeff',
          200: '#c1d7ff',
          300: '#9ab8ff',
          400: '#6d95ff',
          500: '#4a7de8', // Primary color
          600: '#3865cc',
          700: '#2850b0',
          800: '#1c3c94',
          900: '#162c78',
        },
        
        // Enhanced segments colors
        segments: {
          security: '#3B82F6',   // Blue
          cyber: '#8B5CF6',      // Purple
          it: '#10B981',         // Emerald
          legal: '#F59E0B',      // Amber
          governance: '#EF4444', // Red
        },
      },
      
      // Modern typography and spacing
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      
      // Modern shadows
      boxShadow: {
        'modern-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modern-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // Modern border radius
      borderRadius: {
        'modern-sm': '0.375rem',
        'modern': '0.625rem',
        'modern-lg': '0.875rem',
      },
      
      // Animation for modern interactions
      keyframes: {
        ...require('tailwindcss/defaultTheme').keyframes,
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        }
      },
      
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
