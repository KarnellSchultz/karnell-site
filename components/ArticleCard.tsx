

export default function ArticleCard({
  heading = "Article",
  body = "Good info in here"
}) {
  return (
    <article className="box">
      <h1>{heading}</h1>
      <p>
    {body}
      </p>
      <p>Stuff here that's cool and stuff</p>
      <button className="breakout-button" type="button">
        Check out 👋
      </button>
      <style jsx>{`
.box {
  color: #fff;
  padding: 2rem;
  max-width: 30rem;
  background: #252525;
  position: relative;
  box-shadow: none;
  border-radius: 10px;
  transition: transform 300ms ease-in-out, box-shadow 400ms ease, background 100ms ease;
}

.box:hover,
.box:focus-within {
  background: #111111;
  box-shadow: 0 1rem 1rem rgba(0,0,0,0.3);
  transform: translateY(-0.5rem);
}

.box > * + * {
  margin-top: 1em;
}

.breakout-button {
  font: inherit;
  font-weight: 600;
  padding: 0.6rem 2rem;
  background: transparent;
  color: currentcolor;
  border: 1px solid;
  transition: background 100ms ease;
  position: static;
}

.breakout-button,
.breakout-button::before {
  cursor: pointer;
}

.breakout-button::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.breakout-button:focus {
  outline: none;
}

.breakout-button:hover {
  background: #333333;
}

.breakout-button:focus::before {
  outline: 1px solid #ffffff;
  outline-offset: -0.8rem;
}


    `}</style>
    </article>
  );
}
