import Post from 'components/Post';
import Projects from 'components/Projects';
import Link from 'next/link';
import Layout from 'components/Layout';

const Home = () => (
  <Layout pageName={'🔥 Home'}>
    <section>
      <h1>Karnell Schultz</h1>
      <p className="description">
        {`🤙🏾 I'm a Javascript developer interested in creating tools to
        democrotize the web. I create `}
        <a href="https://github.com/KarnellSchultz">
          {`open source`}
        </a>
        {` projects and write about my experiences in tech. `}
      </p>
      <Link href="/about">
        <p>
          <a>More about me &rarr;</a>
        </p>
      </Link>
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Post />
    </section>
  </Layout>
);

export default Home;
