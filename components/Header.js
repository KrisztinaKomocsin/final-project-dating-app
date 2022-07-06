import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

const headerStyles = css`
  width: 100%;
  font-family: Emilys candy;
  color: #551a8b;

  h1 {
    text-align: center;
    font-size: 30px;
  }
`;

const logoStyle = css`
  position: absolute;
  top: 0;
  animation: mymove 5s infinite;
  width: 20%;

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 150px;
    }
  }
`;
const navLinks = css`
  display: flex;
  justify-content: right;
  margin-right: 20px;
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
      <div css={navLinks}>
        <Link href="/dating-securely">Dating Securely</Link>
        <Link href="/login">Login</Link>
        <Link href="/users/private-profile">Profile</Link>
      </div>
    </header>
  );
}
