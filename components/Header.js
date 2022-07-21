import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

const headerStyle = css`
  width: 100%;
  font-family: Emilys candy;
  height: 80px;

  h1 {
    text-align: center;
    font-size: 25px;
    color: #000;
    text-shadow: 2px 2px 8px #fff;
  }
  a {
    color: #000;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 8px #fff;
    text-decoration: none;
    padding: 10px;
    font-size: 20px;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 60%) 2px 0.25rem 1rem;
    border-radius: 20px;
    width: 100px;

    :hover {
      color: #551a8b;
      text-shadow: 2px 2px 8px #fff;
      text-decoration: none;
    }
  }
`;

const loginLink = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;

  h3 {
    padding-top: 10px;
    padding-right: 10px;
  }
`;

const logoStyle = css`
  color: #000;
  text-shadow: 2px 2px 8px #fff;
  position: absolute;
  top: 0;
  animation: mymove 5s infinite;
  width: 20%;

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 100px;
    }
  }
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <h1>Purrfect Match</h1>
      <div css={logoStyle}>
        <Image
          src={logo}
          alt="black heart with cat paws logo"
          width="40"
          height="40"
        />
        Purrfect Match{' '}
      </div>
      <div css={loginLink}>
        <h3>Have an Account?</h3>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}
