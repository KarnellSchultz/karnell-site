import { Post } from '../components/Post'

export default function Home() {
  return (
    <>
      <h1 className="text-sm m-0 font-normal mb-4">
        The personal website of <strong>Karnell</strong>{' '}
        <strong>Schultz</strong>, a software engineer.
      </h1>
      <Post />
    </>
  )
}
