import AboutMe from '../content/posts/aboutContent.mdx';
import HeadTag from '../components/HeadTag';
import { Section } from '../components/StyledComps';
import styled from 'styled-components';

const AboutLayout = styled.div`
	heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		justify-content: center;
		align-items: center;
	}
`;

export default function About() {
	return (
		<>
			<HeadTag pageName=" 🤙🏾 About" />
			<Section>
				<AboutMe />
			</Section>
		</>
	);
}
