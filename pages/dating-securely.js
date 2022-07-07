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

      <main>
        <h1>Dating Securely</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          sapien, adipiscing fames aliquet dictum nunc, neque. Eget egestas nibh
          mi lectus donec risus euismod. Eget nisi gravida pellentesque elit
          blandit velit ante quis dui. Vel facilisis bibendum gravida amet.
          Platea sed ut enim tortor, elit. Auctor nam imperdiet sollicitudin
          vitae ultricies malesuada non ac laoreet. Nec amet, egestas ut mauris
          nulla vel eu. Tincidunt elit accumsan, tortor, orci. Quis diam donec
          nulla morbi quam semper Velit, justo duis ipsum in. Mi dictum at arcu
          vulputate a fermentum, varius blandit nunc. Rutrum metus urna potenti
          proin amet, leo, nulla purus. Sit pharetra pharetra maecenas sem
          tellus nunc tincidunt at. Dolor diam cras fames tellus.
          <br /> With love and paws, Purr-Match Team
        </p>
        <Link href="/">Back to the homepage</Link>
      </main>
    </div>
  );
}
