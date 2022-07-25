import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav';
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
  margin: 10px 250px;

  h1 {
    text-align: center;
    padding-bottom: 50px;
  }
`;

const personalInfo = css`
  display: flex;
  justify-content: space-between;
`;

const aboutMe = css`
  margin-top: 30px;
  width: 300px;
  height: 450px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.8;
  h3 {
    text-align: center;
  }
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
const deleteButton = css`
  position: absolute;
  bottom: 50px;
  left: 650px;
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

const profileButtons = css`
  display: flex;
  justify-content: space-between;
`;

const profileImageContainer = css`
  margin-top: 30px;
  background-color: #924694;
  border: 1px solid #000;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const profileImageWrapper = css`
  display: flex;
  border-bottom: 1px solid #000;
  width: 50vw;
  height: 300px;
  justify-content: center;
`;

const profileImage = css`
  border-radius: 20px;
`;

const otherImageWrapper = css`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  text-align: center;

  input {
    width: 200px;
    height: 250px;
    border: 1px solid #000;
    border-radius: 20px;
  }
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
    profilePicture: string;
  };
};

function birth(dob: string) {
  const birthDate = new Date(dob);
  const difference = Date.now() - birthDate.getTime();
  const age = new Date(difference);

  return Math.abs(age.getUTCFullYear() - 1970);
}

export default function UserDetail(props: Props) {
  const router = useRouter();

  async function deletedUserHandler(userId: number) {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const deletedUser = await response.json();
    console.log(deletedUser);
    await router.push('/');
  }

  return (
    <div>
      <Head>
        <title>{props.user.firstName}</title>
        <meta name="description" content="About the app" />
      </Head>
      <Nav />
      <main css={profileWrapper}>
        <div css={profileStyle}>
          <h1>
            Your Profile, <strong>{props.user.firstName}</strong>
          </h1>

          <div css={personalInfo}>
            <div>{birth(props.user.dateOfBirth)}</div>
            <div>
              <Image src={catspaw} alt="cat's paw" width="20" height="20" />
            </div>
            <div>{props.user.location}</div>
          </div>
          <hr />
          <div css={aboutMe}>
            <h3>About me...</h3>
            <br />
            <br />
            {props.user.description}
          </div>
          <div css={profileButtons}>
            <button css={updateButton}>Update Profile</button>
            <button
              css={deleteButton}
              onClick={() => deletedUserHandler(props.user.userId)}
            >
              Delete Profile
            </button>
          </div>
        </div>

        <div css={profileImageContainer}>
          <div css={profileImageWrapper}>
            <Image
              css={profileImage}
              src={props.user.profilePicture}
              alt=""
              width="200"
              height="200"
            />
          </div>
          <div css={otherImageWrapper}>
            <div>
              Upload your photos!
              <input type="file" />
            </div>
            <div>
              Upload your photos!
              <input type="file" />
            </div>
            <div>
              Upload your photos!
              <input type="file" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies.sessionToken;

  if (!token) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  const user = await getUserByValidSessionToken(token);

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
}
