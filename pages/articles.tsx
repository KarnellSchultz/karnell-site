import React from "react";
import Layout from '../components/Layout'
import Post from '../components/Post'
import ArticleCard from '../components/ArticleCard'

export default function articles() {
  return (
      <Layout>
<div   className='grid-container'  >

    <div className='grid' >
      <Post></Post>
    </div>
<ArticleCard></ArticleCard>

<ArticleCard heading="Markdown is cool" body="Dang this is a cool component" />
</div>
  <style jsx>{`
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
