import { css } from '@emotion/react';
import { useState } from 'react';

const chatInput = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const chatSubmitButton = css`
  margin-top: 30px;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 5px;
  border-radius: 50px;
  border: none;
  width: 80px;
  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

export default function ChatInput() {
  const [textArea, setTextArea] = useState(null);

  return (
    <div css={chatInput}>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button css={chatSubmitButton}>Submit</button>
    </div>
  );
}

// <div css={chatInput}>
// button css={chatButton}
