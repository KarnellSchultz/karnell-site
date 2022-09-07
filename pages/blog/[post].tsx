import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export type PostDetailsType = {
  id: number
  title: string
  date: string
  slug: string
}[]

export const PostDetails: PostDetailsType = [
  //They appear in the order listed top to bottom

  {
    id: 11,
    title: 'Projects I made for Job Interviews',
    date: new Date('Febuary 12 2022').toDateString(),
    slug: 'projectsForJobs',
  },
  {
    id: 10,
    title: '2021 into 2022',
    date: new Date('January 23 2022').toDateString(),
    slug: 'review2021',
  },
  {
    id: 9,
    title: '2020 into 2021',
    date: new Date('January 5 2021').toDateString(),
    slug: 'review2020',
  },
  {
    id: 8,
    title: 'Hardest Part of My First 3 Months as a Developer',
    date: new Date('November 15 2020').toDateString(),
    slug: 'firstThreeMonths',
  },
  {
    id: 7,
    title: 'How To useRef',
    date: new Date('September 13 2020').toDateString(),
    slug: 'howtouseref',
  },
  {
    id: 6,
    title: 'How To Create a Gethub Profile README',
    date: new Date('August 19 2020').toDateString(),
    slug: 'howtocrategithubreadme',
  },
  {
    id: 5,
    title: 'How I Became a Self Taught Developer 👨🏽‍💻',
    date: new Date('August 13 2020').toDateString(),
    slug: 'howibecameadeveloper',
  },
  {
    id: 4,
    title: 'Flexbox Zombies: Review',
    date: new Date('August 2020').toDateString(),
    slug: 'flexboxzombiesreview',
  },
  {
    id: 3,
    title: 'How to use :last-of-type 🎨',
    date: 'March 2020',
    slug: 'csslastoftype',
  },
  {
    id: 2,
    title: '🥳HowImadeMySite.com',
    date: 'March 2020',
    slug: 'howimademysite',
  },
  {
    id: 1,
    title: '😅 A New Blog? What is this, 2006? ✍🏽',
    date: 'March 2020',
    slug: 'whyblog',
  },
  {
    id: 0,
    title: '💁🏾 A case for Learning Markdown 🔽',
    date: 'March 2020',
    slug: 'markdownguide',
  },
]

// Generates `/posts/1` and `/posts/2`
// export const getStaticPaths: GetStaticPaths = async (props) => {
//   const posts = PostDetails.map((post) => {
//     return { params: { post: post.slug } }
//   })
//   console.log('POSTS🍒', posts)

//   return {
//     paths: posts,
//     // paths: [
//     //   { params: { post: 'review2021' } },
//     //   // posts,
//     // ],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log('CONTEXT', context)
//   const { params } = context
//   const res = await fetch(`http://localhost:3000/posts/${params.post}`)
//   const post = await res.json()
//   return {
//     // Passed to the page component as props
//     props: { post },
//   }
// }

const Post = (props) => {
  const router = useRouter()
  const { post } = router.query
  console.log({ router })
  console.log({ props })

  return <p>Post: {post}</p>
}

export default Post
