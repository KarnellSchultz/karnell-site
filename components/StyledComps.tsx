import styled from 'styled-components';

export const StyledButton = styled.button`
	font-weight: 600;
	font-size: 1.3rem;
	padding: 0.75rem 1.25rem;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.buttonText};
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
	@media (max-width: 576px) {
		padding: 2rem 2rem 0 2rem;
	}
	padding: 5rem 2rem 0 2rem;
	max-width: 800px;
	font-size: 20px;

	h1 {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 40px;
		font-weight: 400;
	}

	h2,
	h3 {
		font-size: 30px;
		font-weight: 400;
	}
	p {
		margin: 0 0 2rem;
		font-size: 1.3rem;
	}
	li {
		line-height: 1.8rem;
	}
`;

export const StyledBlogPost = styled.div`
	@media (max-width: 576px) {
		padding: 1rem 1rem 1rem 1rem;
		margin: 1rem 0rem 1rem 0rem;
		heading {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		h1 {
			padding-top: 2rem;
			padding-bottom: 2rem;
			font-size: 2.5rem;
		}
		h2,
		h3,
		h4 {
			padding-top: 2rem;
			padding-bottom: 2rem;
			font-size: 2rem;
		}

		img {
			width: 50px;
		}
	}

	padding: 1rem 1rem 1rem 1rem;
	margin: 1rem 1rem 1rem 1rem;
	max-width: 800px;
	heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		padding-top: 2rem;
		padding-bottom: 2rem;
		font-size: 2.5rem;
	}
	h2,
	h3,
	h4 {
		padding-top: 2rem;
		padding-bottom: 2rem;
		font-size: 2rem;
	}
	p {
		margin: 2rem 0.3rem 2.3rem;
		font-size: 1.2rem;
		line-height: 1.8rem;
	}
	img {
		width: 100px;
	}
	code {
		color: ${({ theme }) => theme.colors.textHighlight};
		background-color: ${({ theme }) => theme.colors.codeBackground};
	}
`;

export const StyledPostRow = styled.div`
	border-radius: 12px;
	padding: 0.5rem;
	line-height: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;

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

		h3 {
			color: ${({ theme }) => theme.colors.primaryHover};
		}
		cursor: pointer;
	}
`;
