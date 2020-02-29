import Button from '../components/Button';
import styled from 'styled-components';
import Link from 'next/link';

const StyledPostRow = styled.div`
	border-radius: 12px;
	padding: 0.5rem;
	line-height: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #252525;

	:hover,
	:active,
	:focus {
		color: ${({ theme }) => theme.colors.textHighlight};
		border-radius: 12px;
		background: #3e3e3e;
		border-color: #0070f3;
		cursor: pointer;
	}
`;

const StyledArticle = styled.article`
	display: flex;
	align-items: center;
	button {
		margin-left: 2rem;
	}
`;

export default function Post() {
	return (
		<>
			<StyledArticle>
				<h2>Latest Articles</h2>
				<Button main={true} link="/articles" text="View All"></Button>
			</StyledArticle>

			<Link href="/articles/markdownguide">
				<StyledPostRow>
					<h3>
						{' '}
						&rarr; &nbsp; &nbsp; 💁🏾 &nbsp; A case for Learning Markdown 🔽
					</h3>
					<Button link={'/'} text={'New'} main={true} />
				</StyledPostRow>
			</Link>
		</>
	);
}
