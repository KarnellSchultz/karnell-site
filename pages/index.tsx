import Link from 'next/link'
import { Projects } from 'components/Projects'
import { Post } from 'components/post'

const Home = () => {
  return (
    <>
      <section>
        <h1>Karnell Schultz</h1>
        <p className="description">
          {`🤙🏾 I'm a web developer interested in creating tools to
        democratize the web. I create `}
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
    </>
  )
}

export default Home
