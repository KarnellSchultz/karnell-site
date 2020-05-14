import WhyblogMarkdown from '../../content/posts/newblog.mdx';
import Layout from 'components/Layout';

export default function whyblog() {
  return (
    <Layout blog pageName={'Why Blog? 🤷🏽‍♂️'}>
      <section>
        <WhyblogMarkdown />
      </section>
    </Layout>
  );
}
