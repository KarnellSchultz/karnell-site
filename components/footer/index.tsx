import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiVercel } from 'react-icons/si'

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t-2">
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
      <div className="py-4 flex ">
        <Link
          href="https://vercel.com/"
          className=" p-2  hover:bg-zinc-300 hover:text-black">
          <SiVercel size={32} />
        </Link>
        <Link
          href="https://nextjs.org/"
          className=" p-2  hover:bg-zinc-300 hover:text-black">
          <TbBrandNextjs size={32} />
        </Link>
        <Link
          href="https://github.com/KarnellSchultz/karnell-site"
          className=" p-2  hover:bg-zinc-300 hover:text-black">
          <AiFillGithub size={32} />
        </Link>
      </div>
    </footer>
  )
}
export { Footer }
