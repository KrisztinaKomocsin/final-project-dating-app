import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Layout from '../components/Layout';

const wrapper = css`
  background: url('homepage.jpg');
  background-position: center;
`;

const mainPage = css`
  font-family: Emilys candy;
  text-align: center;
  height: 100vh;
  position: relative;
`;

const createButton = css`
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 20px;
  border-radius: 50px;
  border: none;
  position: absolute;
  top: 500px;
  left: 700px;

  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div css={wrapper}>
      <Layout>
        <Head>
          <title>PurrMatch</title>
          <meta
            name="description"
            content="Home page of the dating application"
          />
        </Head>

        <main css={mainPage}>
          <button css={createButton} onClick={handleClick}>
            Create Account
          </button>

          {showModal && <AuthModal setShowModal={setShowModal} />}
        </main>
      </Layout>
    </div>
  );
}
