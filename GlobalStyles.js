import { createGlobalStyle } from 'styled-components';

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
  transition: all 300ms ease 200ms;
}
section {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem 5rem 1.5rem;
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
nav div:first-of-type {
    /* margin-left: -1.5rem; */
}


nav a {
  color:${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 1.33rem;
  padding: 1.75rem 1.75rem;
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
  font-size: 1.3rem;
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
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.75rem;
  letter-spacing: 1.3px;
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
  -webkit-appearance: none;
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #FFF;
  border-radius: 4px;
  border: none;
  font-weight: 450;
  padding: 0.75rem 1.5rem;
  transition: all 30ms ease;
}

.button:hover {
  background: ${({ theme }) => theme.colors.primaryHover};
  color: #FFF ;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 890) {
  nav {
    padding: 0 0 0 0;
  }

  h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
}

@media (max-width: 576px) {
  body {
    line-height: 2rem;
  }
  section{
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
  nav {
    padding: 2rem 0 0 0;
  }
  h1,
  h2,
  h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
}
`;
