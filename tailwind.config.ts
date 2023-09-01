import type { Config } from 'tailwindcss';

import theme from './theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { ...theme },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
