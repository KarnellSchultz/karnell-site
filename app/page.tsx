// import { Projects } from 'components/Projects'
import { Post } from '../components/Post'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="py-10">
        <p className="text-5xl m-0">The personal</p>
        <p className="text-5xl m-0">
          website of <strong>Karnell</strong>
        </p>
        <p className="text-5xl m-0">
          <strong>Schultz</strong>, a
        </p>
        <p className="text-5xl m-0">software engineer</p>
      </section>
      <section className="py-6">
        <div className="flex-col flex w-fit gap-2">
          <Link
            href={'/about'}
            className="cursor-pointer text-gray-900
          hover:text-gray-800 hover:bg-lime-300 no-underline
          rounded-lg p-1 transition-colors ease-in-out inline">
            &rarr; About me
          </Link>
          <Link
            href={'/contact'}
            className="cursor-pointer text-gray-900
            hover:text-gray-800 hover:bg-lime-300 no-underline
            rounded-lg p-1 transition-colors ease-in-out inline">
            &rarr; Contact
          </Link>
        </div>
      </section>
      <section>
        <Post />
      </section>
    </>
  )
}
