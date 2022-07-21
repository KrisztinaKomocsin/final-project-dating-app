import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import cats from '../public/cats.jpg';
import catspaw from '../public/catspaw.jpg';
import {
  getGenderedUser,
  getLikedUser,
  getUserByValidSessionToken,
  getUserProfileByUserId,
} from '../util/database';

const dashboardStyle = css`
  font-family: Emilys candy;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const userDetails = css`
  margin-top: 30px;
  background-color: #924694;
  border: 1px solid #000;
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  h1 {
    text-align: center;
    color: #000;
    text-shadow: 2px 2px 5px #fff;
  }
`;

const genderedUserStyle = css`
  display: flex;
  flex-flow: row wrap;
  margin: 10px;
  gap: 20px;

  h3 {
    text-align: center;
  }

  li {
    list-style-type: none;
  }
`;

const genderedUserImage = css`
  border: 10px solid #000;
  border-radius: 20px;
`;

const card = css`
  display: flex;
  flex-direction: column;
`;

const likeIcon = css`
  display: flex;
  justify-content: space-around;
`;

const likeButton = css`
  background-color: transparent;
  border: none;
`;

const dashboardImage = css`
  text-align: center;
  border-radius: 20px;
`;

const catImage = css`
  border-radius: 20px;
`;

export default function Dashboard(props) {
  return (
    <div>
      <Nav />
      <div css={dashboardStyle}>
        <div>
          <h2>Profiles</h2>
          <div>
            <ul css={genderedUserStyle}>
              {props.matchedUsers
                .filter((matchedUser) => {
                  return matchedUser.interest === props.user.gender;
                })
                .map((matchedUser) => {
                  return (
                    <li key={matchedUser.id}>
                      {!matchedUser.profilePicture ? (
                        <div />
                      ) : (
                        <div css={card}>
                          <Link href={`/users/${matchedUser.id}`}>
                            <Image
                              css={genderedUserImage}
                              src={matchedUser.profilePicture}
                              width="190"
                              height="200"
                            />
                          </Link>
                          <div css={likeIcon}>
                            <h3>{matchedUser.firstName}</h3>
                            <button css={likeButton}>
                              <Image
                                src={catspaw}
                                alt="cat paw"
                                width="50"
                                height="50"
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div css={userDetails}>
          <h1>Are you ready for the purrfect match, {props.user.firstName}?</h1>
          <div css={dashboardImage}>
            <Image css={catImage} src={cats} alt="cat paw" layout="fixed" />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );

  if (!user) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  const userProfile = await getUserProfileByUserId(user.id);

  const getMatchedUsers = await getGenderedUser(userProfile.interest);

  const getLikedMatches = await getLikedUser(user.id);

  if (!userProfile) {
    return {
      redirect: {
        destination: `/form`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: userProfile,
      matchedUsers: getMatchedUsers,
      likedMatches: getLikedMatches,
    },
  };
}
