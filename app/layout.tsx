import Head from 'next/head'
// import Prism from 'prismjs'
// import 'prismjs/components/prism-jsx.min'
// import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'

import { Nav } from '../components/Nav'
import { Footer } from '../components/footer'

interface LayoutProps {
  children: React.ReactNode
  pageName?: string
  home?: boolean
  blog?: boolean
  meta?: any
}

export default function Layout({
  children,
  pageName,
  blog = false,
  meta,
}: LayoutProps) {
  return (
    <html>
      <Head>
        <title>{`${pageName}- KarnellSchultz `}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <body>
        <section
          className="prose h-full max-w-2xl flex flex-col items-center m-auto px-4
        tracking-wider
        ">
          <Nav />
          <main className="mb-16">{children}</main>
          {blog && (
            <footer>
              <h5>🌍Thanks for Reading🌍</h5>
            </footer>
          )}
          <Footer />
        </section>
      </body>
    </html>
  )
}
