import Link from 'next/link'
import { Projects } from 'components/Projects'
import { Post } from 'components/post'
import { StyledLink } from 'components/Link'

const Home = () => {
  return (
    <>
      <section>
        <h1>Karnell Schultz</h1>
        <br />
        <p className="description">
          {`I'm a web developer interested in creating tools to
        democratize the web. I create `}
          <a
            className="pink-link"
            href="https://github.com/KarnellSchultz">
            {`open source`}
          </a>
          {` projects and write about my experiences in tech. `}
        </p>
        <Link href={'/about'} passHref>
          <p className="pink-link">More about me &rarr;</p>
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
