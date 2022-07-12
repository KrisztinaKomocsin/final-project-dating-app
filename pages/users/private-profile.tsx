import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import catspaw from '../../public/catspaw.jpg';
import {
  getUserByValidSessionToken,
  getUserProfileByUserId,
} from '../../util/database';

const profileWrapper = css`
  font-family: Emilys candy;
  display: flex;
  justify-content: space-between;
`;
const profileStyle = css`
  display: flex;
  flex-direction: column;
  font-family: Emilys candy;
  margin: 10px 100px;

  h1 {
    text-align: center;
    padding-bottom: 20px;
  }

  h2 {
    text-align: center;
    padding-bottom: 30px;
  }
`;

const profileImageContainer = css`
  background-color: #924694;
  border: 1px solid #000;
  width: 50vw;
  height: 100vh;
`;

const updateButton = css`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 10px;
  width: 100px;
  border-radius: 50px;
  border: none;
  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

const personalInfo = css`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  user: {
    userId: number;
    gender: string;
    interest: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    location: string;
    email: string;
    description: string;
  };
};

export default function UserDetail(props: Props) {
  return (
    <div>
      <Head>
        <title>{props.user.firstName}</title>
        <meta name="description" content="About the app" />
      </Head>

      <main css={profileWrapper}>
        <div css={profileStyle}>
          <h1>
            Are you ready for the purr-fect match, {props.user.firstName}?
          </h1>
          <h2>Your Profile</h2>
          <div css={personalInfo}>
            <div>{props.user.dateOfBirth}</div>
            <div>
              <Image src={catspaw} alt="cat's paw" width="20" height="20" />
            </div>
            <div>{props.user.location}</div>
          </div>
          <hr />
          <div>{props.user.description}</div>

          <button css={updateButton}>Update Profile</button>
        </div>
        <div css={profileImageContainer} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );
  console.log(user);
  if (!user) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  const userProfile = await getUserProfileByUserId(user.id);
  console.log(userProfile);

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
    },
  };

  /*  return {
    redirect: {
      destination: `/login?returnTo=/users/private-profile`,
      permanent: false,
    },
  };*/
}
