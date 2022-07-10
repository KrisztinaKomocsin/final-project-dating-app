import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RegisterResponseBody } from './api/register';

const registerWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const registerStyle = css`
  display: flex;
  flex-direction: column;
  font-family: Emilys candy;
  margin: 20px 200px;

  h1,
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  h1 {
    font-size: 50px;
  }

  input {
    margin: 10px 0;
    font-size: 15px;
    border-radius: 20px;
    padding: 10px;
    width: 300px;
  }

  button {
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    font-family: Emilys candy;
    background: linear-gradient(45deg, #924694, #fc46e7);
    padding: 20px;
    border-radius: 50px;
    border: none;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100px;
    :hover {
      background: linear-gradient(260deg, #924694, #fc46e7);
    }
  }
`;

const registerPhoto = css`
  background: url('register.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 70vw;
  height: 100vh;
`;

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function Register(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<
    {
      message: string;
    }[]
  >([]);
  const router = useRouter();

  async function registerHandler() {
    const registerResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const registerResponseBody: RegisterResponseBody =
      await registerResponse.json();

    // if we have error, show an error message
    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
      return;
    }

    const returnTo = router.query.returnTo;
    if (
      returnTo &&
      !Array.isArray(returnTo) &&
      /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      await props.refreshUserProfile();
      await router.push(returnTo);
    } else {
      await props.refreshUserProfile();
      await router.push(`/form`);
    }
  }

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="registration" content="Register a new user" />
      </Head>

      <main css={registerWrapper}>
        <div css={registerStyle}>
          <h1>PurrMatch</h1>
          <h2>Registration</h2>

          <label>
            <input
              value={username}
              onChange={(event) => {
                setUsername(event.currentTarget.value);
              }}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
              placeholder="Password"
            />
          </label>
          <button onClick={() => registerHandler()}>Sign Up!</button>
          {errors.map((error) => (
            <span key={`error-${error.message}`}>{error.message} </span>
          ))}

          <div>
            <Link href="/">Back to the homepage</Link>
          </div>
        </div>
        <div css={registerPhoto} />
      </main>
    </div>
  );
}
export function getServerSideProps(context: GetServerSidePropsContext) {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/register`,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
