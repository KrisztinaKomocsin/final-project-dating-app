import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import auth from '../public/auth.jpg';

const authForm = css`
  font-family: Emilys candy;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.5px;
  position: absolute;
  top: 0px;
  left: 570px;
  max-width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;
  background-color: #f8f8ff;

  p {
    padding: 20px;
  }
`;

const authImage = css`
  position: absolute;
  top: 200px;
`;

const closeX = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export default function AuthModal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div css={authForm}>
      <div>
        <p>
          By clicking "Create Account", you agree to our terms.
          <br /> Learn how we process your data in our Privacy Policy.
        </p>
        <br />

        <Link href="/register">Registration</Link>
      </div>
      <div css={authImage}>
        <Image src={auth} alt="cat with laptop" width="400" height="250" />
      </div>
      <button css={closeX} onClick={handleClick}>
        X
      </button>
    </div>
  );
}
