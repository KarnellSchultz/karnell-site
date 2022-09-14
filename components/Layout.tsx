import { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'
import Head from 'next/head'

import { Nav } from './Nav'
import { Themes } from './Themes'
import { Footer } from './footer'

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`

interface LayoutProps {
  children: React.ReactNode
  pageName?: string
  home?: boolean
  blog?: boolean
  meta?: any
}

const usePrism = () =>
  useEffect(() => {
    Prism.highlightAll()
  }, [])

function Layout({
  children,
  pageName,
  blog = false,
  meta,
}: LayoutProps) {
  // useEffect(() => {
  //   Prism.highlightAll()
  // }, [])

  usePrism()

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
      <Themes>
        <StyledLayout>
          <Nav />
          <main>{children}</main>
          {blog && (
            <footer>
              <h5>🌍Thanks for Reading🌍</h5>
            </footer>
          )}
        </StyledLayout>
        <Footer />
      </Themes>
    </>
  )
}
export { Layout }
