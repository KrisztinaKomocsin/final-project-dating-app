import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav';
import catspaw from '../../public/catspaw.jpg';
import { getUserById, getUserProfileByUserId } from '../../util/database';

type Props = {
  userProfile: {
    id: number;
    username: string;
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
  user?: {
    id: number;
    username: string;
  };
};

const matchedProfileWrapper = css`
  font-family: Emilys candy;
  display: flex;
  justify-content: space-between;
`;

const matchedProfileStyle = css`
  display: flex;
  flex-direction: column;
  font-family: Emilys candy;
  margin: 10px 250px;

  h1 {
    text-align: center;
    padding-bottom: 50px;
  }

  a {
    position: absolute;
    bottom: 50px;
    left: 650px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
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
  }
`;

const matchedPersonalInfo = css`
  display: flex;
  justify-content: space-between;
`;

const matchedAboutMe = css`
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

const sendEmailButton = css`
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

const matchedProfileImageContainer = css`
  margin-top: 30px;
  background-color: #924694;
  border: 1px solid #000;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const matchedProfileImageWrapper = css`
  display: flex;
  border-bottom: 1px solid #000;
  width: 50vw;
  height: 300px;
  justify-content: center;
`;

const matchedProfileImage = css`
  border-radius: 20px;
`;

const matchedOtherImageWrapper = css`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  text-align: center;

  input {
    width: 200px;
    height: 250px;
    background-color: #924694;
    border-radius: 20px;
  }
`;

export default function UserDetail(props: Props) {
  const router = useRouter();

  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{props.userProfile.firstName}</title>
        <meta name="description" content="About the app" />
      </Head>
      <Nav />
      <main css={matchedProfileWrapper}>
        <div css={matchedProfileStyle}>
          <h1>{props.userProfile.firstName}</h1>

          <div css={matchedPersonalInfo}>
            <div>{props.userProfile.dateOfBirth}</div>
            <div>
              <Image src={catspaw} alt="cat's paw" width="20" height="20" />
            </div>
            <div>{props.userProfile.location}</div>
          </div>
          <hr />
          <div css={matchedAboutMe}>
            <h3>About me...</h3>
            <br />
            <br />
            {props.userProfile.description}
          </div>
          <div>
            <button
              css={sendEmailButton}
              onClick={() =>
                router.push(
                  `mailto:${props.userProfile.email}?subject=${props.userProfile.firstName}`,
                )
              }
            >
              Send Email
            </button>
            <Link href="/dashboard">Back</Link>
          </div>
        </div>
        <div css={matchedProfileImageContainer}>
          <div css={matchedProfileImageWrapper}>
            <Image
              css={matchedProfileImage}
              src={props.userProfile.profilePicture}
              alt="cat with laptop"
              width="220"
              height="200"
            />
          </div>
          <div css={matchedOtherImageWrapper}>
            <input />
            <input />
            <input />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // if you want to use username in the URL name this variable properly
  const userIdFromUrl = context.query.userId;

  // make sure the query param is an string
  if (!userIdFromUrl || Array.isArray(userIdFromUrl)) {
    return { props: {} };
  }

  // if you want to use username in the URL call function getUserByUsername and don't use parse int
  const user = await getUserById(parseInt(userIdFromUrl));
  console.log(user);

  if (!user) {
    context.res.statusCode = 404;
    return { props: {} };
  }

  const userProfile = await getUserProfileByUserId(user.id);
  console.log(userProfile);

  return {
    props: {
      user: user,
      userProfile: userProfile,
    },
  };
}
