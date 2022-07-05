import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';

const mainPage = css`
  font-family: Emilys candy;
  text-align: center;
  background-color: blanchedalmond;
  width: 100%;
  height: 100vh;

  button {
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    font-family: Emilys candy;
    background: linear-gradient(45deg, #924694, #fc46e7);
    padding: 10px;
    border-radius: 50px;
    border: none;

    :hover {
      background: linear-gradient(260deg, #924694, #fc46e7);
    }
  }
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
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

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </main>
    </div>
  );
}
