import Link from 'next/link'

import { PostDetails, PostDetailsType } from 'blogPostData'

const PostRow = (postDetails: PostDetailsType) => {
  return postDetails.map((row) => {
    return (
      <li key={row.id}>
        <Link href={`blog/${row.slug}`} legacyBehavior>
          <div
            className="cursor-pointer
          hover:underline">
            <p>{row.title}</p>
          </div>
        </Link>
      </li>
    );
  });
}

function Post() {
  return (
    <section>
      <br />
      <div className="flex items-center">
        <h3>Blogs</h3>
      </div>
      <em>A collection of my learnings and experiences in tech.</em>
      <div className="border-b" />
      <ul className="list-none">{PostRow(PostDetails)}</ul>
    </section>
  )
}
export { Post }
