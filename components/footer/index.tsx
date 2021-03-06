import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { SiNextDotJs } from 'react-icons/si';
import { BsFillTriangleFill } from 'react-icons/bs';

function Footer() {
  return (
    <section>
      <footer>
        <Link href="/">
          <button className="footer-a" type="button">
            Home
          </button>
        </Link>
        <Link href="/blog">
          <button className="footer-a" type="button">
            Blog
          </button>
        </Link>

        <a target="blank" href="http://eepurl.com/ha-MTn">
          <button className="footer-a" type="button">
            Email Newsletter
          </button>
        </a>
        <Link href="/about">
          <button className="footer-a" type="button">
            About
          </button>
        </Link>
      </footer>
      <footer>
        <a href="https://vercel.com/">
          <button className="footer-a" type="button">
            <BsFillTriangleFill size={32} />
          </button>
        </a>
        <a href="https://nextjs.org/">
          <button className="footer-a" type="button">
            <SiNextDotJs size={32} />
          </button>
        </a>
        <a href="https://github.com/KarnellSchultz/karnell-site">
          <button className="footer-a" type="button">
            <AiFillGithub size={32} />
          </button>
        </a>
      </footer>
    </section>
  );
}
export { Footer };
