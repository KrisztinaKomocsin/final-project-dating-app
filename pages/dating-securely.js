import Head from 'next/head';
import Link from 'next/link';

export default function DatingSecurely() {
  return (
    <div>
      <Head>
        <title>login page</title>
        <meta name="description" content="Dating Securely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <main>
        <h1>Dating Securely</h1>
      </main>
    </div>
  );
}
