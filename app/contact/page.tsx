import { Link } from 'components/Link'
import Contact from '../../content/contact.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Karnell Schultz',
}

export default function About() {
  return (
    <>
      <h2>Me Around the Web</h2>
      <ul>
        <li>
          Email:{' '}
          <Link href="mailto:k@karnellschultz.com">
            k@karnellschultz.com
          </Link>
        </li>
        <li>
          LinkedIn:{' '}
          <Link href="https://www.linkedin.com/in/karnell-schultz-a30bb33b/">
            KarnellSchultz
          </Link>
        </li>
        <li>
          Github:{' '}
          <Link href="https://github.com/KarnellSchultz">
            KarnellSchultz
          </Link>
        </li>
      </ul>

      <h2>Got Feedback?</h2>
      <p>E-mail me 📨, I'd love to hear from you.</p>
    </>
  )
}
