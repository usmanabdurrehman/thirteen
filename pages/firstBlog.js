import React from "react";
import Head from "next/head";

export default function Blog1() {
  return (
    <div>
      <Head>
        <title>First Blog Of Career</title>
        <meta
          property="og:image"
          content="https://thirteen-seven.vercel.app/api/og?title=First+Blog+Of+Career"
        />
      </Head>
    </div>
  );
}
