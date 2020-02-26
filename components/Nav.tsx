import React from "react";
import NavButton from "./NavButton";

import Button from "./Button";

export default function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li className="nav-home">
          <NavButton text="Home" link="/"></NavButton>
        </li>
        <li className="nav-about">
          <NavButton text="About" link="/about"></NavButton>
        </li>
        <li className="nav-articles">
          <NavButton text="Projects" link="/pojects"></NavButton>
        </li>
        <li className="nav-articles">
          <NavButton text="Articles" link="/articles"></NavButton>
        </li>
      </ul>
      <ul className="nav-contact">
        <li className="contact-item">
          <Button link="/" text="Contact ✌️"></Button>
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
