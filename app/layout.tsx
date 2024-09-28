import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '../components/footer'
import LocalFont from 'next/font/local'

import '../css/global.css'
import { PropsWithChildren } from 'react'
import { Header } from 'components/Nav'

export const metadata: Metadata = {
  title: 'Karnell Schultz',
  description: 'Personal website of Karnell Schultz :-)',
}

const comicMono = LocalFont({
  src: [
    {
      path: '../font/ComicShannsMonoNerdFont-Regular.otf',
      style: 'normal',
    },
    {
      path: '../font/ComicShannsMonoNerdFont-Bold.otf',
      style: 'normal',
      weight: '700',
    },
  ],
})

export default function Layout({ children }: PropsWithChildren) {
  console.log(comicMono)
  return (
    <html lang="en" className={comicMono.className}>
      <body
        className="
        flex flex-col items-center
        justify-between
        prose no-underline selection:bg-lime-300 selection:text-purple-800
        focus-visible:ring-green-700
        tracking-wider p-4
        md:max-w-xl
        md:m-auto
        ">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
