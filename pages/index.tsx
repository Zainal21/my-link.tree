import Head from "next/head";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Link.tree</title>
        <meta name="description" content="Generated by My Link.tree" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Profile />
      </main>
    </>
  );
}
