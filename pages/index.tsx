import Post from '../components/Post';
import styled from 'styled-components';
import HeadTag from '../components/HeadTag';
import { Section } from '../components/StyledComps';

const ArticleSection = styled(Section)`
	margin-top: 2rem;
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

const Home = () => (
	<>
		<HeadTag pageName="🔥 Home" />
		<Section>
			<h1>Karnell Schultz</h1>
			<p className="description">
				🤙🏾 I'm a Javascript developer interested in creating tools to
				democrotize the web. I create{' '}
				<a href="https://github.com/KarnellSchultz">open source</a>
				&nbsp;projects and write about my experiences in tech.
			</p>
			<a href="/about">More about me &rarr;</a>
		</Section>
		<ArticleSection>
			<Post />
		</ArticleSection>
		{/* <GridSection>
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
		</GridSection> */}
	</>
);

export default Home;
