import Mark from "../../content/MarkdownArticle.mdx";
import { Section } from "../../components/StyledComps";
import styled from "styled-components";

const PostSection = styled(Section)`
  heading {
    display: flex;
    justify-content: space-between;
  }

  code {
    color: papayawhip;
  }

  img {
    width: 100px;
    height: 100px;
  }

  h2,
  h3,
  h4 {
    padding-top: 3rem;
    margin-top: 2rem;
    font-weight: 500;
  }
  p {
    margin: 2rem 0.3rem 2.3rem;
    font-size: 1.3rem;
  }
`;

export default function markdownGuide() {
  return (
    <div>
      <PostSection>
        <Mark></Mark>
      </PostSection>
    </div>
  );
}
