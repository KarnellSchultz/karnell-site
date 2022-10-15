import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { SiNextDotJs } from 'react-icons/si'
import { BsFillTriangleFill } from 'react-icons/bs'

function Footer() {
  return (
    <section>
      <footer>
        <Link href="/">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            Home
          </button>
        </Link>
        <Link href="/blog">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            Blog
          </button>
        </Link>

        <Link href="/about">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            About
          </button>
        </Link>
      </footer>
      <footer>
        <a href="https://vercel.com/">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            <BsFillTriangleFill size={32} />
          </button>
        </a>
        <a href="https://nextjs.org/">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            <SiNextDotJs size={32} />
          </button>
        </a>
        <a href="https://github.com/KarnellSchultz/karnell-site">
          <button
            className="text-xl p-2 rounded-sm transition-all hover:bg-zinc-300"
            type="button">
            <AiFillGithub size={32} />
          </button>
        </a>
      </footer>
    </section>
  )
}
export { Footer }
