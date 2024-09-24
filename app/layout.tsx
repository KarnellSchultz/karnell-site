import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '../components/footer'
import { GeistSans } from 'geist/font/sans'

import '../css/global.css'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Karnell Schultz',
  description: 'Personal website of Karnell Schultz :-)',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className="prose selection:bg-lime-300 selection:text-purple-800 h-full max-w-xl
        flex flex-col items-center m-auto pt-10 px-4
        tracking-wider
        ">
        <main className="mb-16">{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
