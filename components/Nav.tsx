'use client'

import { usePathname } from 'next/navigation'
import { Link } from './Link'

export const Header = () => {
  const pathname = usePathname()
  return (
    <header className="pb-4 place-self-start my-8">
      <p className="text-3xl md:text-4xl m-0">Karnell Schultz</p>
      <nav className="flex w-full justify-between">
        <Link
          href={'/'}
          className={`${pathname === '/' && 'text-pink-700'} `}>
          blog
        </Link>
        <div>|</div>
        <Link
          href={'/contact'}
          className={`${pathname === '/contact' && 'text-pink-700'} `}>
          contact
        </Link>
        <div>|</div>
        <Link
          href={'/about'}
          className={`${pathname === '/about' && 'text-pink-700'} `}>
          about
        </Link>
      </nav>
    </header>
  )
}
