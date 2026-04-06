import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',    // Extra small phones
      sm: '640px',    // Small phones
      md: '768px',    // Tablets
      lg: '1024px',   // Large tablets/small desktop
      xl: '1280px',   // Desktop
      '2xl': '1536px' // Large desktop
    },
    extend: {
      fontSize: {
        /* Fluid Typography - scales smoothly from 375px to 1920px+ */
        'fluid-h1': ['var(--fluid-h1)', { lineHeight: 'var(--fluid-h1-line-height)', fontWeight: '900' }],
        'fluid-h2': ['var(--fluid-h2)', { lineHeight: 'var(--fluid-h2-line-height)', fontWeight: '700' }],
        'fluid-h3': ['var(--fluid-h3)', { lineHeight: 'var(--fluid-h3-line-height)', fontWeight: '600' }],
        'fluid-body': ['var(--fluid-body)', { lineHeight: 'var(--fluid-body-line-height)' }],
        'fluid-sm': ['var(--fluid-sm)', { lineHeight: 'var(--fluid-sm-line-height)' }],
      },
      maxWidth: {
        'prose': 'var(--max-width-prose)',
      },
      colors: {
        navy: {
          900: '#ffffff',
          800: '#fff5f5',
          700: '#fff0f0',
          600: '#f0d0d0',
        },
        'electric-teal': '#ee3a3a',
        'teal-hover': '#d73333',
        'teal-glow': 'rgba(238, 58, 58, 0.1)',
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ee3a3a',
          600: '#d73333',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          500: '#F59E0B',
        },
        success: {
          500: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
})