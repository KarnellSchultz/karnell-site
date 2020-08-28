import Nav from './Nav';
import styled from 'styled-components';
import { Themes } from './Themes';
import Footer from './Footer';
import Head from 'next/head';

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }
`;

interface props {
  children: any;
  pageName: string;
  home?: boolean;
  blog?: boolean;
}

function Layout({ children, pageName = '🔥', blog = false }: props) {
  return (
    <>
      <Head>
        <title>KarnellSchultz - {pageName} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Themes>
        <StyledLayout>
          <Nav />
          <main>{children}</main>
          {blog && (
            <footer>
              <h5>🌍Thanks for Reading🌍</h5>
            </footer>
          )}
        </StyledLayout>
        <Footer />
      </Themes>
    </>
  );
}
export default Layout;
