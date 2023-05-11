'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import '../../../css/prism.css'

import CssLastOfType from '../../../content/css-last-of-type.mdx'
import FirstThreeMonths from '../../../content/first-three-months.mdx'
import FlexboxZombiesReview from '../../../content/flexbox-zombies-review.mdx'
import HowIBecame from '../../../content/how-i-became-a-developer.mdx'
import HowIMadeMySite from '../../../content/how-i-made-my-site.mdx'
import HowToCreateGithubREADME from '../../../content/how-to-create-a-github-readme.mdx'
import UseRef from '../../../content/how-to-use-ref.mdx'
import WhyUseMarkdown from '../../../content/why-learn-markdown.mdx'
import ProjectsForJobs from '../../../content/projects-i-made-for-jobs.mdx'
import WhyBlogMarkdown from '../../../content/why-a-new-blog.mdx'
import Review2020 from '../../../content/review-2020.mdx'
import Review2021 from '../../../content/review-2021.mdx'
import Review2022 from '../../../content/review-2022.mdx'
import MigrationToTailwindCss from '../../../content/migration-to-tailwindcss.mdx'

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
  'review-2022': Review2022,
  'migration-to-tailwindcss': MigrationToTailwindCss,
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

  return <Component />
}

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(Posts).map((slug) => ({
    slug,
  }))
}
