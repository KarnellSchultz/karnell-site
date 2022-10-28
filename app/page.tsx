import { Projects } from 'components/Projects'
import { Post } from 'components/post'
import { StyledLink } from 'components/Link'

export default function Home() {
  return (
    <>
      <section>
        <h1>Karnell Schultz</h1>
        <br />
        <p className="description">
          {`I'm a web developer interested in creating tools to
        democratize the web. I create `}
          <StyledLink href="https://github.com/KarnellSchultz">
            {`open source`}
          </StyledLink>
          {` projects and write about my experiences in tech. `}
        </p>
        <StyledLink href={'/about'}>
          <p className="pink-link">More about me &rarr;</p>
        </StyledLink>
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
