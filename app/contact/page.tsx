import Contact from '../../content/contact.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Karnell Schultz',
}

export default function About() {
  return (
    <section>
      <Contact />
    </section>
  )
}
