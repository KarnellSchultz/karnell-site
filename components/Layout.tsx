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
	footer {
		position: sticky;
		background: ${({ theme }) => theme.colors.darkBackground};
	}
`;

export default function Layout({ children }: props) {
	return (
		<StyledLayout>
			<Nav />
			<main>{children}</main>
			<footer>
				<p>Karnell Schultz " 🌍"</p>
			</footer>
		</StyledLayout>
	);
}
