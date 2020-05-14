import AboutMe from '../content/posts/aboutContent.mdx';
import HeadTag from '../components/HeadTag';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section>
        <HeadTag pageName="🌍About" />
        <AboutMe />
      </section>
    </Layout>
  );
}
