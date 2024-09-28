import { Post } from '../../components/Post'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Karnell Schultz',
}

export default function BlogList() {
  return <Post />
}
