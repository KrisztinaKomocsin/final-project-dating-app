import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

const mainPage = css`
  margin-top: 10px;
  background: url('homepage.jpg');
  background-position: center;
  font-family: Emilys candy;
  text-align: center;
  height: 70vh;
  width: 100vw;
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
  top: 450px;
  left: 700px;

  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

const text = css`
  text-align: justify;
  text-justify: inter-word;
  font-family: Emilys candy;
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 150px;
  padding-right: 150px;
`;

const quote = css`
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 450px;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 400%;
  animation: move 5s ease infinite;
  background-image: linear-gradient(
    68.7deg,
    rgba(29, 173, 235, 1) 13.2%,
    rgba(137, 149, 250, 1) 29.8%,
    rgba(229, 109, 212, 1) 48.9%,
    rgba(255, 68, 128, 1) 68.2%,
    rgba(255, 94, 0, 1) 86.4%
  );

  @keyframes move {
    0%,
    100% {
      background-position: 200% 0%;
    }

    50% {
      background-position: 0% 200%;
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
      <Header />
      <Layout>
        <Head>
          <title>PurrMatch</title>
          <meta
            name="description"
            content="Home page of the dating application"
          />
        </Head>

        <main>
          <div css={mainPage}>
            <div css={quote}>
              <p>All you need is love and a cat</p>
            </div>

            <div>
              <button css={createButton} onClick={handleClick}>
                Create Account
              </button>
            </div>
          </div>

          <div css={text}>
            <p>
              Are you a dedicated cat lover who shares the life with a furry
              friend? Are you single and seeking for love? We all know, cats are
              unique, dividing creatures, they rule our life and we don't want
              to make compromises when it comes to find romance. We want someone
              who loves cats just as much as we do. Our online dating site helps
              you to find your purrfect match without compromises.
            </p>
          </div>

          <hr />

          {showModal && <AuthModal setShowModal={setShowModal} />}
        </main>
      </Layout>
      <Footer />
    </div>
  );
}
