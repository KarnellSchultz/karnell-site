import Nav from "./Nav";
import styled from "styled-components";

interface props {
  children: any;
}

const StyledLayout = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  padding-left: 1.5rem;

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
          <p>
            <p>🌍Personal blog of Karnell Schultz 🌍</p>
          </p>
        </footer>
      </section>
    </>
  );
}
