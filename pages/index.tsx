import Post from "../components/Post";
import styled from "styled-components";
import HeadTag from "../components/HeadTag";

const Section = styled.section`
  padding: 5rem 2rem 0 2rem;
  max-width: 800px;
  font-size: 20px;

  h1 {
    font-size: 40px;
    font-weight: 800;
  }
  p {
  }
`;

const Home = () => (
  <>
    <HeadTag pageName="🔥 Home" />
    <Section>
      <header>
        <h1>Karnell Schultz</h1>
        <p className="description">
          🤙 I'm a Javascript developer interested in creating tools to
          democrotize the web. I create{" "}
          <a href="https://github.com/KarnellSchultz">open source</a>
          &nbsp;projects and write about my experiences in tech. <br></br>
        </p>
        <a href="/about">More about me &rarr;</a>
      </header>
    </Section>
    <Section>
      <Post />
    </Section>
  </>
);

export default Home;
