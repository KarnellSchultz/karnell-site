import Mark from '../../content/MarkdownArticle.mdx';
import styled from 'styled-components';

const Section = styled.section`
	font-size: 1.2em;
`;

export default function markdownGuide() {
	return (
		<div>
			<Section>
				<Mark></Mark>
			</Section>
		</div>
	);
}
