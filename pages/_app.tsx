import { AppProps } from 'next/app';
import '../css/normalize.css';
import '../css/styles.css';
import '../css/prsim.css';
import { Layout } from 'components/Layout';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log({ router });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
