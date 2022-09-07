import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { post: 'review2021' } },
      { params: { post: '2' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('CONTEXT', context)

  return {
    // Passed to the page component as props
    props: {},
  }
}

const Post = (props) => {
  const router = useRouter()
  const { post } = router.query
  console.log({ router })
  console.log({ props })

  return <p>Post: {post}</p>
}

export default Post
