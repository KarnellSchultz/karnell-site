import { Post } from 'components/post';
import { Layout } from 'components/Layout';

export default function articles() {
  return (
    <>
      <Layout pageName={'📰 Articles'}>
        <section>
          <Post></Post>
        </section>
      </Layout>
    </>
  );
}
