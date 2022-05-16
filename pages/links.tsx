import { Layout } from 'components/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
  }
`;

export default function About() {
  return (
    <Layout pageName="links">
      <Container>
        <h1>My links</h1>
        <ul>
          <li>
            <a href="mailto:KarnellSchultz@gmail.com">E-mail</a>
          </li>
          <li>
            <a href="https://github.com/karnellschultz">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karnell-schultz-a30bb33b/">
              LinkedIn
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  );
}
