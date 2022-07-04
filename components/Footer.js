import { css } from '@emotion/react';

const footerStyles = css`
  padding: 10px;
  background-color: #b3dee2;
  height: 100px;
  width: 100vw;
  color: #571089;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p>Copyright Krisztina 2022</p>
    </footer>
  );
}
