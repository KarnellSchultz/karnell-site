import React from 'react'
import Link from 'next/link'

export default function NavButton({link = '/', text = 'Nav Button'}) {
    return (
            <>
    <Link href={link} >
        <button type="button">{text}</button>
    </Link>
      <style jsx>{`
        .button,
        a.button,
        button,
        [type="submit"],
        [type="reset"],
        [type="button"] {
          -webkit-appearance: none;
          display: inline-block;
          border: 1px solid #0e1111;
          border-radius: 4px;
          background: #0e1111;
          color: #ffffff;
          font-weight: 600;
          font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-size: 1rem;
          text-transform: none;
          padding: 0.75rem 1.25rem;

          vertical-align: middle;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
        }

        .button:hover,
        a.button:hover,
        button:hover,
        [type="submit"]:hover,
        [type="reset"]:hover,
        [type="button"]:hover {
          border: 1px solid #0e1111;
          background: #0e1111;
          color: #ffffff;
          text-decoration: none;
        }

        .button:focus,
        .button:active,
        a.button:focus,
        a.button:active,
        button:focus,
        button:active,
        [type="submit"]:focus,
        [type="submit"]:active,
        [type="reset"]:focus,
        [type="reset"]:active,
        [type="button"]:focus,
        [type="button"]:active {
          border: 1px solid #0e1111;
          background: #0e1111;
          color: #ffffff;
          text-decoration: none;
        }

        .button::-moz-focus-inner,
        a.button::-moz-focus-inner,
        button::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="button"]::-moz-focus-inner {
          border: 0;
          padding: 0;
        }
      `}</style>
    </>

    )
}
