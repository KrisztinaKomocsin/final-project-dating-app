import { css } from '@emotion/react';

const chatHeader = css`
  background: linear-gradient(45deg, #924694, #fc46e7);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const chatProfile = css`
  display: flex;
  align-items: center;
  padding: 20px;
  color: rgb(255, 255, 255);
`;

const chatImageContainer = css`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
`;
// chat image width: 100%

export default function ChatHeader() {
  return (
    <div css={chatHeader}>
      <div css={chatProfile}>
        <div css={chatImageContainer}>
          <img src="" alt="" />
        </div>
        <h3>Username</h3>
      </div>
    </div>
  );
}
