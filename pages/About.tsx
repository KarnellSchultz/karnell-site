import Head from "next/head";
import AboutMe from "../content/aboutContent.mdx";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem 0 2rem;
  margin-top: 1.5rem;
  max-width: 800px;
  font-size: 20px;

  h1 {
    font-size: 40px;
    font-weight: 800;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Karnell.site - About </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <AboutMe />
      </Section>
    </>
  );
}
