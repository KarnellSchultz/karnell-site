import Mark from 'content/posts/MarkdownArticle.mdx';
import { Layout } from 'components/Layout';

export default function markdownGuide() {
  return (
    <Layout blog pageName={'Markdown Guide'}>
      <section>
        <Mark />
      </section>
    </Layout>
  );
}
