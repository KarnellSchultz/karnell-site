import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { SiNextDotJs } from 'react-icons/si'
import { BsFillTriangleFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t-2">
      <div className="pt-4">
        <Link href="/" legacyBehavior>
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button"
          >
            Home
          </button>
        </Link>
        <Link href="/blog" legacyBehavior>
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button"
          >
            Blog
          </button>
        </Link>

        <Link href="/about" legacyBehavior>
          <button
            className="  p-2 mx-2 transition-all hover:bg-zinc-300"
            type="button"
          >
            About
          </button>
        </Link>
      </div>
      <div className="py-4 flex ">
        <Link
          href="https://vercel.com/"
          className=" p-2  hover:bg-zinc-300 hover:text-black"
        >
          <BsFillTriangleFill size={32} />
        </Link>
        <Link
          href="https://nextjs.org/"
          className=" p-2  hover:bg-zinc-300 hover:text-black"
        >
          <SiNextDotJs size={32} />
        </Link>
        <Link
          href="https://github.com/KarnellSchultz/karnell-site"
          className=" p-2  hover:bg-zinc-300 hover:text-black"
        >
          <AiFillGithub size={32} />
        </Link>
      </div>
    </footer>
  )
}
export { Footer }
