import Button from '../components/Button';
import styled from 'styled-components';
import Link from 'next/link';

const StyledPostRow = styled.div`
	border-radius: 12px;
	padding: 0.5rem;
	line-height: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;

	box-shadow: none;
	transition: transform 300ms ease-in-out, box-shadow 400ms ease,
		background 100ms ease;
	background: ${({ theme }) => theme.colors.darkBackground};

	h3 {
		height: 3rem;
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.colors.primary};
	}

	:hover,
	:active,
	:focus {
		border-radius: 12px;
		color: ${({ theme }) => theme.colors.textHighlight};
		background: ${({ theme }) => theme.colors.black};
		box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
		transform: translateY(-0.5rem);
		/* border-color: #0070f3; */

		h3 {
			color: ${({ theme }) => theme.colors.primaryHover};
		}
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
				<h2>Blog Posts</h2>
				{/* <Button main={true} link="/articles" text="View All"></Button> */}
			</StyledArticle>
			<p> A collection of my thoughts and expeiences.</p>
			<Link href="/articles/markdownguide">
				<StyledPostRow>
					<h3>💁🏾 &nbsp; A case for Learning Markdown 🔽</h3>
				</StyledPostRow>
			</Link>
		</>
	);
}
