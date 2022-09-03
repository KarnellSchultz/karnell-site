import AboutMe from 'content/posts/AboutMeContent.mdx';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  console.log({ router });

  return (
    <section>
      <AboutMe />
    </section>
  );
}
