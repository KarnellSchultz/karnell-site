export const PostDetails: {
  id: number;
  title: string;
  date: string;
  link: string;
}[] = [
  //They appear in the order listed top to bottom

  {
    id: 5,
    title: 'How I Became a Self Taught Developer',
    date: new Date('August 13 2020').toDateString(),
    link: '/articles/howibecameadeveloper',
  },
  {
    id: 4,
    title: 'Flexbox Zombies: Review',
    date: new Date('August 2020').toDateString(),
    link: '/articles/flexboxzombiesreview',
  },
  {
    id: 3,
    title: 'How to use :last-of-type 🎨',
    date: 'March 2020',
    link: '/articles/csslastoftype',
  },
  {
    id: 2,
    title: '🥳HowImadeMySite.com',
    date: 'March 2020',
    link: '/articles/howimademysite',
  },
  {
    id: 1,
    title: '😅 A New Blog? What is this, 2006? ✍🏽',
    date: 'March 2020',
    link: '/articles/whyblog',
  },
  {
    id: 0,
    title: '💁🏾 A case for Learning Markdown 🔽',
    date: 'March 2020',
    link: '/articles/markdownguide',
  },
];
