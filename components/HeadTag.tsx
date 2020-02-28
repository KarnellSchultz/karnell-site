import React from "react";
import Head from "next/head";

export default function HeadTag({ pageName = "🤷" }) {
  return (
    <>
      <Head>
        <title>KarnellSchultz {pageName} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
