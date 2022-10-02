// import { GetStaticProps, GetStaticPaths } from 'next'

// import CssLastOfType from '../../content/posts/CssLastOfType.mdx'
// import FirstThreeMonths from '../../content/posts/FirstThreeMonths.mdx'
// import FlexboxZombiesReview from '../../content/posts/FlexboxZombiesReview.mdx'
// import HowIBecame from '../../content/posts/HowIBecameADeveloper.mdx'
// import HowIMadeMySite from '../../content/posts/HowIMadeMySite.mdx'
// import HowToCreateGithubREADME from '../../content/posts/HowToMakeAGithubReadme.mdx'
// import UseRef from '../../content/posts/HowToUseRef.mdx'
// import WhyUseMarkdown from '../../content/posts/Markdown.mdx'
// import ProjectsForJobs from '../../content/posts/ProjectsForJobs.mdx'
// import WhyBlogMarkdown from '../../content/posts/NewBlog.mdx'
// import Review2020 from '../../content/posts/Review2020.mdx'
// import Review2021 from '../../content/posts/Review2021.mdx'

// const Posts = {
//   'css-last-of-type': CssLastOfType,
//   'first-three-months': FirstThreeMonths,
//   'flexbox-zombies-review': FlexboxZombiesReview,
//   'how-i-became-a-developer': HowIBecame,
//   'how-i-made-my-site': HowIMadeMySite,
//   'how-to-create-a-github-readme': HowToCreateGithubREADME,
//   'how-to-use-ref': UseRef,
//   'why-learn-markdown': WhyUseMarkdown,
//   'projects-i-made-for-jobs': ProjectsForJobs,
//   'why-a-new-blog': WhyBlogMarkdown,
//   'review-2020': Review2020,
//   'review-2021': Review2021,
// }

// // Generates `/posts/1` and `/posts/2`
// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = Object.keys(Posts).map((slugKey) => ({
//     params: { post: slugKey },
//   }))

//   console.log(posts)

//   return {
//     paths: posts,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { params } = context
//   return {
//     // Passed to the page component as props
//     props: { params },
//   }
// }

export default function Post({ params }) {
//   const Component = Posts[params.post]

  return (
    <section>
      {/* <Component /> */}
    </section>
  )
}
