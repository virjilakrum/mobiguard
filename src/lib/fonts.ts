import localFont from 'next/font/local';

export const monumentGrotesk = localFont({
  src: [
    {
      path: '../assets/fonts/MonumentGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MonumentGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MonumentGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monument',
  display: 'swap',
});

// Fallback to system fonts if the custom font fails to load
export const fontClass = `font-sans ${monumentGrotesk.variable}`;