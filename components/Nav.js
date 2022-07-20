import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

const headerWrapper = css`
  width: 100%;
  height: 60px;
  font-family: Emilys candy;

  h1 {
    text-align: center;
    font-size: 30px;
    color: #000;
    text-shadow: 2px 2px 8px #fff;
  }
  a {
    color: #000;
    text-shadow: 2px 2px 8px #fff;
    text-decoration: underline;
    padding: 0px;
    font-size: 20px;

    :hover {
      color: #551a8b;
      text-shadow: 2px 2px 8px #fff;
      text-decoration: none;
    }
  }
`;

const logoStyle = css`
  color: #000;
  text-shadow: 2px 2px 8px #fff;
  position: absolute;
  top: 0;
  animation: mymove 5s infinite;
  width: 10%;

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 100px;
    }
  }
`;

const loginLogout = css`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-right: 20px;
  padding-top: 10px;
`;

export default function Nav() {
  return (
    <header css={headerWrapper}>
      <div css={loginLogout}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users/private-profile">MyProfile</Link>
        <Link href="/logout">Logout</Link>
      </div>
      <h1>Purrfect Match</h1>

      <div css={logoStyle}>
        <Image
          src={logo}
          alt="black heart with cat paws logo"
          width="50"
          height="50"
        />
        Purrfect Match{' '}
      </div>
    </header>
  );
}
