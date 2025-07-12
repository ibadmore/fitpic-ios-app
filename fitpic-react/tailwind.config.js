/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Convert CSS variables to Tailwind tokens
      colors: {
        primary: {
          black: '#0A0A0A',
          blue: '#0066FF',
        },
        secondary: {
          gray: '#6B6B6B',
        },
        surface: {
          light: '#FAFAFA',
          white: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E5E5E5',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#6B6B6B',
        },
        bg: {
          primary: '#FAFAFA',
          secondary: '#FFFFFF',
          overlay: 'rgba(0, 0, 0, 0.5)',
        },
        nav: {
          panel: '#FFFFFF',
          hover: 'rgba(0, 0, 0, 0.05)',
          active: 'rgba(0, 102, 255, 0.1)',
        },
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '26px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      transitionDuration: {
        'base': '150ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Touch targets (iOS 44pt minimum)
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      // Mobile-first breakpoints
      screens: {
        'xs': '320px',
        'sm': '375px', 
        'md': '390px',
        'lg': '440px',
      },
    },
  },
  plugins: [],
}