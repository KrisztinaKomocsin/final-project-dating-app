import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import auth from '../public/auth.jpg';

const authForm = css`
  font-family: Emilys candy;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.5px;
  position: relative;
  left: 550px;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;

  button {
    float: right;
    position: absolute;
    right: 0;
  }

  p {
    padding-top: 30px;
  }
`;

const authImage = css`
  position: absolute;
  top: 120px;
`;

export default function AuthModal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div css={authForm}>
      <button onClick={handleClick}>X</button>
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
    </div>
  );
}
