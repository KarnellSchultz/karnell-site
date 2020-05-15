import Nav from './Nav';
import styled from 'styled-components';
import { Themes } from './Themes';
import Footer from './Footer';
import Link from 'next/link';
import Head from 'next/head';

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  main {
    margin-bottom: 4rem;
  }

  /* background-image: radial-gradient(
      rgb(215, 210, 215) 2px,
      transparent 1px
    ),
    radial-gradient(rgb(215, 215, 200) 1px, transparent 1px);
  background-position: 0px 0px, 25px 25px;
  background-size: 50px 50px; */
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
            <section>
              <Link href="/"> ⬅️ Back Home </Link>
            </section>
          )}
        </StyledLayout>
        <Footer />
      </Themes>
    </>
  );
}
export default Layout;
