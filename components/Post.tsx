import Link from 'next/link'
import { POST_DETAILS } from 'app/blog/[post]/blogPostData'

export function Post() {
  return (
    <ul className="list-none p-0 mt-0 mb-0">
      {POST_DETAILS.map((row) => (
        <li className="cursor-pointer py-2" key={row.id}>
          <Link
            className="text-lg text-pink-700"
            href={`blog/${row.slug}`}>
            {row.title}
          </Link>
          <div className="text-sm">{row.date}</div>
        </li>
      ))}
    </ul>
  )
}
