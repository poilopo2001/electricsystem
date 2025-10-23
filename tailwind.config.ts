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
        // Palette Orange/Noir ELECTRIC SYSTEM
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF8C00', // Orange principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FFA500', // Orange accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2d2d2d',
          800: '#1a1a1a', // Noir principal
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 140, 0, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(255, 140, 0, 0.8)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        headShake: {
          '0%': { transform: 'translateX(0)' },
          '6.5%': { transform: 'translateX(-6px) rotateY(-9deg)' },
          '18.5%': { transform: 'translateX(5px) rotateY(7deg)' },
          '31.5%': { transform: 'translateX(-3px) rotateY(-5deg)' },
          '43.5%': { transform: 'translateX(2px) rotateY(3deg)' },
          '50%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        jello: {
          '0%, 11.1%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
          '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
          '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
          '55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
          '66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
          '77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
          '88.8%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        slideInRight: 'slideInRight 0.5s ease-out',
        bounceIn: 'bounceIn 0.75s ease-out',
        headShake: 'headShake 1s ease-in-out',
        zoomIn: 'zoomIn 0.6s ease-out',
        fadeOut: 'fadeOut 0.5s ease-out',
        rotate: 'rotate 2s linear infinite',
        jello: 'jello 1s ease-in-out',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 140, 0, 0.5)',
        'glow-orange-lg': '0 0 50px rgba(255, 140, 0, 0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
