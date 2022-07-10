import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

const headerStyles = css`
  width: 100%;
  font-family: Emilys candy;

  h1 {
    text-align: center;
    font-size: 50px;
    color: #000;
    text-shadow: 2px 2px 8px #fff;
  }
  > div > a {
    color: #000;
    text-shadow: 2px 2px 8px #fff;
    text-decoration: underline;
    padding: 20px;
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
      right: 100px;
    }
    to {
      right: 0px;
    }
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <h1>PurrMatch</h1>
      <div css={logoStyle}>
        <Image
          src={logo}
          alt="red heart with cat paw logo"
          width="50"
          height="50"
        />
        PurrMatch{' '}
      </div>
      <div>
        <Link href="/dating-securely">Dating Securely</Link>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}
