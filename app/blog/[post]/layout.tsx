import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="mb-16">{children}</main>
      <footer>
        <h5 className="text-center">🌍Thanks for Reading🌍</h5>
      </footer>
    </>
  )
}
