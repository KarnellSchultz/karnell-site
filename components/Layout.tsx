import Nav from './Nav';
import styled from 'styled-components';

interface props {
	children: any;
}

const StyledLayout = styled.div`
	color: ${({ theme }) => theme.colors.text};
	background: ${({ theme }) => theme.colors.body};
	min-height: 100vh;
	min-width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	main {
		margin-bottom: 4rem;
	}

	h1,
	h2,
	h3,
	h4 {
		color: ${({ theme }) => theme.colors.primary};
	}

	a {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		transition: color 0.15s ease;
	}
	a:hover {
		color: ${({ theme }) => theme.colors.primaryHover};
		text-decoration: underline;
	}
`;

const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	padding: 1.5rem;
	color: ${({ theme }) => theme.colors.text};
	background: ${({ theme }) => theme.colors.darkBackground};

	footer {
		max-width: 600px;

		img {
			margin-left: 0.5rem;
		}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export default function Layout({ children }: props) {
	return (
		<>
			<StyledLayout>
				<Nav />
				<main>{children}</main>
			</StyledLayout>
			<FooterContainer>
				<footer>
					<p>
						<em>🌍Personal blog of Karnell Schultz 🌍</em>
					</p>
				</footer>
			</FooterContainer>
		</>
	);
}
