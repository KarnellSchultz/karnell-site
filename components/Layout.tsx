import { useState } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { themes } from '../Themes';

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }: any) {
  const { pinkDarkTheme, lightTheme } = themes;

  const [theme, setTheme] = useState(pinkDarkTheme);

  const toggleTheme = () => {
    return theme === pinkDarkTheme
      ? setTheme(lightTheme)
      : setTheme(pinkDarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLayout>
        <Nav toggleTheme={toggleTheme} />
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
