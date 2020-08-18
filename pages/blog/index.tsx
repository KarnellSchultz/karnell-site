import Post from 'components/Post';
import ArticleCard from 'components/ArticleCard';
import styled from 'styled-components';
import Layout from 'components/Layout';

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
      <Layout pageName={'📰 Articles'}>
        <section>
          <Post></Post>
          <Grid>
            <div>
              <ArticleCard
                heading={'Smart stuff here'}
                body={'Wow im so good at this'}
              />
            </div>
            <div>
              <ArticleCard
                heading={'Markdown is cool'}
                body={'Dang this is a cool component'}
              />
            </div>
          </Grid>
        </section>
      </Layout>
    </>
  );
}
