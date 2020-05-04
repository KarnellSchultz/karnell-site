import Post from '../components/Post';
import HeadTag from '../components/HeadTag';
import Projects from '../components/Projects';
import Link from 'next/link';

const Home = () => (
  <>
    <HeadTag pageName="🔥 Home" />
    <section>
      <h1>Karnell Schultz</h1>
      <p className="description">
        {`🤙🏾 I'm a Javascript developer interested in creating tools to
        democrotize the web. I create`}
        <a href="https://github.com/KarnellSchultz">open source</a>
        &nbsp;projects and write about my experiences in tech.
      </p>
      <Link href="/about">More about me &rarr;</Link>
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Post />
    </section>
  </>
);

export default Home;
