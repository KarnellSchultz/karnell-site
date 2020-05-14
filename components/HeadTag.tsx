/* eslint-disable react/prop-types */
import Head from 'next/head';

export default function HeadTag({ pageName = '🤷' }) {
  return (
    <Head>
      <title>KarnellSchultz {pageName} </title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
  );
}
