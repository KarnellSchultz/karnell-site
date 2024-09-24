import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-6 flex gap-10 justify-center border-t-2">
      <Link href="/">
        <button className="p-1 hover:underline " type="button">
          Home
        </button>
      </Link>
      <Link href="/contact">
        <button className="p-1 hover:underline  " type="button">
          Contact
        </button>
      </Link>

      <Link href="/about">
        <button className="p-1  hover:underline " type="button">
          About
        </button>
      </Link>
    </footer>
  )
}
