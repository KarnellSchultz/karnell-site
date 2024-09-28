import { Link } from 'components/Link'

export function Footer() {
  return (
    <footer className="w-full pt-8">
      <div>© 2024 Karnell Schultz</div>
      <div className="flex gap-2">
        <Link href="mailto:k@KarnellSchultz.com">
          k@KarnellSchultz.com,
        </Link>
        <Link href="https://www.linkedin.com/in/karnell-schultz-a30bb33b">
          LinkedIn,
        </Link>
        <Link href="https://github.com/KarnellSchultz">Github</Link>
      </div>
    </footer>
  )
}
