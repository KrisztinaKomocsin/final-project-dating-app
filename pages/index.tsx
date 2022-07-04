import { css } from '@emotion/react';
import Head from 'next/head';

const mainPage = css`
  margin: 0;
  padding: 0;
  font-family: Emilys candy;
  text-align: center;

  button {
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-family: Emilys candy;
    background: linear-gradient(45deg, #924694, #fc46e7);
    padding: 20px;
    border-radius: 50px;
    border: none;

    :hover {
      background: linear-gradient(260deg, #924694, #fc46e7);
    }
  }
`;

export default function Home() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <Head>
        <title>PurrMatch</title>
        <meta
          name="description"
          content="Home page of the dating application"
        />
      </Head>

      <main css={mainPage}>
        <h1>PurrMatch</h1>
        <button onClick={handleClick}>Create Account</button>
      </main>
    </div>
  );
}
