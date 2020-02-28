import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNavButton = styled.button`
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0.75rem 1.25rem;
  background: ${props => props.theme.colors.black};
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
  border: 1px solid #0366ee;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 600;
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
  link = "/",
  text = "Click",
  main = false
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
