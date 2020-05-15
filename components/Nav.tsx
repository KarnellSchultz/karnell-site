import styled from 'styled-components';
import Link from 'next/link';
import { useDarkState, useDarkDispatch } from './DarkThemeContext';
import { useEffect } from 'react';

const StyledNavSection = styled.section`
  @media (max-width: 890px) {
    padding: 0 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 567px) {
    a:first-of-type {
      padding: 1rem 0.5rem 1rem 1.5rem;
    }
    a {
      padding: 1rem 1rem 1rem 1rem;
    }
    a.button {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    .links {
    }
    padding: 0 0 0 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ThemeToggleButton() {
  useEffect(() => {
    let localStorageDarkModeSetting = localStorage.getItem('dark');
    if (localStorageDarkModeSetting == 'true') {
      dispatch({ type: 'dark' });
    } else {
      dispatch({ type: 'light' });
    }
  }, []);

  const { dark } = useDarkState();
  const dispatch = useDarkDispatch();
  return dark ? (
    <a onClick={() => dispatch({ type: 'light' })}>☀️</a>
  ) : (
    <a onClick={() => dispatch({ type: 'dark' })}>🌘</a>
  );
}

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
          <ThemeToggleButton />
        </div>
        <div>
          <a
            href="mailto:karnellschultz@gmail.com"
            className="button"
            rel="noopener noreferrer"
            target="_blank">
            Contact
          </a>
        </div>
      </StyledNavSection>
    </nav>
  );
}
