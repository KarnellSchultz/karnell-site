import AboutMe from 'content/posts/AboutMeContent.mdx';
import { Layout } from 'components/Layout';

export default function About() {
  return (
    <Layout pageName="About">
      <section>
        <AboutMe />
      </section>
    </Layout>
  );
}
