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
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.15s ease;
  }
  a:hover {
    color: #8899ff;
    text-decoration: underline;
  }
  footer {
  }
`;

export default function Layout({ children }: props) {
  return (
    <StyledLayout>
      <Nav />
      <main>{children}</main>
      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &rarr; 🌍
        </a>
      </footer>
    </StyledLayout>
  );
}
