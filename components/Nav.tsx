import React from "react";

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav">
        <ul>
          <li className='nav-name' >Karnell </li>
        </ul>

        <ul className="nav-links">
          <li>About Me</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </div>

      <style jsx>{`
        .nav-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          background: white;
          width: 100%;
          background: cornsilk;

          position: -webkit-sticky;
          position: sticky;
          top: 0px;
        }
        .nav {
          width: 800px;
          border: solid red 1px;
          display: flex;
          display: flex;
          margin: 1.2rem;
        }
        .nav-links {
          display: flex;
  justify-content: flex-end;

          border: solid red 1px;
        }
        .nav-name {
          margin-left: 20px;
          border: solid red 1px;
        }
      `}</style>
    </div>
  );
}
