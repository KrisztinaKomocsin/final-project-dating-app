import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

const headerStyles = css`
  width: 100%;
  font-family: Emilys candy;
`;

const logoStyle = css`
  position: relative;
  animation: mymove 5s infinite;

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 200px;
    }
  }
`;

const navLinks = css`
  display: flex;
  justify-content: space-between;
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div>
        <div css={logoStyle}>
          <Image
            src={logo}
            alt="red heart with cat paw logo"
            width="50"
            height="50"
          />{' '}
          PurrMatch
        </div>
        <div css={navLinks}>
          <Link href="/dating-securely">Dating Securely</Link>

          <Link href="/login">Login</Link>
          <Link href="/users/private-profile">Profile</Link>
        </div>
      </div>
    </header>
  );
}
