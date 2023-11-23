import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        lobster: ['var(--font-lobster)'],
      },
      colors: {
        'primary-background': 'var(--color-primary-background)',
        'primary-foreground': 'var(--color-primary-foreground)',
        'accent-foreground': 'var(--color-accent-foreground)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'accent-text': 'var(--color-accent-text)',
      },
    },
  },
  plugins: [],
};
export default config;
