import { Layout } from 'components/Layout';
import HowIBecame from 'content/posts/how-i-became-a-self-taught-developer.mdx';

export default function howibecameadeveloper() {
  return (
    <Layout blog pageName={'How I Became a Self Taught Developer'}>
      <section>
        <HowIBecame />
      </section>
    </Layout>
  );
}
