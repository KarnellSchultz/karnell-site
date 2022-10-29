import Head from 'next/head'
import { Nav } from '../components/Nav'
import { Footer } from '../components/footer'

import '../css/global.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="bg-white">
     
      <body
        className="prose h-full max-w-2xl flex flex-col items-center m-auto px-4
        tracking-wider
        ">
        <Nav />
        <main className="mb-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
