import Head from "next/head";
import Post from "../../components/Post";
import ArticleCard from "../../components/ArticleCard";
import HeadTag from "../../components/HeadTag";

export default function articles() {
  return (
    <>
      <HeadTag pageName={"📰 Articles"} />
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
