import React from 'react';
import NavButton from './Button';
import styled from 'styled-components';
import { MainStyledButton } from '../components/Button';

const StyledNav = styled.nav`
	@media (max-width: 900px) {
		/* background: red; */
		width: 100vw;
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

	@media (max-width: 567px) {
		padding: 0;
		max-width: 100vw;

		ul {
			display: flex;
			justify-content: space-between;
		}

		li {
			width: 100%;
			padding: 0 0 0 0;
			margin: 0 0 0 0;
		}
		li:last-of-type {
			margin: 0 0 0 0;
			padding: 0 0 0 0;
		}
	}

	/* background: green; */
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 1rem;

	ul {
		width: 100%;
		max-width: 860px;
		display: flex;
		flex-direction: row;
		list-style: none;
	}
	li {
		display: flex;
		justify-content: center;
		margin-right: 2rem;
	}
	li:last-of-type {
		justify-content: flex-end;
		/* width: 68%; */
		width: 100%;
		padding-right: 2rem;
	}
`;

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
