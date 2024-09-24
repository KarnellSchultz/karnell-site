import Link from 'next/link'
import { PostDetails } from 'app/blog/[post]/blogPostData'

export function Post() {
  return (
    <ul className="list-none p-0 mt-0 mb-0">
      {PostDetails.map((row) => (
        <li className="cursor-pointer hover:underline" key={row.id}>
          <Link
            href={`blog/${row.slug}`}
            className="font-normal no-underline hover:bg-inherit hover:text-gray-800">
            {row.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
