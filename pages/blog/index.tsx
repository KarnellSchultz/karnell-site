import Post from 'components/Post';
import ArticleCard from 'components/ArticleCard';
import Layout from 'components/Layout';

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
