import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNavButton = styled.button`
	font-weight: 350;
	font-size: 1.3rem;
	padding: 1rem 1.5rem;
	background: ${props => props.theme.colors.body};
	color: #ffffff;
	height: 100%;
	text-decoration: none;
	text-transform: none;
	border: none;

	vertical-align: middle;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	line-height: 1;

	&:hover {
		cursor: pointer;
		text-transform: none;
		color: ${({ theme }) => theme.colors.primaryHover};
	}
`;

const MainStyledButton = styled(StyledNavButton)`
	-webkit-appearance: none;
	display: inline-block;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	background: ${({ theme }) => theme.colors.primary};
	color: #ffffff;
	font-size: 1rem;
	text-transform: none;
	padding: 0.75rem 1.25rem;

	vertical-align: middle;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	line-height: 1;

	&:hover {
		text-decoration: none;
		cursor: pointer;
		text-transform: none;
		color: #ffffff;
		background: ${({ theme }) => theme.colors.primaryHover};
	}
`;

export default function NavButton({
	link = '/',
	text = 'Click',
	main = false,
}) {
	return (
		<>
			<Link href={link}>
				{main ? (
					<MainStyledButton>{text}</MainStyledButton>
				) : (
					<StyledNavButton>{text}</StyledNavButton>
				)}
			</Link>
		</>
	);
}
