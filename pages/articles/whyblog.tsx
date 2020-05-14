import WhyblogMarkdown from '../../content/posts/newblog.mdx';
import Layout from 'components/Layout';

export default function whyblog() {
  return (
    <Layout>
      <section>
        <WhyblogMarkdown />
      </section>
    </Layout>
  );
}
