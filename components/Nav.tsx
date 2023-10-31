import Link from 'next/link'
function Nav() {
  return (
    <nav className="w-full pt-2 pb-10 bor">
      <section className="w-full flex justify-between">
        <div className="brand">
          <Link href="/" legacyBehavior>
            <button className="text-lg p-3 hover:bg-zinc-300 rounded-sm">
              Home
            </button>
          </Link>
        </div>

        <div className="flex justify-end w-3/4">
          <Link href="/blog" legacyBehavior>
            <button className=" text-lg p-3 hover:bg-zinc-300 rounded-sm">
              Blog
            </button>
          </Link>
          <Link href="/about" legacyBehavior>
            <button className="text-lg p-3 hover:bg-zinc-300 rounded-sm">
              About
            </button>
          </Link>
        </div>
      </section>
    </nav>
  )
}
export { Nav }
