import Link from 'next/link';
import { useDarkState, useDarkDispatch } from './DarkThemeContext';
import { useEffect } from 'react';

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
  }

  const { dark } = useDarkState();
  const dispatch = useDarkDispatch();
  return dark ? (
    <a className="nav-a" onClick={() => dispatch({ type: 'light' })}>
      {`🌖`}
    </a>
  ) : (
    <a className="nav-a" onClick={() => dispatch({ type: 'dark' })}>
      {`🌘`}
    </a>
  );
}

export default function Nav() {
  return (
    <nav>
      <section className="links">
        <div className="brand">
          <Link href="/">
            <a className="brand-a">{`Home`}</a>
          </Link>
        </div>

        <div className="nav-items">
          <Link href="/blog">
            <a className="nav-a">Blog</a>
          </Link>

          <Link href="/about">
            <a className="nav-a">About</a>
          </Link>
          <ThemeToggleButton />
        </div>
      </section>
    </nav>
  );
}
