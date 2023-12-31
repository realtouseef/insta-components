/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0095f6',
        primary_hover: 'rgb(24, 119, 242)',
        secondary: '#efefef',
        secondary_hover: 'rgb(219, 219, 219)',
        transparent_bg: '#595959',
        icon: '#848484',
        bg_dark: '#262626',
        text: '#f5f5f5'
      }
    }
  },
  plugins: []
};
