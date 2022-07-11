import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';

const dashboardStyle = css`
  font-family: Emilys candy;
  display: flex;
  justify-content: space-between;
`;

const swipeContainer = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const swipe = css`
  position: absolute;
`;

const cardContainer = css`
  width: 400px;
  height: 650px;
`;

const card = css`
  width: 400px;
  height: 650px;
  box-shadow: 0px 0px 2px 0px #000;
  border-radius: 20px;
  background-size: cover;
  background-position: center;

  h3 {
    text-align: center;
    color: #000;
  }
`;

const swipeInfo = css`
  position: absolute;
  bottom: 0;
  padding: 10px;
`;

export default function Dashboard() {
  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/dc1PU8j.jpeg',
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/dc1PU8j.jpeg',
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/dc1PU8j.jpeg',
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/dc1PU8j.jpeg',
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/dc1PU8j.jpeg',
    },
  ];

  const [lastDirection, setLastDirection] = useState('');

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div>
      <div css={dashboardStyle}>
        <ChatContainer />
        <div>
          <Link href="/users/private-profile">Profile</Link>
        </div>
        <div css={swipeContainer}>
          <div css={cardContainer}>
            {characters.map((character) => (
              <TinderCard
                css={swipe}
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  css={card}
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
            <div css={swipeInfo}>
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*.cardContent {
  width: 100%;
  height: 100%;
}

.swipe:last-of-type {

}*/
/*const dashboardTop = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  margin-bottom: 50px;

  > a {
    font-size: 20px;
    color: #000;
    text-shadow: 2px 2px 8px #fff;
    text-decoration: underline;

    :hover {
      color: #551a8b;
      text-shadow: 2px 2px 8px #fff;
      text-decoration: none;
    }
  }
`;*/
