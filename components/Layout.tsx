import Nav from "./Nav";
import styled from "styled-components";

interface props {
  children: any;
}

const StyledLayout = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.body};
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.15s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: underline;
  }
  footer {
    position: sticky;
    background: ${({ theme }) => theme.colors.darkBackground};
    width: 100%;
    height: 100px;
    border-top: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-top: -100px;
  }
  footer img {
    margin-left: 0.5rem;
  }
  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledFooter = styled.footer`
  position: sticky;
  width: 100%;
  height: 100px;
  margin-top: -100px;
  font-size: 12px;
  border-top: 1px solid grey;

  background: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Layout({ children }: props) {
  return (
    <>
      <StyledLayout>
        <Nav />
        <main>{children}</main>
      </StyledLayout>
      <StyledFooter>
        <p>
          <em>🌍Personal blog of Karnell Schultz 🌍</em>
        </p>
      </StyledFooter>
    </>
  );
}
