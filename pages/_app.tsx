"use client";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component key={router.pathname} {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  ) 
}
