import { useEffect } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { themes } from '../Themes';
import { useDarkModeLocalStorage } from '../components/Hooks/useDarkModeLocalStorage';

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }: any) {
  const { pinkDarkTheme, lightTheme } = themes;

  const [
    darkModeLocalStorage,
    setDarkModeLocalStorage,
  ] = useDarkModeLocalStorage('true');

  useEffect(() => {
    initialThemeSetup();
  }, []);

  const toggleTheme = () => {
    darkModeLocalStorage === 'true'
      ? setDarkModeLocalStorage('false')
      : setDarkModeLocalStorage('true');
  };

  const initialThemeSetup = () => {
    if (JSON.parse(window.localStorage.getItem('dark')) === true) {
      setDarkModeLocalStorage('true');
    } else {
      setDarkModeLocalStorage('false');
    }
  };

  return (
    <ThemeProvider
      theme={darkModeLocalStorage == 'true' ? pinkDarkTheme : lightTheme}
    >
      <GlobalStyles />
      <StyledLayout>
        <Nav
          darkModeLocalStorage={darkModeLocalStorage}
          toggleTheme={toggleTheme}
        />
        <main>{children}</main>
      </StyledLayout>
      <section>
        <footer>
          <p>🌍Personal blog of Karnell Schultz 🌍</p>
        </footer>
      </section>
    </ThemeProvider>
  );
}
