import Post from "../components/Post";

const Home = () => (
<>
    <div className="header">
      <h1 className="title">pop smoke </h1>
      <p className="description">
        🤙 I'm a Javascript developer interested in creating tools to
        democrotize the web. I create{" "}
        <a href="https://github.com/KarnellSchultz">open source</a>
        &nbsp;projects and write about my experiences in tech. <br></br>
        <div className="more">
          <a href="/about">More about me &rarr;</a>
        </div>
      </p>
    </div>

    <Post />
    <style jsx>{`
      .header {
        width: 90%;
        margin-left: 3rem;
        margin-right: 3rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: #5c73ff;
        text-decoration: none;
        transition: color 0.15s ease;
      }
      a:hover {
        color: #8899ff;
        text-decoration: underline;
      }


      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }


      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
</>
   
);

export default Home;
