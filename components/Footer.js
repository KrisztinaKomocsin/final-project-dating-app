import { css } from '@emotion/react';

const footerStyles = css`
  font-family: Emilys candy;
  font-size: 12px;
  font-weight: bold;
  height: 30px;
  position: relative;

  p {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p>Copyright Purrfect Match! 2022</p>
    </footer>
  );
}
