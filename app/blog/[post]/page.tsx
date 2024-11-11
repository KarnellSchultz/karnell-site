import { Metadata } from 'next'
import '../../../css/prism.css'

import cssLastOfType from '../../../content/css-last-of-type.mdx'
import firstThreeMonths from '../../../content/first-three-months.mdx'
import flexboxZombiesReview from '../../../content/flexbox-zombies-review.mdx'
import howIBecameADeveloper from '../../../content/how-i-became-a-developer.mdx'
import howIMadeMySite from '../../../content/how-i-made-my-site.mdx'
import howToCreateAGithubReadme from '../../../content/how-to-create-a-github-readme.mdx'
import howToUseRef from '../../../content/how-to-use-ref.mdx'
import whyLearnMarkdown from '../../../content/why-learn-markdown.mdx'
import projectsIMadeForJobs from '../../../content/projects-i-made-for-jobs.mdx'
import whyANewBlog from '../../../content/why-a-new-blog.mdx'
import review2020 from '../../../content/review-2020.mdx'
import review2021 from '../../../content/review-2021.mdx'
import review2022 from '../../../content/review-2022.mdx'
import migrationToTailwindcss from '../../../content/migration-to-tailwindcss.mdx'
import myJourneyToVim from '../../../content/my-journey-to-vim.mdx'

const Posts = {
  'css-last-of-type': cssLastOfType,
  'first-three-months': firstThreeMonths,
  'flexbox-zombies-review': flexboxZombiesReview,
  'how-i-became-a-developer': howIBecameADeveloper,
  'how-i-made-my-site': howIMadeMySite,
  'how-to-create-a-github-readme': howToCreateAGithubReadme,
  'how-to-use-ref': howToUseRef,
  'why-learn-markdown': whyLearnMarkdown,
  'projects-i-made-for-jobs': projectsIMadeForJobs,
  'why-a-new-blog': whyANewBlog,
  'review-2020': review2020,
  'review-2021': review2021,
  'review-2022': review2022,
  'migration-to-tailwindcss': migrationToTailwindcss,
  'my-journey-to-vim': myJourneyToVim
} as const

export async function generateStaticParams() {
  return Object.keys(Posts).map((slug) => ({
    post: slug,
  }))
}

type Props = {
  params: { post: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  return {
    title: `${params.post} - Karnell Schultz`,
  }
}

export default function Page({
  params,
}: {
  params: { post: string }
}) {
  const { post } = params
  const Component = Posts[post]
  return <Component />
}
