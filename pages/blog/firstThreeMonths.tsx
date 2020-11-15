import { Layout } from 'components/Layout';
import FirstThreeMonths from 'content/posts/firstThreeMonths.mdx';

export default function firstThreeMonths() {
  return (
    <Layout
      blog
      pageName={
        'Hardest part of My First Three Months as a Developer'
      }>
      <section>
        <FirstThreeMonths />
      </section>
    </Layout>
  );
}
import React from 'react';
