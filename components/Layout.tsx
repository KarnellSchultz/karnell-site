import Nav from './Nav';
import styled from 'styled-components';
import { Themes } from './Themes';
import Footer from './Footer';

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

export default function Layout({ children }: any) {
  return (
    <Themes>
      <StyledLayout>
        <Nav />
        <main>{children}</main>
      </StyledLayout>
      <Footer />
    </Themes>
  );
}
