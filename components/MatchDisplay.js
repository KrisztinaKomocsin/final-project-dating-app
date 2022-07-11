import { css } from '@emotion/react';

const matchDisplay = css`
  padding: 20px;
  height: 50vh;
  overflow-y: auto;
`;

export default function MatchDisplay() {
  return <div css={matchDisplay}>Match display</div>;
}
