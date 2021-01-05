import Review from 'content/posts/review2020.mdx';
import { Layout } from 'components/Layout';

export default function review() {
  return (
    <Layout blog pageName={'Review: 2020'}>
      <section>
        <Review />
      </section>
    </Layout>
  );
}
