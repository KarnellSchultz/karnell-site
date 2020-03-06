import AboutMe from "../content/aboutContent.mdx";
import HeadTag from "../components/HeadTag";
import { Section } from "../components/StyledComps";

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
