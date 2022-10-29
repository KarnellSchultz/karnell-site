'use client'

import Prism from 'prismjs'
import '../../../css/prism.css'

import CssLastOfType from '../../../content/posts/css-last-of-type.mdx'
import FirstThreeMonths from '../../../content/posts/first-three-months.mdx'
import FlexboxZombiesReview from '../../../content/posts/flexbox-zombies-review.mdx'
import HowIBecame from '../../../content/posts/how-i-became-a-developer.mdx'
import HowIMadeMySite from '../../../content/posts/how-i-made-my-site.mdx'
import HowToCreateGithubREADME from '../../../content/posts/how-to-create-a-github-readme.mdx'
import UseRef from '../../../content/posts/how-to-use-ref.mdx'
import WhyUseMarkdown from '../../../content/posts/why-learn-markdown.mdx'
import ProjectsForJobs from '../../../content/posts/projects-i-made-for-jobs.mdx'
import WhyBlogMarkdown from '../../../content/posts/why-a-new-blog.mdx'
import Review2020 from '../../../content/posts/review-2020.mdx'
import Review2021 from '../../../content/posts/review-2021.mdx'
import { useEffect } from 'react'

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

export default function Post({
  params,
}: {
  params: { post: string }
}) {
  const Component = Posts[params.post]

  // Try to get this out of here and move to server
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section>
      <Component />
    </section>
  )
}
