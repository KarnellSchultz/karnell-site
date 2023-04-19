import Link from 'next/link'

import { PostDetails } from 'content/blogPostData'

function Post() {
  return (
    <section>
      <br />
      <div className="flex items-center">
        <h3>Blogs</h3>
      </div>
      <em>A collection of my learnings and experiences in tech.</em>
      <div className="border-b" />
      <ul className="list-none">
        {
          PostDetails.map((row) =>
            <li className='pb-4' key={row.id}>
              <div
                className="cursor-pointer hover:underline">
                <Link href={`blog/${row.slug}`}
                  className="font-normal no-underline hover:bg-inherit hover:text-gray-800" >
                  {row.title}
                </Link>
              </div>
            </li>
          )
        }
      </ul>
    </section>
  )
}
export { Post }
