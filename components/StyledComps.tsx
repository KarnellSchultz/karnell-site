import styled from 'styled-components';

export const StyledButton = styled.button`
	font-weight: 600;
	font-size: 1.3rem;
	padding: 0.75rem 1.25rem;
	background: ${({ theme }) => theme.colors.black};
	color: #ffffff;
	height: 100%;
	text-decoration: none;
	text-transform: none;
	border: none;

	&:hover {
		cursor: pointer;
		text-transform: none;
		color: ${({ theme }) => theme.colors.primaryHover};
	}
`;
export const Section = styled.section`
	padding: 5rem 2rem 0 2rem;
	max-width: 800px;
	font-size: 20px;

	h1 {
		font-size: 40px;
		font-weight: 600;
	}
	p {
		margin: 0 0 2rem;
		font-size: 1.3rem;
	}
`;
