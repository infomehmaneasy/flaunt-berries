/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // Brand palette
        rose: {
          50: '#FBF1ED',
          100: '#F6E1DA',
          200: '#EDC3B5',
          300: '#E2A589',
          400: '#D69E6B',
          500: '#C98B79', // Primary Rose Gold
          600: '#B5755F',
          700: '#9A5E4B',
          800: '#7E4A3A',
          900: '#5E3628',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFAF7',
          200: '#F8F3EF', // Soft Beige
          300: '#F3E9E2',
          400: '#EAD9CE',
          500: '#DEC4B4',
        },
        olive: {
          50: '#F4F4EC',
          100: '#E9E8D7',
          200: '#D3D1AE',
          300: '#B6B482',
          400: '#9C9A5F',
          500: '#7B7A4D', // Accent Olive
          600: '#64634A',
          700: '#4D4C3A',
          800: '#36362A',
          900: '#1F1F18',
        },
        ink: '#2F2F2F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(6deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-15px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'grow-leaf': {
          '0%': { transform: 'scale(0) rotate(-20deg)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'grow-leaf': 'grow-leaf 1.4s ease-out forwards',
        'gradient-pan': 'gradient-pan 18s ease infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
      },
      backgroundImage: {
        'rose-gold-gradient':
          'linear-gradient(120deg, #E2A589 0%, #C98B79 30%, #D69E6B 60%, #E2A589 100%)',
        'cream-gradient':
          'linear-gradient(135deg, #FFFFFF 0%, #F8F3EF 50%, #F3E9E2 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
