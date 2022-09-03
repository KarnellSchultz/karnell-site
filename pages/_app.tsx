import { AppProps } from 'next/app';
import '../css/normalize.css';
import '../css/styles.css';
import '../css/prsim.css';
import { Layout } from 'components/Layout';
import { useRouter } from 'next/router';

const getCapitalizedTitleFromSlug = (slug: string): string => {
  if (slug === '') return 'Home';

  return slug
    .split('/')
    .pop()
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(
      (word) =>
        word[0].toLocaleUpperCase() + word.substring(1, word.length)
    )
    .join(' ');
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const title = router.pathname === '/' ? 'home' : router.pathname;

  const formattedTitle = getCapitalizedTitleFromSlug(title);

  console.log('PAGEPROPS', pageProps);

  return (
    <Layout pageName={formattedTitle}>
      <Component {...pageProps} />
    </Layout>
  );
}
