import Mark from "../../content/MarkdownArticle.mdx";
import styled from "styled-components";

const Section = styled.section`
font-size: 1.2em;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
h1 {
    color : red;
}
p {
    color: green;
}
`;

export default function markdownGuide() {
  return (
    <div>
      <Section>
        <Mark></Mark>
      </Section>
      {/* <style jsx>`
          h1
          `</style> */}
    </div>
  );
}
