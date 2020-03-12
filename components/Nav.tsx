import React from 'react';
import NavButton from './Button';
import styled from 'styled-components';
import { MainStyledButton } from '../components/Button';

const StyledNav = styled.nav`
	@media (max-width: 600px) {
		/* background: red; */
		width: 100%;
		display: flex;
		ul {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li {
			padding: 1.2rem;
		}
	}

	background: green;
	width: 100%;
	display: flex;
	flex-direction: row;

	ul {
		list-style: none;
	}
`;

// const StyledNav = styled.nav`
// 	@media (max-width: 650px) {
// 		width: 100%;
// 		height: 5.6rem;
// 		display: flex;
// 		flex-direction: row;
// 		justify-content: space-evenly;
// 		div {
// 			width: 100%;
// 			display: flex;
// 			flex-direction: row;
// 		}
// 		ul {
// 			list-style: none;
// 			display: flex;
// 			flex-direction: row;
// 			padding: 0 0 0 0;
// 		}
// 		.nav-links {
// 			margin: 0;
// 		}

// 		.nav-contact {
// 			visibility: hidden;
// 			width: 100%;
// 			display: flex;
// 			justify-content: center;
// 		}
// 		.contact-item {
// 			width: 8rem;
// 		}
// 	}

// 	display: flex;
// 	flex-direction: row;
// 	align-items: column;
// 	justify-content: center;

// 	padding-right: 1.5rem;

// 	background: ${({ theme }) => theme.colors.body};
// 	width: 865px;
// 	li {
// 		padding: 1rem;
// 		padding-left: 0.2rem;
// 		list-style: none;
// 	}
// 	ul {
// 		display: flex;
// 	}
// 	div {
// 		display: flex;
// 		width: 100%;
// 		/* max-width: 865px; */
// 		background: ${({ theme }) => theme.colors.body};
// 	}
// 	.nav-contact {
// 		width: 100%;
// 		display: flex;
// 		justify-content: flex-end;
// 		margin-right: 1.5rem;
// 	}
// 	li:last-of-type {
// 		background: blue;
// 		display: flex;
// 		justify-content: flex-end;
// 	}
// `;

export default function Nav() {
	return (
		<StyledNav>
			<ul className="nav-links">
				<li className="nav-home">
					<NavButton text="Home" link="/"></NavButton>
				</li>
				<li className="nav-about">
					<NavButton text="About" link="/about"></NavButton>
				</li>
				<li className="contact-item">
					<a href="mailto:karnellschultz@gmail.com" target="_blank">
						<MainStyledButton>Contact ✌️</MainStyledButton>
					</a>
				</li>
			</ul>
		</StyledNav>
	);
}
