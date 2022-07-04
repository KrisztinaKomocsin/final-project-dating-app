import { css } from '@emotion/react';

const footerStyles = css`
  font-family: Emilys candy;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p>Copyright Krisztina 2022</p>
    </footer>
  );
}
