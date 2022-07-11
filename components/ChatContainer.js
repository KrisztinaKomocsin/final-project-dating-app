import { css } from '@emotion/react';
import ChatDisplay from './ChatDisplay';
import ChatHeader from './ChatHeader';
import MatchDisplay from './MatchDisplay';

const chatContainer = css`
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px #000;
  width: 30%;
  text-align: left;
  z-index: 1;
`;

const chatButton = css`
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  width: 80px;
  padding: 10px;
  border-radius: 50px;
  border: none;
  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;
const matchButton = css`
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 10px;
  border-radius: 50px;
  border: none;
  width: 80px;
  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

const optionButtons = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export default function ChatContainer() {
  return (
    <div css={chatContainer}>
      <ChatHeader />
      <div css={optionButtons}>
        <button css={matchButton}>Matches</button>
        <button css={chatButton}>Chat</button>
      </div>
      <MatchDisplay />
      <ChatDisplay />
    </div>
  );
}
