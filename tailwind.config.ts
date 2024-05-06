import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'beige-50': 'var(--beige-50)',
        'beige-100': 'var(--beige-100)',
        'beige-400': 'var(--beige-400)',
        '--orange-200': 'var(--orange-200)',
        '--orange-300': 'var(--orange-300)',
        '--orange-800': 'var(--orange-800)',
        '--red-100': 'var(--red-100)',
        '--red-500': 'var(--red-500)',
        'purple-300': 'var(--purple-300)',
        'purple-500': 'var(--purple-500)',
        'purple-700': 'var(--purple-700)',
      },
      screens: {
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
