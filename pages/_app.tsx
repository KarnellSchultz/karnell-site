import { AppProps } from 'next/app';
import '../css/normalize.css';
import '../css/styles.css';
import '../css/prsim.css';
import { Layout } from 'components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
