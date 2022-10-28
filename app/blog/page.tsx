import { Post } from 'components/post'

export default function articles({ params }: { params: string }) {
  console.log(params)

  return (
    <section>
      <Post />
    </section>
  )
}
