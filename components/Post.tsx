import Button from "../components/Button";
import styled from "styled-components";

const StyledPostRow = styled.div`
  border-radius: 12px;
  padding: 0.8rem;
  :hover,
  :active,
  :focus {
    color: #e3e3e3;
    border-radius: 12px;

    background: #3e3e3e;
    border-color: #0070f3;
  }
`;

export default function Post() {
  return (
    <>
      <article>
        <h2>Latest Articles</h2>
        <Button main={true} link="/articles" text="View All"></Button>
      </article>

      <p>Here is some stuff I have written</p>
      <div>
        <h3>😋 Get Emoji — All Emojis to ✂️ Copy and 📋 Paste 👌 </h3>
      </div>
      <StyledPostRow>
        <h3> 👨🏽‍🚀 A case for Markdown</h3>
      </StyledPostRow>
      <StyledPostRow>
        <h3> 👨🏽‍🚀 A case for Markdown</h3>
      </StyledPostRow>
    </>
  );
}
