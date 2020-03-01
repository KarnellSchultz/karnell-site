import React from 'react';
import NavButton from './Button';
import styled from 'styled-components';
import { MainStyledButton } from '../components/Button';

const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: column;
	justify-content: center;
	background: ${({ theme }) => theme.colors.body};
	width: 100%;
	li {
		list-style: none;
		margin-right: 0.2rem;
	}
	ul {
		display: flex;
	}
	div {
		display: flex;
		width: 100%;
		max-width: 865px;
		background: ${({ theme }) => theme.colors.body};
	}
	.nav-contact {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-right: 1.5rem;
	}
`;

export default function Nav() {
	return (
		<StyledNav>
			<div>
				<ul className="nav-links">
					<li className="nav-home">
						<NavButton text="Home" link="/"></NavButton>
					</li>
					<li className="nav-about">
						<NavButton text="About" link="/about"></NavButton>
					</li>
					{/* <li className="nav-articles">
						<NavButton text="Projects" link="/pojects"></NavButton>
					</li> */}
					{/* <li className="nav-articles">
						<NavButton text="Articles" link="/articles"></NavButton>
					</li> */}
				</ul>
				<ul className="nav-contact">
					<li className="contact-item">
						<a href="mailto:karnellschultz@gmail.com" target="_blank">
							<MainStyledButton>Contact ✌️</MainStyledButton>
						</a>
					</li>
				</ul>
			</div>
		</StyledNav>
	);
}
