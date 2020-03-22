import AboutMe from '../content/posts/aboutContent.mdx';
import HeadTag from '../components/HeadTag';

export default function About() {
  return (
    <section>
      <HeadTag pageName="🌍About" />
      <AboutMe />
    </section>
  );
}
