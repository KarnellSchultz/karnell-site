import AboutMe from '../../content/about-me-content.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Karnell Schultz',
}

export default function About() {
  return (
    <section>
      <AboutMe />
    </section>
  )
}
