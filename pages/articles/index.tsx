import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import ArticleCard from "../../components/ArticleCard";


export default function articles() {
  return (
    <Layout pageName='Articles'>
        <Head>
        <title>Karnell.site - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-container">
        <div className="grid">
          <Post></Post>
        </div>
        <ArticleCard></ArticleCard>

<div className='heading' >

</div>
        <ArticleCard
          heading="Markdown is cool"
          body="Dang this is a cool component"
        />
      </div>
      <style jsx>{`
        .heading {
          text-decoration: none;
        }

        a {
          color: green
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
      `}</style>
    </Layout>
  );
}
