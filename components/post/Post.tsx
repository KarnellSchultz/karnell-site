import Link from 'next/link'

import { PostDetails, PostDetailsType } from 'blogPostData'

const PostRow = (postDetails: PostDetailsType) => {
  return postDetails.map((row) => {
    return (
      <li key={row.id}>
        <Link href={`blog/${row.slug}`}>
          <div
            className="cursor-pointer
          hover:underline">
            <p> {row.title} </p>
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
        <h3>Blogs</h3>
      </article>
      <em>A collection of my learnings and experiences in tech.</em>
      <div className="border-b" />
      <ul className="list-none p-0">{PostRow(PostDetails)}</ul>
    </>
  )
}
export { Post }
