import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { SiNextDotJs } from 'react-icons/si';
import { BsFillTriangleFill } from 'react-icons/bs';
import styled from 'styled-components';

const FooterButton = styled.button`
  color: var(--text-main);
  background: var(--nav-button-background);
  font-weight: 400;
  font-size: 1.1rem;
  padding: 0.7rem 1rem;
  margin: 0 0.25rem;
  border-radius: var(--borderRadius);
  letter-spacing: 0px;
  border: none;
  transition: 10ms background;

  &:hover {
    cursor: pointer;
    color: var(--nav-text);
    background: var(--nav-button-background-hover);
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <section>
      <footer>
        <Link href="/">
          <FooterButton type="button">
            Home
          </FooterButton>
        </Link>
        <Link href="/blog">
          <FooterButton type="button">
            Blog
          </FooterButton>
        </Link>

        <Link href="/about">
          <FooterButton type="button">
            About
          </FooterButton>
        </Link>
      </footer>
      <footer>
        <a href="https://vercel.com/">
          <FooterButton type="button">
            <BsFillTriangleFill size={32} />
          </FooterButton>
        </a>
        <a href="https://nextjs.org/">
          <FooterButton type="button">
            <SiNextDotJs size={32} />
          </FooterButton>
        </a>
        <a href="https://github.com/KarnellSchultz/karnell-site">
          <FooterButton type="button">
            <AiFillGithub size={32} />
          </FooterButton>
        </a>
      </footer>
    </section>
  );
}
export { Footer };
