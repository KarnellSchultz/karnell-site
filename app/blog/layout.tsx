
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>post</title>
      </Head>
      <main className="mb-16">{children}</main>
      <footer>
        <h5>🌍Thanks for Reading🌍</h5>
      </footer>
    </div>
  )
}
