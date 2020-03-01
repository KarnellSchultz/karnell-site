import Post from '../components/Post';
import styled from 'styled-components';
import HeadTag from '../components/HeadTag';
import ArticleCard from '../components/ArticleCard';

export const Section = styled.section`
	padding: 5rem 2rem 0 2rem;
	max-width: 800px;
	font-size: 20px;

	h1 {
		font-size: 40px;
		font-weight: 600;
	}
	p {
		margin: 0 0 2rem;
		font-size: 1.3rem;
	}
`;
export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;

	padding-bottom: 2rem;

	div {
		padding-bottom: 2rem;
	}
`;

const GridSection = styled(Section)``;

const Home = () => (
	<>
		<HeadTag pageName="🔥 Home" />
		<Section>
			<h1>Karnell Schultz</h1>
			<p className="description">
				🤙🏾 I'm a Javascript developer interested in creating tools to
				democrotize the web. I create{' '}
				<a href="https://github.com/KarnellSchultz">open source</a>
				&nbsp;projects and write about my experiences in tech. <br></br>
			</p>
			<a href="/about">More about me &rarr;</a>
		</Section>
		<Section>
			<Post />
		</Section>
		<GridSection>
			<Grid>
				<div>
					<ArticleCard
						heading={'Hot new box'}
						body={'This is cool new content'}
					/>
				</div>
				<div>
					<ArticleCard
						heading={'Hot new box'}
						body={'This is cool new content'}
					/>
				</div>
				<div>
					<ArticleCard
						heading={'Hot new box'}
						body={'This is cool new content'}
					/>
				</div>
				<div>
					<ArticleCard
						heading={'Hot new box'}
						body={'This is cool new content'}
					/>
				</div>
				<div>
					<ArticleCard
						heading={'Hot new box'}
						body={'This is cool new content'}
					/>
				</div>
			</Grid>
		</GridSection>
	</>
);

export default Home;
