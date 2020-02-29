import AboutMe from "../content/aboutContent.mdx";
import styled from "styled-components";
import HeadTag from "../components/HeadTag";

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
      <HeadTag pageName=" 🤙🏾 About" />
      <Section>
        <AboutMe />
      </Section>
    </>
  );
}
