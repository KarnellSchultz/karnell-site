import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
background: ${({ theme }) => theme.colors.body};
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  transition: all 300ms ease 100ms;
}
section {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1.5rem;
  letter-spacing:1.5px;
}
section h1 {
  font-size: 3rem;
  font-weight: 400;
}
section h2,
h3,
h4 {
  font-size: 2rem;
  font-weight: 350;
}

nav {
display:flex;
padding: 2rem 0;
width:100%;
}
nav section {
  width: 100%;
}

nav a {
  color:${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  letter-spacing:0px;
  transition: 10ms background ;
}
nav a:first-of-type {
  margin-left: -1.5rem;
}

nav a:hover {
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration:none;
  background: #111;
}

h1, h2, h3, h4 {
  color: ${({ theme }) => theme.colors.headerText}
}

p {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  letter-spacing:0.1px;
}
em {
  color: ${({ theme }) => theme.colors.text};
}

a {
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.15s ease-in 50ms;
}
a:hover {
  color : ${({ theme }) => theme.colors.primaryHover};
text-decoration: underline;
}
li {
  line-height: 1.75rem;
  letter-spacing: 1.75px;
}

footer {
  display: flex;
  justify-content:center;
  align-items:center;
  font-style:italic;
}
footer section {
  width: 100%;
}
footer p {
  font-size: 0.9rem
}


.button {
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  -webkit-appearance: none;
  color: #FFF;
  border-radius: 4px;
  font-weight: 450;
  /* padding: 0.75rem 1.5rem; */
  border: none;



  transition: all 30ms ease;
}

.button:hover {
  background: green;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 620) {
  html {
    width: 100vw;
  }
}

@media (max-width: 576px) {
  body {
    line-height: 2rem;
  }
  h1,
  h2,
  h3 {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
}


`;

/* 
High-emphasis text -> #FFFFFF (87% opacity)
Medium-emphasis text -> #FFFFFF (60% opacity)
Disabled text -> #FFFFFF (38% opacity) */
