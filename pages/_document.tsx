import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        style={{
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
