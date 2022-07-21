import { css } from '@emotion/react';

const footerStyles = css`
  font-family: Emilys candy;
  font-size: 12px;
  font-weight: bold;
  height: 20px;
  position: relative;

  p {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p>Copyright Krisztina 2022</p>
    </footer>
  );
}
