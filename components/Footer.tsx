import Link from 'next/link';

export default function Footer() {
  return (
    <section>
      <footer>
        <Link href="/">
          <button className="footer-a" type="button">
            Home
          </button>
        </Link>
        <Link href="about">
          <button className="footer-a" type="button">
            GitHub
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
        <Link href="about">
          <button className="footer-a" type="button">
            About
          </button>
        </Link>
      </footer>
    </section>
  );
}
