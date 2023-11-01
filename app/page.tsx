import { Projects } from 'components/Projects'
import { Post } from '../components/Post'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section>
        <h1>Karnell Schultz</h1>
        <br />
        <p className="description">
          {`I'm a web developer interested in creating tools to
        democratize the web. I create `}
          <Link href="https://github.com/KarnellSchultz">
            {`open source`}
          </Link>
          {` projects and write about my experiences in tech. `}
        </p>
        <Link
          href={'/about'}
          className="cursor-pointer text-pink-500 hover:bg-pink-400 
          hover:text-white no-underline
          p-0.5 rounded-sm transition-colors ease-in-out inline">
          More about me &rarr;
        </Link>
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <h2>Blog</h2>
        <Post />
      </section>
    </>
  )
}
