import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getUserByValidSessionToken } from '../util/database';

const formWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const formStyle = css`
  font-family: Emilys candy;

  margin-bottom: 30px;

  h1 {
    text-align: center;
    font-size: 30px;
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 300px;
  }

  input {
    margin: 10px 0;
    font-size: 15px;
    border-radius: 20px;
    padding: 10px;
  }

  textarea {
    border: none;
  }

  select {
    border-radius: 20px;
    padding: 10px;
  }
`;

const formButton = css`
  position: absolute;
  right: 100px;
  width: 100px;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-family: Emilys candy;
  background: linear-gradient(45deg, #924694, #fc46e7);
  padding: 20px;
  border-radius: 50px;
  border: none;
  :hover {
    background: linear-gradient(260deg, #924694, #fc46e7);
  }
`;

const formPhoto = css`
  background: url('form.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40vw;
  height: 100vh;
`;

const sectionWrapper = css`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 30px;
`;

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('female');
  const [interest, setInterest] = useState('female');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  async function formHandler() {
    const formResponse = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        location,
        dateOfBirth,
        gender,
        interest,
        description,
      }),
    });

    const formResponseBody = await formResponse.json();

    // if we have error, show an error message
    if ('errors' in formResponseBody) {
      setErrors(formResponseBody.errors);
      return;
    } else {
      await router.push('/dashboard');
    }
  }

  return (
    <div>
      <Head>
        <title>Create Account</title>
        <meta name="Create Account" content="Create Account for new user" />
      </Head>

      <main css={formWrapper}>
        <div css={formPhoto} />
        <div css={formStyle}>
          <h1>CREATE ACCOUNT</h1>

          <form>
            <div css={sectionWrapper}>
              <section>
                <label htmlFor="first_name">First Name</label>
                <input
                  placeholder="Please type"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.currentTarget.value);
                  }}
                />

                <label htmlFor="last_name">Last Name</label>
                <input
                  placeholder="Please type"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.currentTarget.value);
                  }}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Please type"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.currentTarget.value);
                  }}
                />

                <label htmlFor="location">Location</label>
                <input
                  placeholder="Please type"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.currentTarget.value);
                  }}
                />

                <label htmlFor="dob">Birthday</label>
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={dateOfBirth}
                  onChange={(event) => {
                    setDateOfBirth(event.currentTarget.value);
                  }}
                />

                <label htmlFor="gender">I am:</label>
                <select
                  placeholder="Please choose"
                  value={gender}
                  onChange={(event) => {
                    setGender(event.currentTarget.value);
                  }}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="interest">I am looking for:</label>
                <select
                  placeholder="Please choose"
                  value={interest}
                  onChange={(event) => {
                    setInterest(event.currentTarget.value);
                  }}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="more">Everyone</option>
                </select>
              </section>
              <section>
                <label htmlFor="description">About me</label>
                <textarea
                  maxLength="300"
                  rows="5"
                  placeholder="Please type"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.currentTarget.value);
                  }}
                />
              </section>
              <section>Upload your photos!</section>
            </div>

            <button css={formButton} onClick={() => formHandler()}>
              Submit
            </button>
            <div>
              <Link href="/">Back to the homepage</Link>
            </div>
          </form>
        </div>
      </main>
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
