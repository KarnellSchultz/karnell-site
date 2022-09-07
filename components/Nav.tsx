import Link from 'next/link'
import { useDarkState, useDarkDispatch } from './DarkThemeContext'
import { useEffect } from 'react'
import styled from 'styled-components'

const NavButton = styled.button`
  color: var(--text-main);
  background: var(--nav-button-background);
  font-weight: 400;
  font-size: 1.1rem;
  padding: 1rem 1rem;
  margin: 0 0.25rem;
  border-radius: var(--borderRadius);
  letter-spacing: 0.6px;
  border: none;
  transition: 10ms background;

  &:hover {
    cursor: pointer;
    color: var(--nav-text);
    background: var(--nav-button-background-hover);
  }
  &:focus {
    outline: 1px solid var(--grey7);
    outline-offset: 2px;
    background: var(--nav-button-background-hover);
  }

  &:active {
    background: var(--grey5);
    outline: none;
  }

  :first-of-type {
    margin-left: -1rem;
  }
`

const StyledNav = styled.nav`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 5rem;
  padding-left: 1rem;

  section {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`

const NavItem = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
`

function ThemeToggleButton() {
  const { dark } = useDarkState()
  const dispatch = useDarkDispatch()

  useEffect(() => {
    if (dark.toString() == localStorage.getItem('dark')) {
      return
    } else {
      if (localStorage.getItem('dark') === 'true') {
        dispatch({ type: 'dark' })
      } else if (localStorage.getItem('dark') === 'false') {
        dispatch({ type: 'light' })
      }
    }
  }, [dark, dispatch])

  return dark ? (
    <NavButton onClick={() => dispatch({ type: 'light' })}>
      {`🌖`}
    </NavButton>
  ) : (
    <NavButton onClick={() => dispatch({ type: 'dark' })}>
      {`🌘`}
    </NavButton>
  )
}

function Nav() {
  return (
    <StyledNav>
      <section>
        <div className="brand">
          <Link href="/">
            <NavButton>Home</NavButton>
          </Link>
        </div>

        <NavItem>
          <Link href="/blog">
            <NavButton>Blog</NavButton>
          </Link>

          <Link href="/about">
            <NavButton>About</NavButton>
          </Link>
          <ThemeToggleButton />
        </NavItem>
      </section>
    </StyledNav>
  )
}
export { Nav }
