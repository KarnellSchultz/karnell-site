export type PostDetailsType = {
  id: number
  title: string
  date: string
  slug: string
}

export const POST_DETAILS: PostDetailsType[] = [
  //They appear in the order listed top to bottom
  {
    id: 16,
    title: "Read the friendly manual",
    date: new Date('Dec 1 2024').toDateString(),
    slug: 'read-the-friendly-manual'
  },
  {
    id: 15,
    title: "How vim leveled me up as a developer",
    date: new Date('Nov 18 2024').toDateString(),
    slug: 'how-vim-leveled-me-up'
  },
  {
    id: 14,
    title: "My Journey to Vim: From VsCode to Zed to NeoVim",
    date: new Date('Nov 11 2024').toDateString(),
    slug: 'my-journey-to-vim'
  },
  {
    id: 13,
    title: '2022 into 2023',
    date: new Date('May 12 2023').toDateString(),
    slug: 'review-2022',
  },
  {
    id: 12,
    title: 'Migration to Tailwind',
    date: new Date('November 4 2022').toDateString(),
    slug: 'migration-to-tailwindcss',
  },
  {
    id: 11,
    title: 'Projects I made for Job Interviews',
    date: new Date('February 12 2022').toDateString(),
    slug: 'projects-i-made-for-jobs',
  },
  {
    id: 10,
    title: '2021 into 2022',
    date: new Date('January 23 2022').toDateString(),
    slug: 'review-2021',
  },
  {
    id: 9,
    title: '2020 into 2021',
    date: new Date('January 5 2021').toDateString(),
    slug: 'review-2020',
  },
  {
    id: 8,
    title: 'Hardest Part of My First 3 Months as a Developer',
    date: new Date('November 15 2020').toDateString(),
    slug: 'first-three-months',
  },
  {
    id: 7,
    title: 'How To useRef',
    date: new Date('September 13 2020').toDateString(),
    slug: 'how-to-use-ref',
  },
  {
    id: 6,
    title: 'How To Create a Github Profile README',
    date: new Date('August 19 2020').toDateString(),
    slug: 'how-to-create-a-github-readme',
  },
  {
    id: 5,
    title: 'How I Became a Self Taught Developer 👨🏽‍💻',
    date: new Date('August 13 2020').toDateString(),
    slug: 'how-i-became-a-developer',
  },
  {
    id: 4,
    title: 'Flexbox Zombies: Review',
    date: new Date('August 2020').toDateString(),
    slug: 'flexbox-zombies-review',
  },
  {
    id: 3,
    title: 'How to use :last-of-type 🎨',
    date: 'March 2020',
    slug: 'css-last-of-type',
  },
  {
    id: 2,
    title: '🥳How I Made My Site',
    date: 'March 2020',
    slug: 'how-i-made-my-site',
  },
  {
    id: 1,
    title: '😅 A New Blog? What is this, 2006? ✍🏽',
    date: 'March 2020',
    slug: 'why-a-new-blog',
  },
  {
    id: 0,
    title: '💁🏾 A case for Learning Markdown 🔽',
    date: 'March 2020',
    slug: 'why-learn-markdown',
  },
] as const
