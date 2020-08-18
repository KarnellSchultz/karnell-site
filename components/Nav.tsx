import styled from 'styled-components';
import Link from 'next/link';
import { useDarkState, useDarkDispatch } from './DarkThemeContext';
import { useEffect } from 'react';

const StyledNavSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 890px) {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 567px) {
    display: flex;
    justify-content: flex-start;
    a:first-of-type {
      padding-left: 1.5em;
    }
    a {
      padding: 1rem 1rem 1rem 1rem;
    }
    a.button {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    .nav-a {
      padding: 0.7em 1em;
    }
    .contact-button {
      display: none;
    }
  }
`;

function ThemeToggleButton() {
  useEffect(() => {
    if (dark.toString() == localStorage.getItem('dark')) {
      return;
    } else {
      setDarkMode();
    }
  }, []);

  function setDarkMode() {
    if (localStorage.getItem('dark') === 'true') {
      return dispatch({ type: 'dark' });
    } else if (localStorage.getItem('dark') === 'false') {
      console.log(dark);
      return dispatch({ type: 'light' });
    }

    return;
  }

  const { dark } = useDarkState();
  const dispatch = useDarkDispatch();
  return dark ? (
    <a className="nav-a" onClick={() => dispatch({ type: 'light' })}>
      ☀️
    </a>
  ) : (
    <a className="nav-a" onClick={() => dispatch({ type: 'dark' })}>
      🌘
    </a>
  );
}

export default function Nav() {
  return (
    <nav>
      <StyledNavSection>
        <div className="links">
          <Link href="/">
            <a className="nav-a">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-a">About Me</a>
          </Link>
          <ThemeToggleButton />
        </div>
        <div className="button">{`🌍`}</div>
      </StyledNavSection>
    </nav>
  );
}
