import Mark from '../../content/MarkdownArticle.mdx';
import { Section } from '../../components/StyledComps';
// import styled from 'styled-components';

// const Section = styled(Section)`
// 	font-size: 1.2em;
// `;

export default function markdownGuide() {
	return (
		<div>
			<Section>
				<Mark></Mark>
			</Section>
		</div>
	);
}
