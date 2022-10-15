import Link from 'next/link'
import { PostDetails, PostDetailsType } from 'blogPostData'

const PostRow = (postDetails: PostDetailsType) => {
  return postDetails.map((row) => {
    return (
      <li key={row.id}>
        <Link href={`blog/${row.slug}`}>
          <div
            className="flex justify-center items-center text-center mt-4 leading-6 rounded-sm transition-all
          hover:rounded-sm shadow-md transform ">
            <h3> {row.title} </h3>
          </div>
        </Link>
      </li>
    )
  })
}

function Post() {
  return (
    <>
      <article className="flex items-center">
        <h2>Blogs</h2>
      </article>
      <em>A collection of my learnings and experiences in tech.</em>
      <ul className="list-none p-0">{PostRow(PostDetails)}</ul>
    </>
  )
}
export { Post }
