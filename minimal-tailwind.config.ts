import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'ibvi-teal': '#28515A',
      'ibvi-gold': '#F3BA57',
    },
  },
  plugins: [],
};

export default config;
