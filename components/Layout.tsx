import Nav from './Nav';
import styled from 'styled-components';
import { Themes } from './Themes';
const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }: any) {
  // const toggleTheme = () => {
  //   darkModeLocalStorage === 'true'
  //     ? setDarkModeLocalStorage('false')
  //     : setDarkModeLocalStorage('true');
  // };

  return (
    <Themes>
      <StyledLayout>
        <Nav />
        <main>{children}</main>
      </StyledLayout>
      <section>
        <footer>
          <p>🌍Personal blog of Karnell Schultz 🌍</p>
        </footer>
      </section>
    </Themes>
  );
}
