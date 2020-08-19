import Link from 'next/link';

export default function Footer() {
  return (
    <section>
      <footer>
        <Link href="/">
          <button className="nav-a" type="button">
            Home
          </button>
        </Link>
        <Link href="/blog">
          <button className="nav-a" type="button">
            Blog
          </button>
        </Link>
        <a target="blank" href="http://eepurl.com/ha-MTn">
          <button className="nav-a" type="button">
            Email Newsletter
          </button>
        </a>
        <Link href="about">
          <button className="nav-a" type="button">
            About
          </button>
        </Link>
      </footer>
    </section>
  );
}
