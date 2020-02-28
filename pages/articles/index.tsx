import Head from "next/head";
import Post from "../../components/Post";
import ArticleCard from "../../components/ArticleCard";

export default function articles() {
  return (
    <>
      <Head>
        <title>Karnell.site - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-container">
        <div className="grid">
          <Post></Post>
        </div>
        <ArticleCard></ArticleCard>

        <div className="heading"></div>
        <ArticleCard
          heading="Markdown is cool"
          body="Dang this is a cool component"
        />
      </div>
    </>
  );
}
