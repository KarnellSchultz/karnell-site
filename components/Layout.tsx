import Nav from './Nav';
import styled from 'styled-components';

interface props {
  children: any;
}

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }: props) {
  return (
    <>
      <StyledLayout>
        <Nav />
        <main>{children}</main>
      </StyledLayout>
      <section>
        <footer>
          <p>🌍Personal blog of Karnell Schultz 🌍</p>
        </footer>
      </section>
    </>
  );
}
