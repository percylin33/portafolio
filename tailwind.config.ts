import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'open-menu': "url('/imagenes/menu.png')",
        'close-menu': "url('/imagenes/cerrar.png')"
      },
      backgroundColor: {
        'custom': '#053B50',
        'hov': '#176B87',
        'fondo': '#176B87',
      },
      fontFamily: {
        "secular": ['var(--font-secular)'],
      },

    },
  },
  plugins: [],
}
export default config
