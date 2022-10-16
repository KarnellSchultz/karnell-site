import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { SiNextDotJs } from 'react-icons/si'
import { BsFillTriangleFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center">
      <div className="pt-4">
        <Link href="/">
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            Home
          </button>
        </Link>
        <Link href="/blog">
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            Blog
          </button>
        </Link>

        <Link href="/about">
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            About
          </button>
        </Link>
      </div>
      <div className="py-4">
        <a href="https://vercel.com/">
          <button
            className=" p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            <BsFillTriangleFill size={32} />
          </button>
        </a>
        <a href="https://nextjs.org/">
          <button
            className=" p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            <SiNextDotJs size={32} />
          </button>
        </a>
        <a href="https://github.com/KarnellSchultz/karnell-site">
          <button
            className=" p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button">
            <AiFillGithub size={32} />
          </button>
        </a>
      </div>
    </footer>
  )
}
export { Footer }
