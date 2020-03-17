import Post from "../../components/Post";
import ArticleCard from "../../components/ArticleCard";
import HeadTag from "../../components/HeadTag";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex: wrap;
  justify-content: space-between;

  div {
    padding: 0.6rem;
  }
`;

export default function articles() {
  return (
    <>
      <HeadTag pageName={"📰 Articles"} />
      <section>
        <Post></Post>
        <Grid>
          <div>
            <ArticleCard
              heading={"Smart stuff here"}
              body={"Wow im so good at this"}
            />
          </div>
          <div>
            <ArticleCard
              heading={"Markdown is cool"}
              body={"Dang this is a cool component"}
            />
          </div>
        </Grid>
      </section>
    </>
  );
}
