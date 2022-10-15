import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Layout } from 'components/Layout'

import '../css/normalize.css'
import '../css/styles.css'
import '../css/prsim.css'

const getCapitalizedTitleFromSlug = (slug: string): string => {
  if (slug === '') return 'Home'

  return slug
    .split('/')
    .pop()
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(
      (word) =>
        word[0].toLocaleUpperCase() + word.substring(1, word.length)
    )
    .join(' ')
    .split('-')
    .map((word) => (word === '-' ? ' ' : word))
    .join(' ')
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const title = router.pathname === '/' ? 'home' : router.asPath

  const formattedTitle = getCapitalizedTitleFromSlug(title)

  return (
    <Layout pageName={formattedTitle}>
      <Component {...pageProps} />
    </Layout>
  )
}
