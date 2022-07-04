import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: blueviolet;
  height: 50px;
`;
export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/register">Create Account</Link>
        <Link href="/login">Login</Link>
        <Link href="/dating-securely">Dating Securely</Link>
        <Link href="/users/private-profile">Profile</Link>
      </div>
    </header>
  );
}
