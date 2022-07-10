import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

const dashboardStyle = css`
  background-color: #fff;
  font-family: Emilys candy;

  h1 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 50px;
  }

  /*> div > a {
    margin-right: 40px;
    font-size: 20px;
    color: #000;
    text-shadow: 2px 2px 8px #fff;
    text-decoration: underline;

    :hover {
      color: #551a8b;
      text-shadow: 2px 2px 8px #fff;
      text-decoration: none;
    }
  }*/
`;
const dashboardTop = css`
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
`;
const swipe = css`
  position: absolute;
`;

const cardContainer = css`
  width: 90vw;
  max-width: 260px;
  height: 300px;

  h3 {
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #000;
  }
`;

const card = css`
  position: relative;
  background-color: #fff;
  width: 80vw;
  max-width: 260px;
  height: 300px;
  box-shadow: 0px 0px 60px 0px #924694;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;

/*.cardContent {
  width: 100%;
  height: 100%;
}

.swipe:last-of-type {

}*/

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
    <div css={dashboardStyle}>
      <div css={dashboardTop}>
        <h1>Dashboard</h1>

        <Link href="/users/private-profile">Profile</Link>
      </div>
      <div>
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
          <div>{lastDirection ? <p>You swiped {lastDirection}</p> : <p />}</div>
        </div>
      </div>
    </div>
  );
}
