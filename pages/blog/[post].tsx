import { GetStaticProps, GetStaticPaths } from 'next'

import CssLastOfType from 'content/posts/css-last-of-type.mdx'
import FirstThreeMonths from '../../content/posts/first-three-months.mdx'
import FlexboxZombiesReview from '../../content/posts/flexbox-zombies-review.mdx'
import HowIBecame from '../../content/posts/how-i-became-a-developer.mdx'
import HowIMadeMySite from '../../content/posts/how-i-made-my-site.mdx'
import HowToCreateGithubREADME from '../../content/posts/how-to-create-a-github-readme.mdx'
import UseRef from '../../content/posts/how-to-use-ref.mdx'
import WhyUseMarkdown from '../../content/posts/why-learn-markdown.mdx'
import ProjectsForJobs from '../../content/posts/projects-i-made-for-jobs.mdx'
import WhyBlogMarkdown from '../../content/posts/why-a-new-blog.mdx'
import Review2020 from '../../content/posts/review-2020.mdx'
import Review2021 from '../../content/posts/review-2021.mdx'

const Posts = {
  'css-last-of-type': CssLastOfType,
  'first-three-months': FirstThreeMonths,
  'flexbox-zombies-review': FlexboxZombiesReview,
  'how-i-became-a-developer': HowIBecame,
  'how-i-made-my-site': HowIMadeMySite,
  'how-to-create-a-github-readme': HowToCreateGithubREADME,
    'how-to-use-ref': UseRef,
    'why-learn-markdown': WhyUseMarkdown,
    'projects-i-made-for-jobs': ProjectsForJobs,
    'why-a-new-blog': WhyBlogMarkdown,
    'review-2020': Review2020,
    'review-2021': Review2021,
}

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = Object.keys(Posts).map((slugKey) => ({
    params: { post: slugKey },
  }))

  console.log(posts)

  return {
    paths: posts,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  return {
    props: { params },
  }
}

export default function Post({ params }) {
  const Component = Posts[params.post]

  return (
    <section>
      <Component />
    </section>
  )
}
