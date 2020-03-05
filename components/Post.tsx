import styled from 'styled-components';
import Link from 'next/link';
import { StyledPostRow } from '../components/StyledComps';

const StyledHeading = styled.article`
	display: flex;

	align-items: center;
	button {
		margin-left: 2rem;
	}
`;

const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
	li {
		list-style: none;
	}
`;

const PostDetails: {
	id: number;
	title: string;
	date: string;
	link: string;
}[] = [
	{
		id: 1,
		title: '😅 A New Blog? What is this, 2006? ✍🏽',
		date: 'March 2020',
		link: '/articles/whyblog',
	},
	{
		id: 0,
		title: '💁🏾 A case for Learning Markdown 🔽',
		date: 'March 2020',
		link: '/articles/markdownguide',
	},
];
//They appear in the order listed top to bottom

const PostRow = (
	PostDetails: { id: number; title: string; date: string; link: string }[],
): any => {
	return PostDetails.map(row => {
		return (
			<li key={row.id}>
				<Link href={row.link}>
					<StyledPostRow>
						<h3> {row.title} </h3>
					</StyledPostRow>
				</Link>
			</li>
		);
	});
};

export default function Post() {
	return (
		<>
			<StyledHeading>
				<h2>Blog Posts</h2>
				{/* <Button main={true} link="/articles" text="View All"></Button> */}
			</StyledHeading>
			<p>A collection of my thoughts and expeiences.</p>
			<StyledList>{PostRow(PostDetails)}</StyledList>
		</>
	);
}
