import { useEffect } from 'react'
import Head from 'next/head'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'

import { Nav } from './Nav'
import { Footer } from './footer'

interface LayoutProps {
  children: React.ReactNode
  pageName?: string
  home?: boolean
  blog?: boolean
  meta?: any
}

// const usePrism = () =>
//   useEffect(() => {
//     Prism.highlightAll()
//   }, [])

function Layout({
  children,
  pageName,
  blog = false,
  meta,
}: LayoutProps) {
  // usePrism()
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>{`${pageName}- KarnellSchultz `}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <section className="h-full w-full">
        <Nav />
        <main className="mb-16">{children}</main>
        {blog && (
          <footer>
            <h5>🌍Thanks for Reading🌍</h5>
          </footer>
        )}
      </section>
      <Footer />
    </>
  )
}
export { Layout }
