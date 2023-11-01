type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <section>{children}</section>
      <footer>
        <h5 className="text-center">🌍Thanks for Reading🌍</h5>
      </footer>
    </>
  )
}
