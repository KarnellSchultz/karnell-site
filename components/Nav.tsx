import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNavSection = styled.section`
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 567px) {
    max-width: 100vw;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  /* background: green; */
  padding: 2rem 0 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Nav() {
  return (
    <nav>
      <StyledNavSection>
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </div>
        <div>
          <a className="button" target="_blank">
            Contact
          </a>
        </div>
      </StyledNavSection>
    </nav>
  );
}
