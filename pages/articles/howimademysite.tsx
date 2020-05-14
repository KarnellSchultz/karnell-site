import Howimademysite from '../../content/posts/howimademysite.mdx';
import Layout from 'components/Layout';

export default function markdownGuide() {
  return (
    <Layout blog pageName={'How I Made My Site'}>
      <section>
        <Howimademysite />
      </section>
    </Layout>
  );
}
