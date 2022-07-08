import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const datingStyle = css`
  background-color: #924694;
  font-family: Emilys candy;
  color: #fff;
  width: 100vw;
  height: 100vh;

  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 50px;
  }

  p {
    text-align: center;
    word-spacing: 0.5;
    line-height: 2.5;
    font-size: 20px;
    margin-bottom: 100px;
  }
`;

export default function DatingSecurely() {
  return (
    <div>
      <Head>
        <title>login page</title>
        <meta name="description" content="Dating Securely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={datingStyle}>
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
          <br />
          <br />
          <strong>With love and paws, Purr-Match Team</strong>
        </p>
        <Link href="/">Back to the homepage</Link>
      </main>
    </div>
  );
}
