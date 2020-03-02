import Mark from '../../content/MarkdownArticle.mdx';
import styled from 'styled-components';
import { Section } from '../../components/StyledComps';

const PostSection = styled(Section)`
	heading {
		display: flex;
		justify-content: space-between;
	}
	code {
		color: ${({ theme }) => theme.colors.textHighlight};
		background-color: ${({ theme }) => theme.colors.codeBackground};
	}

	img {
		width: 100px;
		height: 100px;
	}
	h2,
	h3,
	h4 {
		padding-top: 3rem;
		margin-top: 2rem;
		font-weight: 500;
	}
	p {
		margin: 2rem 0.3rem 2.3rem;
		font-size: 1.3rem;
	}
`;

export default function markdownGuide() {
	return (
		<div>
			<PostSection>
				<Mark></Mark>
			</PostSection>
		</div>
	);
}
