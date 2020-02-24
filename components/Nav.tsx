import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li className="nav-home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-about">
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li className="nav-articles">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="nav-articles">
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </li>
      </ul>
      <ul className="nav-contact">
        <li className="contact-item">
          <Button text="Contact ✌️"></Button>
        </li>
      </ul>

      <style jsx>{`
        a {
          color: #b3b9c5;
          text-decoration: inherit;
        }
        a:hover,
        a:active,
        a:focus {
          color: #5c73ff;

        }

        .nav-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          line-height: 2rem;
          background: #0e1111;
          font-weight: 600;
          position: -webkit-sticky;
          position: sticky;
          top: 0px;
        }

        .nav-links {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-left: 1.5rem;
        }
        .nav-contact {
          width: 100%;
          display: felx;
          align-items: center;
          justify-content: center;
        }
        .contact-item {
        }
        li {
          margin-left: 2rem;
          list-style: none;
        }

      `}</style>
    </div>
  );
}
