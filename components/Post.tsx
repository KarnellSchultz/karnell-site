import React from "react";

export default function Post() {
  return (
    <>
      <div className="content-container">
        <h3 className="title2">Latest Articles</h3>
        <p>Here is some stuff I have written</p>
        <div className="post-card">
          <h3 className=""> 👨🏽‍🚀 A case for Markdown</h3>
        </div>
        <div className="post-card">
          <h3>
            😋 Get Emoji — All Emojis to ✂️ Copy and 📋 Paste 👌{" "}
          </h3>
        </div>
      </div>
      <style jsx>{`
        .content-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .title2 {
          width: 90%;
          margin: 1.2rem;
          padding: 1.2rem;
          line-height: 1.15;
          font-size: 1.7rem;
          display:flex;
          justify-content:flex-start;
        }

        .post-card {
          width: 90%;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, background 0.15s ease,
            border-color 0.15s ease;
        }
        .post-card h3 {
            margin-left:20px;
        }

              .post-card:hover,
      .post-card:active,
      .post-card:focus {
        color: #e3e3e3;
        background: #3e3e3e;
        border-color: #0070f3;
      }
      `}</style>
    </>
  );
}
